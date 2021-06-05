import React from "react";
import styled, {ThemeProvider} from 'styled-components';
import GlobalStyle from "./globalStyle";
import {theme} from "./theme";
import "@fontsource/lato"
import '@fontsource/roboto'
import NavBar from "../components/organisms/NavBar/NavBar";
import FooterBar from "../components/organisms/Footer/Footer";

const Body = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`

`

const Footer = styled.div`
  margin-top: auto;
`
const MainLayout = ({children}) => (
    <ThemeProvider theme={theme}>
        <Body>
            <Content>
                <NavBar/>
                <GlobalStyle/>
                {children}
            </Content>
            <Footer>
                <FooterBar/>
            </Footer>
        </Body>
    </ThemeProvider>
)


export default MainLayout;