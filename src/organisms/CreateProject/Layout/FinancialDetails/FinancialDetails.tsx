import { Typography, Box } from "@mui/material";
import {
  ButtonSection,
  Container,
  FlexRow,
  FullWidthFormControl,
  StyledTypography,
} from "./FinancialDetails.style";
import Button from "../../../../atoms/Button/Button";
import RadioButton from "../../../../atoms/RadioButton/RadioButton";
import useFinancialDetails from "./FinancialDetails.hook";
import TextInput from "../../../../atoms/TextInput/TextInput";

const FinancialDetails = ({
  data,
  updateData,
  handleNext,
  handlePrevious,
}: {
  currentPageIndex: number;
  data: {
    paymentReceived?: string | null;
    estimatedBudget?: string;
  };
  updateData: (data: {
    paymentReceived?: string | null;
    estimatedBudget?: string;
  }) => void;
  handleNext: () => void;
  handlePrevious: () => void;
}) => {
  const { formik, isFormValid } = useFinancialDetails({
    data,
    updateData,
    handleNext,
  });

  const paymentOptions = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ];

  return (
    <Container>
      <Typography variant="h6" gutterBottom>
        Financial Details
      </Typography>

      <FlexRow>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <TextInput
            name="estimatedBudget"
            label="Estimated Budget"
            value={formik.values.estimatedBudget}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.estimatedBudget &&
              Boolean(formik.errors.estimatedBudget)
            }
            style={{
              width: "95%",
              borderRadius: "5px",
            }}
            placeholder="Estimated Budget"
          />
          {formik.errors.estimatedBudget && formik.touched.estimatedBudget && (
            <StyledTypography>{formik.errors.estimatedBudget}</StyledTypography>
          )}
        </Box>
      </FlexRow>

      <Typography variant="subtitle1" gutterBottom>
        Payment Status
      </Typography>
      <FullWidthFormControl>
        <RadioButton
          label="Payment Received"
          options={paymentOptions}
          selectedValue={formik.values.paymentReceived || ""}
          onChange={(value) => formik.setFieldValue("paymentReceived", value)}
          name="paymentReceived"
          direction="row"
        />
        {formik.touched.paymentReceived && formik.errors.paymentReceived && (
          <Typography color="error" variant="caption">
            {formik.errors.paymentReceived}
          </Typography>
        )}
      </FullWidthFormControl>

      <ButtonSection>
        <Button
          title="Previous"
          color="secondary"
          onClick={handlePrevious}
          variant="contained"
        />
        <Button
          title="Submit"
          color="primary"
          onClick={() => formik.handleSubmit()}
          variant="contained"
          disabled={!formik.isValid || !formik.dirty}
        />
      </ButtonSection>
    </Container>
  );
};

export default FinancialDetails;
