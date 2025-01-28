import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PageKey =
  | 'projectProviderInformation'
  | 'clientDetails'
  | 'propertyDetails'
  | 'propertyLocationDetails'
  | 'timelineSchedule'
  | 'financialDetails';

type ProjectProviderInformation = {
  projectNumber: string;
  dateOfIssue: string;
  designerName: string;
  email: string;
  phoneNumber: string;
  website: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
  addressLine1: string;
  addressLine2?: string;
};

type ClientDetailsType = {
  clientName: string;
  clientEmail: string;
  phoneNumber: string;
  city: string;
  country: string;
  state: string;
  zipCode: string;
  addressLine1: string;
  addressLine2?: string;
};

type PropertyDetails = {
  size: string;
  designType: string;
  subcategories: string;
  phases: string;
  file: string;
  comments: string;
};

type PropertyLocationDetails = {
  country: string;
  state: string;
  city: string;
  zip: string;
  addressLine1: string;
  addressLine2: string;
};

type TimelineSchedule = {
  startDate?: string | null;
  endDate?: string | null;
};

type FinancialDetails = {
  estimatedBudget: '';
  paymentReceived: '';
};

type FormDataType = {
  projectProviderInformation: ProjectProviderInformation;
  clientDetails: ClientDetailsType;
  propertyDetails: PropertyDetails;
  propertyLocationDetails: PropertyLocationDetails;
  timelineSchedule: TimelineSchedule;
  financialDetails: FinancialDetails;
};

const initialState = {
  currentPageIndex: 0,
  formData: {
    projectProviderInformation: {
      projectNumber: '',
      dateOfIssue: '',
      designerName: '',
      email: '',
      phoneNumber: '',
      website: '',
      country: '',
      state: '',
      city: '',
      zipCode: '',
      addressLine1: '',
      addressLine2: '',
    },
    clientDetails: {
      clientName: '',
      clientEmail: '',
      phoneNumber: '',
      city: '',
      country: '',
      state: '',
      zipCode: '',
      addressLine1: '',
      addressLine2: '',
    },
    propertyDetails: {
      size: '',
      designType: '',
      subcategories: '',
      phases: '',
      file: '',
      comments: '',
    },
    propertyLocationDetails: {
      country: '',
      state: '',
      city: '',
      zip: '',
      addressLine1: '',
      addressLine2: '',
    },
    timelineSchedule: {
      startDate: null,
      endDate: null,
    },
    financialDetails: {
      estimatedBudget: '',
      paymentReceived: '',
    },
  } as FormDataType,
  completedSteps: Array(6).fill(false),
  pages: [
    'Project & Provider Information',
    'Client Details',
    'Property Details',
    'Property Location Details',
    'Timeline & Schedule',
    'Financial Details',
  ] as const,
};

const createProjectSlice = createSlice({
  name: 'createProject',
  initialState,
  reducers: {
    nextPage(state) {
      if (state.currentPageIndex < state.pages.length) {
        state.completedSteps[state.currentPageIndex] = true;
        state.currentPageIndex += 1;
      }
    },
    previousPage(state) {
      if (state.currentPageIndex > 0) {
        state.currentPageIndex -= 1;
      }
    },
    updateFormData(
      state,
      action: PayloadAction<{ page: PageKey; data: Record<string, unknown> }>
    ) {
      const { page, data } = action.payload;
      if (JSON.stringify(state.formData[page]) !== JSON.stringify(data)) {
        state.formData[page] = {
          ...state.formData[page],
          ...data,
        };
      }
    },
    resetFormData(state) {
      state.formData = initialState.formData;
      state.currentPageIndex = 0;
      state.completedSteps = Array(state.pages.length).fill(false);
    },
  },
});

export const { nextPage, previousPage, updateFormData, resetFormData } =
  createProjectSlice.actions;

export default createProjectSlice.reducer;
