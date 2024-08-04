import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
  email: yup.string().email("Email invalide").required("Champ requis"),
  password: yup.string().required("Champ requis"),
});
