import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Formik } from "formik";
import CustomInput from "../ui/CustomInput/CustomInput";
import { loginFormSchema } from "../../schemas/loginFormSchema";

interface Values {
  email: string;
  password: string;
}

export default function LoginForm() {
  const API_URL = "http://localhost:3000";

  const navigate = useNavigate();

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (values: Values) => {
    try {
      await axios.post(`${API_URL}/auth/login`, values, {
        headers: { "Content-Type": "application/json" },
      });
      navigate("/");
    } catch (error: any) {
      setError(error.response.data.message);
    }
  };

  const initialValues: Values = {
    email: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginFormSchema}
      onSubmit={handleSubmit}
    >
      {({isSubmitting}) => (
        <Form className="form">
          <CustomInput
            label="Email"
            name="email"
            type="text"
            placeholder="Entrez votre email"
          />
          <CustomInput
            label="Mot de passe"
            name="password"
            type="password"
            placeholder="Entrez votre mot de passe"
          />

          <button disabled={isSubmitting} type="submit">
            Se connecter
          </button>

          {error && <span>{error}</span>}
        </Form>
      )}
    </Formik>
  );
}
