import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { setSignUpData } from "../../store/reducers/signUpSlice";
import { signUpSchema } from "./SchemasSignup";

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

  const formik = useFormik<SignUpFormValues>({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, actions) => {
      dispatch(setSignUpData(values));
      setToasterOpen(true);
      console.log("Form Submitted:", values);
      actions.resetForm();

      setTimeout(() => {
        navigate("/success");
      }, 2000);
    },
  });

  const handleCloseToaster = () => {
    setToasterOpen(false);
  };

  const isAnyFieldEmpty = Object.values(formik.values).some(
    (value) => value.trim() === ""
  );

  return { formik, toasterOpen, handleCloseToaster, isAnyFieldEmpty };
};
