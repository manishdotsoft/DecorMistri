import React, { useState } from 'react';

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
  SignUpImageBox,
  ParentInputBox,
  LabelProfile,
  Logo,
  MainUploadImage,
  ProfileUploadImg,
  CameraBtn,
  InputImg,
} from './UpdateProfile.style';

import TextInput from '../../atoms/TextInput/TextInput';

import SignUpImage from '../../assets/images/signUpLogImage/SignUpLog.png';
import Button from '../../atoms/Button/Button';
import LogoDecor from '../../assets/images/logo/Layer_x0020_1.svg';
import { useUpdateProfile } from './UpdateProfile.hook';
import { Box, Grid } from '@mui/material';
import SelectOption from '../../atoms/Select/SelectOption';

import ProfileImage from '../../assets/images/updateProfile/man.svg';
import uploadCamera from '../../assets/images/updateProfile/camera.svg';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../thems/primitives/theme';
import { DECOR_LOGO_COLOR } from '../../thems/primitives/colors';

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
  const { formik, isAnyFieldEmpty } = useUpdateProfile();

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
        <ChildFlex>
          <StyledForm onSubmit={formik.handleSubmit}>
            <StyledHeader>
              <Logo src={LogoDecor} alt="Decord-mistri Logo" />
              <Title>Update your Profile</Title>
              <Title2>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries
              </Title2>
            </StyledHeader>

            <MainUploadImage>
              {/* Profile Image */}
              <ProfileUploadImg src={profileImage} alt="Profile" />

              {/* Camera Button */}
              <LabelProfile htmlFor="profile-upload">
                <CameraBtn src={uploadCamera} alt="Upload" />
              </LabelProfile>

              {/* Hidden Input for File Upload */}
              <InputImg
                id="profile-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                aria-label="Upload Profile Picture"
              />
            </MainUploadImage>

            {/* Upload Profile Picture/Logo */}

            {/* Name Field */}
            <ParentInputBox>
              <Grid container spacing={0.8}>
                {/* Business Name Field */}
                <Grid item xs={12}>
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
                      width: '91.5%',
                      borderRadius: '5px',
                      marginTop: '10px',
                      padding: '15px',
                    }}
                    placeholder="Business Name"
                  />
                  {formik.errors.businessName &&
                    formik.touched.businessName && (
                      <StyledTypography>
                        {formik.errors.businessName}
                      </StyledTypography>
                    )}
                </Grid>

                {/* Professional Category and Design Type Expertise Fields */}
                <Grid item xs={12} sm={6}>
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
                      formik.setFieldValue('subcategories', []);
                    }}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.professionalCategory &&
                      Boolean(formik.errors.professionalCategory)
                    }
                    helperText={
                      formik.touched.professionalCategory &&
                      formik.errors.professionalCategory
                    }
                    style={{ width: '100%', padding: '15px' }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <SelectOption
                    name="designTypeExpertise"
                    label="Design Type Expertise"
                    options={designOptions.map(({ value, label }) => ({
                      value,
                      label,
                    }))}
                    value={formik.values.designTypeExpertise}
                    onChange={(e) => {
                      formik.setFieldValue(
                        'designTypeExpertise',
                        e.target.value
                      );
                      formik.setFieldValue('subcategories', []);
                    }}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.designTypeExpertise &&
                      Boolean(formik.errors.designTypeExpertise)
                    }
                    helperText={
                      formik.touched.designTypeExpertise &&
                      formik.errors.designTypeExpertise
                    }
                    style={{ width: '100%', padding: '15px' }}
                  />
                </Grid>

                {/* Style Type Expertise and State Fields */}
                <Grid item xs={12} sm={6}>
                  <SelectOption
                    name="styleTypeExpertise"
                    label="Style Type Expertise"
                    options={designOptions.map(({ value, label }) => ({
                      value,
                      label,
                    }))}
                    value={formik.values.styleTypeExpertise}
                    onChange={(e) => {
                      formik.setFieldValue(
                        'styleTypeExpertise',
                        e.target.value
                      );
                      formik.setFieldValue('subcategories', []);
                    }}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.styleTypeExpertise &&
                      Boolean(formik.errors.styleTypeExpertise)
                    }
                    helperText={
                      formik.touched.styleTypeExpertise &&
                      formik.errors.styleTypeExpertise
                    }
                    style={{ width: '100%', padding: '15px' }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
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
                    helperText={formik.touched.state && formik.errors.state}
                    style={{ width: '100%', padding: '15px' }}
                  />
                </Grid>

                {/* City and Location Fields */}
                <Grid item xs={12} sm={6}>
                  <TextInput
                    name="city"
                    label="City Name"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    style={{
                      width: '83%',
                      borderRadius: '5px',
                      marginBottom: '6px',
                      padding: '15px',
                    }}
                    placeholder="City Name"
                  />
                  {formik.errors.city && formik.touched.city && (
                    <StyledTypography>{formik.errors.city}</StyledTypography>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
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
                      width: '83%',
                      borderRadius: '5px',
                      marginBottom: '6px',
                      padding: '15px',
                    }}
                    placeholder="Location"
                  />
                  {formik.errors.location && formik.touched.location && (
                    <StyledTypography>
                      {formik.errors.location}
                    </StyledTypography>
                  )}
                </Grid>
                {/* Spacing before Buttons */}
                <Grid item xs={12}>
                  <Box sx={{ marginTop: '20px' }} />
                </Grid>
                {/* Buttons */}
                <Grid item xs={12} sm={6}>
                  <Button
                    title="Skip for Later"
                    type="button"
                    color="primary"
                    variant="contained"
                    style={{
                      width: '100%',
                      borderRadius: theme.shape?.borderRadius || '5px',
                      padding: '25px',
                      border: `1.8px solid ${DECOR_LOGO_COLOR}`,
                      background: theme.palette.common.white,
                      color: theme.palette.text.primary,
                      fontSize: theme.typography.caption.fontSize,
                    }}
                    onClick={() => {
                      navigate('/dashboard');
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    title="Update now"
                    type="submit"
                    color="primary"
                    variant="contained"
                    disabled={isAnyFieldEmpty || formik.isSubmitting}
                    style={{
                      backgroundColor: isAnyFieldEmpty ? '#5c5c5c' : '#C7148A',
                      cursor:
                        isAnyFieldEmpty || formik.isSubmitting
                          ? 'not-allowed'
                          : 'pointer',
                      width: '100%',
                      borderRadius: '5px',
                      padding: '25px',
                    }}
                    onClick={() => {
                      navigate('/dashboard');
                    }}
                  />
                </Grid>
              </Grid>
            </ParentInputBox>
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
