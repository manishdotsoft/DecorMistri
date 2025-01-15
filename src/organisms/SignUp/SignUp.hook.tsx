import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { setSignUpData } from "../../store/reducers/signUpSlice";
import { signUpSchema } from "./SchemasSignup";
import {createUserMutation} from '../../graphql/mutation/createUser';

export interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
  phone: string;
}

const initialValues: SignUpFormValues = {
  name: "",
  email: "",
  password: "",
  phone: "",
};

export const useSignUp = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [toasterOpen, setToasterOpen] = useState(false);

  const handleSubmit = async (values: SignUpFormValues, actions:any) => {
    try {
      dispatch(setSignUpData(values));
      const response = await createUserMutation({ input: {
        full_name:values.name,
        email:values.email,
        password:values.password,
      } });
      if (response.data) {
        setToasterOpen(true);
        actions.resetForm();
        navigate("/success");
      } else if (response.error) {
        console.error("Error creating user:", response.error);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    } finally {
      actions.setSubmitting(false);
    }
  };

  const formik = useFormik<SignUpFormValues>({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: handleSubmit, 
  });

  const handleCloseToaster = () => {
    setToasterOpen(false);
  };

  const isAnyFieldEmpty = Object.values(formik.values).some(
    (value) => value.trim() === ""
  );

  return { formik, toasterOpen, handleCloseToaster, isAnyFieldEmpty };
};
