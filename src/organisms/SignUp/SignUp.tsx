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
  Title,
  Title2,
  StyledBoxCenter,
  TextArea,
  TextArea2,
} from "./SignUp.style";
import { useFormik } from "formik";
import TextInput from "../../atoms/TextInput/TextInput";
import { signUpSchema } from "./SchemasSignup";
import SignUpImage from "../../assets/images/signUpLogImage/SignUpLog.png";
import Button from "../../atoms/Button/Button";
import LogoDecor from "../../assets/images/logo/Layer_x0020_1.svg";

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

  const isAnyFieldEmpty = Object.values(formik.values).some(
    (value) => value.trim() === ""
  );

  return (
    <StyledContainer>
      <MainFlex>
        <ChildFlex>
          <StyledForm onSubmit={formik.handleSubmit}>
            <StyledHeader>
              <img
                src={LogoDecor}
                alt="Decord-mistri Logo"
                style={{ height: "40px" }}
              />
              <Title>Create your account</Title>
              <Title2 color="textSecondary">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries
              </Title2>
            </StyledHeader>

            <Button
              title="Sign In with Google"
              color="primary"
              style={{
                borderRadius: "5px",
                background: "white",
                color: "black",
                border: "1px solid #cccccc",
                width: "100%",
                height: "50px",
              }}
            />

            <Divider style={{ margin: "10px 0", color: "#000000" }}>Or</Divider>

            <TextInput
              name="name"
              label="Enter your name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              style={{
                width: "97%",
                borderRadius: "8px",
              }}
              placeholder="Enter your name"
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
              style={{
                width: "97%",
                borderRadius: "8px",
              }}
              placeholder="Enter your phone number"
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
              style={{
                width: "97%",
                borderRadius: "8px",
              }}
              placeholder="Enter your email address"
            />
            {formik.errors.email && formik.touched.email && (
              <StyledTypography>{formik.errors.email}</StyledTypography>
            )}

            <TextArea>
              <Typography sx={{ marginBottom: "7px" }}>Password</Typography>
              <TextArea2>
                <TextInput
                  name="password"
                  type="password"
                  label="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your password"
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  style={{
                    width: "145%",
                    borderRadius: "8px",
                  }}
                />
                {formik.errors.password && formik.touched.password && (
                  <StyledTypography>{formik.errors.password}</StyledTypography>
                )}
              </TextArea2>
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
              disabled={isAnyFieldEmpty}
              style={{
                marginTop: "20px",
                backgroundColor: isAnyFieldEmpty ? "#e83bae" : "#C7148A",
                color: "#ffffff",
                width: "100%",
                // height: "50px",
                padding: "30px",
                borderRadius: "5px",
                cursor: isAnyFieldEmpty ? "not-allowed" : "pointer",
              }}
            />

            <StyledBoxCenter>
              <Typography
                variant="body2"
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  fontWeight: "600",
                  color: "#3f3f3f",
                }}
              >
                Already have an account?
                <Typography
                  component={RouterLink}
                  to="/"
                  sx={{ color: "#C7148A", fontSize: "14px" }}
                >
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
