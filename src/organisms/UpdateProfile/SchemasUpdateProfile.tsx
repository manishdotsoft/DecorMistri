import * as Yup from 'yup';

export const updateProfileSchema = Yup.object({
  businessName: Yup.string()
    .min(2, 'Business name must be at least 2 characters')
    .max(25, 'Business name cannot exceed 25 characters')
    .required('Business name is required'),
  professionalCategory: Yup.string().required(
    'Please select a professional category'
  ),
  designTypeExpertise: Yup.string().required('Please select a design type'),
  styleTypeExpertise: Yup.string().required('Please select a style'),
  state: Yup.string().required('Please select a state'),
  city: Yup.string().required('Please select a city'),
  location: Yup.string().required('Please select a location'),
});
