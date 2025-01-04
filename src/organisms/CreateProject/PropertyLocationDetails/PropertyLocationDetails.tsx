import { useState } from "react";
import { Typography, MenuItem, Select, TextField, Button } from "@mui/material";

import {
  ButtonSection,
  Container,
  FlexRow,
  FullWidthFormControl,
  InputLabelItem,
} from "./PropertyLocationDetails.style";

const PropertyLocationDetails = ({
  currentPageIndex,
  handleNext,
  handlePrevious,
}: {
  currentPageIndex: number;
  handleNext: () => void;
  handlePrevious: () => void;
}) => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  // Validation function to check if all required fields are filled
  const isFormValid = () => {
    return !!country && !!state && !!city && !!zip.trim();
  };

  const handleNextClick = () => {
    // Log values to console when "Next" is clicked
    console.log({
      country,
      state,
      city,
      zip,
    });

    // Proceed with the handleNext callback if available
    handleNext();
  };

  return (
    <Container>
      <Typography variant="h6">Basic Information</Typography>

      <FlexRow>
        <FullWidthFormControl>
          <InputLabelItem>Country</InputLabelItem>
          <Select value={country} onChange={(e) => setCountry(e.target.value)}>
            <MenuItem value="country1">Country 1</MenuItem>
            <MenuItem value="country2">Country 2</MenuItem>
          </Select>
        </FullWidthFormControl>

        <FullWidthFormControl>
          <InputLabelItem>Province/State</InputLabelItem>
          <Select value={state} onChange={(e) => setState(e.target.value)}>
            <MenuItem value="state1">State 1</MenuItem>
            <MenuItem value="state2">State 2</MenuItem>
          </Select>
        </FullWidthFormControl>
      </FlexRow>

      <FlexRow>
        <FullWidthFormControl>
          <InputLabelItem>City</InputLabelItem>
          <Select value={city} onChange={(e) => setCity(e.target.value)}>
            <MenuItem value="city1">City 1</MenuItem>
            <MenuItem value="city2">City 2</MenuItem>
          </Select>
        </FullWidthFormControl>

        <TextField
          label="Zip/Postal code"
          variant="outlined"
          fullWidth
          placeholder="ex. 098098"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />
      </FlexRow>

      <TextField label="Address line 1" variant="outlined" fullWidth />
      <TextField
        label="Address line 2 (Optional)"
        variant="outlined"
        fullWidth
      />

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
          onClick={handleNextClick} // Use the custom handleNextClick
          disabled={!isFormValid()}
        >
          Next
        </Button>
      </ButtonSection>
    </Container>
  );
};

export default PropertyLocationDetails;
