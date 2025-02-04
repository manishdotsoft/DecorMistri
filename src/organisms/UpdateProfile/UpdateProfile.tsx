import React, { useState } from 'react';

import {
  StyledContainer,
  StyledForm,
  StyledHeader,
  MainFlex,
  ChildFlex,
  StyledTypography,
  Title,
  Title2,
  LabelProfile,
  Logo,
  GridContainer,
  InputLabelItem,
  MainUploadImage,
  ProfileUploadImg,
  InputImg,
  Header,
  Line,
  HeaderTitle,
  A,
  HeaderProfileIcon,
  FirstTitleSec,
  TitleSec,
  SetFormikError,
  ButtonSec,
  ButtonContainer,
} from './UpdateProfile.style';

import TextInput from '../../atoms/TextInput/TextInput';

import Button from '../../atoms/Button/Button';
import LogoDecor from '../../assets/images/logo/Layer_x0020_1.svg';
import { useUpdateProfile } from './UpdateProfile.hook';
import { Box } from '@mui/material';
import SelectOption from '../../atoms/Select/SelectOption';

import ProfileImage from '../../assets/images/updateProfile/man.svg';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../thems/primitives/theme';
import { DECOR_LOGO_COLOR } from '../../thems/primitives/colors';
import fonts from '../../thems/primitives/fonts';
import ProgressBar from './ProgressBar';

const designOptions = [
  {
    value: 'commercial',
    label: 'Commercial Design',
    subcategories: [
      'Office Spaces',
      'Retail Spaces',
      'Hospitality Spaces',
      'Entertainment Spaces',
    ],
  },
  {
    value: 'residential',
    label: 'Residential Design',
    subcategories: [
      'Living Areas',
      'Bedrooms',
      'Dining Areas',
      'Kitchens',
      'Bathrooms',
      'Outdoor Spaces',
    ],
  },
  {
    value: 'industrial',
    label: 'Industrial Design',
    subcategories: [
      'Manufacturing Areas',
      'Storage Areas',
      'Service Areas',
      'Admin Spaces',
      'Specialized Areas',
    ],
  },
  {
    value: 'institutional',
    label: 'Institutional Design',
    subcategories: [
      'Educational Spaces',
      'Healthcare Spaces',
      'Cultural Spaces',
      'Religious Spaces',
      'Government Spaces',
    ],
  },
  {
    value: 'mixed-use',
    label: 'Mixed-Use Design',
    subcategories: [
      'Residential Components',
      'Commercial Components',
      'Shared Amenities',
      'Public Spaces',
    ],
  },
  {
    value: 'landscape',
    label: 'Landscape Design',
    subcategories: [
      'Residential Landscaping',
      'Commercial Landscaping',
      'Urban Landscaping',
      'Environmental Spaces',
      'Specialized Areas',
    ],
  },
];

