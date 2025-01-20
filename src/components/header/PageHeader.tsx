import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { Flex, Box, Heading, Spacer, Card, Avatar, Text, CardBody, Link, Image } from '@chakra-ui/react';
import { CookieContext } from "@store/CookieProvider"
import { CookieContextType } from "@store/cookie"

export default function PageHeader() {

    const cookie = useContext<CookieContextType>(CookieContext)
    const navigate = useNavigate();
    const clickEnter = () => {
        navigate("/login");
    }

    const clickRegister = () => {
        navigate("/register")
    }

    return (
        <Flex as="nav" p="10px" justifyContent="space-between" padding={6} bg="gray.600">
            <Heading as="h1"><Image src="https://www.franq.com.br/wp-content/uploads/2022/10/LOGO.svg" /></Heading>
            <Spacer />
            <Card bg="gray.200" p="4px">
                <CardBody>
                    <Flex flex={1} alignItems="center" flexWrap="wrap" >
                        <Avatar display={"block"} width="25px" height="25px" marginRight={"8px"} textAlign="center"/>
                        
                        <Box>
                            
                            {cookie.token ? (
                                <div>
                                    <Heading size='sm'>{cookie.token.name}</Heading>
                                    <Text><Link onClick={() => {cookie.clear(); navigate('/login');}}>Sair</Link></Text>    
                                </div>
                                ):(
                                <div>
                                    <Heading size='sm'><Link onClick={clickEnter}> Entre ou</Link></Heading>
                                    <Text><Link onClick={clickRegister}>Cadastre-se</Link></Text>
                                </div> 
                            )}
                            
                        </Box>
                    </Flex>
                </CardBody>
            </Card>
        </Flex>
    )
}