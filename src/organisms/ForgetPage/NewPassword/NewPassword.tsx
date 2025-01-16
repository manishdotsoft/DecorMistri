import { useDispatch } from 'react-redux';
import { setLoginData } from '../../../store/reducers/loginSlice';
import { AppDispatch } from '../../../store/store';

import { Formik, Form } from 'formik';
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
  StyledTypography,
} from '../Forgetpage.style';

import loginImage from '../../../assets/images/signUpLogImage/SignUpLog.png';
import loginLogo from '../../../assets/images/logo/Layer_x0020_1.svg';
import LoginSchema from './validationSchema';
import {
  ImageBox,
  LogoImage,
  TitleOne,
  TitleTwo,
} from '../../Login/LoginPage.style';

const initialValues = {
  email: '',
  password: '',
  confirm_password: '',
};

const NewPassword = () => {
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
                <TitleOne>Set a new password</TitleOne>
                <TitleTwo>
                  New password must be different from your previously used
                  passwords.
                </TitleTwo>
              </Title>
            </StyledHeader>
            <Formik
              initialValues={initialValues}
              validationSchema={LoginSchema}
              onSubmit={(values, { resetForm }) => {
                dispatch(
                  setLoginData({
                    email: values.email,
                    password: values.password,
                  })
                );
                localStorage.setItem('authToken', 'your-auth-token');
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
              }) => {
                const isButtonDisabled =
                  !values.password || !values.confirm_password || !isValid;

                return (
                  <Form>
                    <TextInput
                      label="Password"
                      type="password"
                      name="password"
                      placeholder="New Password"
                      style={{
                        width: '96%',
                        borderRadius: '8px',
                        height: '10px',
                        marginBottom: '50px',
                      }}
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.password && Boolean(errors.password)}
                    />
                    {errors.password && touched.password && (
                      <StyledTypography>{errors.password}</StyledTypography>
                    )}

                    <TextInput
                      name="confirm_password"
                      type="password"
                      label="Confirm Password"
                      placeholder="Confirm Password"
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{
                        width: '96%',
                        borderRadius: '8px',
                        height: '10px',
                        marginBottom: '50px',
                      }}
                      error={
                        touched.confirm_password &&
                        Boolean(errors.confirm_password)
                      }
                    />
                    {errors.confirm_password && touched.confirm_password && (
                      <StyledTypography>
                        {errors.confirm_password}
                      </StyledTypography>
                    )}

                    <LoginLink to="/resetpassword">
                      <Button
                        title="Reset Password"
                        type="submit"
                        color="#e432a9"
                        onClick={() => {}}
                        backgroundColor={
                          isButtonDisabled ? '#e432a9' : '#C7148A'
                        }
                        variant="contained"
                        disabled={isButtonDisabled}
                        style={{
                          marginTop: '20px',
                          color: '#ffffff',
                          width: '100%',
                          height: '50px',
                          borderRadius: '5px',
                          cursor: isButtonDisabled ? 'not-allowed' : 'pointer',
                        }}
                      />
                    </LoginLink>
                  </Form>
                );
              }}
            </Formik>
          </StyledForm>
        </ChildFlex>
        <ImageBox>
          <AllImg src={loginImage} alt="Login illustration" />
        </ImageBox>
      </MainFlex>
    </StyledContainer>
  );
};

export default NewPassword;
