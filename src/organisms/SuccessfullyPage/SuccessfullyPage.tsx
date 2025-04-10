import React from 'react';

import {
  StyledContainer,
  StyledHeader,
  MainFlex,
  ChildFlex,
  AllImg,
  Title,
  Title2,
  Logo,
  ImageFlex,
  ButtonSectoLoginpage,
} from './SuccessfullyPage.style';

import SignUpImage from '../../assets/images/signUpLogImage/SignUpLog.png';
import LogoDecor from '../../assets/images/logo/Layer_x0020_1.svg';
import Button from '../../atoms/Button/Button';
import { Link } from 'react-router-dom';
import { useSuccessfullyPageLogic } from './SuccessfullyPage.hook';
import { useTheme } from '@mui/material';

const SuccessfullyPage: React.FC = () => {
  const { handleClick } = useSuccessfullyPageLogic();
  const theme = useTheme();
  return (
    <StyledContainer>
      <MainFlex>
        <ChildFlex>
          <StyledHeader>
            <Logo
              src={LogoDecor}
              alt="Decord-mistri Logo"
              style={{ height: '40px' }}
            />
            <Title>Successfully Create your account</Title>
            <Title2 color="textSecondary">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries
            </Title2>
          </StyledHeader>
          <ButtonSectoLoginpage>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button
                title="Login now"
                type="button"
                variant="contained"
                style={{
                  backgroundColor: `${theme.palette.decor.main}`,
                  width: '200%',
                  borderRadius: '8px',
                  padding: '25px',
                  display: 'flex',
                }}
                onClick={handleClick}
              />
            </Link>
          </ButtonSectoLoginpage>
        </ChildFlex>
        <ImageFlex>
          <AllImg src={SignUpImage} alt="Signup visuals" />
        </ImageFlex>
      </MainFlex>
    </StyledContainer>
  );
};

export default SuccessfullyPage;
