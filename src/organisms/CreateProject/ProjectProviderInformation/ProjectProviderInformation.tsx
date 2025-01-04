import { useState } from "react";
import {
  Box,
  Typography,
  MenuItem,
  Select,
  TextField,
  FormControlLabel,
  Switch,
  Button,
} from "@mui/material";
import {
  ButtonSection,
  Container,
  FlexRow,
  FullWidthFormControl,
  InputLabelItem,
} from "./ProjectProviderInformation.style";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const ProjectProviderInformation = ({
  currentPageIndex,
  handleNext,
  handlePrevious,
}: {
  currentPageIndex: number;
  handleNext: () => void;
  handlePrevious: () => void;
}) => {
  const [sameAsCompanyAddress, setSameAsCompanyAddress] = useState(false);
  const [dateOfIssue, setDateOfIssue] = useState<Date | null>(null);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [projectNumber, setProjectNumber] = useState("");
  const [designerName, setDesignerName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [website, setWebsite] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [zipCode, setZipCode] = useState("");

  // Validation function
  const isFormValid = () => {
    return (
      projectNumber.trim() &&
      dateOfIssue &&
      designerName.trim() &&
      email.trim() &&
      phoneNumber.trim() &&
      city &&
      country &&
      state &&
      addressLine1.trim() &&
      zipCode.trim()
    );
  };

  const handleNextClick = () => {
    // Log all the input values to the console
    console.log({
      sameAsCompanyAddress,
      dateOfIssue,
      projectNumber,
      designerName,
      email,
      phoneNumber,
      website,
      addressLine1,
      zipCode,
      city,
      country,
      state,
    });

    // Call handleNext to proceed
    handleNext();
  };

  return (
    <Container>
      <Typography variant="h6">Basic Information</Typography>
      <TextField
        label="Project Number/ID"
        variant="outlined"
        fullWidth
        value={projectNumber}
        onChange={(e) => setProjectNumber(e.target.value)}
      />

      <FlexRow>
        <FullWidthFormControl>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date of Issue"
              value={dateOfIssue}
              onChange={(newValue: Date | null) => setDateOfIssue(newValue)}
            />
          </LocalizationProvider>
        </FullWidthFormControl>

        <TextField
          label="Interior Designer Name"
          variant="outlined"
          fullWidth
          value={designerName}
          onChange={(e) => setDesignerName(e.target.value)}
        />
      </FlexRow>
      <FlexRow>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      <FlexRow>
        <TextField
          label="Website"
          variant="outlined"
          fullWidth
          type="text"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </FlexRow>

      <Typography variant="subtitle1">Office Address</Typography>

      <Box>
        <FormControlLabel
          control={
            <Switch
              checked={sameAsCompanyAddress}
              onChange={() => setSameAsCompanyAddress(!sameAsCompanyAddress)}
            />
          }
          label="Same as company address"
        />
      </Box>

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
          onClick={handleNextClick} // Use handleNextClick here
          disabled={!isFormValid()} // Disable if form is invalid
        >
          Next
        </Button>
      </ButtonSection>
    </Container>
  );
};

export default ProjectProviderInformation;
