import { useEffect } from "react";
import { Typography, TextField } from "@mui/material";
import { useFormik } from "formik";
import { propertyLocationSchema } from "../../Schema";
import {
  ButtonSection,
  Container,
  FlexRow,
} from "./PropertyLocationDetails.style";
import Button from "../../../../atoms/Button/Button";
import SelectOption from "../../../../atoms/Select/SelectOption";

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
  const formik = useFormik({
    initialValues: {
      country: data.country || "",
      state: data.state || "",
      city: data.city || "",
      zip: data.zip || "",
      addressLine1: data.addressLine1 || "",
      addressLine2: data.addressLine2 || "",
    },
    validationSchema: propertyLocationSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      updateData(values);
      handleNext();
      console.log(values);
    },
  });

  const isFormValid = () => {
    return (
      formik.values.country &&
      formik.values.state &&
      formik.values.city &&
      formik.values.zip.trim() &&
      formik.values.addressLine1.trim()
    );
  };

  useEffect(() => {
    updateData(formik.values);
  }, [formik.values, updateData]);

  return (
    <Container>
      <Typography variant="h6">Property Location Details</Typography>

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
          style={{ width: "482px" }}
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
          error={formik.touched.state && Boolean(formik.errors.state)}
          helperText={formik.touched.state && formik.errors.state}
          style={{ width: "482px" }}
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
          style={{ width: "482px" }}
        />

        <TextField
          label="Zip/Postal Code"
          variant="outlined"
          fullWidth
          name="zip"
          value={formik.values.zip}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.zip && Boolean(formik.errors.zip)}
          helperText={formik.touched.zip && formik.errors.zip}
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

export default PropertyLocationDetails;
