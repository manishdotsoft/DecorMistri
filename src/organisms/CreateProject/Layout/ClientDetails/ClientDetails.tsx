import { Typography, TextField } from "@mui/material";
import { useFormik } from "formik";

import { ButtonSection, Container, FlexRow } from "./ClientDetails.style";
import Button from "../../../../atoms/Button/Button";
import { clientDetailsSchema } from "../../Schema";
import SelectOption from "../../../../atoms/Select/SelectOption";

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
  const formik = useFormik({
    initialValues: {
      clientName: data.clientName || "",
      clientEmail: data.clientEmail || "",
      phoneNumber: data.phoneNumber || "",
      city: data.city || "",
      country: data.country || "",
      state: data.state || "",
      zipCode: data.zipCode || "",
      addressLine1: data.addressLine1 || "",
      addressLine2: data.addressLine2 || "",
    },
    validationSchema: clientDetailsSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      updateData(values);
      handleNext();
      console.log(values);
    },
  });

  const isFormValid = () => {
    return (
      formik.values.clientName &&
      formik.values.clientEmail &&
      formik.values.phoneNumber &&
      formik.values.city &&
      formik.values.country &&
      formik.values.state &&
      formik.values.zipCode &&
      formik.values.addressLine1
    );
  };

  return (
    <Container>
      <Typography variant="h6">Basic Information</Typography>

      <FlexRow>
        <TextField
          label="Client Name"
          variant="outlined"
          fullWidth
          name="clientName"
          value={formik.values.clientName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.clientName && Boolean(formik.errors.clientName)}
          helperText={formik.touched.clientName && formik.errors.clientName}
        />
      </FlexRow>

      <FlexRow>
        <TextField
          label="Client Email ID"
          variant="outlined"
          fullWidth
          type="email"
          name="clientEmail"
          value={formik.values.clientEmail}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.clientEmail && Boolean(formik.errors.clientEmail)
          }
          helperText={formik.touched.clientEmail && formik.errors.clientEmail}
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          type="number"
          name="phoneNumber"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
          }
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
        />
      </FlexRow>

      <Typography variant="subtitle1">Address</Typography>

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
          error={formik.touched.country && Boolean(formik.errors.country)}
          helperText={formik.touched.country && formik.errors.country}
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
          error={formik.touched.state && Boolean(formik.errors.state)}
          helperText={formik.touched.state && formik.errors.state}
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
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
          style={{ width: "100%" }}
        />
        <TextField
          label="Zip/Postal code"
          variant="outlined"
          name="zipCode"
          type="number"
          placeholder="ex. 098098"
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
        />
        <Button
          title="Next"
          color="primary"
          variant="contained"
          disabled={!isFormValid()}
          onClick={formik.handleSubmit}
        />
      </ButtonSection>
    </Container>
  );
};

export default ClientDetails;
