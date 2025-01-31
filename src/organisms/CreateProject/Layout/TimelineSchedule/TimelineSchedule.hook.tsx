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
  const formik = useFormik({
    initialValues: {
      startDate: data.startDate ? new Date(data.startDate) : null,
      endDate: data.endDate ? new Date(data.endDate) : null,
    },
    validationSchema: timelineScheduleSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      updateData({
        page: 'timelineSchedule',
        // data: {
        ...values,
        startDate: values.startDate ? values.startDate.toISOString() : null,
        endDate: values.endDate ? values.endDate.toISOString() : null,
        // },
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
