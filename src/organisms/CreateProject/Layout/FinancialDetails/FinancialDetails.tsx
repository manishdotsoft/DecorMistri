import { Typography } from '@mui/material';
import {
  ButtonSection,
  Container,
  GridContainer,
  InputLabelItem,
  InputSection,
  StyledTypography,
} from './FinancialDetails.style';
import Button from '../../../../atoms/Button/Button';
import RadioButton from '../../../../atoms/RadioButton/RadioButton';
import useFinancialDetails from './FinancialDetails.hook';
import TextInput from '../../../../atoms/TextInput/TextInput';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const { formik } = useFinancialDetails({
    data,
    updateData,
    handleNext,
  });

  const paymentOptions = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ];

  const navigate = useNavigate();
  const [isPageVisible, setIsPageVisible] = useState(true);
  const handleNextClick = () => {
    setIsPageVisible(false);
    formik.handleSubmit();
    navigate('dashboard');
  };

  // const handlePreviousClick = () => {
  //   setIsPageVisible(true);
  // };

  return (
    isPageVisible && (
      <Container>
        <GridContainer>
          <InputSection>
            <InputLabelItem></InputLabelItem>
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
            {formik.errors.estimatedBudget &&
              formik.touched.estimatedBudget && (
                <StyledTypography>
                  {formik.errors.estimatedBudget}
                </StyledTypography>
              )}
          </InputSection>

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
            title="Submit"
            color="primary"
            variant="contained"
            disabled={!formik.isValid || !formik.dirty}
            style={{ borderRadius: '8px', width: '150px' }}
            onClick={() => {
              handleNextClick();
              if (formik.isValid && formik.dirty) {
                handleSubmit();
              }
            }}
          />
        </ButtonSection>
      </Container>
    )
  );
};

export default FinancialDetails;
