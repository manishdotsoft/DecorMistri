import { useEffect, useState } from "react";
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
  data,
  updateData,
  handleNext,
  handlePrevious,
}: {
  currentPageIndex: number;
  data: {
    startDate?: Date | null;
    endDate?: Date | null;
  };
  updateData: (data: {
    startDate?: Date | null;
    endDate?: Date | null;
  }) => void;
  handleNext: () => void;
  handlePrevious: () => void;
}) => {
  const [startDate, setStartDate] = useState<Date | null>(
    data.startDate || null
  );
  const [endDate, setEndDate] = useState<Date | null>(data.endDate || null);

  // Disable the Next button if either date is not selected
  const isNextDisabled = !startDate || !endDate;

  useEffect(() => {
    updateData({ startDate, endDate });
  }, [startDate, endDate, updateData]);

  const handleNextClick = () => {
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);

    handleNext();
  };

  return (
    <Container>
      <Typography variant="h6">Timeline Schedule</Typography>

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
          onClick={handleNextClick}
          disabled={isNextDisabled}
        >
          Next
        </Button>
      </ButtonSection>
    </Container>
  );
};

export default TimelineSchedule;
