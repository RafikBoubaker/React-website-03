import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Button from "../../components/button";
import ServiceCard from '../../components/serviceCard';



const ServicesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h1`
  font-weight: 900;
  color: #000;

  
`;

const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const WarningText = styled.h3`
  color: rgba(100, 100, 100);
  font-weight: 500;
`;

const ViewMoreButton = styled(Button)`
  background-color: #f2f2f2;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
  color: #959595;
  font-size: 14px;

  &:hover {
    background-color: #f2f2f2;
    filter: contrast(0.8);
  }
`;




const wait = (num) => new Promise((rs) => setTimeout(rs, num));


function Services(props) {

    const [services, setServices] = useState([])
    const [isLoading, setLoading] = useState(false);


    const isServicesEmpty = !services || (services && services.length === 0);
    

    const fetchedServices = async () => {
    setLoading(true);
    const response = await axios.get('http://localhost:9000/services').catch((err) => {
        console.log(err);
    })

    await wait(3000)
        
    if (response) {
        setServices(response.data)
        console.log('SERVICES', services)
        setLoading(false);
    }

}

    useEffect(() => {
        fetchedServices()
    },[] )


    return (
        <ServicesContainer>
            <Title>Most Used Services & More </Title>
            <ServicesWrapper>
                {isServicesEmpty && !isLoading && (<WarningText> No Services Available Yet !</WarningText>)}

                {isLoading && <WarningText>Loading...</WarningText>}

                {!isLoading && !isServicesEmpty && services.map((service,idx) => (
                   <ServiceCard key={idx} {...service} />
                )
                 )}
            </ServicesWrapper>
               <BottomContainer>
                {!isServicesEmpty && !isLoading && (<ViewMoreButton>View More</ViewMoreButton>)}
             </BottomContainer>
        </ServicesContainer>
    )
}

export default Services
