import { Box } from '@mui/material';
import Select from '../../atoms/Select/Select';
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

const HeaderFilter = () => {
  const theme = useTheme();

  return (
    <CardContainer>
      <FilterBox>
        <FilterAltIcon />
        <Select
          value="Filter Option"
          options={['Filter Option ', 'Design Type', 'Start Date', 'End Date']}
          onChange={(value: string) => console.log(value)}
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
