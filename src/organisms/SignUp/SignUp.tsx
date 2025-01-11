import React from "react";
import { Typography, ThemeProvider } from "@mui/material";
import { theme } from "../../thems/primitives/theme";
import Toaster from "../../atoms/Toaster/Toaster";
import { Link as RouterLink } from "react-router-dom";
import {
  StyledContainer,
  StyledForm,
  StyledHeader,
  StyledTypography,
  StyledContainerWrapper,
  StyledLink,
  StyledBoxCenter,
  MainGrid,
  ChildGrid,
  Logo,
  Title,
<<<<<<< HEAD:src/pages/SignUp/SignUp.tsx
} from "./SignUp.style";
import { useSignUp } from "./SignUp.hook";
=======
} from './SignUp.style';
import { useSignUp } from './SignUp.hook';
import TextInput from '../../atoms/TextInput/TextInput';
import Button from '../../atoms/Button/Button';
>>>>>>> d641b23362dc104eb1500667d3aa033a84ef48b4:src/organisms/SignUp/SignUp.tsx

const SignUpForm: React.FC = () => {
  const { formik, toasterOpen, handleCloseToaster, isAnyFieldEmpty } =
    useSignUp();

  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <StyledContainerWrapper>
          <Toaster
            message="Account created successfully!"
            type="success"
            open={toasterOpen}
            onClose={handleCloseToaster}
          />
          {/* @ts-expect-error: StyledForm does not have a component prop */}
          <StyledForm as="form" onSubmit={formik.handleSubmit}>
            <StyledHeader>
              <Logo>
                <img src="#" alt="Decord-mistri Logo" />
                <Title variant="h5">DECORD-MISTRI</Title>
              </Logo>
              <Typography variant="body1" color="textSecondary">
                Create your free account to get started
              </Typography>
            </StyledHeader>
            <MainGrid>
              <ChildGrid>
                <TextInput
                  name="firstName"
                  label="First Name"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                />
                {formik.errors.firstName && formik.touched.firstName && (
                  <StyledTypography>{formik.errors.firstName}</StyledTypography>
                )}
              </ChildGrid>
              <ChildGrid>
                <TextInput
                  name="lastName"
                  type="text"
                  label="Last Name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                />
                {formik.errors.lastName && formik.touched.lastName && (
                  <StyledTypography>{formik.errors.lastName}</StyledTypography>
                )}
              </ChildGrid>
            </MainGrid>

            <TextInput
              name="email"
              type="email"
              label="Email"
              style={{ marginTop: '10px' }}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
            />
            {formik.errors.email && formik.touched.email && (
              <StyledTypography>{formik.errors.email}</StyledTypography>
            )}

            <TextInput
              label="Password"
              type="password"
              name="password"
              style={{ marginTop: '10px' }}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
            />
            {formik.errors.password && formik.touched.password && (
              <StyledTypography>{formik.errors.password}</StyledTypography>
            )}

            <TextInput
              name="confirm_password"
              type="password"
              label="Confirm Password"
              value={formik.values.confirm_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{ marginTop: '10px' }}
              error={
                formik.touched.confirm_password &&
                Boolean(formik.errors.confirm_password)
              }
            />
            {formik.errors.confirm_password &&
              formik.touched.confirm_password && (
                <StyledTypography>
                  {formik.errors.confirm_password}
                </StyledTypography>
              )}
            <Button
              title="Sign Up"
              color="primary"
              type="submit"
              style={{
                width: '100%',
                borderRadius: '4px',
                height: '55px',
                marginTop: '10px',
              }}
              disabled={isAnyFieldEmpty}
              onClick={() => formik.handleSubmit}
              variant="contained"
            />

            <StyledBoxCenter>
              <Typography variant="body2">
                Already have an account?{" "}
                {/* @ts-expect-error: StyledForm does not have a component prop */}
                <StyledLink component={RouterLink} to="/">
                  Sign in
                </StyledLink>
              </Typography>
            </StyledBoxCenter>
          </StyledForm>
        </StyledContainerWrapper>
      </StyledContainer>
    </ThemeProvider>
  );
};

export default SignUpForm;
