import React from 'react'
import styled from 'styled-components';
import Navbar from '../../components/navbar'
import {deviceSize} from '../../components/responsive/index'
import {InnerPageContainer, PageContainer} from '../../components/pageContainer'
import TopSection from './topSection'
import Services from './services';
import SpecialistAd from '../../components/specialistAd';
import { Marginer } from "../../components/marginer";
import Footer from '../../components/footer';



const Title = styled.h1`
  font-weight: 900;
  color: #000;


`;
const ContentContainer = styled.div`
  width: 100%;
  max-width: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em;

`;


const service = { "id": 1, "title": "I will landscape your garden", 
    "thumbnailUrl": "http://localhost:9000/garden.jpg", "rate": 34,
    "rating": 4, "specialist": { "id": 1, "fullName": "Mark brone" }}

function HomePage(props) {
    return (
        <div>
            <PageContainer>
                <TopSection>
                    <Navbar/>
                </TopSection>
                <InnerPageContainer>
                    <ContentContainer>
                        <Services />
                         <Marginer direction="vertical" margin="0.8em" />
                    </ContentContainer>
                   <SpecialistAd/>
                </InnerPageContainer>
                <Marginer direction="vertical" margin="0.8em" />
                <Footer/>
            </PageContainer>
            
        </div>
    )
}


export default HomePage