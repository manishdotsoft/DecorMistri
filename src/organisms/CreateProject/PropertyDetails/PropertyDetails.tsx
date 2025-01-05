import { useEffect, useState } from "react";
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
  data,
  updateData,
  handleNext,
  handlePrevious,
}: {
  currentPageIndex: number;
  data: {
    city?: string;
    size?: string;
    phases?: string;
    file?: File | null;
    comments?: string;
  };
  updateData: (data: {
    city?: string;
    size?: string;
    phases?: string;
    file?: File | null;
    comments?: string;
  }) => void;
  handleNext: () => void;
  handlePrevious: () => void;
}) => {
  const [city, setCity] = useState(data.city || "");
  const [size, setSize] = useState(data.size || "");
  const [phases, setPhases] = useState(data.phases || "");
  const [file, setFile] = useState<File | null>(data.file || null);
  const [comments, setComments] = useState(data.comments || "");

  interface FileChangeEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & { files: FileList };
  }

  const handleFileChange = (event: FileChangeEvent) => {
    setFile(event.target.files[0]);
  };

  const isFormValid = () => {
    return (
      !!city && !!size.trim() && !!phases.trim() && !!file && !!comments.trim()
    );
  };

  useEffect(() => {
    updateData({ city, size, phases, file, comments });
  }, [city, size, phases, file, comments, updateData]);

  const handleNextClick = () => {
    console.log({
      city,
      size,
      phases,
      file: file ? file.name : null,
      comments,
    });
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

      <TextField
        label="Additional Comments"
        variant="outlined"
        fullWidth
        value={comments}
        onChange={(e) => setComments(e.target.value)}
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

export default PropertyDetails;
