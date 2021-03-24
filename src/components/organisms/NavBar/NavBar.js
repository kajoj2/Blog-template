import React from "react";
import styled from "styled-components";
import Logo from "../../atoms/Logo/Logo";
import NavBarLink from "../../atoms/NavBarLink/NavBarLink";

const BarWrapper = styled.div`
  height: 70px;
  display: flex;
  //background: rebeccapurple;
  justify-content: space-between;
  margin: auto;
  padding: 0 10px;
`
const LogoWrapper = styled.div`
  margin: auto 0;
`
const LinkWrapper = styled.div`
  margin: auto 0;
  padding-right: 10px;

`

const NavBar = () => (
<BarWrapper>

    <LogoWrapper>
        <Logo/>
    </LogoWrapper>

    <LinkWrapper>
        <NavBarLink href="www.google.pl" >Demo</NavBarLink>
        <NavBarLink href="">Dupa</NavBarLink>
    </LinkWrapper>

</BarWrapper>
)

export default NavBar