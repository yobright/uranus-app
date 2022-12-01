import { VStack, ButtonGroup, Button, Heading, FormControl, FormLabel, Input, Select, FormErrorMessage } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUp = () => {

  const formik = useFormik({
    initialValues: { username: "", password: "", name: "", surname: "", email: "", groupe: ""},
      validationSchema:Yup.object({
        username: Yup.string()
          .required("Le nom d'utilisateur est requis !")
          .min(6, "Nom d'utilisateur trop court"),
        password: Yup.string()
          .required("Mot de passe requis !")
          .min(8, "Mot de passe trop court"),
        name: Yup.string()
          .required("Nom d'utilisateur requis !"), 
        surname: Yup.string()
          .required("Prénom d'utilisateur requis !"),
        email: Yup.string().email('Entrez un email valide')
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
    <VStack
      as="form"
      w={{ base: "90%", md: "600px" }}
      m="auto"
      justify="center"
      h="90vh"
      spacing="1rem"
    >
      <Heading>Création de compte utilisateur</Heading>

      <FormControl
        isInvalid={formik.errors.username && formik.touched.username}
      >
        <FormLabel>Nom d'utilisateur</FormLabel>
        <Input
          name="username"
          placeholder="Entrez le nom d'utilisateur"
          autoComplete="off"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.errors.name && formik.touched.name}>
        <FormLabel>Nom de l'utilisateur</FormLabel>
        <Input
          name="name"
          placeholder="Nom de l'utilisateur"
          autoComplete="off"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.errors.surname && formik.touched.surname}>
        <FormLabel>Prénom de l'utilisateur</FormLabel>
        <Input
          name="surname"
          placeholder="Entrez le prénom de l'utilisateur"
          autoComplete="off"
          value={formik.values.surname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <FormErrorMessage>{formik.errors.surname}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.errors.email && formik.touched.email}>
        <FormLabel>Email de l'utilisateur</FormLabel>
        <Input
          name="email"
          placeholder="Entrez l'e-mail de l'utilisateur"
          autoComplete="off"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="email"
        />
        <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
      </FormControl>

      <FormControl
        isInvalid={formik.errors.password && formik.touched.password}
      >
        <FormLabel>Mot de passe de l'utilisateur</FormLabel>
        <Input
          name="password"
          placeholder="Entrez le mot de passe de l'utilisateur"
          autoComplete="off"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="password"
        />
        <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.errors.groupe && formik.touched.groupe}>
        <FormLabel>Groupe de l'utilisateur</FormLabel>

        <Select
          value={formik.values.groupe}
          onChange={formik.handleChange}
          name="groupe"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>

        <FormErrorMessage>{formik.errors.groupe}</FormErrorMessage>
      </FormControl>

      <ButtonGroup pt="1rem">
        <Button colorScheme="blue" type="submit">
          Valider
        </Button>
      </ButtonGroup>
    </VStack>
  );
};

export default SignUp;


// name
// surname
// username (unique) 
// email (unique) (unicité db?)
// password (min=8, max=16, needs=(aB1@)¹)


// nom de connexion **** (==! username) (input validation => unicité (db?))
// ? possibilité de faire les vérifications en step ? 




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