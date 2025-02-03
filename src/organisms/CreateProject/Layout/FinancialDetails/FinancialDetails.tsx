import { Typography, Box } from '@mui/material';
import {
  ButtonSection,
  Container,
  FullWidthFormControl,
  GridContainer,
  StyledTypography,
} from './FinancialDetails.style';
import Button from '../../../../atoms/Button/Button';
import RadioButton from '../../../../atoms/RadioButton/RadioButton';
import useFinancialDetails from './FinancialDetails.hook';
import TextInput from '../../../../atoms/TextInput/TextInput';

const FinancialDetails = ({
  data,
  updateData,
  handleNext,
  handlePrevious,
  handleSubmit,
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
  handleSubmit: () => void; // Accept handleSubmit as a prop
}) => {
  const { formik } = useFinancialDetails({
    data,
    updateData,
    handleNext,
  });

  const paymentOptions = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ];

  return (
    <Container>
      <Typography variant="h6" gutterBottom>
        Financial Details
      </Typography>

      <GridContainer>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
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
              width: '100%',
              borderRadius: '5px',
            }}
            placeholder="Estimated Budget"
          />
          {formik.errors.estimatedBudget && formik.touched.estimatedBudget && (
            <StyledTypography>{formik.errors.estimatedBudget}</StyledTypography>
          )}
        </Box>

        <FullWidthFormControl>
          <RadioButton
            label="Payment Received"
            options={paymentOptions}
            selectedValue={formik.values.paymentReceived || ''}
            onChange={(value) => formik.setFieldValue('paymentReceived', value)}
            name="paymentReceived"
            direction="row"
          />
          {formik.touched.paymentReceived && formik.errors.paymentReceived && (
            <Typography color="error" variant="caption">
              {formik.errors.paymentReceived}
            </Typography>
          )}
        </FullWidthFormControl>
      </GridContainer>

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
          onClick={() => {
            formik.handleSubmit();
            if (formik.isValid && formik.dirty) {
              handleSubmit();
            }
          }}
          variant="contained"
          disabled={!formik.isValid || !formik.dirty}
        />
      </ButtonSection>
    </Container>
  );
};

export default FinancialDetails;
