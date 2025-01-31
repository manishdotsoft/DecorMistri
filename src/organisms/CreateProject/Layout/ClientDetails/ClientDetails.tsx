import { Typography, Box } from '@mui/material';
import {
  ButtonSection,
  Container,
  GridContainer,
  GridContainerChild,
  StyledTypography,
} from './ClientDetails.style';
import Button from '../../../../atoms/Button/Button';
import SelectOption from '../../../../atoms/Select/SelectOption';
import useClientDetailsForm from './ClientDetails.hook';
import TextInput from '../../../../atoms/TextInput/TextInput';

const ClientDetails = ({
  data,
  updateData,
  handleNext,
  handlePrevious,
}: {
  currentPageIndex: number;
  data: {
    clientName: string;
    clientEmail: string;
    phoneNumber: string;
    city: string;
    country: string;
    state: string;
    zipCode: string;
    addressLine1: string;
    addressLine2?: string;
  };
  updateData: (data: {
    clientName: string;
    clientEmail: string;
    phoneNumber: string;
    city: string;
    country: string;
    state: string;
    zipCode: string;
    addressLine1: string;
    addressLine2?: string;
  }) => void;
  handleNext: () => void;
  handlePrevious: () => void;
}) => {
  const { formik, isFormValid } = useClientDetailsForm({
    data,
    updateData,
    handleNext,
    handlePrevious,
  });

  return (
    <Container>
      <Typography variant="h6">Basic Information</Typography>
      <GridContainerChild>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <TextInput
            name="clientName"
            label="Client Name"
            value={formik.values.clientName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.clientName && Boolean(formik.errors.clientName)
            }
            style={{
              width: '95%',
              borderRadius: '5px',
            }}
            placeholder="Clint Name"
          />
          {formik.errors.clientName && formik.touched.clientName && (
            <StyledTypography>{formik.errors.clientName}</StyledTypography>
          )}
        </Box>
      </GridContainerChild>

      <GridContainer>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <TextInput
            name="clientEmail"
            label="Client Email ID"
            value={formik.values.clientEmail}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.clientEmail && Boolean(formik.errors.clientEmail)
            }
            style={{
              width: '90%',
              borderRadius: '5px',
            }}
            placeholder="Client Email ID"
          />
          {formik.errors.clientEmail && formik.touched.clientEmail && (
            <StyledTypography>{formik.errors.clientEmail}</StyledTypography>
          )}
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <TextInput
            name="phoneNumber"
            label="Phone Number"
            type="number"
            value={formik.values.phoneNumber}
            onChange={(e) => {
              if (e.target.value.length <= 10) {
                formik.handleChange(e);
              }
            }}
            onBlur={formik.handleBlur}
            error={
              formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
            }
            style={{
              width: '90%',
              borderRadius: '5px',
            }}
            placeholder="Phone Number"
          />
          {formik.errors.phoneNumber && formik.touched.phoneNumber && (
            <StyledTypography>{formik.errors.phoneNumber}</StyledTypography>
          )}
        </Box>
      </GridContainer>

      <Typography variant="subtitle1">Address</Typography>

      <GridContainer>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <SelectOption
            name="country"
            label="Country"
            options={[
              { value: 'country1', label: 'Country 1' },
              { value: 'country2', label: 'Country 2' },
            ]}
            defaultOption={'Select Country'}
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.country && Boolean(formik.errors.country)}
            style={{ width: '100%', padding: '16px' }}
          />
          {formik.errors.country && formik.touched.country && (
            <StyledTypography>{formik.errors.country}</StyledTypography>
          )}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <SelectOption
            name="state"
            label="Province/State"
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
          <TextInput
            name="zipCode"
            label="Zip/Postal Code"
            type="number"
            value={formik.values.zipCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.zipCode && Boolean(formik.errors.zipCode)}
            style={{
              width: '90%',
              borderRadius: '5px',
              marginTop: '18px',
            }}
            placeholder="Zip/Postal Code"
          />
          {formik.errors.zipCode && formik.touched.zipCode && (
            <StyledTypography>{formik.errors.zipCode}</StyledTypography>
          )}
        </Box>
      </GridContainer>

      <GridContainerChild>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
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
              width: '95.3%',
              borderRadius: '5px',
            }}
            placeholder="Address Line 1"
          />
          {formik.errors.addressLine1 && formik.touched.addressLine1 && (
            <StyledTypography>{formik.errors.addressLine1}</StyledTypography>
          )}
        </Box>
      </GridContainerChild>
      <GridContainerChild>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <TextInput
            name="addressLine2"
            label="Address Line 2 (Optional)"
            value={formik.values.addressLine2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.addressLine2 && Boolean(formik.errors.addressLine2)
            }
            style={{
              width: '95.3%',
              borderRadius: '5px',
            }}
            placeholder="Address Line 2 (Optional)"
          />
          {formik.errors.addressLine2 && formik.touched.addressLine2 && (
            <StyledTypography>{formik.errors.addressLine2}</StyledTypography>
          )}
        </Box>
      </GridContainerChild>

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

export default ClientDetails;
