import { useDispatch } from 'react-redux';
import { setLoginData } from '../../../store/reducers/loginSlice';
import { AppDispatch } from '../../../store/store';
import { Typography } from '@mui/material';
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
  const dispatch = useDispatch<AppDispatch>();

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
                dispatch(setLoginData(values));
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
                          borderRadius: '8px',
                          height: '10px',
                          marginBottom: '5px',
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
                        color="primary"
                        backgroundColor={'#C7148A'}
                        variant="contained"
                        onClick={() => {}}
                        style={{
                          marginTop: '20px',
                          backgroundColor: '#C7148A',
                          color: '#ffffff',
                          width: '100%',
                          height: '50px',
                          borderRadius: '5px',
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
              backgroundColor="#ffffff"
              onClick={() => {}}
              style={{
                borderRadius: '5px',
                background: 'white',
                color: 'black',
                border: '1px solid #cccccc',
                width: '100%',
                height: '50px',
                marginTop: '15px',
              }}
            />
          </LoginLink>
          <SignupContainer>
            <Typography component="span">Dont receive the code ? </Typography>
            <Link to="" className="signup-link">
              Please resend
            </Link>
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
