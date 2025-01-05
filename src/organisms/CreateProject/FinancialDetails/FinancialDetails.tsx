import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { ButtonSection, Container } from "./FinancialDetails.style";

const FinancialDetails = ({
  currentPageIndex,
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
  const [paymentReceived, setPaymentReceived] = useState<string | null>(
    data.paymentReceived || null
  );
  const [estimatedBudget, setEstimatedBudget] = useState<string>(
    data.estimatedBudget || ""
  );

  const handlePaymentChange = (
    _: React.MouseEvent<HTMLElement>,
    newValue: string | null
  ) => {
    setPaymentReceived(newValue);
  };

  const isFormValid = () => {
    return !!paymentReceived && !!estimatedBudget.trim();
  };

  // Update shared state whenever local state changes
  useEffect(() => {
    updateData({ paymentReceived, estimatedBudget });
  }, [paymentReceived, estimatedBudget, updateData]);

  // Handle Submit button click
  const handleSubmit = () => {
    console.log({
      paymentReceived,
      estimatedBudget,
    });

    handleNext();
  };

  return (
    <Container>
      <Typography variant="h6" gutterBottom>
        Financial Details
      </Typography>

      <TextField
        label="Estimated Budget"
        variant="outlined"
        fullWidth
        value={estimatedBudget}
        onChange={(e) => setEstimatedBudget(e.target.value)}
      />

      <Box mt={3}>
        <Typography variant="body1" gutterBottom>
          Have You Received Payment?
        </Typography>
        <ToggleButtonGroup
          value={paymentReceived}
          exclusive
          onChange={handlePaymentChange}
          aria-label="payment received"
          fullWidth
        >
          <ToggleButton value="yes" aria-label="yes">
            Yes
          </ToggleButton>
          <ToggleButton value="no" aria-label="no">
            No
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <ButtonSection>
        <Button
          variant="outlined"
          disabled={currentPageIndex === 0}
          onClick={handlePrevious}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!isFormValid()}
        >
          Submit
        </Button>
      </ButtonSection>
    </Container>
  );
};

export default FinancialDetails;
