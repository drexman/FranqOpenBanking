
import {
    Flex,
    Box,
    Heading,
    Text,
    Stack,
    HStack,
    Button,
} from "@chakra-ui/react"
import React, { useContext } from "react";
import { Formik, Form } from 'formik'
import md5 from 'md5-hash'
import * as Yup from 'yup';
import InputField from '@components/input/InputField'
import { StoreContext } from  "@store/StoreProvider"
import { CookieContext } from "@store/CookieProvider"
import { StoreContextType } from "@store/store"
import { CookieContextType } from "@store/cookie"


const LoginSchema = Yup.object().shape({
    nameInput: Yup.string().required('Nome é obrigatório'),
    emailInput: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
    passwordInput: Yup.string().required('Senha é obrigatório'),
    confirmInput : Yup.string().oneOf([Yup.ref('passwordInput'), undefined], 'Confirmação de senha não bate'),
})

const RegisterPage = () => {
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
                initialValues={{ nameInput: '', emailInput: '', passwordInput: '', confirmInput: ''}}
                validationSchema={LoginSchema}
                onSubmit={(values, actions) => {

                    if(values.passwordInput == values.confirmInput)
                    {    
                        store.addNewUser({
                            name: values.nameInput,
                            email: values.emailInput,
                            password: values.passwordInput,
                        })
                        cookie.updateUser({
                            id: store.users.pop().id,
                            name: values.nameInput,
                            email: values.emailInput,
                            hash: md5(values.emailInput + "|" + values.nameInput),
                        })
                    } else {

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
                            <Heading size='xs'>
                                Criar cadastro
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                Preencha formulário
                            </Text>
                            <InputField label="Nome" name="nameInput" type="text" placeholder="Nome" />
                            <InputField label="E-mail" name="emailInput" type="text" placeholder="E-mail"/>

                            <InputField label="Senha" name="passwordInput" type="password" />
                            <InputField label="Confirmar senha" name="confirmInput" type="password" />
                        </Stack>
                        <HStack paddingTop={"10px"}>
                            <Button width="150px" name="submit" type="submit">
                                Criar cadastro
                            </Button>
                        </HStack>
                    </Form>
                )}
            </Formik>
        </Box>
    </Flex>
    );
}

export default RegisterPage;