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
} from './Forgetpage.style';
import loginImage from '../../assets/images/signUpLogImage/SignUpLog.png';
import loginLogo from '../../assets/images/logo/Layer_x0020_1.svg';

const initialValues = {
  email: '',
  password: '',
};

const ForgetPassword = () => {
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
                  No worries, We’ll send you instructions for reset
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
                      type="email"
                      label="Email Address / Mobile Number"
                      placeholder="Email Address / Mobile Number"
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

                    <LoginLink to="/passwordotp">
                      <Button
                        title="Reset Password"
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
          <LoginLink to="/">
            <Button
              title="Back"
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
        </ChildFlex>

        <AllImg src={loginImage} alt="Login illustration" />
      </MainFlex>
    </StyledContainer>
  );
};

export default ForgetPassword;
