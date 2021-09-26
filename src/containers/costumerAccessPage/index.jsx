import React from 'react'
import styled from 'styled-components';
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import { InnerPageContainer, PageContainer } from '../../components/pageContainer'
import {AccountBox}  from "../../components/accountBox";
import { useParams } from 'react-router-dom';
import { Marginer } from '../../components/marginer';

const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 4em;
`;


function CustomerAccessPage(props) {
     const { action } = useParams();
    return (
      <PageContainer >
      <Navbar />
      <StyledInnerContainer>
      <AccountBox initialActive={action} /> 
           </StyledInnerContainer>
          <Marginer direction="vertical" margin="0.8em" />
      <Footer />
    </PageContainer>
    )
}

export default CustomerAccessPage
