import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
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
  StyledBoxCenter,
  TextArea,
  ProgressBar,
  ProgressBar1,
  SignUpImageBox,
  ParentInputBox,
  PasswordError,
  LogoImage,
  DividerLine,
  StrengthText,
  HaveAccount1,
  HaveAccount2,
  StrengthLabel,
} from './SignUp.style';

import TextInput from '../../atoms/TextInput/TextInput';

import SignUpImage from '../../assets/images/signUpLogImage/SignUpLog.png';
import Button from '../../atoms/Button/Button';
import LogoDecor from '../../assets/images/logo/Layer_x0020_1.svg';
import { useSignUp } from './SignUp.hook';
import googleLogo from '../../assets/images/logo/google.svg';

import Toaster from '../../atoms/Toaster/Toaster';

const SignUpForm: React.FC = () => {
  const {
    formik,
    isAnyFieldEmpty,
    passwordStrength,
    handlePasswordChange,
    label,
    getStrengthLabel,
    toasterOpen,
    handleCloseToaster,
  } = useSignUp();
  const theme = useTheme();

  const SegmentedProgressBar: React.FC<{ strength: number }> = ({
    strength,
  }) => {
    const segments = [1, 2, 3, 4];
    return (
      <ProgressBar>
        {segments.map((segment) => (
          <Box
            key={segment}
            sx={{
              flex: 1,
              height: 4,
              borderRadius: 4,
              backgroundColor:
                segment <= strength
                  ? getStrengthLabel(segment).color
                  : theme.palette.grey[200],
            }}
          />
        ))}
      </ProgressBar>
    );
  };

  return (
    <StyledContainer>
      <MainFlex>
        <ChildFlex>
          <StyledForm onSubmit={formik.handleSubmit}>
            <StyledHeader>
              <LogoImage src={LogoDecor} alt="Decord-mistri Logo" />
              <Title>Create your account</Title>
              <Title2>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries
              </Title2>
            </StyledHeader>

            <Button
              title="Sign In with Google"
              type="submit"
              color="primary"
              variant="contained"
              logo={googleLogo}
              style={{
                borderRadius: '5px',
                background:
                  theme.palette.background.paper ||
                  theme.palette.background.default,
                color: theme.palette.text.primary,

                border: `1px solid ${theme.palette.grey[300]}`,
                width: '100%',
                height: '50px',
              }}
              onClick={() => {}}
            />

            <DividerLine>Or</DividerLine>

            {/* Name Field */}
            <ParentInputBox>
              <TextInput
                name="name"
                label="Enter your name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                style={{
                  width: '100%',
                  borderRadius: '8px',

                  marginTop: '10px',
                  marginBottom: '4px',
                }}
                eyePadding={{ paddingRight: '30px' }}
                placeholder="Enter your name"
              />
              {formik.errors.name && formik.touched.name && (
                <StyledTypography>{formik.errors.name}</StyledTypography>
              )}

              {/* Phone Field */}
              <TextInput
                name="phone"
                type="number"
                label="Enter your phone number"
                value={formik.values.phone}
                onChange={(e) => {
                  if (e.target.value.length <= 10) {
                    formik.handleChange(e);
                  }
                }}
                onBlur={formik.handleBlur}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                style={{
                  width: '100%',
                  borderRadius: '8px',

                  marginTop: '10px',
                  marginBottom: '4px',
                }}
                // inputProps={{
                //   maxLength: 10,
                // }}
                eyePadding={{ paddingRight: '30px' }}
                placeholder="Enter your phone number"
              />

              {formik.errors.phone && formik.touched.phone && (
                <StyledTypography>{formik.errors.phone}</StyledTypography>
              )}

              {/* Email Field */}
              <TextInput
                name="email"
                label="Enter your email address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                style={{
                  width: '100%',
                  borderRadius: '8px',

                  marginTop: '10px',
                  marginBottom: '4px',
                }}
                eyePadding={{ paddingRight: '30px' }}
                placeholder="Enter your email address"
              />
              {formik.errors.email && formik.touched.email && (
                <StyledTypography>{formik.errors.email}</StyledTypography>
              )}

              {/* Password Field */}
              <TextArea>
                <Typography sx={{ marginBottom: '7px' }}>Password</Typography>
                <PasswordError>
                  <TextInput
                    name="password"
                    type="password"
                    label="Password"
                    value={formik.values.password}
                    onChange={handlePasswordChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter your password"
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    style={{
                      width: '100%',
                      borderRadius: '8px',

                      marginTop: '10px',
                      marginBottom: '4px',
                    }}
                    eyePadding={{ paddingRight: '30px' }}
                  />
                  {formik.errors.password && formik.touched.password && (
                    <StyledTypography>
                      {formik.errors.password}
                    </StyledTypography>
                  )}
                </PasswordError>
              </TextArea>
            </ParentInputBox>
            <ProgressBar1>
              <SegmentedProgressBar strength={passwordStrength} />
            </ProgressBar1>
            <StrengthText variant="caption">
              Password strength : <StrengthLabel>{label}</StrengthLabel>
            </StrengthText>

            {/* Sign Up Button */}

            <Button
              title="Sign Up"
              type="submit"
              color="primary"
              variant="contained"
              disabled={isAnyFieldEmpty || formik.isSubmitting}
              style={{
                backgroundColor: isAnyFieldEmpty
                  ? theme.palette.grey[500]
                  : theme.palette.decor.main,
                cursor:
                  isAnyFieldEmpty || formik.isSubmitting
                    ? 'not-allowed'
                    : 'pointer',

                width: '100%',
                borderRadius: '5px',
                padding: '25px',
              }}
              onClick={() => {}}
            />

            <StyledBoxCenter>
              <HaveAccount1 variant="body2">
                Already have an account?
              </HaveAccount1>
              <HaveAccount2 component={RouterLink} to="/">
                Sign in
              </HaveAccount2>
            </StyledBoxCenter>

            <Toaster
              message="Signup successful! Redirecting..."
              severity="success"
              open={toasterOpen}
              onClose={handleCloseToaster}
            />
          </StyledForm>
        </ChildFlex>

        <SignUpImageBox>
          <AllImg src={SignUpImage} alt="Signup visuals" />
        </SignUpImageBox>
      </MainFlex>
    </StyledContainer>
    // </Box>
  );
};

export default SignUpForm;
