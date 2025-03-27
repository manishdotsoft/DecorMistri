import { useTheme } from '@mui/material';
import { Formik, Form } from 'formik';
import { LoginSchema } from '../../Login/LoginSchema';
import TextInput from '../../../atoms/TextInput/TextInput';
import Button from '../../../atoms/Button/Button';
import {
  StyledContainer,
  StyledForm,
  StyledHeader,
  MainFlex,
  ChildFlex,
  AllImg,
  LoginLink,
  Title,
  SignupContainer,
  ResendTitle,
} from '../Forgetpage.style';

import loginImage from '../../../assets/images/signUpLogImage/SignUpLog.png';
import loginLogo from '../../../assets/images/logo/Layer_x0020_1.svg';
import { Link } from 'react-router-dom';
import {
  ImageBox,
  LogoImage,
  ParentInputBox,
  TitleOne,
  TitleTwo,
} from '../../Login/LoginPage.style';

const initialValues = {
  email: '',
  password: '',
};

const PasswordOtp = () => {
  const theme = useTheme();
  return (
    <StyledContainer>
      <MainFlex>
        <ChildFlex>
          <StyledForm>
            <StyledHeader>
              <LogoImage
                src={loginLogo}
                alt="Decormistri Logo"
                className="logo-image"
              />
              <Title>
                <TitleOne>Forgot password</TitleOne>
                <TitleTwo>Enter a reset code</TitleTwo>
              </Title>
            </StyledHeader>
            <Formik
              initialValues={initialValues}
              validationSchema={LoginSchema}
              onSubmit={(values, { resetForm }) => {
                localStorage.setItem('authToken', 'your-auth-token');
                resetForm();
              }}
            >
              {({ values, errors, touched, handleChange, handleBlur }) => {
                return (
                  <Form>
                    <ParentInputBox>
                      <TextInput
                        name="email"
                        type="number"
                        label="Enter OTP"
                        placeholder="Enter OTP"
                        value={values.email}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '15px',
                          textAlign: 'center',
                          borderRadius: '8px',
                          marginBottom: '10px',
                          fontWeight: 'bold',
                        }}
                        onBlur={handleBlur}
                        error={Boolean(touched.email && errors.email)}
                        helperText={
                          touched.email && errors.email
                            ? errors.email
                            : undefined
                        }
                      />
                    </ParentInputBox>
                    <LoginLink to="/newpassword">
                      <Button
                        title="Continue"
                        type="submit"
                        fontWeight="bold"
                        variant="contained"
                        onClick={() => {}}
                        style={{
                          backgroundColor: theme.palette.decor.main,
                          color: theme.palette.background.paper,
                          width: '100%',
                          height: '50px',
                          borderRadius: '8px',
                          marginTop: '10px',
                        }}
                      />
                    </LoginLink>
                  </Form>
                );
              }}
            </Formik>
          </StyledForm>
          <LoginLink to="/signup">
            <Button
              title="Back to Sign in"
              type="submit"
              color="primary"
              variant="contained"
              fontWeight="bold"
              onClick={() => {}}
              style={{
                borderRadius: '8px',
                background: theme.palette.background.paper,
                color: theme.palette.text.primary,
                border: `1px solid ${theme.palette.grey[500]}`,
                width: '100%',
                height: '50px',
                marginTop: '15px',
              }}
            />
          </LoginLink>
          <SignupContainer>
            <ResendTitle>
              Dont receive the code ?
              <Link
                to=""
                style={{ color: theme.palette.decor.main }}
                className="signup-link"
              >
                Please resend
              </Link>
            </ResendTitle>
          </SignupContainer>
        </ChildFlex>

        <ImageBox>
          <AllImg src={loginImage} alt="Login illustration" />
        </ImageBox>
      </MainFlex>
    </StyledContainer>
  );
};

export default PasswordOtp;
