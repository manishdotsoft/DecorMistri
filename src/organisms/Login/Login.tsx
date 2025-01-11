import { useDispatch } from "react-redux";
import { setLoginData } from "../../store/reducers/loginSlice";
import {
  LoginContainer,
  Logo,
  Title,
  ForgetPas,
  MainCon,
  ForgetPasF,
  StyledTypography,
} from "./LoginPage.styel";

import { AppDispatch } from "../../store/store";
import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Formik, Form } from "formik";
import { LoginSchema } from "./LoginSchema";
import TextInput from "../../atoms/TextInput/TextInput";
import Button from "../../atoms/Button/Button";

const initialValues = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <MainCon>
      <LoginContainer>
        <Logo>
          <img src="#" alt="Decord-mistri Logo" style={{ marginBottom: 8 }} />
          <Title variant="h5">DECORD-MISTRI</Title>
        </Logo>

        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={(values, { resetForm }) => {
            // Dispatching login data to redux store
            dispatch(setLoginData(values));
            // Storing auth token in localStorage (replace 'your-auth-token' with actual token)
            localStorage.setItem("authToken", "your-auth-token");
            resetForm();
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, isValid }) => {
            // Check if any field is empty or form is invalid
            const isAnyFieldEmpty = !values.email || !values.password;
            const isButtonDisabled = isAnyFieldEmpty || !isValid;

            return (
              <Form>
                {/* Email Field */}
                <TextInput
                  name="email"
                  type="email"
                  label="Email"
                  style={{ marginTop: "10px", width: "500px", height: "55px" }}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.email && errors.email)}
                />
                {touched.email && errors.email && (
                  <StyledTypography as="span">{errors.email}</StyledTypography>
                )}

                {/* Password Field */}
                <TextInput
                  name="password"
                  type="password"
                  label="Password"
                  style={{
                    marginTop: "10px",
                    width: "500px",
                    marginBottom: "10px",
                    height: "55px",
                  }}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.password && errors.password)}
                />
                {touched.password && errors.password && (
                  <StyledTypography as="span">
                    {errors.password}
                  </StyledTypography>
                )}

                <ForgetPasF>
                  <Link
                    component={RouterLink}
                    to="/forgot-password"
                    underline="none"
                    color="blue"
                  >
                    Forgot password?
                  </Link>
                </ForgetPasF>

                <Link
                  component={RouterLink}
                  to="/dashboard"
                  underline="none"
                  color="inherit"
                  onClick={(e) => isButtonDisabled && e.preventDefault()}
                >
                  <Button
                    title="Login"
                    type="submit"
                    color="primary"
                    backgroundColor="#C7148A"
                    variant="contained"
                    disabled={isButtonDisabled}
                    style={{
                      width: "500px",

                      borderRadius: "4px",
                      height: "55px",
                      marginTop: "10px",
                    }}
                    onClick={() => {}}
                  />
                </Link>
              </Form>
            );
          }}
        </Formik>

        <Box>
          <ForgetPas>
            <Typography component="span">Don't have an account?</Typography>
            <Link
              component={RouterLink}
              to="/signup"
              underline="none"
              color="blue"
            >
              Sign Up
            </Link>
          </ForgetPas>
        </Box>
      </LoginContainer>
    </MainCon>
  );
};

export default LoginPage;
