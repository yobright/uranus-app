import {
  VStack,
  ButtonGroup,
  Button,
  Heading,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";

const Login = () => {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required("Email ou nom d'utilisateur requis !")
          .min(6, "Nom d'utilisateur trop court"),
        password: Yup.string()
          .required("Mot de passe requis !")
          .min(8, "Mot de passe trop court"),
      })}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.resetForm();
      }}
    >
      <VStack
        as={Form}
        w={{ base: "90%", md: "600px" }}
        m="auto"
        justify="center"
        h="90vh"
        spacing="1rem"
      >
        <Heading>Connexion à Uranus</Heading>
        <TextField
          name="username"
          placeholder="Entrez votre e-mail/nom d'utilisateur"
          autoComplete="off"
          label="Nom d'utilisateur ou e-mail"
        />

        <TextField
          name="password"
          placeholder="Entrez votre mot de passe"
          autoComplete="off"
          label="Mot de passe"
          type="password"
        />

        <ButtonGroup pt="1rem">
          <Button colorScheme="blue" type="submit">
            Connexion
          </Button>
        </ButtonGroup>
      </VStack>
    </Formik>
  );
};

export default Login;
