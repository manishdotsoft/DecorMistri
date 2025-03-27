import * as Yup from 'yup';

// ProjectProviderInformation Schema
export const projectProviderSchema = Yup.object({
  projectNumber: Yup.string().min(2).required('Project Number/ID is required'),
  dateOfIssue: Yup.date().nullable().required('Date of Issue is required'),
  // dateOfIssue: Yup.string().nullable().required("Date of Issue is required"),
  designerName: Yup.string()
    .min(1)
    .required('Interior Designer Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: Yup.string()
    .matches(
      /^[6-9]\d{9}$/,
      'Phone number must be 10 digits and start with 6, 7, 8, or 9'
    )
    .required('Phone Number is required'),
  // city: Yup.string().required('City is required'),
  // country: Yup.string().required('Country is required'),
  state: Yup.string().required('Province/State is required'),
  addressLine1: Yup.string().required('Address Line 1 is required'),
  // zipCode: Yup.string().min(6).required('Zip/Postal Code is required'),
});

// ClientDetails Schema
export const clientDetailsSchema = Yup.object().shape({
  clientName: Yup.string().required('Client Name is required'),
  clientEmail: Yup.string()
    .email('Invalid email')
    .required('Client Email ID is required'),
  phoneNumber: Yup.string()
    .matches(
      /^[6-9]\d{9}$/,
      'Phone number must be 10 digits and start with 6, 7, 8, or 9'
    )
    .required('Phone Number is required'),
  city: Yup.string().required('City is required'),
  // country: Yup.string().required('Country is required'),
  state: Yup.string().required('Province/State is required'),
  zipCode: Yup.string().min(6).required('Zip/Postal Code is required'),
  addressLine1: Yup.string().required('Address Line 1 is required'),
});

// PropertyDetails Schema
export const propertyDetailsSchema = Yup.object({
  size: Yup.string()
    .min(2, 'Size must be at least 2 characters')
    .required('Size is required'),
  phases: Yup.string().required('Number of Phases is required'),
  file: Yup.mixed().required('File is required'),
  comments: Yup.string().required('Comments are required'),
  designType: Yup.string().required('Design type is required.'),
  subcategories: Yup.array()
    .of(Yup.string())
    .min(1, 'At least one subcategory must be selected.')
    .required('Subcategories are required.'),
});

// PropertyLocationDetails Schema
export const propertyLocationSchema = Yup.object().shape({
  country: Yup.string().required('Country is required'),
  state: Yup.string().required('State is required'),
  city: Yup.string().required('City is required'),
  zip: Yup.string()
    .required('Zip code is required')
    .matches(/^[0-9]{6}$/, 'Invalid Zip/Postal code format'),
  addressLine1: Yup.string().required('Address line 1 is required'),
});

//

export const timelineScheduleSchema = Yup.object().shape({
  startDate: Yup.date()
    .required('Start Date is required')
    .nullable()
    .typeError('Invalid date format'),
  endDate: Yup.date()
    .required('End Date is required')
    .nullable()
    .typeError('Invalid date format')
    .when('startDate', (startDate, schema) => {
      return startDate
        ? schema.min(startDate, 'End Date must be after Start Date')
        : schema;
    }),
});

// Yup schema for financial details
export const financialDetailsSchema = Yup.object().shape({
  estimatedBudget: Yup.string()
    .trim()
    .required('Estimated Budget is required')
    .min(1, 'Estimated Budget cannot be empty'),
  paymentReceived: Yup.string()
    .oneOf(['yes', 'no'], 'Please select whether payment has been received')
    .required('This field is required'),
});
