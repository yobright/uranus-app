import { VStack, ButtonGroup, FormControl, FormLabel, Button, FormErrorMessage, Input, Heading } from "@chakra-ui/react"
import { useFormik } from "formik";
import * as Yup from 'yup'

const Login = () => {

    const formik = useFormik({
        initialValues: {username: "", password:" "}, 
        validationSchema: Yup.object({
            username: Yup.string().required('Email ou nom d\'utilisateur requis !').min
        })
    })

    return (
      <VStack
        as="form"
        w={{ base: "90%", md: "500px" }}
        m="auto"
        justify="center"
        h="90vh"
        spacing="1rem"
      >

        <Heading>Connexion à Uranus</Heading>
        <FormControl>
          <FormLabel>Nom d'utilisateur ou e-mail</FormLabel>
          <Input
            name="username"
            placeholder="Entrez votre e-mail/nom d'utilisateur"
            autoComplete="off"
          />
          <FormErrorMessage>Nom d'utilisateur invalide</FormErrorMessage>
        </FormControl>

        <FormControl>
          <FormLabel>Mot de passe</FormLabel>
          <Input
            name="username"
            placeholder="Entrez votre mot de passe"
            autoComplete="off"
          />
          <FormErrorMessage>Mot de passe invalide</FormErrorMessage>
        </FormControl>

        <ButtonGroup pt="1rem">
          <Button colorScheme="blue" type="submit">
            Connexion
          </Button>
        </ButtonGroup>
      </VStack>
    );}

export default Login