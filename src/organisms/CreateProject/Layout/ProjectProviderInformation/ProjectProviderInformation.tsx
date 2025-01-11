import { Typography, TextField } from "@mui/material";
import { useFormik } from "formik";
import {
  ButtonSection,
  Container,
  FlexRow,
  FullWidthFormControl,
} from "./ProjectProviderInformation.style";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Button from "../../../../atoms/Button/Button";
import { projectProviderSchema } from "../../Schema";
import SelectOption from "../../../../atoms/Select/SelectOption";

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
  const formik = useFormik({
    initialValues: {
      projectNumber: data.projectNumber || "",
      dateOfIssue: data.dateOfIssue || null,
      designerName: data.designerName || "",
      email: data.email || "",
      phoneNumber: data.phoneNumber || "",
      website: data.website || "",
      addressLine1: data.addressLine1 || "",
      addressLine2: data.addressLine2 || "",
      zipCode: data.zipCode || "",
      city: data.city || "",
      country: data.country || "",
      state: data.state || "",
    },
    validationSchema: projectProviderSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      updateData(values);
      handleNext();
      console.log(values);
    },
  });

  const isFormValid = () => {
    return (
      formik.values.projectNumber &&
      formik.values.dateOfIssue &&
      formik.values.email &&
      formik.values.city &&
      formik.values.country &&
      formik.values.state &&
      formik.values.zipCode &&
      formik.values.addressLine1 &&
      formik.values.designerName &&
      formik.values.phoneNumber
    );
  };

  return (
    <Container>
      <Typography variant="h6">Basic Information</Typography>
      <TextField
        label="Project Number/ID"
        variant="outlined"
        fullWidth
        name="projectNumber"
        type="number"
        value={formik.values.projectNumber}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.projectNumber && Boolean(formik.errors.projectNumber)
        }
        helperText={formik.touched.projectNumber && formik.errors.projectNumber}
      />

      <FlexRow>
        <FullWidthFormControl>
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
        </FullWidthFormControl>

        <TextField
          label="Interior Designer Name"
          variant="outlined"
          fullWidth
          name="designerName"
          value={formik.values.designerName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.designerName && Boolean(formik.errors.designerName)
          }
          helperText={formik.touched.designerName && formik.errors.designerName}
        />
      </FlexRow>

      <FlexRow>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          name="phoneNumber"
          type="number"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
          }
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
        />
      </FlexRow>

      <FlexRow>
        <TextField
          label="Website"
          variant="outlined"
          fullWidth
          name="website"
          value={formik.values.website}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </FlexRow>

      <Typography variant="subtitle1">Office Address</Typography>

      <FlexRow>
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
        />
      </FlexRow>

      <FlexRow>
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
        />
        <TextField
          label="Zip/Postal Code"
          variant="outlined"
          name="zipCode"
          type="number"
          value={formik.values.zipCode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.zipCode && Boolean(formik.errors.zipCode)}
          helperText={formik.touched.zipCode && formik.errors.zipCode}
        />
      </FlexRow>

      <TextField
        label="Address Line 1"
        variant="outlined"
        fullWidth
        name="addressLine1"
        value={formik.values.addressLine1}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.addressLine1 && Boolean(formik.errors.addressLine1)
        }
        helperText={formik.touched.addressLine1 && formik.errors.addressLine1}
      />
      <TextField
        label="Address Line 2 (Optional)"
        variant="outlined"
        fullWidth
        name="addressLine2"
        value={formik.values.addressLine2}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

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
