import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  StyledTextField,
  StyledButton,
  LoginContainer,
} from '../Login/LoginPage.styel';

const initialValues = {
  email: '',
};

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});

const ForgotPasswordPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <LoginContainer maxWidth="xs">
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Forgot Password
        </Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
          Please enter the email address associated with your account. We will
          send you a code to reset your password.
        </Typography>

        <Formik
          initialValues={initialValues}
          validationSchema={ForgotPasswordSchema}
          onSubmit={(values, { resetForm }) => {
            console.log('Form Submitted:', values);
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
                margin="normal"
                error={touched.email && !!errors.email}
                helperText={touched.email && errors.email}
              />
              <StyledButton type="submit" variant="contained" fullWidth>
                Reset Password
              </StyledButton>
            </Form>
          )}
        </Formik>

        <Box mt={2} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            <Link
              component={RouterLink}
              to="/"
              underline="none"
              color="inherit"
            >
              Back to Login
            </Link>
          </Typography>
        </Box>
      </LoginContainer>
    </Box>
  );
};

export default ForgotPasswordPage;
