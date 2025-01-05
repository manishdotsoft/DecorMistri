import { useEffect, useState } from "react";
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
  const [country, setCountry] = useState(data.country || "");
  const [state, setState] = useState(data.state || "");
  const [city, setCity] = useState(data.city || "");
  const [zip, setZip] = useState(data.zip || "");
  const [addressLine1, setAddressLine1] = useState(data.addressLine1 || "");
  const [addressLine2, setAddressLine2] = useState(data.addressLine2 || "");

  // Validation function to check if all required fields are filled
  const isFormValid = () => {
    return (
      !!country && !!state && !!city && !!zip.trim() && !!addressLine1.trim()
    );
  };

  useEffect(() => {
    updateData({ country, state, city, zip, addressLine1, addressLine2 });
  }, [country, state, city, zip, addressLine1, addressLine2, updateData]);

  const handleNextClick = () => {
    // Log values to console when "Next" is clicked
    console.log({
      country,
      state,
      city,
      zip,
      addressLine1,
      addressLine2,
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

      <TextField
        label="Address line 1"
        variant="outlined"
        fullWidth
        value={addressLine1}
        onChange={(e) => setAddressLine1(e.target.value)}
      />
      <TextField
        label="Address line 2 (Optional)"
        variant="outlined"
        fullWidth
        value={addressLine2}
        onChange={(e) => setAddressLine2(e.target.value)}
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
          onClick={handleNextClick}
          disabled={!isFormValid()}
        >
          Next
        </Button>
      </ButtonSection>
    </Container>
  );
};

export default PropertyLocationDetails;
