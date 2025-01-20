import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { setUpdateProfile } from "../../store/reducers/updateProfileSlice";
import { updateProfileSchema } from "./SchemasUpdateProfile";
import { createUserMutation } from "../../graphql/mutation/createUser";

export interface SignUpFormValues {
  businessName: string;
}

const initialValues: SignUpFormValues = {
  businessName: "",
};

export const useUpdateProfile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [toasterOpen, setToasterOpen] = useState(false);

  const handleSubmit = async (values: SignUpFormValues, actions: any) => {
    try {
      dispatch(setUpdateProfile(values));
      const response = await createUserMutation({
        input: {
          businessName: values.businessName,
        },
      });
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
    validationSchema: updateProfileSchema,
    onSubmit: handleSubmit,
  });

  const handleCloseToaster = () => {
    setToasterOpen(false);
  };

  const isAnyFieldEmpty = Object.values(formik.values).some(
    (value) => typeof value === "string" && value.trim() === ""
  );

  return {
    formik,
    toasterOpen,
    handleCloseToaster,
    isAnyFieldEmpty,
  };
};
