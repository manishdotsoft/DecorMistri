import { useEffect, useCallback } from "react";
import { useFormik } from "formik";
import { timelineScheduleSchema } from "../../Schema";

interface TimelineScheduleData {
  startDate?: Date | null;
  endDate?: Date | null;
}

interface UseTimelineScheduleProps {
  data: TimelineScheduleData;
  updateData: (data: TimelineScheduleData) => void;
  handleNext: () => void;
}

const useTimelineSchedule = ({
  data,
  updateData,
  handleNext,
}: UseTimelineScheduleProps) => {
  const formik = useFormik({
    initialValues: {
      startDate: data.startDate || null,
      endDate: data.endDate || null,
    },
    validationSchema: timelineScheduleSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      updateData(values);
      console.log(values);
      handleNext();
    },
  });

  const isFormValid = useCallback(() => {
    return formik.values.startDate !== null && formik.values.endDate !== null;
  }, [formik.values]);

  useEffect(() => {
    updateData(formik.values);
  }, [formik.values, updateData]);

  return {
    formik,
    isFormValid,
  };
};

export default useTimelineSchedule;
