import useHeaderFilterHooks from './DashboardHeader.hook';
import {
  Container,
  ActionsSection,
  SearchContainer,
  StyledSearchIcon,
  FilterSection,
  TitelBox,
  DateBox,
  StartDateBox,
  DateCntainer,
  IconBox,
  DatePikerBox,
  DrawerBox,
  ChindContainer,
  DrawerTitle,
  ContantBox,
  FilterSectionDrawer,
} from './DashboardHeader.style';
import filterIcon from '../../assets/images/logo/filter-svgrepo-com.svg';
import sortIcon from '../../assets/images/logo/bar-chart-svgrepo-com.svg';
import plusIcon2 from '../../assets/images/sidebar/plusIcon2.svg';
import DatePickerIcon from '../../assets/images/logo/datepicker.svg';

import { Drawer, IconButton, useMediaQuery, useTheme } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TextInput from '../../atoms/TextInput/TextInput';
import Button from '../../atoms/Button/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface DashboardHeaderProps {
  title: string;
  onLinkClick: (option: string) => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  title,
  onLinkClick,
}) => {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const {
    searchValue,
    handleSearchChange,
    isStartDatePickerOpen,
    isEndDatePickerOpen,
    handleEndDateChange,
    toggleEndDatePicker,
    handleStartDateChange,
    toggleStartDatePicker,
    startDate,
    endDate,
    toggleDrawer,
    drawerOpen,
  } = useHeaderFilterHooks();

  const theme = useTheme();

  return (
    <Container>
      {/* Title Section */}
      <ChindContainer>
        <ActionsSection>
          <TitelBox>{title}</TitelBox>
        </ActionsSection>
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
              paddingLeft: '40px',
              height: '4px',
            }}
          />
          <StyledSearchIcon />
        </SearchContainer>
      </ChindContainer>

      {isMobile ? (
        <IconButton onClick={() => toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
      ) : (
        <FilterSection>
          {/* Start Date Picker */}
          <DateBox>
            <StartDateBox>
              <DateCntainer onClick={toggleStartDatePicker}>
                <TextInput
                  name="startDate"
                  type="text"
                  label="Start Date"
                  onChange={() => {}}
                  value={startDate ? startDate.toLocaleDateString() : ''}
                  placeholder="Start Date"
                  style={{
                    width: '80%',
                    height: '4px',
                    borderRadius: '6px',
                    border: 'none',
                  }}
                />
                <IconBox>
                  <img
                    src={DatePickerIcon}
                    alt="Date Picker"
                    style={{ height: '18px' }}
                  />
                </IconBox>
              </DateCntainer>
              {isStartDatePickerOpen && (
                <DatePikerBox>
                  <DatePicker
                    selected={startDate}
                    onChange={handleStartDateChange}
                    inline
                  />
                </DatePikerBox>
              )}
            </StartDateBox>

            {/* End Date Picker */}
            <StartDateBox>
              <DateCntainer onClick={toggleEndDatePicker}>
                <TextInput
                  name="endDate"
                  type="text"
                  label="End Date"
                  onChange={() => {}}
                  value={endDate ? endDate.toLocaleDateString() : ''}
                  placeholder="End Date"
                  style={{
                    width: '80%',
                    height: '4px',
                    borderRadius: '6px',
                    border: 'none',
                  }}
                />
                <IconBox>
                  <img
                    src={DatePickerIcon}
                    alt="Date Picker"
                    style={{ height: '18px' }}
                  />
                </IconBox>
              </DateCntainer>
              {isEndDatePickerOpen && (
                <DatePikerBox>
                  <DatePicker
                    selected={endDate}
                    onChange={handleEndDateChange}
                    inline
                  />
                </DatePikerBox>
              )}
            </StartDateBox>
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
            logo={sortIcon}
            style={{
              color: theme.palette.text.secondary,
              borderRadius: '5px',
              width: '100%',

              border: `1px solid ${theme.palette.grey[300]}`,
            }}
            onClick={() => console.log('Sort clicked')}
            svgIcon={{ height: '12px' }}
          />

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
            onClick={() => onLinkClick('Create Project')}
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
              <DateBox>
                <StartDateBox>
                  <DateCntainer onClick={toggleStartDatePicker}>
                    <TextInput
                      name="startDate"
                      type="text"
                      label="Start Date"
                      onChange={() => {}}
                      value={startDate ? startDate.toLocaleDateString() : ''}
                      placeholder="Start Date"
                      style={{
                        width: '80%',
                        height: '4px',
                        borderRadius: '6px',
                        border: 'none',
                      }}
                    />
                    <IconBox>
                      <img
                        src={DatePickerIcon}
                        alt="Date Picker"
                        style={{ height: '18px' }}
                      />
                    </IconBox>
                  </DateCntainer>
                  {isStartDatePickerOpen && (
                    <DatePikerBox>
                      <DatePicker
                        selected={startDate}
                        onChange={handleStartDateChange}
                        inline
                      />
                    </DatePikerBox>
                  )}
                </StartDateBox>

                {/* End Date Picker */}
                <StartDateBox>
                  <DateCntainer onClick={toggleEndDatePicker}>
                    <TextInput
                      name="endDate"
                      type="text"
                      label="End Date"
                      onChange={() => {}}
                      value={endDate ? endDate.toLocaleDateString() : ''}
                      placeholder="End Date"
                      style={{
                        width: '80%',
                        height: '4px',
                        borderRadius: '6px',
                        border: 'none',
                      }}
                    />
                    <IconBox>
                      <img
                        src={DatePickerIcon}
                        alt="Date Picker"
                        style={{ height: '18px' }}
                      />
                    </IconBox>
                  </DateCntainer>
                  {isEndDatePickerOpen && (
                    <DatePikerBox>
                      <DatePicker
                        selected={endDate}
                        onChange={handleEndDateChange}
                        inline
                      />
                    </DatePikerBox>
                  )}
                </StartDateBox>
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
                logo={sortIcon}
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
                onClick={() => onLinkClick('Create Project')}
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
