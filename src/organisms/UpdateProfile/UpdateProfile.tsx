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
  HeaderProfileIcon,
  FirstTitleSec,
  TitleSec,
  SetFormikError,
  ButtonSec,
  ButtonContainer,
  InputIconFor,
  LocationIconSec,
  InputLabelItem2,
  ProfileIcon,
  UploadImage,
} from './UpdateProfile.style';

import TextInput from '../../atoms/TextInput/TextInput';

import Button from '../../atoms/Button/Button';
import LogoDecor from '../../assets/images/logo/Layer_x0020_1.svg';
import { useUpdateProfile } from './UpdateProfile.hook';
import { Box, useTheme } from '@mui/material';
import SelectOption from '../../atoms/Select/SelectOption';
import ProfileImage from '../../assets/images/updateProfile/man.svg';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import LocationIcon from '../../assets/images/createProject/Location.svg';
import { FaStarOfLife } from 'react-icons/fa';
import ArrowRight from '../../assets/images/logo/ArrowRight.svg';
import { DesignOptionData } from '../../Data/PropertyDetailsData/DesignOptionData';

const UpdateProfile: React.FC = () => {
  const theme = useTheme();
  const { formik, isAnyFieldEmpty, progress } = useUpdateProfile();

  const [profileImage, setProfileImage] = useState<string>(ProfileImage);
  const [imageSelected, setImageSelected] = useState<boolean>(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      setImageSelected(true);
    }
  };

  const designOptions = DesignOptionData;
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
            <ProfileIcon>A</ProfileIcon>
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
                <InputLabelItem>
                  <FaStarOfLife
                    style={{
                      color: theme.palette.decor.main,
                      fontSize: '5px',
                      marginBottom: '6.5px',
                      marginRight: '1px',
                    }}
                  />
                  <span>Business Name</span>
                </InputLabelItem>

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
                    padding: '14px',
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
                  starIcon={
                    <FaStarOfLife
                      style={{
                        color: theme.palette.decor.main,
                        fontSize: '5px',
                        marginBottom: '6.5px',
                        marginRight: '1px',
                      }}
                    />
                  }
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
                  labelFontSize="0.9rem"
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                  }}
                  labelStyle={{ fontWeight: '500' }}
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
                  starIcon={
                    <FaStarOfLife
                      style={{
                        color: theme.palette.decor.main,
                        fontSize: '5px',
                        marginBottom: '6.5px',
                        marginRight: '1px',
                      }}
                    />
                  }
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
                  labelFontSize="0.9rem"
                  labelStyle={{ fontWeight: '500' }}
                  style={{
                    width: '100%',
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
                  starIcon={
                    <FaStarOfLife
                      style={{
                        color: theme.palette.decor.main,
                        fontSize: '5px',
                        marginBottom: '6.5px',
                        marginRight: '1px',
                      }}
                    />
                  }
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
                  labelFontSize="0.9rem"
                  labelStyle={{ fontWeight: '500' }}
                  style={{
                    width: '100%',
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
                  starIcon={
                    <FaStarOfLife
                      style={{
                        color: theme.palette.decor.main,
                        fontSize: '5px',
                        marginBottom: '6.5px',
                        marginRight: '1px',
                      }}
                    />
                  }
                  value={formik.values.state}
                  onChange={(e) => {
                    formik.setFieldValue('state', e.target.value);
                    formik.setFieldValue('subcategories', []);
                  }}
                  onBlur={formik.handleBlur}
                  error={formik.touched.state && Boolean(formik.errors.state)}
                  defaultOption={'Select State'}
                  labelFontSize="0.9rem"
                  labelStyle={{ fontWeight: '500' }}
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                    padding: '15px',
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
                  starIcon={
                    <FaStarOfLife
                      style={{
                        color: theme.palette.decor.main,
                        fontSize: '5px',
                        marginBottom: '6.5px',
                        marginRight: '1px',
                      }}
                    />
                  }
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
                  labelFontSize="0.9rem"
                  labelStyle={{ fontWeight: '500' }}
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
                <InputLabelItem>
                  <FaStarOfLife
                    style={{
                      color: theme.palette.decor.main,
                      fontSize: '5px',
                      marginBottom: '6.5px',
                      marginRight: '1px',
                    }}
                  />
                  Google Map link
                </InputLabelItem>
                <InputIconFor>
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
                  <LocationIconSec
                    src={LocationIcon}
                    alt=""
                    style={{
                      position: 'absolute',
                      right: 12,
                      top: 12,
                      height: '24px',
                    }}
                  />
                </InputIconFor>
                {formik.errors.location && formik.touched.location && (
                  <StyledTypography>{formik.errors.location}</StyledTypography>
                )}
              </SetFormikError>
              <ButtonContainer>
                <InputLabelItem>
                  <FaStarOfLife
                    style={{
                      color: theme.palette.decor.main,
                      fontSize: '5px',
                      marginBottom: '6.5px',
                      marginRight: '1px',
                    }}
                  />
                  Upload photo / your firm logo
                </InputLabelItem>
                <MainUploadImage>
                  {/* Profile Image */}

                  <LabelProfile htmlFor="profile-upload">
                    <UploadImage>
                      <ProfileUploadImg
                        src={profileImage}
                        alt="Profile"
                        imageSelected={imageSelected}
                      />
                      {!imageSelected ? (
                        <InputLabelItem2>
                          Upload formats JPG, PNG, BMP and GIF
                        </InputLabelItem2>
                      ) : (
                        ''
                      )}
                    </UploadImage>
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
                      borderRadius: '8px',
                      padding: '22px',
                      background: theme.palette.grey[300],
                      color: theme.palette.black[200],
                    }}
                    buttonFontSize={theme.typography.button.fontSize}
                    fontWeight={'900'}
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
                        : theme.palette.decor.main,
                      cursor:
                        isAnyFieldEmpty || formik.isSubmitting
                          ? 'not-allowed'
                          : 'pointer',
                      width: '100%',
                      borderRadius: '8px',
                      padding: '21px',
                    }}
                    buttonFontSize={theme.typography.button.fontSize}
                    buttonWarraparStyle={{
                      width: '50%',
                    }}
                    onClick={() => {
                      navigate('/dashboard');
                    }}
                    logo={ArrowRight}
                    iconAndTitleSection={{ position: 'relative' }}
                    svgIcon={{
                      position: 'absolute',
                      left: '70px',
                      top: '5px',
                      height: '13px',
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
