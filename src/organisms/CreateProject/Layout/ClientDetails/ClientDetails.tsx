import {
  ButtonSection,
  Container,
  EmailIconSec,
  GridContainer,
  InputIconFor,
  InputLabelItem,
  InputSection,
  LocationIconSec,
  StyledTypography,
} from './ClientDetails.style';
import Button from '../../../../atoms/Button/Button';
import SelectOption from '../../../../atoms/Select/SelectOption';
import useClientDetailsForm from './ClientDetails.hook';
import TextInput from '../../../../atoms/TextInput/TextInput';
import EmailIcon from '../../../../assets/images/createProject/Email.svg';
import LocationIcon from '../../../../assets/images/createProject/Location.svg';
import { useState } from 'react';

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

    state: string;
    zipCode: string;
    addressLine1: string;
  };
  updateData: (data: {
    clientName: string;
    clientEmail: string;
    phoneNumber: string;
    city: string;

    state: string;
    zipCode: string;
    addressLine1: string;
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
  const [isPageVisible, setIsPageVisible] = useState(true);
  const handleNextClick = () => {
    setIsPageVisible(false);
    formik.handleSubmit();
  };

  return (
    isPageVisible && (
      <Container>
        <GridContainer>
          <InputSection>
            <InputLabelItem>Client Name</InputLabelItem>
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
                width: '100%',
                borderRadius: '8px',
              }}
              placeholder="Name"
            />
            {formik.errors.clientName && formik.touched.clientName && (
              <StyledTypography>{formik.errors.clientName}</StyledTypography>
            )}
          </InputSection>

          <InputSection>
            <InputLabelItem>Client Email</InputLabelItem>
            <InputIconFor>
              <TextInput
                name="clientEmail"
                label="Client Email ID"
                value={formik.values.clientEmail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.clientEmail &&
                  Boolean(formik.errors.clientEmail)
                }
                style={{
                  width: '100%',
                  borderRadius: '8px',
                }}
                placeholder="Email address"
              />
              <EmailIconSec src={EmailIcon} alt="" />
            </InputIconFor>
            {formik.errors.clientEmail && formik.touched.clientEmail && (
              <StyledTypography>{formik.errors.clientEmail}</StyledTypography>
            )}
          </InputSection>

          <InputSection>
            <InputLabelItem>Phone Number</InputLabelItem>

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
                width: '100%',
                borderRadius: '8px',
              }}
              placeholder="Phone Number"
            />
            {/* </Box> */}
            {formik.errors.phoneNumber && formik.touched.phoneNumber && (
              <StyledTypography>{formik.errors.phoneNumber}</StyledTypography>
            )}
          </InputSection>

          <InputSection>
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
              style={{
                width: '100%',
                padding: '18px',
                borderRadius: '8px',
                marginTop: '2px',
              }}
            />
            {formik.errors.state && formik.touched.state && (
              <StyledTypography>{formik.errors.state}</StyledTypography>
            )}
          </InputSection>
          <InputSection>
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
                borderRadius: '8px',
                marginTop: '2px',
              }}
            />
            {formik.errors.city && formik.touched.city && (
              <StyledTypography>{formik.errors.city}</StyledTypography>
            )}
          </InputSection>

          <InputSection>
            <InputLabelItem>Zip Code</InputLabelItem>
            <TextInput
              name="zipCode"
              label="Zip/Postal Code"
              type="number"
              value={formik.values.zipCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.zipCode && Boolean(formik.errors.zipCode)}
              style={{
                width: '100%',
                borderRadius: '8px',
              }}
              placeholder="Zip/Postal Code"
            />
            {formik.errors.zipCode && formik.touched.zipCode && (
              <StyledTypography>{formik.errors.zipCode}</StyledTypography>
            )}
          </InputSection>
          <InputSection>
            <InputLabelItem>Address</InputLabelItem>
            <InputIconFor sx={{ position: 'relative' }}>
              <TextInput
                name="addressLine1"
                label="Address Line 1"
                value={formik.values.addressLine1}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.addressLine1 &&
                  Boolean(formik.errors.addressLine1)
                }
                style={{
                  width: '100%',
                  borderRadius: '8px',
                }}
                placeholder="Enter location or Google Map link"
              />
              <LocationIconSec src={LocationIcon} alt="" />
            </InputIconFor>
            {formik.errors.addressLine1 && formik.touched.addressLine1 && (
              <StyledTypography>{formik.errors.addressLine1}</StyledTypography>
            )}
          </InputSection>
        </GridContainer>

        <ButtonSection>
          <Button
            title="Previous"
            color="primary"
            variant="contained"
            onClick={handlePrevious}
            style={{ borderRadius: '8px', width: '150px' }}
          />
          <Button
            title="Save"
            color="primary"
            variant="contained"
            disabled={!isFormValid()}
            onClick={handleNextClick}
            style={{ borderRadius: '8px', width: '150px' }}
          />
        </ButtonSection>
      </Container>
    )
  );
};

export default ClientDetails;
