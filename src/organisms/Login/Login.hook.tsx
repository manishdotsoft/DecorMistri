import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { loginUserMutation } from "../../graphql/mutation/loginUser";
import { useNavigate } from "react-router-dom";
import { AlertColor } from "@mui/material"; 

const initialValues = {
  email: "",
  password: "",
};

interface LoginFormValues {
  email: string;
  password: string;
}

export const useLoginLogic = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [message, setMessage] = useState<string>("");
  const [showToaster, setShowToaster] = useState<boolean>(false);
  const [severity, setSeverity] = useState<AlertColor>("info"); 

  const handleClose = () => {
    setShowToaster(false);
  };

  const handleSubmit = async (values: LoginFormValues) => {
    setShowToaster(true);
    try {
      const response = await loginUserMutation({
        input: {
          email: values.email,
          password: values.password,
        },
      });

      if (response && response?.data?.loginUser?.token) {
        console.log(response?.data, "res");
        navigate("/dashboard");
        setSeverity("success"); 
        setMessage(response?.data?.loginUser?.message || "Login successful!");
      } else {
        setSeverity("warning"); 
        setMessage(response?.data?.loginUser?.message || "Invalid credentials.");
      }
    } catch (err) {
      console.error(err);
      setSeverity("error"); 
      setMessage("An error occurred while logging in. Please try again.");
    }
  };

  return {
    dispatch,
    initialValues,
    handleSubmit,
    message,
    showToaster,
    handleClose,
    severity,
  };
};
