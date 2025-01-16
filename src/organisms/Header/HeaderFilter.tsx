import React, { useState } from 'react';
import {
  Box,
  Checkbox,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ButtonProject from '../../atoms/Button/Button';
import { useTheme } from '@mui/material/styles';
import {
  CardContainer,
  FilterBox,
  SearchContainer,
  StyledInput,
  ActionBox,
} from './HeaderFilter.style';
import SelectOption from '../../atoms/Select/SelectOption';

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

const HeaderFilter = () => {
  const theme = useTheme();

  const [selectedOption, setSelectedOption] = useState<string>('');
  const [values, setValues] = useState({
    designType: '',
    subcategories: [] as string[],
  });

  const handleOptionChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedValue = event.target.value as string;
    setSelectedOption(selectedValue);
    setValues((prev) => ({
      ...prev,
      designType: selectedValue,
      subcategories: [],
    }));
  };

  const handleSubcategoriesChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    const selectedSubcategories = event.target.value as string[];
    setValues((prev) => ({ ...prev, subcategories: selectedSubcategories }));
  };

  return (
    <CardContainer>
      <FilterBox>
        <Box sx={{ p: 4 }}>
          <SelectOption
            name="designType"
            label="Design Type"
            options={designOptions.map(({ value, label }) => ({
              value,
              label,
            }))}
            value={selectedOption}
            onChange={handleOptionChange}
            style={{
              width: '120px',
              padding: '10px',
              margin: '0',
              color: 'black',
            }}
          />

          {/* Subcategories */}
          {values.designType && (
            <Box sx={{ mt: 4 }}>
              <InputLabel id="subcategory-label">Subcategories</InputLabel>
              <Select
                labelId="subcategory-label"
                id="subcategories"
                fullWidth
                name="subcategories"
                multiple
                value={values.subcategories}
                onChange={handleSubcategoriesChange}
                renderValue={(selected) => (selected as string[]).join(', ')}
              >
                {designOptions
                  .find((option) => option.value === values.designType)
                  ?.subcategories.map((subcategory) => (
                    <MenuItem key={subcategory} value={subcategory}>
                      <Checkbox
                        checked={values.subcategories.includes(subcategory)}
                      />
                      <ListItemText primary={subcategory} />
                    </MenuItem>
                  ))}
              </Select>
            </Box>
          )}
        </Box>
      </FilterBox>

      <ActionBox>
        <SearchContainer>
          <StyledInput placeholder="Search Box of all the page" />
          <SearchIcon />
        </SearchContainer>
        <Box>
          <ButtonProject
            title="Create new project"
            variant="contained"
            fontWeight="600"
            color="#fff"
            style={{
              width: '180px',
              borderRadius: '4px',
              backgroundColor: theme.palette.primary.main,
            }}
            onClick={() => console.log('Button clicked')}
          />
        </Box>
      </ActionBox>
    </CardContainer>
  );
};

export default HeaderFilter;
