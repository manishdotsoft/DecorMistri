import { Typography } from '@mui/material';

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

import loginImage from '../../assets/login.png';

import loginLogo from '../../assets/logo/decorlogo.svg';

const ResetPassword = () => {
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
                  Reset password
                </Typography>
                <Typography sx={{ fontSize: '14px', fontWeight: 400 }}>
                  Your password has been reset
                </Typography>
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

        <AllImg src={loginImage} alt="Login illustration" />
      </MainFlex>
    </StyledContainer>
  );
};

export default ResetPassword;
