import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from "./globalStyle";
import {theme} from "./theme";
import "@fontsource/lato"
import NavBar from "../components/organisms/NavBar/NavBar";



const MainLayout = ({children}) =>(
    <ThemeProvider theme={theme}>
        <>
            <NavBar/>
            <GlobalStyle/>
            {children}
            </>
    </ThemeProvider>
    )


export  default MainLayout;