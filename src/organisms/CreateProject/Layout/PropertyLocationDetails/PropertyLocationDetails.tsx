import { Box, useTheme } from '@mui/material';
import usePropertyLocationDetails from './PropertyLocationDetails.hook';
import Button from '../../../../atoms/Button/Button';
import SelectOption from '../../../../atoms/Select/SelectOption';
// import complete from '../../../../assets/images/createProject/complete.svg';

import {
  ButtonSection,
  Container,
  // CreateProjectHeader,
  GridContainer,
  InputLabelItem,
  // GridContainerChild,
  StyledTypography,
} from './PropertyLocationDetails.style';
import TextInput from '../../../../atoms/TextInput/TextInput';
// import { useState } from 'react';
import { stateOptions } from '../../CreateProjectData/StateData';

const PropertyLocationDetails = ({
  data,
  updateData,
  handleNext,
  handlePrevious,
}: {
  currentPageIndex: number;
  data: {
    country?: string;
    state?: string;
    city?: string;
    zip?: string;
    addressLine1?: string;
    addressLine2?: string;
  };
  updateData: (data: {
    country?: string;
    state?: string;
    city?: string;
    zip?: string;
    addressLine1?: string;
    addressLine2?: string;
  }) => void;
  handleNext: () => void;
  handlePrevious: () => void;
}) => {
  const { formik, isFormValid } = usePropertyLocationDetails({
    data,
    updateData,
    handleNext,
  });

  const handleNextClick = () => {
    formik.handleSubmit();
  };
  const theme = useTheme();

  return (
    <Container>
      <GridContainer>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <SelectOption
            name="country"
            label="Country"
            options={[{ value: 'India', label: 'India' }]}
            defaultOption={'Select Country'}
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ width: '100%', padding: '18px', borderRadius: '6px' }}
            error={formik.touched.country && Boolean(formik.errors.country)}
          />
          {formik.errors.country && formik.touched.country && (
            <StyledTypography>{formik.errors.country}</StyledTypography>
          )}
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <SelectOption
            name="state"
            label="State"
            options={stateOptions}
            defaultOption={'Select State'}
            value={formik.values.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.state && Boolean(formik.errors.state)}
            style={{ width: '100%', padding: '18px', borderRadius: '6px' }}
          />
          {formik.errors.state && formik.touched.state && (
            <StyledTypography>{formik.errors.state}</StyledTypography>
          )}
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <SelectOption
            name="city"
            label="City"
            options={[
              { value: 'city1', label: 'City 1' },
              { value: 'city2', label: 'City 2' },
            ]}
            defaultOption={'Select City'}
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.city && Boolean(formik.errors.city)}
            style={{
              width: '100%',
              padding: '18px',
              borderRadius: '6px',
              marginTop: '3px',
            }}
          />
          {formik.errors.city && formik.touched.city && (
            <StyledTypography>{formik.errors.city}</StyledTypography>
          )}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <InputLabelItem>Zip Code</InputLabelItem>
          <TextInput
            name="zip"
            label="ZIP/Code"
            value={formik.values.zip}
            onChange={formik.handleChange}
            type="number"
            onBlur={formik.handleBlur}
            error={formik.touched.zip && Boolean(formik.errors.zip)}
            style={{
              width: '100%',
              borderRadius: '6px',
            }}
            placeholder="Enter Zip Code"
          />
          {formik.errors.zip && formik.touched.zip && (
            <StyledTypography>{formik.errors.zip}</StyledTypography>
          )}
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <InputLabelItem>Address 1</InputLabelItem>
          <TextInput
            name="addressLine1"
            label="Address Line 1"
            value={formik.values.addressLine1}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.addressLine1 && Boolean(formik.errors.addressLine1)
            }
            style={{
              width: '95%',
              borderRadius: '6px',
            }}
            placeholder="Enter your address"
          />
          {formik.errors.addressLine1 && formik.touched.addressLine1 && (
            <StyledTypography>{formik.errors.addressLine1}</StyledTypography>
          )}
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <InputLabelItem>Address 2</InputLabelItem>
          <TextInput
            name="addressLine2"
            label="Address Line 2 (Optional)"
            value={formik.values.addressLine2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{
              width: '95%',
              borderRadius: '6px',
            }}
            placeholder="Enter your address"
          />
        </Box>
      </GridContainer>

      <ButtonSection>
        <Button
          title="Previous"
          color="primary"
          variant="contained"
          onClick={handlePrevious}
          style={{
            borderRadius: '8px',
            width: '150px',
            color: theme.palette.decor.main,
            border: `2px solid ${theme.palette.decor.main}`,
          }}
          backgroundColor={theme.palette.white.main}
          hoverBackgroundColor={theme.palette.decor.hover}
        />
        <Button
          title="Save"
          variant="contained"
          disabled={!isFormValid()}
          onClick={handleNextClick}
          style={{
            borderRadius: '8px',
            width: '150px',
            background: !isFormValid() ? '' : theme.palette.decor.main,
          }}
        />
      </ButtonSection>
    </Container>
  );
};

export default PropertyLocationDetails;
