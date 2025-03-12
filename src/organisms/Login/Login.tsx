import { Typography, Box, useTheme } from '@mui/material';
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
  LinkSignup,
  ButtonWrapper,
} from './LoginPage.style';
import Toaster from '../../atoms/Toaster/Toaster';
import loginImage from '../../assets/images/signUpLogImage/SignUpLog.png';
import loginLogo from '../../assets/images/logo/Layer_x0020_1.svg';
import googleLogo from '../../assets/images/logo/google.svg';
import { useLoginLogic } from './Login.hook';
import Modal from '../../atoms/Modal/Modal';

const LoginPage = () => {
  const theme = useTheme();
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
                      borderRadius: '6px',
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
                      borderRadius: '6px',
                      marginTop: '20px',
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
                </ParentInputBox>
                <ForgetPaswordContainer>
                  <div>
                    <input type="checkbox" id="rememberMe" name="rememberMe" />
                    <label
                      htmlFor="rememberMe"
                      style={{ fontFamily: theme?.typography?.fontFamily }}
                    >
                      Remember Me
                    </label>
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
                        ? theme.palette.grey[500]
                        : theme.palette.decor.main,
                    width: '100%',
                    height: '50px',
                    borderRadius: '6px',
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
              borderRadius: '10px',
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.text.primary,
              border: `1px solid ${theme.palette.grey[500]}`,
              width: '100%',
              height: '50px',
              marginTop: '20px',
            }}
            onClick={() => console.log('Google Sign-In Clicked')}
          />
          <SignupContainer>
            <Typography component="span">
              New to <HeadlineSpan> Decormistri?</HeadlineSpan>
            </Typography>

            <LinkSignup component={RouterLink} to="/signup">
              Create an account
            </LinkSignup>
          </SignupContainer>
          <Modal
            open={openModal}
            onClose={handleModalClose}
            children={
              <Box>
                <Typography mt={1}>
                  Do you want to update your profile?
                </Typography>
                <ButtonWrapper>
                  <Button
                    title="Skip"
                    type="submit"
                    color="primary"
                    variant="contained"
                    onClick={handleModalClose}
                    style={{
                      backgroundColor: theme.palette.grey[300],
                      color: theme.palette.text.primary,
                      borderRadius: '5px',
                      width: '160px',
                    }}
                  />
                  <Button
                    title="Update Now"
                    type="submit"
                    color="primary"
                    variant="contained"
                    onClick={handleUpdateprofile}
                    style={{
                      backgroundColor: theme.palette.decor.main,
                      color: theme.palette.common.white,
                      borderRadius: '5px',
                      width: '160px',
                    }}
                  />
                </ButtonWrapper>
              </Box>
            }
          />
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
