import {
  Typography,
  MenuItem,
  Select,
  FormHelperText,
  Checkbox,
  ListItemText,
  useTheme,
} from '@mui/material';
import {
  ButtonSection,
  Container,
  FileText,
  GridContainer,
  GridContainer2,
  InputLabelItem,
  InputSection,
  SelectFile,
  SelectFileParent,
  SelectSection,
  StyledTypography,
  TextArea,
} from './PropertyDetails.style';
import Button from '../../../../atoms/Button/Button';
import SelectOption from '../../../../atoms/Select/SelectOption';
import usePropertyDetailsForm from './PropertyDetails.hook';
import TextInput from '../../../../atoms/TextInput/TextInput';

const designOptions = [
  {
    value: 'commercial',
    label: 'Commercial Design',
    subcategories: [
      'Office Spaces',
      'Retail Spaces',
      'Hospitality Spaces',
      'Entertainment Spaces',
    ],
  },
  {
    value: 'residential',
    label: 'Residential Design',
    subcategories: [
      'Living Areas',
      'Bedrooms',
      'Dining Areas',
      'Kitchens',
      'Bathrooms',
      'Outdoor Spaces',
    ],
  },
  {
    value: 'industrial',
    label: 'Industrial Design',
    subcategories: [
      'Manufacturing Areas',
      'Storage Areas',
      'Service Areas',
      'Admin Spaces',
      'Specialized Areas',
    ],
  },
  {
    value: 'institutional',
    label: 'Institutional Design',
    subcategories: [
      'Educational Spaces',
      'Healthcare Spaces',
      'Cultural Spaces',
      'Religious Spaces',
      'Government Spaces',
    ],
  },
  {
    value: 'mixed-use',
    label: 'Mixed-Use Design',
    subcategories: [
      'Residential Components',
      'Commercial Components',
      'Shared Amenities',
      'Public Spaces',
    ],
  },
  {
    value: 'landscape',
    label: 'Landscape Design',
    subcategories: [
      'Residential Landscaping',
      'Commercial Landscaping',
      'Urban Landscaping',
      'Environmental Spaces',
      'Specialized Areas',
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
    file: { name: string; size: number; type: string } | null;
    comments: string;
    designType: string;
    subcategories: string[];
  };
  updateData: (data: {
    size: string;
    phases: string;
    file: { name: string; size: number; type: string } | null;
    comments: string;
    designType: string;
    subcategories: string[];
  }) => void;
  handleNext: () => void;
  handlePrevious: () => void;
}) => {
  const { formik, handleFileChange, isFormValid } = usePropertyDetailsForm({
    data,
    updateData,
    handleNext,
  });

  const handleNextClick = () => {
    formik.handleSubmit();
  };

  const theme = useTheme();

  return (
    <Container>
      <GridContainer>
        <InputSection>
          <SelectOption
            name="designType"
            label="Design Type"
            options={designOptions.map(({ value, label }) => ({
              value,
              label,
            }))}
            defaultOption={'Select Design Type'}
            value={formik.values.designType}
            onChange={(e) => {
              formik.setFieldValue('designType', e.target.value);
              formik.setFieldValue('subcategories', []);
            }}
            style={{
              padding: '19px',
              borderRadius: '6px',
              marginTop: '2px',
            }}
            error={
              formik.touched.designType && Boolean(formik.errors.designType)
            }
          />
          {formik.errors.designType && formik.touched.designType && (
            <StyledTypography>{formik.errors.designType}</StyledTypography>
          )}
        </InputSection>
        {/* Subcategories */}

        <InputSection>
          <InputLabelItem id="subcategory-label">Subcategories</InputLabelItem>
          <Select
            labelId="subcategory-label"
            id="subcategories"
            fullWidth
            name="subcategories"
            multiple
            value={formik.values.subcategories}
            onChange={(e) =>
              formik.setFieldValue('subcategories', e.target.value)
            }
            renderValue={(selected) => selected.join(', ')}
            disabled={!formik.values.designType}
            sx={{
              height: '58px',
              borderRadius: '6px',
              backgroundColor: !formik.values.designType
                ? theme.palette.grey[200]
                : 'white',
              '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':
                {
                  borderColor: theme.palette.grey[600],
                },
            }}
          >
            {designOptions
              .find((option) => option.value === formik.values.designType)
              ?.subcategories.map((subcategory) => (
                <MenuItem key={subcategory} value={subcategory}>
                  <Checkbox
                    checked={formik.values.subcategories.includes(subcategory)}
                  />
                  <ListItemText primary={subcategory} />
                </MenuItem>
              ))}
          </Select>
          {formik.touched.subcategories && formik.errors.subcategories && (
            <FormHelperText>{formik.errors.subcategories}</FormHelperText>
          )}
        </InputSection>
      </GridContainer>

      <GridContainer2>
        <InputSection>
          <InputLabelItem>Size (in sq. ft)</InputLabelItem>
          <TextInput
            name="size"
            label="Size (in sq. ft.)"
            type="number"
            value={formik.values.size}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.size && Boolean(formik.errors.size)}
            style={{
              width: '100%',
              borderRadius: '6px',
            }}
            placeholder="Size (in sq. ft.)"
          />
          {formik.errors.size && formik.touched.size && (
            <StyledTypography>{formik.errors.size}</StyledTypography>
          )}
        </InputSection>
        <InputSection>
          {/* ---------new */}

          <SelectOption
            name="phases"
            label="Number of Phases"
            options={[
              { value: 1, label: 'Phases 1' },
              { value: 2, label: 'Phases 2' },
              { value: 3, label: 'Phases 3' },
              { value: 4, label: 'Phases 4' },
              { value: 5, label: 'Phases 5' },
              { value: 6, label: 'Phases 6' },
            ]}
            defaultOption={'Enter no of phases'}
            value={formik.values.phases}
            onChange={formik.handleChange}
            style={{
              padding: '19px',
              borderRadius: '6px',
              marginTop: '2px',
            }}
            error={formik.touched.phases && Boolean(formik.errors.phases)}
          />
          {formik.errors.phases && formik.touched.phases && (
            <StyledTypography>{formik.errors.phases}</StyledTypography>
          )}
        </InputSection>
        <SelectFile>
          <InputLabelItem>Floor Plans & 3D Designs</InputLabelItem>
          <SelectFileParent>
            <SelectSection
              title="Select File"
              onClick={() => document.getElementById('fileInput')?.click()}
            >
              Select plans
            </SelectSection>
            <input
              type="file"
              name="file"
              id="fileInput"
              hidden
              onChange={handleFileChange}
            />
            {formik.values.file && (
              <FileText>Selected File: {formik.values.file.name}</FileText>
            )}
            {formik.touched.file && formik.errors.file && (
              <Typography color="error">{formik.errors.file}</Typography>
            )}
          </SelectFileParent>
        </SelectFile>
      </GridContainer2>

      <InputSection>
        <InputLabelItem>Additional Comments</InputLabelItem>
        <TextArea
          name="comments"
          value={formik.values.comments}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.comments && formik.touched.comments && (
          <StyledTypography>{formik.errors.comments}</StyledTypography>
        )}
      </InputSection>
      <ButtonSection>
        <Button
          title="Previous"
          color="primary"
          variant="contained"
          onClick={handlePrevious}
          style={{
            borderRadius: '8px',
            width: '150px',
            color: theme.palette.decor.main,
            border: `2px solid ${theme.palette.decor.main}`,
          }}
          backgroundColor={theme.palette.white.main}
          hoverBackgroundColor={theme.palette.decor.hover}
        />
        <Button
          title="Save"
          variant="contained"
          disabled={!isFormValid()}
          onClick={handleNextClick}
          style={{
            borderRadius: '8px',
            width: '150px',
            background: !isFormValid() ? '' : theme.palette.decor.main,
          }}
        />
      </ButtonSection>
    </Container>
  );
};

export default PropertyDetails;
