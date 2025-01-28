// import { useFormik } from 'formik';
// import { timelineScheduleSchema } from '../../Schema';

// interface TimelineScheduleData {
//   startDate?: Date | null;
//   endDate?: Date | null;
// }

// interface UseTimelineScheduleProps {
//   data: TimelineScheduleData;
//   updateData: (data: { page: string; data: Record<string, unknown> }) => void;
//   handleNext: () => void;
// }

// const useTimelineSchedule = ({
//   data,
//   updateData,
//   handleNext,
// }: UseTimelineScheduleProps) => {
//   const formik = useFormik({
//     initialValues: {
//       startDate: data.startDate || null,
//       endDate: data.endDate || null,
//     },
//     validationSchema: timelineScheduleSchema,
//     validateOnBlur: true,
//     validateOnChange: false, // Prevent unnecessary validations
//     onSubmit: (values) => {
//       updateData({
//         page: 'timelineSchedule',
//         data: {
//           ...values,
//           startDate: values.startDate ? values.startDate.toISOString() : null,
//           endDate: values.endDate ? values.endDate.toISOString() : null,
//         },
//       });
//       handleNext();
//     },
//   });

//   // Manual validation for form validity without useCallback
//   const isFormValid = () => {
//     return formik.values.startDate !== null && formik.values.endDate !== null;
//   };

//   // Manual synchronization without useEffect
//   const serializedValues = {
//     ...formik.values,
//     startDate: formik.values.startDate
//       ? formik.values.startDate.toISOString()
//       : null,
//     endDate: formik.values.endDate ? formik.values.endDate.toISOString() : null,
//   };

//   const previousData = JSON.stringify(data);
//   const currentData = JSON.stringify(serializedValues);

//   if (previousData !== currentData) {
//     updateData({
//       page: 'timelineSchedule',
//       data: serializedValues,
//     });
//   }

//   return {
//     formik,
//     isFormValid,
//   };
// };

// export default useTimelineSchedule;

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
        data: {
          ...values,
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
