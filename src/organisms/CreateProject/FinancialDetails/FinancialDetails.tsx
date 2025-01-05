import { useState } from "react";
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
  handleNext,
  handlePrevious,
}: {
  currentPageIndex: number;
  handleNext: () => void;
  handlePrevious: () => void;
}) => {
  const [paymentReceived, setPaymentReceived] = useState<string | null>(null);
  const [estimatedBudget, setEstimatedBudget] = useState<string>("");

  const handlePaymentChange = (
    _: React.MouseEvent<HTMLElement>,
    newValue: string | null
  ) => {
    setPaymentReceived(newValue);
  };

  const isFormValid = () => {
    return !!paymentReceived && !!estimatedBudget.trim();
  };

  // Handle Submit button click
  const handleSubmit = () => {
    // Log values to the console
    console.log({
      paymentReceived,
      estimatedBudget,
    });

    // Proceed with the next step
    handleNext();
  };

  return (
    <Container>
      <Typography variant="h6" gutterBottom>
        Basic Information
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
          onClick={handleSubmit} // Use the handleSubmit function here
          disabled={!isFormValid()}
        >
          Submit
        </Button>
      </ButtonSection>
    </Container>
  );
};

export default FinancialDetails;
