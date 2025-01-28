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
  // LabelProfile,
  Logo,
  GridContainer,
  InputLabelItem,
  // MainUploadImage,
  // ProfileUploadImg,
  // CameraBtn,
  // InputImg,
} from './UpdateProfile.style';

import TextInput from '../../atoms/TextInput/TextInput';

import Button from '../../atoms/Button/Button';
import LogoDecor from '../../assets/images/logo/Layer_x0020_1.svg';
import { useUpdateProfile } from './UpdateProfile.hook';
import { Box, Typography } from '@mui/material';
import SelectOption from '../../atoms/Select/SelectOption';

// import ProfileImage from '../../assets/images/updateProfile/man.svg';
// import uploadCamera from '../../assets/images/updateProfile/camera.svg';
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

  const navigate = useNavigate();

  return (
    <StyledContainer>
      <MainFlex>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #dfdfdf',
            padding: '20px',
          }}
        >
          <StyledHeader>
            <Logo src={LogoDecor} alt="Decord-mistri Logo" />
            <Box
              sx={{
                width: '1px',
                display: 'flex',
                flexDirection: 'row',
                background: '#a8a8a8',
                height: '30px',
              }}
            ></Box>
            <Typography sx={{ fontWeight: '600' }}>Update Profile</Typography>
          </StyledHeader>
          <Box
            sx={{
              height: '40px',
              width: '40px',
              background: '#e82295',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
            }}
          >
            <Typography variant="h6" sx={{ fontSize: '1.1rem' }}>
              A
            </Typography>
          </Box>
        </Box>
        <ChildFlex>
          <Box sx={{ marginBottom: '50px' }}>
            <Title>Update your Profile</Title>
            <Title2>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries
            </Title2>
          </Box>
          <StyledForm onSubmit={formik.handleSubmit}>
            {/* Name Field */}
            {/* <ParentInputBox> */}
            <GridContainer>
              {/* Business Name Field */}
              <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}
              >
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
                    width: '90%',
                    borderRadius: '8px',
                    padding: '15px',
                  }}
                  placeholder="Business Name"
                />
                {formik.errors.businessName && formik.touched.businessName && (
                  <StyledTypography>
                    {formik.errors.businessName}
                  </StyledTypography>
                )}
              </Box>
              {/* Professional Category and Design Type Expertise Fields */}
              <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}
              >
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
              </Box>
              <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}
              >
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
              </Box>

              {/* Style Type Expertise and State Fields */}
              <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}
              >
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
              </Box>

              <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}
              >
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
                  style={{
                    width: '100%',
                    padding: '15px',
                    borderRadius: '8px',
                  }}
                />
                {formik.errors.state && formik.touched.state && (
                  <StyledTypography>{formik.errors.state}</StyledTypography>
                )}
              </Box>
              {/* City and Location Fields */}
              <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}
              >
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
                  style={{
                    width: '100%',
                    padding: '15px',
                    borderRadius: '8px',
                  }}
                />
                {formik.errors.city && formik.touched.city && (
                  <StyledTypography>{formik.errors.city}</StyledTypography>
                )}
              </Box>
              <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}
              >
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
                    width: '90%',
                    borderRadius: '8px',
                    padding: '15px',
                  }}
                  placeholder="Location"
                />
                {formik.errors.location && formik.touched.location && (
                  <StyledTypography>{formik.errors.location}</StyledTypography>
                )}
              </Box>
              <Box></Box>
            </GridContainer>
            {/* Spacing before Buttons */}

            <Box sx={{ marginTop: '20px' }} />

            {/* Buttons */}

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

            <Button
              title="Update now"
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
                borderRadius: '5px',
                padding: '25px',
              }}
              onClick={() => {
                navigate('/dashboard');
              }}
            />
            {/* </ParentInputBox> */}
          </StyledForm>
        </ChildFlex>
      </MainFlex>
    </StyledContainer>
  );
};

export default UpdateProfile;
