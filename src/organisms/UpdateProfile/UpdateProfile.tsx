import React from "react";
// import { Typography } from "@mui/material";
// import { Link as RouterLink } from "react-router-dom";
import {
  StyledContainer,
  StyledForm,
  StyledHeader,
  MainFlex,
  ChildFlex,
  AllImg,
  StyledTypography,
  Title,
  Title2,
  // StyledBoxCenter,
  // TextArea,
  SignUpImageBox,
  ParentInputBox,
} from "./UpdateProfile.style";

import TextInput from "../../atoms/TextInput/TextInput";

import SignUpImage from "../../assets/images/signUpLogImage/SignUpLog.png";
import Button from "../../atoms/Button/Button";
import LogoDecor from "../../assets/images/logo/Layer_x0020_1.svg";
import { useUpdateProfile } from "./UpdateProfile.hook";

const UpdateProfile: React.FC = () => {
  const { formik, isAnyFieldEmpty } = useUpdateProfile();

  return (
    <StyledContainer>
      <MainFlex>
        <ChildFlex>
          <StyledForm onSubmit={formik.handleSubmit}>
            <StyledHeader>
              <img
                src={LogoDecor}
                alt="Decord-mistri Logo"
                style={{ height: "50px" }}
              />
              <Title>Update your Profile</Title>
              <Title2>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries
              </Title2>
            </StyledHeader>

            {/* Upload Profile Picture/Logo */}

            {/* Name Field */}
            <ParentInputBox>
              <TextInput
                name="businessName"
                label="Business Name"
                value={formik.values.businessName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.businessName &&
                  Boolean(formik.errors.businessName)
                }
                style={{
                  width: "100%",
                  borderRadius: "8px",

                  marginTop: "10px",
                  marginBottom: "6px",
                }}
                placeholder="Business Name"
              />
              {formik.errors.businessName && formik.touched.businessName && (
                <StyledTypography>
                  {formik.errors.businessName}
                </StyledTypography>
              )}

              {/* Professional Category Field  select input*/}

              {/* Design Type Expertise Field select input */}

              {/* Style Type Expertise Field select input */}
              {/* Location   Expertise Field select input*/}
            </ParentInputBox>

            {/* Sign Up Button */}
            <Button
              title="Sign Up"
              type="submit"
              color="primary"
              variant="contained"
              disabled={isAnyFieldEmpty || formik.isSubmitting}
              style={{
                backgroundColor: isAnyFieldEmpty ? "#5c5c5c" : "#C7148A",
                cursor:
                  isAnyFieldEmpty || formik.isSubmitting
                    ? "not-allowed"
                    : "pointer",

                width: "100%",
                borderRadius: "5px",
                padding: "25px",
              }}
              onClick={() => {}}
            />

            <Button
              title="Sign Up"
              type="submit"
              color="primary"
              variant="contained"
              disabled={isAnyFieldEmpty || formik.isSubmitting}
              style={{
                backgroundColor: isAnyFieldEmpty ? "#5c5c5c" : "#C7148A",
                cursor:
                  isAnyFieldEmpty || formik.isSubmitting
                    ? "not-allowed"
                    : "pointer",

                width: "100%",
                borderRadius: "5px",
                padding: "25px",
              }}
              onClick={() => {}}
            />
          </StyledForm>
        </ChildFlex>

        <SignUpImageBox>
          <AllImg src={SignUpImage} alt="Signup visuals" />
        </SignUpImageBox>
      </MainFlex>
    </StyledContainer>
  );
};

export default UpdateProfile;
