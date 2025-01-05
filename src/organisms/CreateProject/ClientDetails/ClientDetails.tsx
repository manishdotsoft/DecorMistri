import { useState } from "react";
import { Typography, MenuItem, Select, TextField, Button } from "@mui/material";
import {
  ButtonSection,
  Container,
  FlexRow,
  FullWidthFormControl,
  InputLabelItem,
} from "./ClientDetails.style";

const ClientDetails = ({
  currentPageIndex,
  handleNext,
  handlePrevious,
}: {
  currentPageIndex: number;
  handleNext: () => void;
  handlePrevious: () => void;
}) => {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [addressLine1, setAddressLine1] = useState("");

  // Validation function
  const isFormValid = () => {
    return (
      clientName &&
      clientEmail &&
      phoneNumber &&
      city &&
      country &&
      state &&
      zipCode &&
      addressLine1
    );
  };

  // Handle Next button click
  const handleNextClick = () => {
    // Log all input and select values
    console.log({
      clientName,
      clientEmail,
      phoneNumber,
      city,
      country,
      state,
      zipCode,
      addressLine1,
    });

    // Call the handleNext function
    handleNext();
  };

  return (
    <Container>
      <Typography variant="h6">Basic Information</Typography>

      <FlexRow>
        <TextField
          label="Client Name"
          variant="outlined"
          fullWidth
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />
      </FlexRow>
      <FlexRow>
        <TextField
          label="Client Email ID"
          variant="outlined"
          fullWidth
          type="email"
          value={clientEmail}
          onChange={(e) => setClientEmail(e.target.value)}
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          type="number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </FlexRow>

      <Typography variant="subtitle1">Address</Typography>

      <FlexRow>
        <FullWidthFormControl>
          <InputLabelItem>City</InputLabelItem>
          <Select value={city} onChange={(e) => setCity(e.target.value)}>
            <MenuItem value="city1">City 1</MenuItem>
            <MenuItem value="city2">City 2</MenuItem>
          </Select>
        </FullWidthFormControl>

        <FullWidthFormControl>
          <InputLabelItem>Country</InputLabelItem>
          <Select value={country} onChange={(e) => setCountry(e.target.value)}>
            <MenuItem value="country1">Country 1</MenuItem>
            <MenuItem value="country2">Country 2</MenuItem>
          </Select>
        </FullWidthFormControl>
      </FlexRow>

      <FlexRow>
        <FullWidthFormControl>
          <InputLabelItem>Province/State</InputLabelItem>
          <Select value={state} onChange={(e) => setState(e.target.value)}>
            <MenuItem value="state1">State 1</MenuItem>
            <MenuItem value="state2">State 2</MenuItem>
          </Select>
        </FullWidthFormControl>

        <TextField
          label="Zip/Postal code"
          variant="outlined"
          fullWidth
          placeholder="ex. 098098"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
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
          onClick={handleNextClick} // Use the updated handleNextClick function
          disabled={!isFormValid()}
        >
          Next
        </Button>
      </ButtonSection>
    </Container>
  );
};

export default ClientDetails;
