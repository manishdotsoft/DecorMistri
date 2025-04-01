import useHeaderFilterHooks from './DashboardHeader.hook';
import {
  Container,
  // ActionsSection,
  SearchContainer,
  StyledSearchIcon,
  FilterSection,
  // TitelBox,
  DateBox,
  DrawerBox,
  // ChindContainer,
  DrawerTitle,
  ContantBox,
  FilterSectionDrawer,
  ShortSection,
  ShortIcon,
  ThreeLineIcon,
} from './DashboardHeader.style';
import filterIcon from '../../assets/images/logo/filter-svgrepo-com.svg';

// --------------

import plusIcon2 from '../../assets/images/sidebar/plusIcon2.svg';
import DatePickerIcon from '../../assets/images/logo/datepicker.svg';

import {
  Drawer,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import 'react-datepicker/dist/react-datepicker.css';
import TextInput from '../../atoms/TextInput/TextInput';
import Button from '../../atoms/Button/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '../../assets/images/logo/Search.svg';
import ShortByIcon from '../../assets/images/logo/arrowdown 2.svg';
import XxlLineIcon from '../../assets/images/logo/xxlLine.svg';
import XlLineIcon from '../../assets/images/logo/xlLine.svg';
import LgLineIcon from '../../assets/images/logo/lgLine.svg';

import MultiDatePicker from '../../atoms/MultiDate/MultiDatePicker';
import { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/system';

interface DashboardHeaderProps {
  title: string;
  name: string;
  label: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = () =>
  // { title }
  {
    const isMobile = useMediaQuery('(max-width: 1024px)');
    const {
      searchValue,
      handleSearchChange,
      setSearchValue,
      toggleDrawer,
      drawerOpen,
    } = useHeaderFilterHooks();

    const navigate = useNavigate();
    const theme = useTheme();
    // State to toggle Filter and Sort dropdowns
    const [filterOpen, setFilterOpen] = useState(false);
    const [sortOpen, setSortOpen] = useState(false);

    // Refs for detecting outside click
    const filterRef = useRef<HTMLDivElement>(null);
    const sortRef = useRef<HTMLDivElement>(null);
    // ------------Now --------

    const handleSearchSubmit = () => {
      console.log('Search Value:', searchValue);
      setSearchValue('');
    };

    const toggleFilterDropdown = () => {
      setFilterOpen(!filterOpen);
      setSortOpen(false); // Close sort dropdown if open
    };

    const toggleSortDropdown = () => {
      setSortOpen(!sortOpen);
      setFilterOpen(false); // Close filter dropdown if open
    };

    const [isDateBoxActive, setIsDateBoxActive] = useState(false);
    const dateBoxRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //   const handleClickOutside = (event: MouseEvent) => {
    //     if (
    //       (dateBoxRef.current &&
    //         !dateBoxRef.current.contains(event.target as Node),
    //       // filter
    //       filterRef.current &&
    //         !filterRef.current.contains(event.target as Node))
    //     ) {
    //       setIsDateBoxActive(false);
    //       setFilterOpen(false);
    //     }
    //     if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
    //       setSortOpen(false);
    //   };

    //   document.addEventListener('mousedown', handleClickOutside);
    //   return () => {
    //     document.removeEventListener('mousedown', handleClickOutside);
    //   };
    // }, []);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          (dateBoxRef.current &&
            !dateBoxRef.current.contains(event.target as Node)) ||
          (filterRef.current &&
            !filterRef.current.contains(event.target as Node)) ||
          (sortRef.current && !sortRef.current.contains(event.target as Node))
        ) {
          setIsDateBoxActive(false);
          setFilterOpen(false);
          setSortOpen(false);
        }
        // if (
        //   sortRef.current &&
        //   !sortRef.current.contains(event.target as Node)
        // ) {
        //   setSortOpen(false);
        // }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    // ---------------

    return (
      <Container>
        <SearchContainer>
          <TextInput
            name="search"
            type="text"
            label="Search"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search by Category, Name, ID, or related topic"
            style={{
              width: '100%',
              borderRadius: '8px',
              fontSize: '0.9rem',
              padding: '11px 11px 11px 50px',
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
                handleSearchSubmit();
              }
            }}
          />
          <StyledSearchIcon onClick={handleSearchSubmit}>
            <img src={SearchIcon} alt="Search" style={{ height: '18px' }} />
          </StyledSearchIcon>
        </SearchContainer>

        {isMobile ? (
          <IconButton onClick={() => toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        ) : (
          <FilterSection>
            {/* Start Date Picker */}

            <DateBox
              ref={dateBoxRef}
              borderColor={
                isDateBoxActive
                  ? theme.palette.decor.main
                  : theme.palette.grey[300]
              }
              onClick={() => setIsDateBoxActive(true)}
            >
              <MultiDatePicker
                style={{
                  display: 'flex',
                }}
                sx={{
                  '& .MuiOutlinedInput-input': {
                    padding: '10px',
                    fontSize: '0.8rem',
                    borderRadius: '8px',
                    width: '160px',
                  },
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                    '& fieldset': {
                      border: 'none',
                    },

                    '&.Mui-focused fieldset': {
                      borderColor: theme.palette.decor.main,
                    },
                  },
                }}
                popperSX={{
                  '&.MuiPopper-root': {
                    backgroundColor: theme.palette.white.main,
                    borderRadius: '8px',
                    border: `1px solid ${theme.palette.decor.main}`,
                  },
                }}
                dateCalendarSX={{
                  '& .MuiPickersDay-root.Mui-selected': {
                    backgroundColor: theme.palette.decor.main,
                    color: 'white',
                    '&:hover': {
                      backgroundColor: theme.palette.decor.main,
                    },
                  },
                }}
                datePickerIcon={DatePickerIcon}
                datePickerIconStyle={{ height: '18px', marginTop: '8px' }}
              />
            </DateBox>

            {/* Filter Button */}
            <Box sx={{ position: 'relative' }}>
              <Button
                title="Filter"
                variant="outlined"
                logo={filterIcon}
                buttonFontSize={theme.typography.subtitle2.fontSize}
                style={{
                  color: theme.palette.black[200],
                  borderRadius: '8px',
                  width: '100%',
                  border: `1px solid ${theme.palette.grey[300]}`,
                  fontSize: theme.typography.caption.fontSize,
                  padding: '0px 12px',
                }}
                onClick={toggleFilterDropdown}
                svgIcon={{ height: '15px', color: theme.palette.grey[300] }}
              />
              {filterOpen && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '40px',
                    left: '0',
                    background: '#fff',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    zIndex: 10,
                  }}
                >
                  {['Option 1', 'Option 2', 'Option 3'].map((option) => (
                    <Box
                      key={option}
                      sx={{
                        padding: '3px 15px',
                        cursor: 'pointer',
                        fontFamily: theme.typography.fontFamily,
                        '&:hover': {
                          backgroundColor: theme.palette.grey[200],
                        },
                      }}
                      onClick={() => console.log(option)}
                    >
                      <Typography
                        sx={{
                          fontSize: theme.typography.caption,
                        }}
                      >
                        {option}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>

            {/* Sort Button */}
            <Box sx={{ position: 'relative' }} onClick={toggleSortDropdown}>
              <ShortSection>
                <ShortIcon>
                  <img src={ShortByIcon} alt="" />
                  <ThreeLineIcon>
                    <img src={XxlLineIcon} alt="" />
                    <img src={XlLineIcon} alt="" />
                    <img src={LgLineIcon} alt="" />
                  </ThreeLineIcon>
                </ShortIcon>

                <Button
                  title="Sort By"
                  variant="outlined"
                  buttonFontSize={theme.typography.caption.fontSize}
                  style={{
                    color: theme.palette.black[200],
                    borderRadius: '5px',
                    width: '100%',
                    border: 'none',
                  }}
                  onClick={toggleSortDropdown}
                />
              </ShortSection>
              {sortOpen && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '40px',
                    left: '0',
                    background: '#fff',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {['Ascending', 'Descending'].map((option) => (
                    <Box
                      key={option}
                      sx={{
                        padding: '3px 16px',
                        cursor: 'pointer',
                        fontFamily: theme.typography.fontFamily,
                        '&:hover': {
                          backgroundColor: theme.palette.grey[200],
                        },
                      }}
                      onClick={() => {
                        console.log(option);
                        console.log('Selected Value:', option);
                        setSortOpen(false);
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: theme.typography.caption,
                        }}
                      >
                        {option}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>

            {/* Create Project Button */}
            <Button
              title="Create Project"
              variant="outlined"
              logo={plusIcon2}
              buttonFontSize={theme.typography.subtitle2.fontSize}
              style={{
                color: theme.palette.decor.main,
                borderRadius: '8px',
                width: '140px',
                border: `1px solid ${theme.palette.decor.main}`,
              }}
              onClick={() => navigate('/create-project')}
              svgIcon={{ height: '12px', color: theme.palette.decor.main }}
            />
          </FilterSection>
        )}

        {/* Top Drawer */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => toggleDrawer(false)}
        >
          <ContantBox>
            <DrawerBox>
              <DrawerTitle>Filters & Options</DrawerTitle>
              <IconButton
                onClick={() => toggleDrawer(false)}
                style={{
                  position: 'absolute',
                  left: '10px',
                  top: '10px',
                }}
              >
                <CloseIcon />
              </IconButton>

              <FilterSectionDrawer>
                <DateBox
                  ref={dateBoxRef}
                  borderColor={
                    isDateBoxActive
                      ? theme.palette.decor.main
                      : theme.palette.grey[300]
                  }
                  onClick={() => setIsDateBoxActive(true)}
                >
                  <MultiDatePicker
                    style={{
                      display: 'flex',
                    }}
                    sx={{
                      '& .MuiOutlinedInput-input': {
                        padding: '10px',
                        fontSize: '0.8rem',
                        borderRadius: '8px',
                      },
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                        '& fieldset': {
                          border: 'none',
                        },

                        '&.Mui-focused fieldset': {
                          borderColor: theme.palette.decor.main,
                        },
                      },
                    }}
                    popperSX={{
                      '&.MuiPopper-root': {
                        backgroundColor: '#ffffff',
                        borderRadius: '8px',
                        border: `1px solid ${theme.palette.decor.main}`,
                      },
                    }}
                    dateCalendarSX={{
                      '& .MuiPickersDay-root.Mui-selected': {
                        backgroundColor: theme.palette.decor.main,
                        color: 'white',
                        '&:hover': {
                          backgroundColor: theme.palette.decor.main,
                        },
                      },
                    }}
                    datePickerIcon={DatePickerIcon}
                    datePickerIconStyle={{ height: '18px', marginTop: '8px' }}
                  />
                </DateBox>

                {/* Filter Button */}
                <Button
                  title="Filter"
                  variant="outlined"
                  logo={filterIcon}
                  style={{
                    color: theme.palette.text.secondary,
                    borderRadius: '5px',
                    width: '100%',
                    border: `1px solid ${theme.palette.grey[300]}`,
                    fontSize: theme.typography.body2.fontSize,
                  }}
                  onClick={() => console.log('Filter clicked')}
                  svgIcon={{ height: '12px', color: theme.palette.grey[300] }}
                />

                {/* Sort Button */}
                <Button
                  title="Sort"
                  variant="outlined"
                  // logo={sortIcon}
                  style={{
                    color: theme.palette.text.secondary,
                    borderRadius: '5px',
                    width: '100%',
                    border: `1px solid ${theme.palette.grey[300]}`,
                  }}
                  onClick={() => console.log('Sort clicked')}
                  svgIcon={{ height: '12px' }}
                />
                <Button
                  title="Create Project"
                  variant="outlined"
                  logo={plusIcon2}
                  style={{
                    color: theme.palette.decor.main,
                    borderRadius: '5px',
                    width: '100%',
                    border: `1px solid ${theme.palette.decor.main}`,
                    // fontSize: theme.typography.subtitle2.fontSize,
                  }}
                  onClick={() => navigate('/create-project')}
                  svgIcon={{
                    height: '12px',
                    color: theme.palette.decor.main,
                  }}
                />

                {/* Create Project Button */}
              </FilterSectionDrawer>
            </DrawerBox>
          </ContantBox>
        </Drawer>
      </Container>
    );
  };

export default DashboardHeader;
