import { VStack, ButtonGroup, Button, Heading, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Form, Formik, useFormik } from "formik";
import * as Yup from "yup";



import TextField from "./TextField";

const SignUp = () => {

  const formik = useFormik({
    initialValues: { username: "", password: "", name: "", surname: "", email: "", groupe: ""},
      validationSchema:Yup.object({
        username: Yup.string()
          .required("Email ou nom d'utilisateur requis !")
          .min(6, "Nom d'utilisateur trop court"),
        password: Yup.string()
          .required("Mot de passe requis !")
          .min(8, "Mot de passe trop court"),
        name: Yup.string()
          .required("Nom d'utilisateur requis !"), 
        surname: Yup.string()
          .required("Prénom d'utilisateur requis !"),
        email: Yup.string()
          .required("Email de l'utilisateur requis !"), 
        groupe: Yup.string()
          .required("Le groupe est requis :")
      }),
      onSubmit: (values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.resetForm();
      }
  })

  return (
    <Formik>
      <VStack
        as="form"
        w={{ base: "90%", md: "600px" }}
        m="auto"
        justify="center"
        h="90vh"
        spacing="1rem"
      >
        <Heading>Création de compte utilisateur</Heading>

        <FormControl>
          <FormLabel fontSize="lg">Nom d'utilisateur</FormLabel>
          <Input 
            name="username"
            placeholder="Nom d'utilisateur"
            autoComplete=""
          />
        </FormControl>

        <FormControl>
          <FormLabel fontSize="lg">Nom de l'utilisateur</FormLabel>
        </FormControl>

        <FormControl>
          <FormLabel fontSize="lg">Prénom de l'utilisateur</FormLabel>
        </FormControl>

        <ButtonGroup pt="1rem">
          <Button colorScheme="blue" type="submit">
            Valider
          </Button>
        </ButtonGroup>
      </VStack>
    </Formik>
  );
};

export default SignUp;

// username (unique)
// nom de connexion **** (==! username) (input validation => unicité (db?))


// password (min=8, max=16, needs=(aB1@)¹)
// name
// surname

// email (unique) (unicité db?)
// groupe (?env)

// onSubmit
//    - send mail to user email (data = user password)






// <TextField
//           name="username"
//           placeholder="Entrez votre e-mail/nom d'utilisateur"
//           autoComplete="off"
//           label="Nom d'utilisateur ou e-mail"
//         />

//         <TextField
//           name="password"
//           placeholder="Entrez votre e-mail/nom d'utilisateur"
//           autoComplete="off"
//           label="Mot de passe"
//           type="password"
//         />