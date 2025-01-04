import { useState } from "react";
import { Typography, Button } from "@mui/material";
import {
  ButtonSection,
  Container,
  FlexRow,
  FullWidthFormControl,
} from "./TimelineSchedule.style";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const TimelineSchedule = ({
  currentPageIndex,
  handleNext,
  handlePrevious,
}: {
  currentPageIndex: number;
  handleNext: () => void;
  handlePrevious: () => void;
}) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  // Disable the Next button if either date is not selected
  const isNextDisabled = !startDate || !endDate;

  const handleNextClick = () => {
    // Log the selected start and end dates
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);

    // Call the original handleNext function
    handleNext();
  };

  return (
    <Container>
      <Typography variant="h6">Basic Information</Typography>

      <FlexRow>
        <FullWidthFormControl>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Start Date"
              value={startDate}
              onChange={(newValue: Date | null) => setStartDate(newValue)}
            />
          </LocalizationProvider>
        </FullWidthFormControl>
        <FullWidthFormControl>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="End Date"
              value={endDate}
              onChange={(newValue: Date | null) => setEndDate(newValue)}
            />
          </LocalizationProvider>
        </FullWidthFormControl>
      </FlexRow>

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
          onClick={handleNextClick} // Use the new handleNextClick function
          disabled={isNextDisabled} // Disable Next if any date is missing
        >
          Next
        </Button>
      </ButtonSection>
    </Container>
  );
};

export default TimelineSchedule;
