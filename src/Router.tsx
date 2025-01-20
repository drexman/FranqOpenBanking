import React, { Suspense, lazy, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Spinner, Flex, Text } from "@chakra-ui/react"
const LoginPage = lazy(() => import('@pages/login/LoginPage'))
const RegisterPage = lazy(() => import('@pages/login/RegisterPage'))
const DashBoard = lazy(() => import('@pages/dashboard/DashBoard'))
import { CookieContext } from "@store/CookieProvider"
import { CookieContextType } from "@store/cookie"

export const routeFallback = (
    <Flex flexDirection="column"
            width="100wh"
            height="100vh"
            bg="gray.200"
            justifyContent="center"
            alignItems="center">
        <Spinner color="colorPalette.600" />
        <Text color="colorPalette.600">Loading...</Text>
    </Flex>
)

const Router = () => {
    const cookie = useContext<CookieContextType>(CookieContext)
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Suspense fallback={routeFallback}>
                    {cookie.token ? (<DashBoard/>) : (<LoginPage />)}
                    </Suspense>
                }
            />
            <Route
                path="/login"
                element={
                    <Suspense fallback={routeFallback}>
                        <LoginPage />
                    </Suspense>
                }
            />
            <Route 
                path="/register"
                element={
                    <Suspense fallback={routeFallback}>
                        <RegisterPage />
                    </Suspense>
                }    
            />
            <Route 
                path="/dashboard"
                element={
                    <Suspense fallback={routeFallback}>
                        {cookie.token ? (<DashBoard/>) : (<LoginPage />)}
                    </Suspense>
                }
            />
        </Routes>

    )
}

export default Router;