const UpdateProfile: React.FC = () => {
  const { formik, isAnyFieldEmpty, progress } = useUpdateProfile();

  const [profileImage, setProfileImage] = useState<string>(ProfileImage);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const navigate = useNavigate();

  return (
    <StyledContainer>
      <MainFlex>
        <Header>
          <StyledHeader>
            <Logo src={LogoDecor} alt="Decord-mistri Logo" />
            <Line />
            <HeaderTitle>Update Profile</HeaderTitle>
          </StyledHeader>
          <HeaderProfileIcon>
            <A>A</A>
          </HeaderProfileIcon>
        </Header>
        <ChildFlex>
          <FirstTitleSec>
            <TitleSec>
              <Title>Update your Account</Title>
              <Title2>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries
              </Title2>
            </TitleSec>
            <Box>
              <ProgressBar progress={progress} />
            </Box>
          </FirstTitleSec>
          <StyledForm onSubmit={formik.handleSubmit}>
            <GridContainer>
              <SetFormikError>
                <InputLabelItem>Business Name</InputLabelItem>
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
                    width: '100%',
                    borderRadius: '8px',
                    padding: '15px',
                  }}
                  placeholder="Enter your business name"
                />
                {formik.errors.businessName && formik.touched.businessName && (
                  <StyledTypography>
                    {formik.errors.businessName}
                  </StyledTypography>
                )}
              </SetFormikError>
              {/* Professional Category and Design Type Expertise Fields */}
              <SetFormikError>
                <SelectOption
                  name="professionalCategory"
                  label="Professional Category"
                  options={designOptions.map(({ value, label }) => ({
                    value,
                    label,
                  }))}
                  value={formik.values.professionalCategory}
                  onChange={(e) => {
                    formik.setFieldValue(
                      'professionalCategory',
                      e.target.value
                    );
                  }}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.professionalCategory &&
                    Boolean(formik.errors.professionalCategory)
                  }
                  defaultOption={'Select Category you are belong to'}
                  style={{
                    width: '100%',
                    padding: '15px',
                    borderRadius: '8px',
                  }}
                />
                {formik.errors.professionalCategory &&
                  formik.touched.professionalCategory && (
                    <StyledTypography>
                      {formik.errors.professionalCategory}
                    </StyledTypography>
                  )}
              </SetFormikError>
              <SetFormikError>
                <SelectOption
                  name="designTypeExpertise"
                  label="Design Type"
                  options={designOptions.map(({ value, label }) => ({
                    value,
                    label,
                  }))}
                  value={formik.values.designTypeExpertise}
                  onChange={(e) => {
                    formik.setFieldValue('designTypeExpertise', e.target.value);
                    formik.setFieldValue('subcategories', []);
                  }}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.designTypeExpertise &&
                    Boolean(formik.errors.designTypeExpertise)
                  }
                  defaultOption={'Select your expertise in design type'}
                  style={{
                    width: '100%',
                    padding: '15px',
                    borderRadius: '8px',
                  }}
                />
                {formik.errors.designTypeExpertise &&
                  formik.touched.designTypeExpertise && (
                    <StyledTypography>
                      {formik.errors.designTypeExpertise}
                    </StyledTypography>
                  )}
              </SetFormikError>

              <SetFormikError>
                <SelectOption
                  name="styleTypeExpertise"
                  label="Style Type"
                  options={designOptions.map(({ value, label }) => ({
                    value,
                    label,
                  }))}
                  value={formik.values.styleTypeExpertise}
                  onChange={(e) => {
                    formik.setFieldValue('styleTypeExpertise', e.target.value);
                    formik.setFieldValue('subcategories', []);
                  }}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.styleTypeExpertise &&
                    Boolean(formik.errors.styleTypeExpertise)
                  }
                  defaultOption={'Select Style type'}
                  style={{
                    width: '100%',
                    padding: '15px',
                    borderRadius: '8px',
                  }}
                />
                {formik.errors.styleTypeExpertise &&
                  formik.touched.styleTypeExpertise && (
                    <StyledTypography>
                      {formik.errors.styleTypeExpertise}
                    </StyledTypography>
                  )}
              </SetFormikError>

              <SetFormikError>
                <SelectOption
                  name="state"
                  label="State"
                  options={designOptions.map(({ value, label }) => ({
                    value,
                    label,
                  }))}
                  value={formik.values.state}
                  onChange={(e) => {
                    formik.setFieldValue('state', e.target.value);
                    formik.setFieldValue('subcategories', []);
                  }}
                  onBlur={formik.handleBlur}
                  error={formik.touched.state && Boolean(formik.errors.state)}
                  defaultOption={'Select State'}
                  style={{
                    width: '100%',
                    padding: '15px',
                    borderRadius: '8px',
                  }}
                />
                {formik.errors.state && formik.touched.state && (
                  <StyledTypography>{formik.errors.state}</StyledTypography>
                )}
              </SetFormikError>
              {/* City and Location Fields */}
              <SetFormikError>
                {/* <InputLabelItem>City Name</InputLabelItem> */}
                <SelectOption
                  name="city"
                  label="City / Location"
                  options={designOptions.map(({ value, label }) => ({
                    value,
                    label,
                  }))}
                  value={formik.values.city}
                  onChange={(e) => {
                    formik.setFieldValue('city', e.target.value);
                  }}
                  onBlur={formik.handleBlur}
                  error={formik.touched.city && Boolean(formik.errors.city)}
                  defaultOption={'Select City'}
                  style={{
                    width: '100%',
                    padding: '15px',
                    borderRadius: '8px',
                  }}
                />
                {formik.errors.city && formik.touched.city && (
                  <StyledTypography>{formik.errors.city}</StyledTypography>
                )}
              </SetFormikError>
              <SetFormikError>
                <InputLabelItem>Google Map link</InputLabelItem>
                <TextInput
                  name="location"
                  label="Location Name"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.location && Boolean(formik.errors.location)
                  }
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                    padding: '15px',
                  }}
                  placeholder="Share your google map location"
                />
                {formik.errors.location && formik.touched.location && (
                  <StyledTypography>{formik.errors.location}</StyledTypography>
                )}
              </SetFormikError>
              <ButtonContainer>
                <InputLabelItem>Upload photo / your firm logo</InputLabelItem>
                <MainUploadImage>
                  {/* Profile Image */}

                  <LabelProfile htmlFor="profile-upload">
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <ProfileUploadImg src={profileImage} alt="Profile" />
                      <InputLabelItem>
                        Upload formats JPG, PNG, BMP and GIF
                      </InputLabelItem>
                    </Box>
                    <InputImg
                      id="profile-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      aria-label="Upload Profile Picture"
                    />
                  </LabelProfile>
                </MainUploadImage>
                <ButtonSec>
                  <Button
                    title="Skip"
                    type="button"
                    color="primary"
                    variant="contained"
                    style={{
                      width: '100%',
                      fontFamily: fonts.primary,
                      borderRadius: '8px',
                      padding: '25px',
                      background: theme.palette.grey[300],
                      color: theme.palette.grey[700],
                      fontSize: theme.typography.caption.fontSize,
                      fontWeight: 'bold',
                    }}
                    buttonWarraparStyle={{
                      width: '50%',
                    }}
                    onClick={() => {
                      navigate('/dashboard');
                    }}
                  />

                  <Button
                    title="Continue"
                    type="submit"
                    color="primary"
                    variant="contained"
                    disabled={isAnyFieldEmpty || formik.isSubmitting}
                    style={{
                      backgroundColor: isAnyFieldEmpty
                        ? theme.palette.grey[500]
                        : DECOR_LOGO_COLOR,
                      cursor:
                        isAnyFieldEmpty || formik.isSubmitting
                          ? 'not-allowed'
                          : 'pointer',
                      width: '100%',

                      borderRadius: '8px',
                      padding: '25px',
                    }}
                    buttonWarraparStyle={{
                      width: '50%',
                    }}
                    onClick={() => {
                      navigate('/dashboard');
                    }}
                  />
                </ButtonSec>
              </ButtonContainer>
            </GridContainer>
          </StyledForm>
        </ChildFlex>
      </MainFlex>
    </StyledContainer>
  );
};

export default UpdateProfile;
