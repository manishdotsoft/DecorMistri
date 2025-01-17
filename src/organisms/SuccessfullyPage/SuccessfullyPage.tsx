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
} from "./SuccessfullyPage.style";

import SignUpImage from "../../assets/images/signUpLogImage/SignUpLog.png";
import LogoDecor from "../../assets/images/logo/Layer_x0020_1.svg";
import Button from "../../atoms/Button/Button";
import { useSuccessfullyPageLogic } from "./SuccessfullyPage.hook";

const SuccessfullyPage: React.FC = () => {
  const {handleClick} = useSuccessfullyPageLogic();
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
          <Button
            title="Login now"
            type="button"
            variant="contained"
            style={{
              backgroundColor: "#C7148A",
              width: "50%",
              borderRadius: "5px",
              padding: "25px",
            }}
            onClick={handleClick}
          />
        </ChildFlex>
        <AllImg src={SignUpImage} alt="Signup visuals" />
      </MainFlex>
    </StyledContainer>
  );
};

export default SuccessfullyPage;
