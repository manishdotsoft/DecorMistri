// import { Typography } from '@mui/material';
import {
  ButtonSection,
  Container,
  GridContainer,
  InputLabelItem,
  InputSection,
  StyledTypography,
} from './FinancialDetails.style';
import Button from '../../../../atoms/Button/Button';
// import RadioButton from '../../../../atoms/RadioButton/RadioButton';
import useFinancialDetails from './FinancialDetails.hook';
import TextInput from '../../../../atoms/TextInput/TextInput';
import { useNavigate } from 'react-router-dom';
import {
  DECOR_LOGO_COLOR,
  DECOR_LOGO_COLOR_HOVER,
} from '../../../../thems/primitives/colors';
import { COMMON_DEFAULT } from '../../../../thems/primitives/palette';
import SelectOption from '../../../../atoms/Select/SelectOption';

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
  handleSubmit: () => void;
}) => {
  const { formik, isFormValid } = useFinancialDetails({
    data,
    updateData,
    handleNext,
  });

  const paymentOptions = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ];

  const navigate = useNavigate();
  const handleNextClick = () => {
    formik.handleSubmit();
    navigate('dashboard');
  };

  // Button background color logic
  const submitButtonBackgroundColor = isFormValid() ? DECOR_LOGO_COLOR : '#CCC';

  return (
    <Container>
      <GridContainer>
        <InputSection>
          <InputLabelItem>Estimated Budget</InputLabelItem>
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
        </InputSection>

        <InputSection>
          <SelectOption
            name="paymentReceived"
            label="Payment Received"
            options={paymentOptions}
            defaultOption={'Select'}
            value={formik.values.paymentReceived}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{
              width: '100%',
              padding: '18px',
              borderRadius: '8px',
              marginTop: '3px',
            }}
            error={
              formik.touched.paymentReceived &&
              Boolean(formik.errors.paymentReceived)
            }
          />
          {formik.errors.paymentReceived && formik.touched.paymentReceived && (
            <StyledTypography>{formik.errors.paymentReceived}</StyledTypography>
          )}
        </InputSection>

        {/* <RadioButton
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
          )} */}
      </GridContainer>
      <ButtonSection>
        <Button
          title="Previous"
          color="primary"
          variant="contained"
          onClick={handlePrevious}
          style={{
            borderRadius: '8px',
            width: '150px',
            color: DECOR_LOGO_COLOR,
            border: `2px solid ${DECOR_LOGO_COLOR}`,
          }}
          backgroundColor={COMMON_DEFAULT}
          hoverBackgroundColor={DECOR_LOGO_COLOR_HOVER}
        />
        <Button
          title="Submit"
          variant="contained"
          disabled={!formik.isValid || !formik.dirty}
          style={{
            borderRadius: '8px',
            width: '150px',
            backgroundColor: submitButtonBackgroundColor,
          }}
          onClick={() => {
            handleNextClick();
            if (formik.isValid && formik.dirty) {
              handleSubmit();
            }
          }}
        />
      </ButtonSection>
    </Container>
  );
};

export default FinancialDetails;
