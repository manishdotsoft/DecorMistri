import { Formik, Form } from 'formik';
import TextInput from '../../../atoms/TextInput/TextInput';
import Button from '../../../atoms/Button/Button';
import loginImage from '../../../assets/images/signUpLogImage/SignUpLog.png';
import loginLogo from '../../../assets/images/logo/Layer_x0020_1.svg';
import { ForgetPasswordValidationSchema } from './validationSchema';
import { useForgetPassword } from './ForgotPassword.hook';
import {
  StyledContainer,
  // StyledForm,
  StyledHeader,
  MainFlex,
  ChildFlex,
  AllImg,
  LoginLink,
  Title,
} from '../Forgetpage.style';
import {
  ImageBox,
  LogoImage,
  ParentInputBox,
  TitleOne,
  TitleTwo,
} from '../../Login/LoginPage.style';
import { useTheme } from '@mui/material';

const ForgetPassword = () => {
  const { handleSubmit } = useForgetPassword();

  const initialValues = {
    email: '',
  };
  const theme = useTheme();

  return (
    <StyledContainer>
      <MainFlex>
        <ChildFlex>
          {/* <StyledForm> */}
          <StyledHeader>
            <LogoImage
              src={loginLogo}
              alt="Decormistri Logo"
              className="logo-image"
            />
            <Title>
              <TitleOne>Forgot password</TitleOne>
              <TitleTwo>
                No worries, We’ll send you instructions for reset
              </TitleTwo>
            </Title>
          </StyledHeader>
          <Formik
            initialValues={initialValues}
            validationSchema={ForgetPasswordValidationSchema}
            onSubmit={(values, { resetForm }) => {
              handleSubmit(values);
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
              const isButtonDisabled = !values.email || !isValid;

              return (
                <Form>
                  <ParentInputBox>
                    <TextInput
                      name="email"
                      type="email"
                      label="Email Address / Mobile Number"
                      placeholder="Enter Your Email"
                      value={values.email}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        borderRadius: '8px',
                        height: '10px',
                        marginBottom: '6px',
                      }}
                      onBlur={handleBlur}
                      error={Boolean(touched.email && errors.email)}
                      helperText={
                        touched.email && errors.email ? errors.email : undefined
                      }
                    />
                  </ParentInputBox>
                  {/* <LoginLink to="/newpassword"> */}
                  <Button
                    title="Reset Password"
                    type="submit"
                    variant="contained"
                    onClick={() => {}}
                    backgroundColor={
                      isButtonDisabled
                        ? theme.palette.grey[300]
                        : theme.palette.decor.main
                    }
                    disabled={isButtonDisabled}
                    style={{
                      marginTop: '20px',
                      color: theme.palette.grey[50],
                      width: '100%',
                      height: '50px',
                      borderRadius: '5px',
                      cursor: isButtonDisabled ? 'not-allowed' : 'pointer',
                    }}
                  />
                  {/* </LoginLink> */}
                </Form>
              );
            }}
          </Formik>
          {/* </StyledForm> */}
          <LoginLink to="/">
            <Button
              title="Back"
              type="submit"
              variant="contained"
              onClick={() => {}}
              style={{
                borderRadius: '5px',
                background: theme.palette.background.paper,
                color: theme.palette.text.primary,
                border: `1px solid ${theme.palette.grey[500]}`,
                width: '100%',
                height: '50px',
                marginTop: '15px',
              }}
            />
          </LoginLink>
        </ChildFlex>

        <ImageBox>
          <AllImg src={loginImage} alt="Login illustration" />
        </ImageBox>
      </MainFlex>
    </StyledContainer>
  );
};

export default ForgetPassword;
