import { useDispatch } from 'react-redux';
import { setLoginData } from '../../store/reducers/loginSlice';
import { AppDispatch } from '../../store/store';
import { Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { LoginSchema } from './LoginSchema';
import TextInput from '../../atoms/TextInput/TextInput';
import Button from '../../atoms/Button/Button';
import {
  FullContainer,
  MainContainer,
  LeftContainer,
  RightContainer,
  LogoContainer,
  Title,
  Highlight,
  ForgotPasswordLink,
  SignupContainer,
  LoginImage,
  LoginLink,
  ForgetPaswordContainer,
  HeadlineSpan,
} from './LoginPage.styel';

import loginImage from '../../assets/login.png';
import googleLogo from '../../assets/logo/googleLogo.svg';

import loginLogo from '../../assets/logo/decorlogo.svg';

const initialValues = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <FullContainer>
      <MainContainer>
        <LeftContainer>
          <LogoContainer>
            <img
              style={{ width: '30px', height: '35px' }}
              src={loginLogo}
              alt="Decormistri Logo"
              className="logo-image"
            />
            <Title>
              <Typography
                sx={{
                  fontSize: '28px',
                  fontWeight: 300,
                }}
                variant="body2"
              >
                <span>Welcome to</span> <br />
                <Highlight>Decormistri</Highlight> Collaboration tool
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '13px' }}>
                Decormistri provides advanced collaboration tools for <br /> the
                Interior Industry and companies.
              </Typography>
            </Title>
          </LogoContainer>
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
                    style={{
                      width: '96%',
                      height: '10px',
                      marginBottom: '50px',
                    }}
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
                    style={{
                      width: '96%',
                      borderRadius: '4px',
                      height: '10px',
                      marginBottom: '50px',
                    }}
                    onBlur={handleBlur}
                    error={Boolean(touched.password && errors.password)}
                    helperText={
                      touched.password && errors.password
                        ? errors.password
                        : undefined
                    }
                  />
                  <ForgetPaswordContainer>
                    <div>
                      <input
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                      />
                      <label htmlFor="rememberMe">Remember Me</label>
                    </div>

                    <ForgotPasswordLink to="/forgot-password">
                      Forgot password?
                    </ForgotPasswordLink>
                  </ForgetPaswordContainer>
                  <LoginLink to="/dashboard">
                    <Button
                      title="Sign In"
                      type="submit"
                      color="primary"
                      backgroundColor={isButtonDisabled ? '#C7148A' : '#C7148A'}
                      variant="contained"
                      disabled={isButtonDisabled}
                      onClick={() => {}}
                      style={{
                        width: '480px',
                        borderRadius: '4px',
                        height: '48px',
                        marginTop: '15px',
                        backgroundColor: isButtonDisabled
                          ? '#C7148A'
                          : '#C7148A',
                      }}
                    />
                  </LoginLink>
                </Form>
              );
            }}
          </Formik>
          <div
            style={{
              border: '1px solid #afaeae',
              display: 'flex',
              justifyContent: 'center',
              width: '480px',
              marginTop: '15px',
              height: '48px',
              borderRadius: '4px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src={googleLogo} alt="google" />
              <Button
                title="Sign In with Google"
                type="submit"
                color="primary"
                variant="contained"
                backgroundColor="#ffffff"
                onClick={() => {}}
                style={{
                  width: '100%',
                  borderRadius: '4px',
                  height: '48px',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#000000',
                }}
              />
            </div>
          </div>

          <SignupContainer>
            <Typography component="span">
              New to <HeadlineSpan> Decormistri?</HeadlineSpan>
            </Typography>
            <Link component={RouterLink} to="/signup" className="signup-link">
              Create an account
            </Link>
          </SignupContainer>
        </LeftContainer>
        <RightContainer>
          <LoginImage src={loginImage} alt="Login illustration" />
        </RightContainer>
      </MainContainer>
    </FullContainer>
  );
};

export default LoginPage;
