import { Typography, Box } from '@mui/material';
import {
  ButtonSection,
  Container,
  CreateProjectHeader,
  GridContainer,
  // GridContainerChild,
  InputSection,
  StyledTypography,
} from './ProjectProviderInformation.style';
// import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Button from '../../../../atoms/Button/Button';
import SelectOption from '../../../../atoms/Select/SelectOption';
import { useProjectProviderForm } from './ProjectProviderInformation.hook';
import TextInput from '../../../../atoms/TextInput/TextInput';
import { DatePicker } from '../../../../atoms/DatePicker/DatePicker';
// import { FaCalendar, FaDatabase } from 'react-icons/fa';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useState } from 'react';
import complete from '../../../../assets/images/createProject/complete.svg';

interface ProjectProviderInformationProps {
  currentPageIndex: number;
  data: {
    projectNumber: string;
    dateOfIssue: Date | string | null;
    designerName: string;
    email: string;
    phoneNumber: string;
    website?: string;
    addressLine1: string;
    // addressLine2?: string;
    // zipCode: string;
    // city: string;
    // country: string;
    state: string;
  };
  updateData: (values: ProjectProviderInformationProps['data']) => void;
  handleNext: () => void;
  handlePrevious: () => void;
}

const ProjectProviderInformation: React.FC<ProjectProviderInformationProps> = ({
  data,
  updateData,
  currentPageIndex,
  handleNext,
  handlePrevious,
}) => {
  const { formik, isFormValid } = useProjectProviderForm({
    data,
    updateData,
    handleNext,
    handlePrevious,
  });

  const [open, setOpen] = useState(false);

  const handleDateChange = (date) => {
    formik.setFieldValue('dateOfIssue', date);
    setOpen(false); // Close DatePicker on selection
  };

  return (
    <Container>
      <CreateProjectHeader>
        <Box>
          <Typography variant="h6">ProjectProviderInformation</Typography>
        </Box>
        <Box>
          <img src={complete} alt="" />
        </Box>
      </CreateProjectHeader>
      <GridContainer>
        <InputSection>
          <label>Project ID</label>
          <TextInput
            name="projectNumber"
            label="Project Number/ID"
            type="number"
            value={formik.values.projectNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.projectNumber &&
              Boolean(formik.errors.projectNumber)
            }
            style={{
              width: '100%',
              borderRadius: '5px',
            }}
            placeholder="Project Number/ID"
          />
          {formik.errors.projectNumber && formik.touched.projectNumber && (
            <StyledTypography>{formik.errors.projectNumber}</StyledTypography>
          )}
        </InputSection>

        {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            name="dateOfIssue"
            label="Date of Issue"
            value={formik.values.dateOfIssue}
            onChange={(value: Date | null) =>
              formik.setFieldValue('dateOfIssue', value)
            }
            slotProps={{
              textField: {
                error:
                  formik.touched.dateOfIssue &&
                  Boolean(formik.errors.dateOfIssue),
                helperText:
                  formik.touched.dateOfIssue && formik.errors.dateOfIssue,
              },
            }}
          />
        </LocalizationProvider> */}

        <InputSection>
          <label>Date of Issue</label>
          <Box sx={{ position: 'relative' }}>
            <TextInput
              name="dateOfIssue"
              label="Date of Issue"
              type="text"
              value={
                formik.values.dateOfIssue
                  ? new Date(formik.values.dateOfIssue).toLocaleDateString()
                  : ''
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.dateOfIssue && Boolean(formik.errors.dateOfIssue)
              }
              style={{ width: '100%', borderRadius: '5px' }}
              placeholder="Select date"
              // readOnly
            />
            <CalendarMonthIcon
              style={{
                position: 'absolute',
                right: 10,
                top: 15,
                cursor: 'pointer',
              }}
              onClick={() => setOpen(!open)}
            />
          </Box>
          {open && (
            <Box
              sx={{
                position: 'absolute',
                zIndex: 50,
                top: '210px',
                right: '250px',

                background: '#ffe9f8',
              }}
            >
              <DatePicker
                initialDate={formik.values.dateOfIssue}
                onDateChange={handleDateChange}
              />
            </Box>
          )}
          {formik.errors.dateOfIssue && formik.touched.dateOfIssue && (
            <Typography color="error">{formik.errors.dateOfIssue}</Typography>
          )}
        </InputSection>

        <InputSection>
          <label>Interior Designer Name</label>
          <TextInput
            name="designerName"
            label="Name"
            value={formik.values.designerName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.designerName && Boolean(formik.errors.designerName)
            }
            style={{
              width: '100%',
              borderRadius: '5px',
            }}
            placeholder="Name"
          />
          {formik.errors.designerName && formik.touched.designerName && (
            <StyledTypography>{formik.errors.designerName}</StyledTypography>
          )}
        </InputSection>

        <InputSection>
          <label>Email</label>
          <TextInput
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            style={{
              width: '100%',
              borderRadius: '5px',
            }}
            placeholder="Email address"
          />
          {formik.errors.email && formik.touched.email && (
            <StyledTypography>{formik.errors.email}</StyledTypography>
          )}
        </InputSection>

        <InputSection>
          <label>Phone Number</label>
          <Box
            sx={{
              display: 'flex',
              // alignItems: 'center',
            }}
          >
            <SelectOption
              name=""
              label=""
              options={[
                { value: 'state1', label: 'State 1' },
                { value: 'state2', label: 'State 2' },
              ]}
              defaultOption={'+91'}
              value=""
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{
                width: '100%',
                padding: '19px',
                borderRight: 'none',
                borderTopLeftRadius: '6px',
                borderBottomLeftRadius: '6px',
              }}
              containerMainStyle={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            />

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
                borderTopRightRadius: '6px',
                borderBottomRightRadius: '6px',
              }}
              placeholder="Phone Number"
            />
          </Box>
          {formik.errors.phoneNumber && formik.touched.phoneNumber && (
            <StyledTypography>{formik.errors.phoneNumber}</StyledTypography>
          )}
        </InputSection>
        <InputSection>
          <label>Website</label>
          <TextInput
            name="website"
            label="Website"
            value={formik.values.website}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{
              width: '100%',
              borderRadius: '5px',
            }}
            placeholder="Input here website name"
          />
        </InputSection>
      </GridContainer>
      <GridContainer>
        {/* <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
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
            style={{ width: '100%', padding: '16px' }}
            error={formik.touched.country && Boolean(formik.errors.country)}
          />
          {formik.errors.country && formik.touched.country && (
            <StyledTypography>{formik.errors.country}</StyledTypography>
          )}
        </Box> */}

        <InputSection>
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
            style={{ width: '100%', padding: '16px' }}
            error={formik.touched.state && Boolean(formik.errors.state)}
          />
          {formik.errors.state && formik.touched.state && (
            <StyledTypography>{formik.errors.state}</StyledTypography>
          )}
        </InputSection>

        {/* <InputSection>
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
            style={{ width: '100%', padding: '16px' }}
            error={formik.touched.city && Boolean(formik.errors.city)}
          />
          {formik.errors.city && formik.touched.city && (
            <StyledTypography>{formik.errors.city}</StyledTypography>
          )}
        </InputSection> */}

        {/* <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
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
        </Box> */}

        <InputSection>
          <label>Office Address</label>
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
              width: '100%',
              borderRadius: '5px',
            }}
            placeholder="Enter location or Google Map link
"
          />
          {formik.errors.addressLine1 && formik.touched.addressLine1 && (
            <StyledTypography>{formik.errors.addressLine1}</StyledTypography>
          )}
        </InputSection>
      </GridContainer>

      {/* <InputSection>
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
              width: '100%',
              borderRadius: '5px',
            }}
            placeholder="Address Line 1"
          />
          {formik.errors.addressLine1 && formik.touched.addressLine1 && (
            <StyledTypography>{formik.errors.addressLine1}</StyledTypography>
          )}
        </InputSection> */}
      {/* <GridContainerChild>
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
              width: '95.5%',
              borderRadius: '5px',
            }}
            placeholder="Address Line 2 (Optional)"
          />
          {formik.errors.addressLine2 && formik.touched.addressLine2 && (
            <StyledTypography>{formik.errors.addressLine2}</StyledTypography>
          )}
        </Box>
      </GridContainerChild> */}

      <ButtonSection>
        <Button
          title="Previous"
          color="secondary"
          onClick={handlePrevious}
          variant="contained"
          disabled={currentPageIndex === 0}
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

export default ProjectProviderInformation;
