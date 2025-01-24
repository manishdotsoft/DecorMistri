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
            options={subcategoryOptions}
            value={selectedSubcategory}
            onChange={handleSubcategoryChange}
          />
        )}
        <SelectOption
          name="date"
          label="Date"
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

        <Button
          title="Create Project"
          type="submit"
          color="primary"
          variant="contained"
          style={{
            backgroundColor: '#C7148A',
            color: '#ffffff',
            borderRadius: '5px',
            width: '160px',
          }}
          onClick={() => console.log('Create new project clicked')}
        />
      </ActionsSection>
    </Container>
  );
};

export default HeaderFilter;
