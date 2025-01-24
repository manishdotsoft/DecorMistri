import { Typography, Box } from "@mui/material";
import {
  ButtonSection,
  Container,
  GridContainer,
  GridContainerChild,
  StyledTypography,
} from "./ProjectProviderInformation.style";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Button from "../../../../atoms/Button/Button";
import SelectOption from "../../../../atoms/Select/SelectOption";
import { useProjectProviderForm } from "./ProjectProviderInformation.hook";
import TextInput from "../../../../atoms/TextInput/TextInput";

interface ProjectProviderInformationProps {
  data: {
    projectNumber: string;
    dateOfIssue: Date | null;
    designerName: string;
    email: string;
    phoneNumber: string;
    website?: string;
    addressLine1: string;
    addressLine2?: string;
    zipCode: string;
    city: string;
    country: string;
    state: string;
  };
  updateData: (values: ProjectProviderInformationProps["data"]) => void;
  currentPageIndex: number;
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

  return (
    <Container>
      <Typography variant="h6">Basic Information</Typography>
      <GridContainer>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
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
              width: "95%",
              borderRadius: "5px",
            }}
            placeholder="Project Number/ID"
          />
          {formik.errors.projectNumber && formik.touched.projectNumber && (
            <StyledTypography>{formik.errors.projectNumber}</StyledTypography>
          )}
        </Box>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Date of Issue"
            value={formik.values.dateOfIssue}
            onChange={(value: Date | null) =>
              formik.setFieldValue("dateOfIssue", value)
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
        </LocalizationProvider>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <TextInput
            name="designerName"
            label="Interior Designer Name"
            value={formik.values.designerName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.designerName && Boolean(formik.errors.designerName)
            }
            style={{
              width: "95%",
              borderRadius: "5px",
            }}
            placeholder="Enter Designer Name"
          />
          {formik.errors.designerName && formik.touched.designerName && (
            <StyledTypography>{formik.errors.designerName}</StyledTypography>
          )}
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <TextInput
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            style={{
              width: "95%",
              borderRadius: "5px",
            }}
            placeholder="Enter Your Email Name"
          />
          {formik.errors.email && formik.touched.email && (
            <StyledTypography>{formik.errors.email}</StyledTypography>
          )}
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <TextInput
            name="phoneNumber"
            label="Phone Number"
            type="number"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
            }
            style={{
              width: "95%",
              borderRadius: "5px",
            }}
            placeholder="Phone Number"
          />
          {formik.errors.phoneNumber && formik.touched.phoneNumber && (
            <StyledTypography>{formik.errors.phoneNumber}</StyledTypography>
          )}
        </Box>

        <TextInput
          name="website"
          label="Website"
          value={formik.values.website}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{
            width: "95%",
            borderRadius: "5px",
          }}
          placeholder="Input here website name"
        />
      </GridContainer>
      <Typography variant="subtitle1">Office Address</Typography>
      <GridContainer>
        <SelectOption
          name="country"
          label="Country"
          options={[
            { value: "country1", label: "Country 1" },
            { value: "country2", label: "Country 2" },
          ]}
          value={formik.values.country}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{ width: "100%" }}
          error={formik.touched.country && Boolean(formik.errors.country)}
          helperText={formik.touched.country && formik.errors.country}
        />
        <SelectOption
          name="state"
          label="Province/State"
          options={[
            { value: "state1", label: "State 1" },
            { value: "state2", label: "State 2" },
          ]}
          value={formik.values.state}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{ width: "100%" }}
          error={formik.touched.state && Boolean(formik.errors.state)}
          helperText={formik.touched.state && formik.errors.state}
        />

        <SelectOption
          name="city"
          label="City"
          options={[
            { value: "city1", label: "City 1" },
            { value: "city2", label: "City 2" },
          ]}
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{ width: "100%" }}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
        />

        <Box sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <TextInput
            name="zipCode"
            label="Zip/Postal Code"
            type="number"
            value={formik.values.zipCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.zipCode && Boolean(formik.errors.zipCode)}
            style={{
              width: "95%",
              borderRadius: "5px",
            }}
            placeholder="Zip/Postal Code"
          />
          {formik.errors.zipCode && formik.touched.zipCode && (
            <StyledTypography>{formik.errors.zipCode}</StyledTypography>
          )}
        </Box>
      </GridContainer>
      <GridContainerChild>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
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
              width: "97.5%",
              borderRadius: "5px",
            }}
            placeholder="Address Line 1"
          />
          {formik.errors.addressLine1 && formik.touched.addressLine1 && (
            <StyledTypography>{formik.errors.addressLine1}</StyledTypography>
          )}
        </Box>
      </GridContainerChild>
      <GridContainerChild>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
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
              width: "97.5%",
              borderRadius: "5px",
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
