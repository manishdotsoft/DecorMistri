import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { setPassword } from "../../../store/reducers/loginSlice";
import { forgotPasswordMutation } from "../../../graphql/mutation/forgetPassword";
import { AlertColor } from "@mui/material";


type ValuesProps = {
    password: string;
    confirm_password: string;
};

const initialValues: ValuesProps = {
    password: "",
    confirm_password: "",
};

export const useNewPasswordLogic = () => {
    const { email } = useSelector((state: RootState) => state.logIn);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [message, setMessage] = useState<string>("");
    const [showToaster, setShowToaster] = useState<boolean>(false);
    const [severity, setSeverity] = useState<AlertColor>("info");


    const handleSubmit = (values: ValuesProps) => {
        dispatch(setPassword(values.password));
        forgetPassword(values.password);
    };

    const forgetPassword = async (password: string) => {
        try {
            const response = await forgotPasswordMutation({
                input: {
                    email: email,
                    new_password: password,
                    confirm_password: password,
                },
            });
            if (response?.data && response?.data?.forgotPassword?.message === "Password updated successfully") {
                navigate('/resetpassword');
            } else {
                setSeverity("warning");
                setMessage(response?.data?.forgotPassword?.message);
                setShowToaster(true);
            }
        } catch (err) {
            console.error("Error during password reset:", err);
            setSeverity("error");
            setMessage("An error occurred while changing password. Please try again.");
            setShowToaster(true);
        }
    };

    const handleClose = () => {
        setShowToaster(false);
    };

    return {
        handleSubmit,
        dispatch,
        initialValues,
        message,
        showToaster,
        handleClose,
        severity,
    };
};
