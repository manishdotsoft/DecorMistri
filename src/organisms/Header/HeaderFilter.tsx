import TextInput from '../../atoms/TextInput/TextInput';
import SelectOption from '../../atoms/Select/SelectOption';
import useHeaderFilterHooks from './Header.hook';
import {
  Container,
  FilterSection,
  ActionsSection,
  SearchContainer,
  StyledSearchIcon,
} from './HeaderFilter.style';
import Button from '../../atoms/Button/Button';
import { DECOR_LOGO_COLOR } from '../../thems/primitives/colors';

import palette from '../../thems/primitives/palette';
import { Link } from 'react-router-dom';

const HeaderFilter = () => {
  const {
    searchValue,
    handleSearchChange,
    selectedDesignType,
    handleDesignTypeChange,
    selectedSubcategory,
    handleSubcategoryChange,
    selectedDate,
    handleDateChange,
    designOptions,
    dateOptions,
    subcategoryOptions,
  } = useHeaderFilterHooks();

  return (
    <Container>
      {/* Filters Section */}
      <FilterSection>
        <SelectOption
          name="designType"
          label="Design Type"
          defaultOption="Select Design"
          options={designOptions.map(({ value, label }) => ({
            value,
            label,
          }))}
          value={selectedDesignType}
          onChange={handleDesignTypeChange}
        />
        {selectedDesignType && (
          <SelectOption
            name="subcategory"
            label="Subcategory"
            defaultOption="Select Category"
            options={subcategoryOptions}
            value={selectedSubcategory}
            onChange={handleSubcategoryChange}
          />
        )}
        <SelectOption
          name="date"
          label="Date"
          defaultOption=" Date"
          options={dateOptions.map(({ value, label }) => ({
            value,
            label,
          }))}
          value={selectedDate}
          onChange={handleDateChange}
        />
      </FilterSection>

      <ActionsSection>
        <SearchContainer>
          <TextInput
            name="search"
            type="text"
            label="Search"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search..."
            style={{ padding: '10px' }}
          />
          <StyledSearchIcon />
        </SearchContainer>
        <Link style={{ textDecoration: 'none' }} to={'/create-project'}>
          <Button
            title="Create Project"
            type="submit"
            color="primary"
            variant="contained"
            style={{
              backgroundColor: DECOR_LOGO_COLOR,
              color: palette.white.main,
              borderRadius: '5px',
              width: '160px',
            }}
            onClick={() => console.log('Create new project clicked')}
          />
        </Link>
      </ActionsSection>
    </Container>
  );
};

export default HeaderFilter;
