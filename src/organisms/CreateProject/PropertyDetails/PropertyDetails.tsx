import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import {
  ButtonSection,
  Container,
  FlexRow,
  FullWidthFormControl,
  InputLabelItem,
  Phashes,
  SelectFile,
} from "./PropertyDetails.style";

const PropertyDetails = ({
  currentPageIndex,
  handleNext,
  handlePrevious,
}: {
  currentPageIndex: number;
  handleNext: () => void;
  handlePrevious: () => void;
}) => {
  const [city, setCity] = useState("");
  const [size, setSize] = useState("");
  const [phases, setPhases] = useState("");
  const [file, setFile] = useState<File | null>(null);

  interface FileChangeEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & { files: FileList };
  }

  const handleFileChange = (event: FileChangeEvent) => {
    setFile(event.target.files[0]);
  };

  const isFormValid = () => {
    return !!city && !!size.trim() && !!phases.trim() && !!file;
  };

  const handleNextClick = () => {
    // Log values to console when "Next" is clicked
    console.log({
      city,
      size,
      phases,
      file: file ? file.name : null,
    });

    // Proceed with the handleNext callback if available
    handleNext();
  };

  return (
    <Container>
      <Typography variant="h6">Basic Information</Typography>

      <FlexRow>
        <FullWidthFormControl>
          <InputLabelItem>Design Type</InputLabelItem>
          <Select value={city} onChange={(e) => setCity(e.target.value)}>
            <MenuItem value="city1">Type 1</MenuItem>
            <MenuItem value="city2">Type 2</MenuItem>
          </Select>
        </FullWidthFormControl>

        <TextField
          label="Size (in sq. ft.)"
          variant="outlined"
          fullWidth
          type="text"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
      </FlexRow>

      <Phashes>
        <TextField
          label="Number of Phases"
          variant="outlined"
          type="number"
          value={phases}
          onChange={(e) => setPhases(e.target.value)}
        />
        <SelectFile>
          <Typography variant="subtitle1">Floor Plans & 3D Designs</Typography>
          <Box>
            <Button variant="outlined" component="label">
              Select File
              <input type="file" hidden onChange={handleFileChange} />
            </Button>
            {file && (
              <p style={{ marginTop: "8px", fontSize: "14px", color: "#555" }}>
                Selected File: {file.name}
              </p>
            )}
          </Box>
        </SelectFile>
      </Phashes>

      <TextField label="Additional Comments" variant="outlined" fullWidth />

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
          onClick={handleNextClick} // Use the modified handleNextClick
          disabled={!isFormValid()}
        >
          Next
        </Button>
      </ButtonSection>
    </Container>
  );
};

export default PropertyDetails;
