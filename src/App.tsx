import React from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { StoreProvider } from  "@store/StoreProvider"
import { CookieProvider } from '@store/CookieProvider';
import PageHeader from "@components/header/PageHeader"
import Router from './Router';

const App : React.FC = () => { 
    return (
        <ChakraProvider>
            <StoreProvider>
                <CookieProvider>
                    <PageHeader></PageHeader>
                    <Router></Router>
                </CookieProvider>
            </StoreProvider>   
        </ChakraProvider>
       
    ) 
}

export default App;