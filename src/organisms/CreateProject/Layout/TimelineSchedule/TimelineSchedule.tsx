import { useEffect } from "react";
import { Typography } from "@mui/material";
import { useFormik } from "formik";
import {
  ButtonSection,
  Container,
  FlexRow,
  FullWidthFormControl,
} from "./TimelineSchedule.style";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Button from "../../../../atoms/Button/Button";

import { timelineScheduleSchema } from "../../Schema";

// Import validation schema

const TimelineSchedule = ({
  data,
  updateData,
  handleNext,
  handlePrevious,
}: {
  currentPageIndex: number;
  data: {
    startDate?: Date | null;
    endDate?: Date | null;
  };
  updateData: (data: {
    startDate?: Date | null;
    endDate?: Date | null;
  }) => void;
  handleNext: () => void;
  handlePrevious: () => void;
}) => {
  const formik = useFormik({
    initialValues: {
      startDate: data.startDate || null,
      endDate: data.endDate || null,
    },
    validationSchema: timelineScheduleSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      updateData(values);
      handleNext();
      console.log(values);
    },
  });

  useEffect(() => {
    updateData(formik.values);
  }, [formik.values, updateData]);

  const isFormValid = () => {
    return formik.values.startDate !== null && formik.values.endDate !== null;
  };

  return (
    <Container>
      <Typography variant="h6">Timeline Schedule</Typography>

      <FlexRow>
        <FullWidthFormControl>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Start Date"
              value={formik.values.startDate}
              onChange={(value: Date | null) =>
                formik.setFieldValue("startDate", value)
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
              label="End Date"
              value={formik.values.endDate}
              onChange={(value: Date | null) =>
                formik.setFieldValue("endDate", value)
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
          onClick={formik.handleSubmit}
          variant="contained"
          disabled={!isFormValid() || !formik.isValid}
        />
      </ButtonSection>
    </Container>
  );
};

export default TimelineSchedule;
