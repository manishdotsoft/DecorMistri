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
} from './DashboardHeader.style';
import filterIcon from '../../assets/images/logo/filter-svgrepo-com.svg';

// ----chatgpt fix now

import React, { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box, Chip, Stack } from '@mui/material';
import { Dayjs } from 'dayjs';
import DeleteIcon from '@mui/icons-material/Close';

// --------------

import plusIcon2 from '../../assets/images/sidebar/plusIcon2.svg';

import { Drawer, IconButton, useMediaQuery, useTheme } from '@mui/material';
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

// import { Box } from '@mui/system';

interface DashboardHeaderProps {
  title: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = () =>
  // { title }
  {
    const isMobile = useMediaQuery('(max-width: 1024px)');
    const {
      searchValue,
      handleSearchChange,

      toggleDrawer,
      drawerOpen,
    } = useHeaderFilterHooks();

    const navigate = useNavigate();
    const theme = useTheme();

    // ------------Now --------
    const [dates, setDates] = useState<Dayjs[]>([]);
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

    const handleDateChange = (newDate: Dayjs | null) => {
      if (newDate && !dates.some((date) => date.isSame(newDate, 'day'))) {
        setDates([...dates, newDate]);
      }
      setSelectedDate(null); // Reset picker after selection
    };

    const removeDate = (index: number) => {
      setDates(dates.filter((_, i) => i !== index));
    };

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
              paddingLeft: '50px',
              height: '4px',
              fontSize: '0.9rem',
            }}
          />
          <StyledSearchIcon>
            <img src={SearchIcon} alt="" style={{ height: '18px' }} />
          </StyledSearchIcon>
        </SearchContainer>

        {isMobile ? (
          <IconButton onClick={() => toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        ) : (
          <FilterSection>
            {/* Start Date Picker */}

            <DateBox>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={2}>
                  <DatePicker
                    label="Select Date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    // Fix: No `renderInput` prop, use TextField directly
                    slotProps={{ textField: { fullWidth: true } }}
                  />
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {dates.map((date, index) => (
                      <Chip
                        key={index}
                        label={date.format('YYYY-MM-DD')}
                        onDelete={() => removeDate(index)}
                        deleteIcon={<DeleteIcon />}
                      />
                    ))}
                  </Box>
                </Stack>
              </LocalizationProvider>
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
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                border: `1px solid ${theme.palette.grey[300]}`,
                borderRadius: '8px',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={ShortByIcon} alt="" />
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    flexDirection: 'column',
                    gap: '2px',
                  }}
                >
                  <img src={XxlLineIcon} alt="" />
                  <img src={XlLineIcon} alt="" />
                  <img src={LgLineIcon} alt="" />
                </Box>
              </Box>

              <Button
                title="Sort By"
                variant="outlined"
                // logo={sortIcon}
                style={{
                  color: theme.palette.text.secondary,
                  borderRadius: '5px',
                  width: '100%',

                  border: 'none',
                }}
                onClick={() => console.log('Sort clicked')}
                svgIcon={{ height: '12px' }}
              />
            </Box>

            {/* Create Project Button */}
            <Button
              title="Create Project"
              variant="outlined"
              logo={plusIcon2}
              style={{
                color: theme.palette.decor.main,
                borderRadius: '5px',
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
                <DateBox></DateBox>

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
