import { useState } from 'react';
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ButtonProject from '../../atoms/Button/Button';
import { useTheme } from '@mui/material/styles';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {
  CardContainer,
  FilterBox,
  SearchContainer,
  StyledInput,
  ActionBox,
} from './HeaderFilter.style';
import SelectOption from '../../atoms/Select/SelectOption';

const HeaderFilter = () => {
  const theme = useTheme();
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedValue = event.target.value as string;
    setSelectedOption(selectedValue);
    console.log(selectedValue); // Logs the selected option value
  };

  return (
    <CardContainer>
      <FilterBox>
        <FilterAltIcon />
        <SelectOption
          name="filterOption"
          label="Design Type"
          options={[
            { value: 'designType', label: 'Design Type' },
            { value: 'startDate', label: 'Start Date' },
            { value: 'endDate', label: 'End Date' },
          ]}
          value={selectedOption}
          onChange={handleOptionChange}
          style={{
            width: '120px',
            padding: '10px',
            margin: '0',
            color: 'black',
          }}
        />
        <SelectOption
          name="filterOption"
          label="Design Type"
          options={[
            { value: 'designType', label: 'Design Type' },
            { value: 'startDate', label: 'Start Date' },
            { value: 'endDate', label: 'End Date' },
          ]}
          value={selectedOption}
          onChange={handleOptionChange}
          style={{
            width: '120px',
            padding: '10px',
            margin: '0',
            color: 'black',
          }}
        />
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
