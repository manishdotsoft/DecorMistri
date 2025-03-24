import { Formik, Form } from 'formik';
import TextInput from '../../../atoms/TextInput/TextInput';
import Button from '../../../atoms/Button/Button';
import {
  StyledContainer,
  StyledHeader,
  MainFlex,
  ChildFlex,
  AllImg,
  Title,
  StyledTypography,
  LoginLink,
} from '../Forgetpage.style';
import loginImage from '../../../assets/images/signUpLogImage/SignUpLog.png';
import loginLogo from '../../../assets/images/logo/Layer_x0020_1.svg';
import LoginSchema from './validationSchema';
import {
  ImageBox,
  LogoImage,
  ParentInputBox,
  TitleOne,
  TitleTwo,
} from '../../Login/LoginPage.style';
import { useNewPasswordLogic } from './NewPassword.hook';
import Toaster from '../../../atoms/Toaster/Toaster';
import { useTheme } from '@mui/material';

const NewPassword = () => {
  const theme = useTheme();
  const {
    handleSubmit,
    initialValues,
    message,
    showToaster,
    handleClose,
    severity,
  } = useNewPasswordLogic();

  console.log(message, showToaster, 'toast');

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
              const isButtonDisabled =
                !values.password || !values.confirm_password || !isValid;

              return (
                <Form>
                  <ParentInputBox>
                    <TextInput
                      label="Password"
                      type="password"
                      name="password"
                      placeholder="New Password"
                      VisibilityStyle={{ top: '30px' }}
                      style={{
                        width: '100%',
                        borderRadius: '8px',
                        padding: '18px',
                        marginBottom: '5px',
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
                      VisibilityStyle={{ top: '40px' }}
                      style={{
                        width: '100%',
                        borderRadius: '8px',
                        padding: '18px',

                        marginTop: '10px',
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
                  </ParentInputBox>
                  <LoginLink to="/resetpassword">
                    <Button
                      title="Reset Password"
                      type="submit"
                      onClick={() => {}}
                      backgroundColor={
                        isButtonDisabled
                          ? theme.palette.grey[300]
                          : theme.palette.decor.main
                      }
                      variant="contained"
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
                  </LoginLink>
                </Form>
              );
            }}
          </Formik>

          {/* </StyledForm> */}
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

export default NewPassword;
