import React from "react";
import { Typography, Divider } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import {
  StyledContainer,
  StyledForm,
  StyledHeader,
  MainFlex,
  ChildFlex,
  ImageFlex,
  AllImg,
  StyledTypography,
  Logo,
  Title,
  StyledBoxCenter,
  StyledLink,
  TextArea,
} from "./SignUp.style";

import { useFormik } from "formik";
import TextInput from "../../atoms/TextInput/TextInput";
import { signUpSchema } from "./SchemasSignup";
import SignUpImage from "../../assets/images/signUpLogImage/SignUpLog.png";
import Button from "../../atoms/Button/Button";

const SignUpForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log("Form Submitted", values);
    },
  });

  return (
    <StyledContainer>
      <MainFlex>
        <ChildFlex>
          <StyledForm as="form" onSubmit={formik.handleSubmit}>
            <StyledHeader>
              <Logo>
                <img
                  src="#"
                  alt="Decord-mistri Logo"
                  style={{ height: "40px" }}
                />
                <Title>DECORD-MISTRI</Title>
              </Logo>
              <Typography variant="body2" color="textSecondary">
                Create your free account to get started
              </Typography>
            </StyledHeader>

            <TextArea style={{}}>
              <Button
                title="Sign In with Google"
                color="primary"
                // onClick={() => console.log("Google Sign-In clicked")}
                // variant="outlined"
                startIcon={<img src="/path/to/google-icon.svg" alt="Google" />}
                fullWidth
                style={{
                  marginBottom: "20px",
                  borderRadius: "5px",
                  background: "white",
                  color: "black",
                  border: "2px solid #cccccc",
                }}
              />

              <Divider style={{ margin: "20px 0", color: "#9e9e9e" }}>
                Or
              </Divider>

              <TextInput
                name="name"
                label="Enter your name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{ width: "90%", padding: "10px" }}
                error={formik.touched.name && Boolean(formik.errors.name)}
              />
              {formik.errors.name && formik.touched.name && (
                <StyledTypography>{formik.errors.name}</StyledTypography>
              )}

              <TextInput
                name="phone"
                label="Enter your phone number"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
              />
              {formik.errors.phone && formik.touched.phone && (
                <StyledTypography>{formik.errors.phone}</StyledTypography>
              )}

              <TextInput
                name="email"
                label="Enter your email address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
              />
              {formik.errors.email && formik.touched.email && (
                <StyledTypography>{formik.errors.email}</StyledTypography>
              )}

              <TextInput
                name="password"
                type="password"
                label="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
              />
              {formik.errors.password && formik.touched.password && (
                <StyledTypography>{formik.errors.password}</StyledTypography>
              )}
            </TextArea>

            <Typography
              variant="caption"
              style={{ marginTop: "10px", color: "#9e9e9e" }}
            >
              Password strength: Strong
            </Typography>

            <Button
              title="Sign Up"
              color="primary"
              type="submit"
              variant="contained"
              fullWidth
              style={{
                marginTop: "20px",
                backgroundColor: "#7d22c3",
                color: "#ffffff",
              }}
            />

            <StyledBoxCenter>
              <Typography
                variant="body2"
                style={{ textAlign: "center", marginTop: "20px" }}
              >
                Already have an account?{" "}
                <Typography component={RouterLink} to="/">
                  Sign in
                </Typography>
              </Typography>
            </StyledBoxCenter>
          </StyledForm>
        </ChildFlex>
        <ImageFlex>
          <AllImg src={SignUpImage} alt="Signup visuals" />
        </ImageFlex>
      </MainFlex>
    </StyledContainer>
  );
};

export default SignUpForm;
