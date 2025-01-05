import { useEffect, useState } from "react";
import {
  // Box,
  Typography,
  MenuItem,
  Select,
  TextField,
  // FormControlLabel,
  // Switch,
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
  data,
  updateData,
  currentPageIndex,
  handleNext,
  handlePrevious,
}: {
  currentPageIndex: number;
  data: {
    sameAsCompanyAddress?: boolean;
    dateOfIssue?: Date | null;
    city?: string;
    country?: string;
    state?: string;
    projectNumber?: string;
    designerName?: string;
    email?: string;
    phoneNumber?: string;
    website?: string;
    addressLine1?: string;
    addressLine2?: string; // Added optional addressLine2
    zipCode?: string;
  };
  updateData: (data: {
    sameAsCompanyAddress?: boolean;
    dateOfIssue?: Date | null;
    city?: string;
    country?: string;
    state?: string;
    projectNumber?: string;
    designerName?: string;
    email?: string;
    phoneNumber?: string;
    website?: string;
    addressLine1?: string;
    addressLine2?: string; // Added optional addressLine2
    zipCode?: string;
  }) => void;
  handleNext: () => void;
  handlePrevious: () => void;
}) => {
  // const [sameAsCompanyAddress, setSameAsCompanyAddress] = useState(
  //   data.sameAsCompanyAddress || false
  // );
  const [dateOfIssue, setDateOfIssue] = useState<Date | null>(
    data.dateOfIssue || null
  );
  const [city, setCity] = useState(data.city || "");
  const [country, setCountry] = useState(data.country || "");
  const [state, setState] = useState(data.state || "");
  const [projectNumber, setProjectNumber] = useState(data.projectNumber || "");
  const [designerName, setDesignerName] = useState(data.designerName || "");
  const [email, setEmail] = useState(data.email || "");
  const [phoneNumber, setPhoneNumber] = useState(data.phoneNumber || "");
  const [website, setWebsite] = useState(data.website || "");
  const [addressLine1, setAddressLine1] = useState(data.addressLine1 || "");
  const [addressLine2, setAddressLine2] = useState(data.addressLine2 || ""); // Added addressLine2 state
  const [zipCode, setZipCode] = useState(data.zipCode || "");

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

  useEffect(() => {
    updateData({
      // sameAsCompanyAddress,
      dateOfIssue,
      projectNumber,
      designerName,
      email,
      phoneNumber,
      website,
      addressLine1,
      addressLine2, // Include addressLine2 in the update
      zipCode,
      city,
      country,
      state,
    });
  }, [
    // sameAsCompanyAddress,
    dateOfIssue,
    projectNumber,
    designerName,
    email,
    phoneNumber,
    website,
    addressLine1,
    addressLine2, // Track changes to addressLine2
    zipCode,
    city,
    country,
    state,
    updateData,
  ]);

  const handleNextClick = () => {
    console.log({
      // sameAsCompanyAddress,
      dateOfIssue,
      projectNumber,
      designerName,
      email,
      phoneNumber,
      website,
      addressLine1,
      addressLine2, // Log addressLine2
      zipCode,
      city,
      country,
      state,
    });

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

      {/* <Box>
        <FormControlLabel
          control={
            <Switch
              checked={sameAsCompanyAddress}
              onChange={() => setSameAsCompanyAddress(!sameAsCompanyAddress)}
            />
          }
          label="Same as company address"
        />
      </Box> */}

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

export default ProjectProviderInformation;
