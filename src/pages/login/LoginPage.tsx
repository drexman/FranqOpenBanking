
import {
    Flex,
    Box,
    Input,
    Stack,
    HStack,
    Button,
} from "@chakra-ui/react"
import React, { useContext } from "react";
import { Formik, Form } from 'formik'
import { useNavigate } from "react-router-dom";
import md5 from 'md5-hash'
import * as Yup from 'yup';
import InputField from '@components/input/InputField'
import { StoreContext } from  "@store/StoreProvider"
import { CookieContext } from "@store/CookieProvider"
import { StoreContextType } from "@store/store"
import { CookieContextType } from "@store/cookie"


const LoginSchema = Yup.object().shape({
    loginInput: Yup.string().required('login é obrigatório'),
    passwordInput: Yup.string().required('Senha é obrigatório') 
})

const Login = () => {
    const navigate = useNavigate();
    const store = useContext<StoreContextType>(StoreContext)
    const cookie = useContext<CookieContextType>(CookieContext)
    
    return (<Flex flexDirection="column"
        width="100wh"
        height="100vh"
        bg="gray.200"
        justifyContent="center"
        alignItems="center"
    >

        <Box minW={{ base: "90%", md: "500px" }} minH="600px">
            <Formik
                initialValues={{ loginInput: '', passwordInput: ''}}
                validationSchema={LoginSchema}
                onSubmit={(values, actions) => {

                   const found =  store.users.find(element => element.email === values.loginInput && element.password === values.passwordInput)
                   if(found != undefined) {
                        cookie.updateUser({
                            id: found.id,
                            name: found.name,
                            email: found.email,
                            hash: md5(found.email + "|" + found.name),
                        })
                        navigate('/dashboard');
                   } 
                }}
            >
                {(props) => (
                    <Form action={"/users/sign_in"} encType="multipart/form-data" accept-charset="UTF-8">
                        <Stack
                            p="1rem"
                            backgroundColor="whiteAlpha.900"
                            boxShadow="md"
                            minH="250px"
                        >
                            <InputField label="Login" name="loginInput" type="text" placeholder="email" />
                            <InputField label="Senha" name="passwordInput" type="password" />
                        </Stack>
                        <HStack marginTop={6} gap={10}>
                            <Button width="150px" name="submit" type="submit">
                                Entrar
                            </Button>
                            <Button width="150px" onClick={() => {navigate('/register')}}>
                                Cadastrar
                            </Button>
                        </HStack>
                    </Form>
                )}
            </Formik>
        </Box>
    </Flex>
    );
}

export default Login;