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
  StyledContainer,
  StyledHeader,
  MainFlex,
  ChildFlex,
  AllImg,
  Highlight,
  SignupContainer,
  HeadlineSpan,
  ForgotPasswordLink,
  ForgetPaswordContainer,
  Title,
} from './LoginPage.styel';

import loginImage from '../../assets/login.png';
import loginLogo from '../../assets/logo/decorlogo.svg';

const initialValues = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <StyledContainer>
      <MainFlex>
        <ChildFlex>
          <StyledHeader>
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
              >
                Welcome to <br />
                <Highlight>Decormistri</Highlight> Collaboration Tool
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '13px' }}>
                Decormistri provides advanced collaboration tools for <br /> the
                Interior Industry and companies.
              </Typography>
            </Title>
          </StyledHeader>
          <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={(values, { resetForm }) => {
              dispatch(setLoginData(values));
              localStorage.setItem('authToken', 'your-auth-token');
              console.log(values);
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
            }) => (
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
                    borderRadius: '8px',
                    marginBottom: '20px',
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
                    borderRadius: '8px',
                    marginBottom: '20px',
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
                    <input type="checkbox" id="rememberMe" name="rememberMe" />
                    <label htmlFor="rememberMe">Remember Me</label>
                  </div>
                  <ForgotPasswordLink to="/forgot-password">
                    Forgot password?
                  </ForgotPasswordLink>
                </ForgetPaswordContainer>
                <Button
                  title="Sign In"
                  type="submit"
                  color="primary"
                  variant="contained"
                  onClick={() => {}}
                  disabled={!values.email || !values.password || !isValid}
                  style={{
                    marginTop: '20px',
                    backgroundColor:
                      !values.email || !values.password || !isValid
                        ? '#e432a9'
                        : '#C7148A',
                    color: '#ffffff',
                    width: '100%',
                    height: '50px',
                    borderRadius: '5px',
                    cursor:
                      !values.email || !values.password || !isValid
                        ? 'not-allowed'
                        : 'pointer',
                  }}
                />
              </Form>
            )}
          </Formik>
          <Button
            title="Sign In with Google"
            color="primary"
            variant="contained"
            style={{
              borderRadius: '5px',
              background: 'white',
              color: 'black',
              border: '1px solid #cccccc',
              width: '100%',
              height: '50px',
              marginTop: '15px',
            }}
            onClick={() => console.log('Google Sign-In Clicked')}
          />
          <SignupContainer>
            <Typography component="span">
              New to <HeadlineSpan> Decormistri?</HeadlineSpan>
            </Typography>
            <Link
              sx={{
                fontSize: '16px',
                color: '#c7148a',
                textDecoration: 'none',
              }}
              component={RouterLink}
              to="/signup"
            >
              Create an account
            </Link>
          </SignupContainer>
        </ChildFlex>
        <AllImg src={loginImage} alt="Login illustration" />
      </MainFlex>
    </StyledContainer>
  );
};

export default LoginPage;
