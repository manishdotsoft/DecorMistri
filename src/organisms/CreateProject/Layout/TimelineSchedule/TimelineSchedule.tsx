import { Box, Typography } from '@mui/material';
import {
  ButtonSection,
  Container,
  FlexRow,
  FullWidthFormControl,
} from './TimelineSchedule.style';
import Button from '../../../../atoms/Button/Button';
import useTimelineSchedule from './TimelineSchedule.hook';
import { useState } from 'react';
import TextInput from '../../../../atoms/TextInput/TextInput';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { DatePicker } from '../../../../atoms/DatePicker/DatePicker';

interface TimelineScheduleProps {
  data: {
    startDate: Date | null;
    endDate: Date | null;
  };
  updateData: (values: TimelineScheduleProps['data']) => void;
  currentPageIndex: number;
  handleNext: () => void;
  handlePrevious: () => void;
}

const TimelineSchedule: React.FC<TimelineScheduleProps> = ({
  data,
  updateData,
  handleNext,
  handlePrevious,
}) => {
  const { formik, isFormValid } = useTimelineSchedule({
    data,
    updateData,
    handleNext,
  });

  console.log(formik.values, 'value');

  // Separate states for each DatePicker
  const [startDatePickerOpen, setStartDatePickerOpen] = useState(false);
  const [endDatePickerOpen, setEndDatePickerOpen] = useState(false);

  const handleDateChange = (
    field: 'startDate' | 'endDate',
    date: Date | null
  ) => {
    formik.setFieldValue(field, date);
    if (field === 'startDate') {
      setStartDatePickerOpen(false);
    } else {
      setEndDatePickerOpen(false);
    }
  };

  return (
    <Container>
      <Typography variant="h6">Timeline Schedule</Typography>

      <FlexRow>
        {/* Start Date Field */}
        <FullWidthFormControl>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <label>Start Date</label>
            <Box sx={{ position: 'relative' }}>
              <TextInput
                name="startDate"
                type="text"
                value={
                  formik.values.startDate
                    ? new Date(formik.values.startDate).toLocaleDateString()
                    : ''
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.startDate && Boolean(formik.errors.startDate)
                }
                style={{ width: '90%', borderRadius: '5px' }}
                placeholder="Select a date"
              />
              <CalendarMonthIcon
                style={{
                  position: 'absolute',
                  right: 10,
                  top: 15,
                  cursor: 'pointer',
                }}
                onClick={() => {
                  setStartDatePickerOpen(!startDatePickerOpen);
                  setEndDatePickerOpen(false); // Close other date picker
                }}
              />
            </Box>
            {startDatePickerOpen && (
              <Box
                sx={{
                  position: 'absolute',
                  zIndex: 50,
                  top: '80px',
                  right: '0px',

                  background: '#fde3f4',
                }}
              >
                <DatePicker
                  initialDate={formik.values.startDate}
                  onDateChange={(date) => handleDateChange('startDate', date)}
                />
              </Box>
            )}
            {formik.errors.startDate && formik.touched.startDate && (
              <Typography color="error">{formik.errors.startDate}</Typography>
            )}
          </Box>
        </FullWidthFormControl>

        {/* End Date Field */}
        <FullWidthFormControl>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <label>End Date</label>
            <Box sx={{ position: 'relative' }}>
              <TextInput
                name="endDate"
                type="text"
                value={
                  formik.values.endDate
                    ? new Date(formik.values.endDate).toLocaleDateString()
                    : ''
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.endDate && Boolean(formik.errors.endDate)}
                style={{ width: '90%', borderRadius: '5px' }}
                placeholder="Select a date"
              />
              <CalendarMonthIcon
                style={{
                  position: 'absolute',
                  right: 10,
                  top: 15,
                  cursor: 'pointer',
                }}
                onClick={() => {
                  setEndDatePickerOpen(!endDatePickerOpen);
                  setStartDatePickerOpen(false); // Close other date picker
                }}
              />
            </Box>
            {endDatePickerOpen && (
              <Box
                sx={{
                  position: 'absolute',
                  zIndex: 50,
                  top: '80px',
                  right: '0px',

                  background: '#fde3f4',
                }}
              >
                <DatePicker
                  initialDate={formik.values.endDate}
                  onDateChange={(date) => handleDateChange('endDate', date)}
                />
              </Box>
            )}
            {formik.errors.endDate && formik.touched.endDate && (
              <Typography color="error">{formik.errors.endDate}</Typography>
            )}
          </Box>
        </FullWidthFormControl>
      </FlexRow>

      {/* Navigation Buttons */}
      <ButtonSection>
        <Button
          title="Previous"
          color="secondary"
          onClick={handlePrevious}
          variant="contained"
        />
        <Button
          title="Next"
          color="primary"
          onClick={() => formik.handleSubmit()}
          variant="contained"
          disabled={!isFormValid() || !formik.isValid}
        />
      </ButtonSection>
    </Container>
  );
};

export default TimelineSchedule;
