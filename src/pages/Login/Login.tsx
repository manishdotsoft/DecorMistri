import { useDispatch } from 'react-redux';
import { setLoginData } from '../../store/reducers/loginSlice';
import {
  LoginContainer,
  Logo,
  StyledTextField,
  StyledButton,
  Title,
  ForgetPas,
  MainCon,
  ForgetPasF,
} from './LoginPage.styel';

import { AppDispatch } from '../../store/store';
import { Box, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { LoginSchema } from './LoginSchema';

const initialValues = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <MainCon>
      <LoginContainer maxWidth="xs">
        <Logo>
          <img src="#" alt="Decord-mistri Logo" style={{ marginBottom: 8 }} />
          <Title variant="h5">DECORD-MISTRI</Title>
        </Logo>

        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={(values, { resetForm }) => {
            dispatch(setLoginData(values));
            localStorage.setItem('authToken', 'your-auth-token');
            resetForm();
          }}
        >
          {({ values, errors, touched }) => {
            const isAnyFieldEmpty = !values.email || !values.password;

            return (
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
                <ForgetPasF variant="body2">
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
                  to="/myprofile"
                  underline="none"
                  color="inherit"
                  onClick={(e) => isAnyFieldEmpty && e.preventDefault()}
                >
                  <StyledButton
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={isAnyFieldEmpty}
                  >
                    Login
                  </StyledButton>
                </Link>
              </Form>
            );
          }}
        </Formik>

        <Box>
          <ForgetPas variant="body2">
            <Typography variant="body2">Don't have an account?</Typography>
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
