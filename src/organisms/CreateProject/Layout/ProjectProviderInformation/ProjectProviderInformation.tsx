import {
  ButtonSection,
  Container,
  EmailIconSec,
  GridContainer,
  GridContainer2,
  InputIconFor,
  InputLabelItem,
  InputSection,
  LocationIconSec,
  StyledTypography,
  WebsiteIconSec,
} from './ProjectProviderInformation.style';

import { useState } from 'react';
import Button from '../../../../atoms/Button/Button';
import SelectOption from '../../../../atoms/Select/SelectOption';
import { useProjectProviderForm } from './ProjectProviderInformation.hook';
import TextInput from '../../../../atoms/TextInput/TextInput';
import { DatePicker } from '../../../../atoms/DatePicker/DatePicker';

import EmailIcon from '../../../../assets/images/createProject/Email.svg';
import LocationIcon from '../../../../assets/images/createProject/Location.svg';
import WebsiteIcon from '../../../../assets/images/createProject/WebsiteIcon.svg';
// import Toaster from '../../../../atoms/Toaster/Toaster';

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
    state: string;
  };
  updateData: (values: ProjectProviderInformationProps['data']) => void;
  handleNext: () => void;
  handlePrevious: () => void;
  // showToast: boolean;
  // handleToasterClose: () => void;
  // setShowToast: (value: boolean) => void;
}

const ProjectProviderInformation: React.FC<ProjectProviderInformationProps> = ({
  data,
  updateData,
  handleNext,
  handlePrevious,
  // showToast,
  // handleToasterClose,
  // setShowToast,
}) => {
  const { formik, isFormValid } = useProjectProviderForm({
    data,
    updateData,
    handleNext,
    handlePrevious,
    // showToast,
    // handleToasterClose,
    // setShowToast,
  });

  const [isPageVisible, setIsPageVisible] = useState(true);

  const handleNextClick = () => {
    setIsPageVisible(false);
    formik.handleSubmit();
    // setShowToast(true);
    // setTimeout(() => {
    //   if (showToast) {
    //     handleToasterClose();
    //   }
    // }, 3000);
  };

  return isPageVisible ? (
    <Container>
      {/* {showToast && (
        <Toaster
          message={'Project Provider Information Created Successfully'}
          severity={'success'}
          open={showToast}
          onClose={handleToasterClose}
        />
      )} */}
      <GridContainer>
        <InputSection>
          <InputLabelItem>Project ID</InputLabelItem>
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
              borderRadius: '8px',
            }}
            placeholder="Project Number/ID"
          />
          {formik.errors.projectNumber && formik.touched.projectNumber && (
            <StyledTypography>{formik.errors.projectNumber}</StyledTypography>
          )}
        </InputSection>

        <InputSection>
          <InputLabelItem>Date of Issue</InputLabelItem>

          <DatePicker
            onDateChange={(value: Date | null) =>
              formik.setFieldValue('dateOfIssue', value)
            }
          />

          {formik.errors.dateOfIssue && formik.touched.dateOfIssue && (
            <StyledTypography color="error">
              {formik.errors.dateOfIssue}
            </StyledTypography>
          )}
        </InputSection>

        <InputSection>
          <InputLabelItem>Interior Designer Name</InputLabelItem>
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
              borderRadius: '8px',
            }}
            placeholder="Name"
          />
          {formik.errors.designerName && formik.touched.designerName && (
            <StyledTypography>{formik.errors.designerName}</StyledTypography>
          )}
        </InputSection>

        <InputSection>
          <InputLabelItem>Email</InputLabelItem>
          <InputIconFor>
            <TextInput
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              style={{
                width: '100%',
                borderRadius: '8px',
              }}
              placeholder="Email address"
            />
            <EmailIconSec src={EmailIcon} alt="" />
          </InputIconFor>

          {formik.errors.email && formik.touched.email && (
            <StyledTypography>{formik.errors.email}</StyledTypography>
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
          <InputLabelItem>Website</InputLabelItem>
          <InputIconFor>
            <TextInput
              name="website"
              label="Website"
              value={formik.values.website}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{
                width: '100%',
                borderRadius: '8px',
              }}
              placeholder="Input here website name"
            />
            <WebsiteIconSec src={WebsiteIcon} alt="" />
          </InputIconFor>
        </InputSection>
      </GridContainer>

      <GridContainer2>
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
            style={{
              width: '100%',
              padding: '18px',
              borderRadius: '8px',
              marginTop: '3px',
            }}
            error={formik.touched.state && Boolean(formik.errors.state)}
          />
          {formik.errors.state && formik.touched.state && (
            <StyledTypography>{formik.errors.state}</StyledTypography>
          )}
        </InputSection>

        <InputSection>
          <InputLabelItem>Office Address</InputLabelItem>
          <InputIconFor>
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
            <LocationIconSec
              src={LocationIcon}
              alt=""
              style={{
                position: 'absolute',
                right: 10,
                top: 16,
              }}
            />
          </InputIconFor>
          {formik.errors.addressLine1 && formik.touched.addressLine1 && (
            <StyledTypography>{formik.errors.addressLine1}</StyledTypography>
          )}
        </InputSection>
      </GridContainer2>
      <ButtonSection>
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
  ) : null;
};

export default ProjectProviderInformation;
