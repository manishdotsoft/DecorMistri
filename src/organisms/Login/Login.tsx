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
  ImageBox,
  TitleOne,
  TitleTwo,
  LogoImage,
} from './LoginPage.style';
import Toaster from '../../atoms/Toaster/Toaster';
import loginImage from '../../assets/images/signUpLogImage/SignUpLog.png';
import loginLogo from '../../assets/images/logo/Layer_x0020_1.svg';
import googleLogo from '../../assets/images/logo/google.svg';
import { useLoginLogic } from './Login.hook';

const LoginPage = () => {
  const { initialValues, handleSubmit,message,showToaster,handleClose,severity } = useLoginLogic();


  return (
    <StyledContainer>
      <MainFlex>
        <ChildFlex>
          <StyledHeader>
            <LogoImage
              src={loginLogo}
              alt="Decormistri Logo"
              className="logo-image"
            />
            <Title>
              <TitleOne>
                Welcome to <br />
                <Highlight>Decormistri</Highlight> Collaboration Tool
              </TitleOne>
              <TitleTwo variant="body2">
                Decormistri provides advanced collaboration tools for <br /> the
                Interior Industry and companies.
              </TitleTwo>
            </Title>
          </StyledHeader>
          <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={(values, { resetForm }) => {
              handleSubmit(values);
              resetForm();
              console.log(values);
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
                    marginBottom: '10px',
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
                    marginBottom: '10px',
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
                    onClick={() =>handleSubmit(values)}
                    disabled={!values.email || !values.password || !isValid}
                    style={{
                      marginTop: '20px',

                      backgroundColor:
                        !values.email || !values.password || !isValid
                          ? '#565155'
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
            logo={googleLogo}
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
        <ImageBox>
          <AllImg src={loginImage} alt="Login illustration" />
        </ImageBox>
      </MainFlex>
      {
        message && <Toaster 
         message={message}
         open={showToaster}
         onClose={handleClose}
         severity={severity}
        />
      }
    </StyledContainer>
  );
};

export default LoginPage;
