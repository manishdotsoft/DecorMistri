import {
  Typography,
  MenuItem,
  Select,
  TextField,
  Box,
  InputLabel,
  FormHelperText,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { useFormik } from "formik";
import {
  ButtonSection,
  Container,
  FlexRow,
  Phashes,
  SelectFile,
} from "./PropertyDetails.style";
import Button from "../../../../atoms/Button/Button";
import { propertyDetailsSchema } from "../../Schema";
import SelectOption from "../../../../atoms/Select/SelectOption";

const designOptions = [
  {
    value: "commercial",
    label: "Commercial Design",
    subcategories: [
      "Office Spaces",
      "Retail Spaces",
      "Hospitality Spaces",
      "Entertainment Spaces",
    ],
  },
  {
    value: "residential",
    label: "Residential Design",
    subcategories: [
      "Living Areas",
      "Bedrooms",
      "Dining Areas",
      "Kitchens",
      "Bathrooms",
      "Outdoor Spaces",
    ],
  },
  {
    value: "industrial",
    label: "Industrial Design",
    subcategories: [
      "Manufacturing Areas",
      "Storage Areas",
      "Service Areas",
      "Admin Spaces",
      "Specialized Areas",
    ],
  },
  {
    value: "institutional",
    label: "Institutional Design",
    subcategories: [
      "Educational Spaces",
      "Healthcare Spaces",
      "Cultural Spaces",
      "Religious Spaces",
      "Government Spaces",
    ],
  },
  {
    value: "mixed-use",
    label: "Mixed-Use Design",
    subcategories: [
      "Residential Components",
      "Commercial Components",
      "Shared Amenities",
      "Public Spaces",
    ],
  },
  {
    value: "landscape",
    label: "Landscape Design",
    subcategories: [
      "Residential Landscaping",
      "Commercial Landscaping",
      "Urban Landscaping",
      "Environmental Spaces",
      "Specialized Areas",
    ],
  },
];

const PropertyDetails = ({
  data,
  updateData,
  handleNext,
  handlePrevious,
}: {
  currentPageIndex: number;
  data: {
    size: string;
    phases: string;
    file: File | null;
    comments: string;
    designType: string;
    subcategories: string[];
  };
  updateData: (data: {
    size: string;
    phases: string;
    file: File | null;
    comments: string;
    designType: string;
    subcategories: string[];
  }) => void;
  handleNext: () => void;
  handlePrevious: () => void;
}) => {
  const formik = useFormik({
    initialValues: {
      size: data.size || "",
      phases: data.phases || "",
      file: data.file || null,
      comments: data.comments || "",
      designType: data.designType || "",
      subcategories: data.subcategories || [],
    },
    validationSchema: propertyDetailsSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      updateData(values);
      handleNext();
      console.log(values);
    },
  });

  // const selectedDesign = formik.values.designType;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      formik.setFieldValue("file", event.target.files[0]);
    }
  };

  const isFormValid = () => {
    return (
      !!formik.values.size &&
      !!formik.values.phases &&
      !!formik.values.file &&
      !!formik.values.comments &&
      !!formik.values.designType &&
      formik.values.subcategories.length > 0 &&
      !Object.keys(formik.errors).length
    );
  };
  return (
    <Container>
      <Typography variant="h6">Basic Information</Typography>

      <FlexRow>
        <TextField
          label="Size (in sq. ft.)"
          variant="outlined"
          // fullWidth
          name="size"
          type="number"
          value={formik.values.size}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.size && Boolean(formik.errors.size)}
          helperText={formik.touched.size && formik.errors.size}
        />
      </FlexRow>

      <Box sx={{ p: 4 }}>
        <SelectOption
          name="designType"
          label="Design Type"
          options={designOptions.map(({ value, label }) => ({ value, label }))}
          value={formik.values.designType}
          onChange={(e) => {
            // Clear subcategories when designType is changed
            formik.setFieldValue("designType", e.target.value);
            formik.setFieldValue("subcategories", []); // Reset subcategories
          }}
          error={formik.touched.designType && Boolean(formik.errors.designType)}
          helperText={formik.touched.designType && formik.errors.designType}
        />

        {/* Subcategories */}
        {formik.values.designType && (
          <Box sx={{ mt: 4 }}>
            <InputLabel id="subcategory-label">Subcategories</InputLabel>
            <Select
              labelId="subcategory-label"
              id="subcategories"
              fullWidth
              name="subcategories"
              multiple
              value={formik.values.subcategories}
              onChange={(e) =>
                formik.setFieldValue("subcategories", e.target.value)
              }
              renderValue={(selected) => selected.join(", ")}
            >
              {designOptions
                .find((option) => option.value === formik.values.designType)
                ?.subcategories.map((subcategory) => (
                  <MenuItem key={subcategory} value={subcategory}>
                    <Checkbox
                      checked={formik.values.subcategories.includes(
                        subcategory
                      )}
                    />
                    <ListItemText primary={subcategory} />
                  </MenuItem>
                ))}
            </Select>
            {formik.touched.subcategories && formik.errors.subcategories && (
              <FormHelperText>{formik.errors.subcategories}</FormHelperText>
            )}
          </Box>
        )}
      </Box>

      <Phashes>
        <TextField
          label="Number of Phases"
          variant="outlined"
          name="phases"
          type="number"
          value={formik.values.phases}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phases && Boolean(formik.errors.phases)}
          helperText={formik.touched.phases && formik.errors.phases}
        />
        <SelectFile>
          <Typography variant="subtitle1">Floor Plans & 3D Designs</Typography>
          <Box>
            <Button
              variant="outlined"
              title="Select File"
              color="#000"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "8px 16px",
              }}
              onClick={() => document.getElementById("fileInput")?.click()}
            />
            <input
              type="file"
              id="fileInput"
              hidden
              onChange={handleFileChange}
            />
            {formik.values.file && (
              <p
                style={{
                  marginTop: "8px",
                  fontSize: "14px",
                  color: "#555555",
                }}
              >
                Selected File: {formik.values.file.name}
              </p>
            )}
            {formik.touched.file && formik.errors.file && (
              <Typography color="error">{formik.errors.file}</Typography>
            )}
          </Box>
        </SelectFile>
      </Phashes>

      <TextField
        label="Additional Comments"
        variant="outlined"
        fullWidth
        name="comments"
        value={formik.values.comments}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.comments && Boolean(formik.errors.comments)}
        helperText={formik.touched.comments && formik.errors.comments}
      />

      <ButtonSection>
        <Button
          title="Previous"
          color="secondary"
          onClick={handlePrevious}
          variant="contained"
        />
        <Button
          title="Next"
          color="primary"
          variant="contained"
          disabled={!isFormValid() || formik.isSubmitting}
          onClick={formik.submitForm}
        />
      </ButtonSection>
    </Container>
  );
};

export default PropertyDetails;
