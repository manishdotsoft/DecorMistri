import React from "react";
import {
  Box,
  Checkbox,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ButtonProject from "../../atoms/Button/Button";
import {
  CardContainer,
  FilterBox,
  SearchContainer,
  StyledInput,
  ActionBox,
  BoxItems,
} from "./HeaderFilter.style";
import SelectOption from "../../atoms/Select/SelectOption";
import useHeaderFilter from "./Header.hook";

interface DesignOption {
  value: string;
  label: string;
  subcategories: string[];
}

const designOptions: DesignOption[] = [
  {
    value: "commercial",
    label: "Commercial Design",
    subcategories: ["Office Spaces", "Retail Spaces"],
  },
  {
    value: "residential",
    label: "Residential Design",
    subcategories: ["Living Areas", "Bedrooms"],
  },
];

const HeaderFilter: React.FC = () => {
  const {
    selectedOption,
    values,
    handleOptionChange,
    handleSubcategoriesChange,
    filteredSubcategories,
  } = useHeaderFilter({ designOptions });

  return (
    <CardContainer>
      <FilterBox>
        <BoxItems>
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
              width: "100%",
              padding: 1,
              margin: 0,
              color: "black",
            }}
          />
          {values.designType && (
            <BoxItems>
              <InputLabel id="subcategory-label">Subcategories</InputLabel>
              <Select
                labelId="subcategory-label"
                id="subcategories"
                fullWidth
                multiple
                value={values.subcategories}
                onChange={handleSubcategoriesChange}
                renderValue={(selected) => (selected as string[]).join(", ")}
                aria-label="Select subcategories"
              >
                {filteredSubcategories.map((subcategory) => (
                  <MenuItem key={subcategory} value={subcategory}>
                    <Checkbox
                      checked={values.subcategories.includes(subcategory)}
                    />
                    <ListItemText primary={subcategory} />
                  </MenuItem>
                ))}
              </Select>
            </BoxItems>
          )}
        </BoxItems>
      </FilterBox>
      <ActionBox>
        <SearchContainer>
          <StyledInput placeholder="Search..." aria-label="Search field" />
          <SearchIcon />
        </SearchContainer>
        <Box>
          <ButtonProject
            title="Create new project"
            variant="contained"
            fontWeight="600"
            color="#fff"
            style={{
              width: "180px",
              borderRadius: "4px",
              backgroundColor: "primary.main",
            }}
            onClick={() => console.log("Button clicked")}
          />
        </Box>
      </ActionBox>
    </CardContainer>
  );
};

export default HeaderFilter;
