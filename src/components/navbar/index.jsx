import styled from "styled-components";
import  Button from "../button";
import { Marginer } from "../marginer";


import BrandLogo from "../brandLogo";



const NavbarContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content:space-around;
  padding: 0 1.5em;

  background-color: ${({ useTransparent }) =>
    useTransparent ? "transparent" : "#264653"};
`;

const AccessibilityContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const AnchorLink = styled.a`
  font-size: 12px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;

  &:hover {
    filter: contrast(0.6);
  }
`;

const Seperator = styled.div`
  min-height: 35%;
  width: 1px;
  background-color: #fff;
`;


function Navbar(props) {
    return (
        <NavbarContainer>
    <BrandLogo/>
      <AccessibilityContainer>
            
     <AnchorLink>Specialist 1</AnchorLink>
     <Button size={11}>Register</Button>
     <AnchorLink>Specialist 2</AnchorLink>
      </AccessibilityContainer>
    </NavbarContainer>
    )
}

export default Navbar
