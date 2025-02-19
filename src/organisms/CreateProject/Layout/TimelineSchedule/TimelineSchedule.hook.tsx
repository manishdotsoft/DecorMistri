import { useFormik } from 'formik';
import { timelineScheduleSchema } from '../../Schema';

interface TimelineScheduleData {
  startDate?: Date | null;
  endDate?: Date | null;
}

interface UseTimelineScheduleProps {
  data: TimelineScheduleData;
  updateData: (data: { page: string; data: Record<string, unknown> }) => void;
  handleNext: () => void;
  handlePrevious: () => void;
}

const useTimelineSchedule = ({
  data,
  updateData,
  handleNext,
  handlePrevious,
}: UseTimelineScheduleProps) => {
  // Check localStorage for previously saved data
  const savedData = JSON.parse(
    localStorage.getItem('timelineScheduleData') || '{}'
  );

  const formik = useFormik({
    initialValues: {
      startDate: savedData.startDate
        ? new Date(savedData.startDate)
        : data.startDate
          ? new Date(data.startDate)
          : null,
      endDate: savedData.endDate
        ? new Date(savedData.endDate)
        : data.endDate
          ? new Date(data.endDate)
          : null,
    },
    validationSchema: timelineScheduleSchema,
    onSubmit: (values) => {
      updateData({
        page: 'timelineSchedule',
        data: {
          startDate: values.startDate ? values.startDate.toISOString() : null,
          endDate: values.endDate ? values.endDate.toISOString() : null,
        },
      });
      handleNext();
    },
  });

  const isFormValid = () => {
    return formik.values.startDate && formik.values.endDate;
  };

  return {
    formik,
    isFormValid,
    handlePrevious,
    handleNext,
  };
};

export default useTimelineSchedule;
