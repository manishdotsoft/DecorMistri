import { useDispatch } from 'react-redux';
import { setLoginData } from '../../store/reducers/loginSlice';
import { AppDispatch } from '../../store/store';
import { Typography } from '@mui/material';

import { Formik, Form } from 'formik';
import { LoginSchema } from '../Login/LoginSchema';
import TextInput from '../../atoms/TextInput/TextInput';
import Button from '../../atoms/Button/Button';
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
} from './Forgetpage.style';

import loginImage from '../../assets/login.png';

import loginLogo from '../../assets/logo/decorlogo.svg';
import { Link } from 'react-router-dom';

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
              <img
                style={{ width: '40px', height: '45px' }}
                src={loginLogo}
                alt="Decormistri Logo"
                className="logo-image"
              />
              <Title>
                <Typography
                  sx={{
                    fontSize: '36px',
                    fontWeight: 300,
                    marginBottom: '5px',
                  }}
                >
                  Forgot password
                </Typography>
                <Typography sx={{ fontSize: '14px', fontWeight: 400 }}>
                  Enter a reset code
                </Typography>
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
                    <TextInput
                      name="email"
                      type="number"
                      label="Enter OTP"
                      placeholder="Enter OTP"
                      value={values.email}
                      onChange={handleChange}
                      style={{
                        width: '96%',
                        borderRadius: '8px',
                        height: '10px',
                        marginBottom: '50px',
                      }}
                      onBlur={handleBlur}
                      error={Boolean(touched.email && errors.email)}
                      helperText={
                        touched.email && errors.email ? errors.email : undefined
                      }
                    />

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

        <AllImg src={loginImage} alt="Login illustration" />
      </MainFlex>
    </StyledContainer>
  );
};

export default PasswordOtp;
