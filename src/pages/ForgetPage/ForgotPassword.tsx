import { Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  StyledTextField,
  StyledButton,
  LoginContainer,
  ForgetPas,
  Title,
  MainCon,
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
    <MainCon>
      <LoginContainer maxWidth="xs">
        <Title variant="h5">Forgot Password</Title>
        <ForgetPas variant="body2">
          Please enter the email address associated with your account. We will
          send you a code to reset your password.
        </ForgetPas>

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

        <Box>
          <ForgetPas variant="body2">
            <Link
              component={RouterLink}
              to="/"
              underline="none"
              color="inherit"
            >
              Back to Login
            </Link>
          </ForgetPas>
        </Box>
      </LoginContainer>
    </MainCon>
  );
};

export default ForgotPasswordPage;
