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
  Collaboration,
  ParentInputBox,
} from './LoginPage.style';
import Toaster from '../../atoms/Toaster/Toaster';
import loginImage from '../../assets/images/signUpLogImage/SignUpLog.png';
import loginLogo from '../../assets/images/logo/Layer_x0020_1.svg';
import googleLogo from '../../assets/images/logo/google.svg';
import { useLoginLogic } from './Login.hook';
import ReusableModal from '../../atoms/Modal/Modal';

const LoginPage = () => {
  const {
    initialValues,
    handleSubmit,
    message,
    showToaster,
    handleClose,
    severity,
    openModal,
    handleModalClose,
    handleUpdateprofile,
  } = useLoginLogic();
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
              <TitleOne>Welcome To</TitleOne>
              <Collaboration>
                <Highlight>Decormistri</Highlight> Collaboration Tool
              </Collaboration>
              <TitleTwo>
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
                <ParentInputBox>
                  <TextInput
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      borderRadius: '8px',
                      marginBottom: '6px',
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
                      width: '100%',
                      borderRadius: '8px',
                      marginTop: '15px',
                      marginBottom: '6px',
                    }}
                    onBlur={handleBlur}
                    error={Boolean(touched.password && errors.password)}
                    helperText={
                      touched.password && errors.password
                        ? errors.password
                        : undefined
                    }
                  />
                </ParentInputBox>
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
                  onClick={() => handleSubmit(values)}
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
          <ReusableModal
            open={openModal}
            onClose={handleModalClose}
            title="Are you want to Update Your Profile?"
            buttons={[
              {
                label: 'Skip',
                onClick: handleModalClose,
                style: {
                  backgroundColor: '#ccc9c9',
                  color: '#020000',
                  width: '160px',
                  borderRadius: '6px',
                },
              },
              {
                label: 'Update Now',
                onClick: handleUpdateprofile,
                style: {
                  backgroundColor: '#C7148A',
                  color: '#fff',
                  width: '160px',
                  borderRadius: '6px',
                },
              },
            ]}
            showCloseIcon={true}
          />
          ;
        </ChildFlex>
        <ImageBox>
          <AllImg src={loginImage} alt="Login illustration" />
        </ImageBox>
      </MainFlex>
      {message && (
        <Toaster
          message={message}
          open={showToaster}
          onClose={handleClose}
          severity={severity}
        />
      )}
    </StyledContainer>
  );
};

export default LoginPage;
