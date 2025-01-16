import React from "react";
import { Typography, Divider, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import {
  StyledContainer,
  StyledForm,
  StyledHeader,
  MainFlex,
  ChildFlex,
  AllImg,
  StyledTypography,
  Title,
  Title2,
  StyledBoxCenter,
  TextArea,
  ProgressBar,
  ProgressBar1,
} from "./SignUp.style";

import TextInput from "../../atoms/TextInput/TextInput";

import SignUpImage from "../../assets/images/signUpLogImage/SignUpLog.png";
import Button from "../../atoms/Button/Button";
import LogoDecor from "../../assets/images/logo/Layer_x0020_1.svg";
import { useSignUp } from "./SignUp.hook";
import googleLogo from "../../assets/images/logo/google.svg";

const SignUpForm: React.FC = () => {
  const {
    formik,

    isAnyFieldEmpty,
    passwordStrength,
    handlePasswordChange,
    label,
    getStrengthLabel,
  } = useSignUp();

  const SegmentedProgressBar: React.FC<{ strength: number }> = ({
    strength,
  }) => {
    const segments = [1, 2, 3, 4];
    return (
      <ProgressBar>
        {segments.map((segment) => (
          <Box
            key={segment}
            sx={{
              flex: 1,
              height: 4,
              borderRadius: 4,
              backgroundColor:
                segment <= strength
                  ? getStrengthLabel(segment).color
                  : "#e0e0e0",
            }}
          />
        ))}
      </ProgressBar>
    );
  };

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
              type="submit"
              color="primary"
              variant="contained"
              logo={googleLogo}
              style={{
                borderRadius: "5px",
                background: "white",
                color: "black",
                border: "1px solid #cccccc",
                width: "100%",
                height: "50px",
              }}
              onClick={() => {}}
            />

            <Divider style={{ margin: "10px 0", color: "#000000" }}>Or</Divider>

            {/* Name Field */}
            <TextInput
              name="name"
              label="Enter your name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              style={{
                width: "96%",
                borderRadius: "8px",
                height: "10px",
                marginBottom: "50px",
              }}
              placeholder="Enter your name"
            />
            {formik.errors.name && formik.touched.name && (
              <StyledTypography>{formik.errors.name}</StyledTypography>
            )}

            {/* Phone Field */}
            <TextInput
              name="phone"
              type="number"
              label="Enter your phone number"
              value={formik.values.phone}
              onChange={(e) => {
                if (e.target.value.length <= 10) {
                  formik.handleChange(e);
                }
              }}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              style={{
                width: "96%",
                borderRadius: "8px",
                height: "10px",
                marginBottom: "50px",
              }}
              inputProps={{
                maxLength: 10,
              }}
              placeholder="Enter your phone number"
            />

            {formik.errors.phone && formik.touched.phone && (
              <StyledTypography>{formik.errors.phone}</StyledTypography>
            )}

            {/* Email Field */}
            <TextInput
              name="email"
              label="Enter your email address"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              style={{
                width: "96%",
                borderRadius: "8px",
                height: "10px",
                marginBottom: "50px",
              }}
              placeholder="Enter your email address"
            />
            {formik.errors.email && formik.touched.email && (
              <StyledTypography>{formik.errors.email}</StyledTypography>
            )}

            {/* Password Field */}
            <TextArea>
              <Typography sx={{ marginBottom: "7px" }}>Password</Typography>

              <TextInput
                name="password"
                type="password"
                label="Password"
                value={formik.values.password}
                onChange={handlePasswordChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your password"
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                style={{
                  width: "90%",
                  borderRadius: "8px",
                  height: "10px",
                  marginBottom: "40px",
                }}
              />
              {formik.errors.password && formik.touched.password && (
                <StyledTypography>{formik.errors.password}</StyledTypography>
              )}
            </TextArea>

            <ProgressBar1>
              <SegmentedProgressBar strength={passwordStrength} />
            </ProgressBar1>
            <Typography
              variant="caption"
              style={{
                marginTop: "10px",
                color: "#9e9e9e",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              Password strength: {label}
            </Typography>

            {/* Sign Up Button */}
            <Button
              title="Sign Up"
              type="submit"
              color="primary"
              variant="contained"
              disabled={isAnyFieldEmpty || formik.isSubmitting}
              style={{
                backgroundColor: isAnyFieldEmpty ? "#5c5c5c" : "#C7148A",
                cursor:
                  isAnyFieldEmpty || formik.isSubmitting
                    ? "not-allowed"
                    : "pointer",

                width: "100%",
                borderRadius: "5px",
                padding: "25px",
              }}
              onClick={() => {}}
            />

            <StyledBoxCenter>
              <Typography
                variant="body2"
                style={{
                  textAlign: "center",
                  fontWeight: "600",
                  color: "#3f3f3f",
                }}
              >
                Already have an account?
              </Typography>
              <Typography
                component={RouterLink}
                to="/"
                sx={{
                  color: "#C7148A",
                  fontSize: "14px",
                  textDecoration: "none",
                }}
              >
                Sign in
              </Typography>
            </StyledBoxCenter>
          </StyledForm>
        </ChildFlex>

        <Box sx={{ width: "50%", height: "auto" }}>
          <AllImg src={SignUpImage} alt="Signup visuals" />
        </Box>
      </MainFlex>
    </StyledContainer>
  );
};

export default SignUpForm;
