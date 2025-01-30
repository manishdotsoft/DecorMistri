import { Typography } from '@mui/material';
import {
  ButtonSection,
  Container,
  FlexRow,
  FullWidthFormControl,
} from './TimelineSchedule.style';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Button from '../../../../atoms/Button/Button';
import useTimelineSchedule from './TimelineSchedule.hook';

// Import validation schema
interface timelineScheduleProps {
  data: {
    startDate: Date | null;
    endDate: Date | null;
  };
  updateData: (values: timelineScheduleProps['data']) => void;
  currentPageIndex: number;
  handleNext: () => void;
  handlePrevious: () => void;
}

const TimelineSchedule: React.FC<timelineScheduleProps> = ({
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
  return (
    <Container>
      <Typography variant="h6">Timeline Schedule</Typography>

      <FlexRow>
        <FullWidthFormControl>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              name="startDate"
              label="Start Date"
              value={formik.values.startDate}
              onChange={(value: Date | null) =>
                formik.setFieldValue('startDate', value)
              }
              slotProps={{
                textField: {
                  error:
                    formik.touched.startDate &&
                    Boolean(formik.errors.startDate),
                  helperText:
                    formik.touched.startDate && formik.errors.startDate,
                },
              }}
            />
          </LocalizationProvider>
        </FullWidthFormControl>

        <FullWidthFormControl>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              name="endDate"
              label="End Date"
              value={formik.values.endDate}
              onChange={(value: Date | null) =>
                formik.setFieldValue('endDate', value)
              }
              slotProps={{
                textField: {
                  error:
                    formik.touched.endDate && Boolean(formik.errors.endDate),
                  helperText: formik.touched.endDate && formik.errors.endDate,
                },
              }}
            />
          </LocalizationProvider>
        </FullWidthFormControl>
      </FlexRow>

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
