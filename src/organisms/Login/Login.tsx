import { useDispatch } from 'react-redux';
import { setLoginData } from '../../store/reducers/loginSlice';
import { AppDispatch } from '../../store/store';
import { Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { LoginSchema } from './LoginSchema';
import TextInput from '../../atoms/TextInput/TextInput';
import loginImage from '../../assets/login.png';
import loginLogo from '../../assets/logo/decorlogo.svg';

import Button from '../../atoms/Button/Button';
import { MainContainer, FullContainer, LoginImage } from './LoginPage.styel';

const initialValues = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <FullContainer>
      <MainContainer>
        <div className="login-container">
          <div className="logo">
            <img
              src={loginLogo}
              alt="Decord-mistri Logo"
              className="logo-image"
            />
            <div className="title">
              <p>
                <span>Welcome to</span> <span>Decormistri</span> Collaboration
                tool
              </p>
              <p>
                <span>
                  Decormistri provides advanced collaboration tools for
                </span>
                <span> the Interior Industry and companies</span>
              </p>
            </div>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={(values, { resetForm }) => {
              dispatch(setLoginData(values));
              localStorage.setItem('authToken', 'your-auth-token');
              resetForm();
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              isValid,
            }) => {
              const isButtonDisabled =
                !values.email || !values.password || !isValid;

              return (
                <Form>
                  <TextInput
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(touched.email && errors.email)}
                    helperText={
                      touched.email && errors.email ? errors.email : undefined
                    }
                  />
                  <TextInput
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(touched.password && errors.password)}
                    helperText={
                      touched.email && errors.email ? errors.email : undefined
                    }
                  />
                  <div className="forgot-password-container">
                    <Link
                      component={RouterLink}
                      to="/forgot-password"
                      className="forgot-password-link"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <Button
                    title="Login"
                    type="submit"
                    color="primary"
                    backgroundColor="#C7148A"
                    variant="contained"
                    disabled={isButtonDisabled}
                    onClick={() => {}}
                    style={{
                      width: '100%',
                      borderRadius: '4px',
                      height: '55px',
                      marginTop: '10px',
                    }}
                  />
                </Form>
              );
            }}
          </Formik>

          <div className="signup-container">
            <Typography component="span">Don't have an account?</Typography>
            <Link component={RouterLink} to="/signup" className="signup-link">
              Sign Up
            </Link>
          </div>
        </div>
        <div>
          <LoginImage src={loginImage} alt="Login illustration" />
        </div>
      </MainContainer>
    </FullContainer>
  );
};

export default LoginPage;
