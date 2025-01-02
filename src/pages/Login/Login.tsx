import React from "react";
import { useDispatch } from "react-redux";
import { setLoginData } from "../../store/reducers/loginSlice";

import {
  LoginContainer,
  Logo,
  StyledTextField,
  StyledButton,
} from "./LoginPage.styel";

import { AppDispatch } from "../../store/store";

import { Box, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { LoginSchema } from "./LoginSchema";

const initialValues = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginContainer maxWidth="xs">
        <Logo>
          <img src="#" alt="Decord-mistri Logo" style={{ marginBottom: 8 }} />
          <Typography variant="h5" fontWeight="bold">
            DECORD-MISTRI
          </Typography>
        </Logo>

        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={(values, { resetForm }) => {
            dispatch(setLoginData(values));
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                as={StyledTextField}
                name="email"
                label="Email address"
                variant="outlined"
                fullWidth
                error={touched.email && !!errors.email}
                helperText={touched.email && errors.email}
              />
              <Field
                as={StyledTextField}
                name="password"
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                error={touched.password && !!errors.password}
                helperText={touched.password && errors.password}
              />
              <Link
                component={RouterLink}
                to="/dashbord"
                underline="none"
                color="inherit"
              >
                <StyledButton type="submit" variant="contained" fullWidth>
                  Login
                </StyledButton>
              </Link>
            </Form>
          )}
        </Formik>

        <Box mt={2} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            <Link
              component={RouterLink}
              to="/forgot-password"
              underline="none"
              color="inherit"
            >
              Forgot password?
            </Link>
          </Typography>
          <Typography variant="body2" color="textSecondary" mt={1}>
            <Link
              component={RouterLink}
              to="/signup"
              underline="none"
              color="inherit"
            >
              Create an account
            </Link>
          </Typography>
        </Box>
      </LoginContainer>
    </Box>
  );
};

export default LoginPage;
