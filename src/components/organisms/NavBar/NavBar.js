import React from "react";
import styled from "styled-components";
import Logo from "../../atoms/Logo/Logo";
import NavBarLink from "../../atoms/NavBarLink/NavBarLink";

const BarWrapper = styled.div`
  height: 70px;
  width: 100%;
  //background: rebeccapurple;
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  column-gap: 20px;
  margin: auto;
  padding: 0 2%;
  justify-items: stretch;
`
const LogoWrapper = styled.div`
  margin: auto 0;

`
const LinkWrapper = styled.div`
  margin: auto 0;
  justify-self: end;

`

const NavBar = () => (
    <BarWrapper>

        <LogoWrapper>
            <Logo/>
        </LogoWrapper>
        <div>

        </div>

        <LinkWrapper>
            <NavBarLink to={"/blog"}>Blog</NavBarLink>
            <NavBarLink to={"/contact"}>Contact</NavBarLink>
        </LinkWrapper>

    </BarWrapper>
)

export default NavBar