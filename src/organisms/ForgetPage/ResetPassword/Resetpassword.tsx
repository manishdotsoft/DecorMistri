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
} from '../Forgetpage.style';

import loginImage from '../../../assets/images/signUpLogImage/SignUpLog.png';
import loginLogo from '../../../assets/images/logo/Layer_x0020_1.svg';
import {
  ImageBox,
  LogoImage,
  TitleOne,
  TitleTwo,
} from '../../Login/LoginPage.style';

const ResetPassword = () => {
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
                <TitleOne>Reset password</TitleOne>
                <TitleTwo>Your password has been reset</TitleTwo>
              </Title>
            </StyledHeader>

            <LoginLink to="/">
              <Button
                title="Start your Journey with us"
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
          </StyledForm>
        </ChildFlex>

        <ImageBox>
          <AllImg src={loginImage} alt="Login illustration" />
        </ImageBox>
      </MainFlex>
    </StyledContainer>
  );
};

export default ResetPassword;
