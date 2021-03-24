import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from "./globalStyle";
import {theme} from "./theme";
import "@fontsource/lato"




const MainLayout = ({children}) =>(
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle/>
            {children}
            </>
    </ThemeProvider>
    )


export  default MainLayout;