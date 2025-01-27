import React from "react";

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
} from "./SuccessfullyPage.style";

import SignUpImage from "../../assets/images/signUpLogImage/SignUpLog.png";
import LogoDecor from "../../assets/images/logo/Layer_x0020_1.svg";
import Button from "../../atoms/Button/Button";
import { Link } from "react-router-dom";
import { useSuccessfullyPageLogic } from "./SuccessfullyPage.hook";
import { DECOR_LOGO_COLOR } from "../../thems/primitives/colors";

const SuccessfullyPage: React.FC = () => {
  const { handleClick } = useSuccessfullyPageLogic();
  return (
    <StyledContainer>
      <MainFlex>
        <ChildFlex>
          <StyledHeader>
            <Logo
              src={LogoDecor}
              alt="Decord-mistri Logo"
              style={{ height: "40px" }}
            />
            <Title>Successfully Create your account</Title>
            <Title2 color="textSecondary">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries
            </Title2>
          </StyledHeader>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              title="Login now"
              type="button"
              variant="contained"
              style={{
                backgroundColor: `${DECOR_LOGO_COLOR}`,
                width: "50%",
                borderRadius: "5px",
                padding: "25px",
              }}
              onClick={handleClick}
            />
          </Link>
        </ChildFlex>
        <ImageFlex>
          <AllImg src={SignUpImage} alt="Signup visuals" />
        </ImageFlex>
      </MainFlex>
    </StyledContainer>
  );
};

export default SuccessfullyPage;
