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

import { Drawer, IconButton, useMediaQuery } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TextInput from '../../atoms/TextInput/TextInput';
import Button from '../../atoms/Button/Button';
import palette from '../../thems/primitives/palette';
import typeset from '../../thems/primitives/typeset';
import MenuIcon from '@mui/icons-material/Menu';

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
            color="primary"
            variant="outlined"
            logo={filterIcon}
            style={{
              color: palette.text.secondary,
              borderRadius: '5px',
              width: '100%',
              border: `1px solid ${palette.grey[300]}`,
              fontSize: typeset.body2.fontSize,
            }}
            onClick={() => console.log('Filter clicked')}
            svgIcon={{ height: '12px', color: palette.grey[300] }}
          />

          {/* Sort Button */}
          <Button
            title="Sort"
            color="primary"
            variant="outlined"
            logo={sortIcon}
            style={{
              color: palette.text.secondary,
              borderRadius: '5px',
              width: '100%',

              border: `1px solid ${palette.grey[300]}`,
            }}
            onClick={() => console.log('Sort clicked')}
            svgIcon={{ height: '12px' }}
          />

          {/* Create Project Button */}
          <Button
            title="Create Project"
            color="primary"
            variant="outlined"
            logo={plusIcon2}
            style={{
              color: palette.decor.main,
              borderRadius: '5px',
              width: '140px',
              border: `1px solid ${palette.decor.main}`,
            }}
            onClick={() => onLinkClick('Create Project')}
            svgIcon={{ height: '12px', color: palette.decor.main }}
          />
        </FilterSection>
      )}

      {/* Top Drawer */}
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <ContantBox>
          <DrawerBox>
            <DrawerTitle>Filters & Options</DrawerTitle>
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
                color="primary"
                variant="outlined"
                logo={filterIcon}
                style={{
                  color: palette.text.secondary,
                  borderRadius: '5px',
                  width: '100%',
                  border: `1px solid ${palette.grey[300]}`,
                  fontSize: typeset.body2.fontSize,
                }}
                onClick={() => console.log('Filter clicked')}
                svgIcon={{ height: '12px', color: palette.grey[300] }}
              />

              {/* Sort Button */}
              <Button
                title="Sort"
                color="primary"
                variant="outlined"
                logo={sortIcon}
                style={{
                  color: palette.text.secondary,
                  borderRadius: '5px',
                  width: '100%',
                  border: `1px solid ${palette.grey[300]}`,
                }}
                onClick={() => console.log('Sort clicked')}
                svgIcon={{ height: '12px' }}
              />

              {/* Create Project Button */}
              <Button
                title="Create Project"
                color="primary"
                variant="outlined"
                logo={plusIcon2}
                style={{
                  color: palette.decor.main,
                  borderRadius: '5px',
                  width: '100%',
                  border: `1px solid ${palette.decor.main}`,
                }}
                onClick={() => onLinkClick('Create Project')}
                svgIcon={{ height: '12px', color: palette.decor.main }}
              />
            </FilterSectionDrawer>
          </DrawerBox>
        </ContantBox>
      </Drawer>
    </Container>
  );
};

export default DashboardHeader;
