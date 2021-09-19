import React from 'react'
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import BrandLogo from '../../components/brandLogo';



import TopSectionBackgroundImg from "../../images/landing-page.jpg";
import TheBestSpecialistsImg from "../../images/Work only with the best.png";



const TopSectionContainer = styled.div`
  width: 100%;
  height: 800px;
  background: url(${TopSectionBackgroundImg}) no-repeat;
  background-position: 0px -150px;
  background-size: cover;


`;


const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(38, 77, 92, 0.9);
  display: flex;
  flex-direction: column;
`;


const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StandoutImage = styled.div`
  width: 44em;
  height: 34em;

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;


`;

const SloganText = styled.h3`
  margin: 0;
  line-height: 1.4;
  color: #fff;
  font-weight: 500;
  font-size: 35px;


`;



function TopSection(props) {
    return (
       
        <TopSectionContainer>
            <BackgroundFilter>
                <LogoContainer>
                    <BrandLogo/>
                </LogoContainer>
                <StandoutImage>
                    <img src={TheBestSpecialistsImg} alt='best of the best'/>
                </StandoutImage>
            </BackgroundFilter>
        </TopSectionContainer>
        
    )
}


export default  TopSection