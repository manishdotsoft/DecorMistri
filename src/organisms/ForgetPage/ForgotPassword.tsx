import { Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  LoginContainer,
  ForgetPas,
  Title,
  MainCon,
  StyledTypography,
} from '../Login/LoginPage.styel';
import TextInput from '../../atoms/TextInput/TextInput';
import Button from '../../atoms/Button/Button';

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
          {({ errors, touched, values, handleChange, handleBlur }) => (
            <Form>
              <TextInput
                name="email"
                type="email"
                label="Email"
                style={{ marginTop: '10px', width: '350px' }}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.email && errors.email)}
              />
              {touched.email && errors.email && (
                <StyledTypography as="span">{errors.email}</StyledTypography>
              )}

              <Button
                title="Reset"
                type="submit"
                color="primary"
                variant="contained"
                style={{
                  width: '100%',
                  borderRadius: '4px',
                  height: '55px',
                  marginTop: '10px',
                }}
                onClick={() => {}}
              />
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
