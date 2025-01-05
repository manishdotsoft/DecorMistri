import React from 'react';
import { Typography, ThemeProvider } from '@mui/material';
import { theme } from '../../thems/primitives/theme';
import Toaster from '../../atoms/Toaster/Toaster';
import { Link as RouterLink } from 'react-router-dom';
import {
  StyledContainer,
  StyledForm,
  StyledHeader,
  StyledTextField,
  StyledTypography,
  StyledButton,
  StyledContainerWrapper,
  StyledLink,
  StyledBoxCenter,
  MainGrid,
  ChildGrid,
  Logo,
  Title,
} from './SignUp.style';
import { useSignUp } from './SignUp.hook';

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
                <StyledTextField
                  fullWidth
                  label="First name"
                  variant="outlined"
                  size="small"
                  name="firstName"
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
                <StyledTextField
                  fullWidth
                  label="Last name"
                  variant="outlined"
                  size="small"
                  name="lastName"
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
            <StyledTextField
              fullWidth
              label="Work email"
              variant="outlined"
              size="small"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
            />
            {formik.errors.email && formik.touched.email && (
              <StyledTypography>{formik.errors.email}</StyledTypography>
            )}
            <StyledTextField
              fullWidth
              label="Password"
              variant="outlined"
              size="small"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
            />
            {formik.errors.password && formik.touched.password && (
              <StyledTypography>{formik.errors.password}</StyledTypography>
            )}
            <StyledTextField
              fullWidth
              label="Confirm Password"
              variant="outlined"
              size="small"
              type="password"
              name="confirm_password"
              value={formik.values.confirm_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
            <StyledButton
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              disabled={isAnyFieldEmpty}
            >
              Sign Up
            </StyledButton>
            <StyledBoxCenter>
              <Typography variant="body2">
                Already have an account?{' '}
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
