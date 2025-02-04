import { Typography, Box } from '@mui/material';
import usePropertyLocationDetails from './PropertyLocationDetails.hook';
import Button from '../../../../atoms/Button/Button';
import SelectOption from '../../../../atoms/Select/SelectOption';
import {
  ButtonSection,
  Container,
  GridContainer,
  // GridContainerChild,
  StyledTypography,
} from './PropertyLocationDetails.style';
import TextInput from '../../../../atoms/TextInput/TextInput';

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
  return (
    <Container>
      <Typography variant="h6">Property Location Details</Typography>
      <GridContainer>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <SelectOption
            name="country"
            label="Country"
            options={[
              { value: 'country1', label: 'Country 1' },
              { value: 'country2', label: 'Country 2' },
            ]}
            defaultOption={'Select Count'}
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ width: '100%', padding: '16px' }}
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
            options={[
              { value: 'state1', label: 'State 1' },
              { value: 'state2', label: 'State 2' },
            ]}
            defaultOption={'Select State'}
            value={formik.values.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.state && Boolean(formik.errors.state)}
            style={{ width: '100%', padding: '16px' }}
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
            style={{ width: '100%', padding: '16px' }}
          />
          {formik.errors.city && formik.touched.city && (
            <StyledTypography>{formik.errors.city}</StyledTypography>
          )}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <label>Zip Code</label>
          <TextInput
            name="zip"
            label="ZIP/Code"
            value={formik.values.zip}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.zip && Boolean(formik.errors.zip)}
            style={{
              width: '90%',
              borderRadius: '5px',
            }}
            placeholder="Enter Zip Code"
          />
          {formik.errors.zip && formik.touched.zip && (
            <StyledTypography>{formik.errors.zip}</StyledTypography>
          )}
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <label>Address 1</label>
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
              borderRadius: '5px',
            }}
            placeholder="Enter your address"
          />
          {formik.errors.addressLine1 && formik.touched.addressLine1 && (
            <StyledTypography>{formik.errors.addressLine1}</StyledTypography>
          )}
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <label>Address 2</label>
          <TextInput
            name="addressLine2"
            label="Address Line 2 (Optional)"
            value={formik.values.addressLine2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{
              width: '95%',
              borderRadius: '5px',
            }}
            placeholder="Enter your address"
          />
        </Box>
      </GridContainer>

      {/* <TextField
        label="Address Line 2 (Optional)"
        variant="outlined"
        fullWidth
        name="addressLine2"
        value={formik.values.addressLine2}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      /> */}

      <ButtonSection>
        <Button
          title="Previous"
          color="secondary"
          onClick={handlePrevious}
          variant="contained"
        />
        <Button
          title="Next"
          color="primary"
          variant="contained"
          disabled={!isFormValid()}
          onClick={() => formik.handleSubmit()}
        />
      </ButtonSection>
    </Container>
  );
};

export default PropertyLocationDetails;
