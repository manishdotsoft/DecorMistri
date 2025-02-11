import { Box, Typography } from '@mui/material';
import {
  ButtonSection,
  Container,
  GridContainer,
  InputLabelItem,
} from './TimelineSchedule.style';
import Button from '../../../../atoms/Button/Button';
import useTimelineSchedule from './TimelineSchedule.hook';
import { useState } from 'react';
import { DatePicker } from '../../../../atoms/DatePicker/DatePicker';

interface TimelineScheduleProps {
  data: {
    startDate: string | null | undefined;
    endDate: string | null | undefined;
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

  const [isPageVisible, setIsPageVisible] = useState(true);
  const handleNextClick = () => {
    setIsPageVisible(false);
    formik.handleSubmit();
  };

  // const handlePreviousClick = () => {
  //   setIsPageVisible(true);
  // };
  return (
    isPageVisible && (
      <Container>
        {/* Start Date Field */}
        <GridContainer>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <InputLabelItem>Start Date</InputLabelItem>

            <DatePicker
              onDateChange={(value: Date | null) =>
                formik.setFieldValue('startDate', value)
              }
              style={{
                width: '100%',
              }}
            />

            {formik.errors.startDate && formik.touched.startDate && (
              <Typography color="error">{formik.errors.startDate}</Typography>
            )}
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <InputLabelItem>End Date</InputLabelItem>

            <DatePicker
              onDateChange={(value: Date | null) =>
                formik.setFieldValue('endDate', value)
              }
              style={{
                width: '100%',
              }}
            />

            {formik.errors.endDate && formik.touched.endDate && (
              <Typography color="error">{formik.errors.endDate}</Typography>
            )}
          </Box>
        </GridContainer>

        {/* Navigation Buttons */}
        <ButtonSection>
          <Button
            title="Previous"
            color="primary"
            variant="contained"
            onClick={handlePrevious}
            style={{ borderRadius: '8px', width: '150px' }}
          />
          <Button
            title="Save"
            color="primary"
            variant="contained"
            disabled={!isFormValid() || !formik.isValid}
            onClick={handleNextClick}
            style={{ borderRadius: '8px', width: '150px' }}
          />
        </ButtonSection>
      </Container>
    )
  );
};

export default TimelineSchedule;
