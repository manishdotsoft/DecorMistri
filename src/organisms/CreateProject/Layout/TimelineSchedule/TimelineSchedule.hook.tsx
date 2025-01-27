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
    validateOnChange: false, // Prevent unnecessary validations
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

  // Manual validation for form validity without useCallback
  const isFormValid = () => {
    return formik.values.startDate !== null && formik.values.endDate !== null;
  };

  // Manual synchronization without useEffect
  const serializedValues = {
    ...formik.values,
    startDate: formik.values.startDate
      ? formik.values.startDate.toISOString()
      : null,
    endDate: formik.values.endDate ? formik.values.endDate.toISOString() : null,
  };

  const previousData = JSON.stringify(data);
  const currentData = JSON.stringify(serializedValues);

  if (previousData !== currentData) {
    updateData({
      page: 'timelineSchedule',
      data: serializedValues,
    });
  }

  return {
    formik,
    isFormValid,
  };
};

export default useTimelineSchedule;

// import { useEffect, useCallback } from 'react';
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

//   const isFormValid = useCallback(() => {
//     return formik.values.startDate !== null && formik.values.endDate !== null;
//   }, [formik.values]);

//   useEffect(() => {
//     const serializedValues = {
//       ...formik.values,
//       startDate: formik.values.startDate
//         ? formik.values.startDate.toISOString()
//         : null,
//       endDate: formik.values.endDate
//         ? formik.values.endDate.toISOString()
//         : null,
//     };

//     if (JSON.stringify(serializedValues) !== JSON.stringify(data)) {
//       updateData({
//         page: 'timelineSchedule',
//         data: serializedValues,
//       });
//     }
//   }, [formik.values, data, updateData]);

//   return {
//     formik,
//     isFormValid,
//   };
// };

// export default useTimelineSchedule;
// import { Typography } from '@mui/material';
// import {
//   ButtonSection,
//   Container,
//   FlexRow,
//   FullWidthFormControl,
// } from './TimelineSchedule.style';
// import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import Button from '../../../../atoms/Button/Button';
// import useTimelineSchedule from './TimelineSchedule.hook';

// // Import validation schema

// const TimelineSchedule = ({
//   data,
//   updateData,
//   handleNext,
//   handlePrevious,
// }: {
//   currentPageIndex: number;
//   data: {
//     startDate?: string | null; // Receive ISO string format
//     endDate?: string | null;
//   };
//   updateData: (data: { page: string; data: Record<string, unknown> }) => void;
//   handleNext: () => void;
//   handlePrevious: () => void;
// }) => {
//   const timelineData = {
//     startDate: data.startDate ? new Date(data.startDate) : null,
//     endDate: data.endDate ? new Date(data.endDate) : null,
//   };
//   const { formik, isFormValid } = useTimelineSchedule({
//     data: timelineData,
//     updateData,
//     handleNext,
//   });

//   return (
//     <Container>
//       <Typography variant="h6">Timeline Schedule</Typography>

//       <FlexRow>
//         <FullWidthFormControl>
//           <LocalizationProvider dateAdapter={AdapterDateFns}>
//             <DatePicker
//               name="startDate"
//               label="Start Date"
//               value={formik.values.startDate}
//               onChange={(value: Date | null) =>
//                 formik.setFieldValue('startDate', value)
//               }
//               slotProps={{
//                 textField: {
//                   error:
//                     formik.touched.startDate &&
//                     Boolean(formik.errors.startDate),
//                   helperText:
//                     formik.touched.startDate && formik.errors.startDate,
//                 },
//               }}
//             />
//           </LocalizationProvider>
//         </FullWidthFormControl>

//         <FullWidthFormControl>
//           <LocalizationProvider dateAdapter={AdapterDateFns}>
//             <DatePicker
//               name="endDate"
//               label="End Date"
//               value={formik.values.endDate}
//               onChange={(value: Date | null) =>
//                 formik.setFieldValue('endDate', value)
//               }
//               slotProps={{
//                 textField: {
//                   error:
//                     formik.touched.endDate && Boolean(formik.errors.endDate),
//                   helperText: formik.touched.endDate && formik.errors.endDate,
//                 },
//               }}
//             />
//           </LocalizationProvider>
//         </FullWidthFormControl>
//       </FlexRow>

//       <ButtonSection>
//         <Button
//           title="Previous"
//           color="secondary"
//           onClick={handlePrevious}
//           variant="contained"
//         />
//         <Button
//           title="Next"
//           color="primary"
//           onClick={() => formik.handleSubmit()}
//           variant="contained"
//           disabled={!isFormValid() || !formik.isValid}
//         />
//       </ButtonSection>
//     </Container>
//   );
// };

// export default TimelineSchedule;
