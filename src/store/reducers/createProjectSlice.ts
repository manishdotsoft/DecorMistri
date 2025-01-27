import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PageKey =
  | 'projectProviderInformation'
  | 'clientDetails'
  | 'propertyDetails'
  | 'propertyLocationDetails'
  | 'timelineSchedule'
  | 'financialDetails';

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

type FormDataType = {
  projectProviderInformation: Record<string, unknown>;
  clientDetails: ClientDetailsType;
  propertyDetails: Record<string, unknown>;
  propertyLocationDetails: Record<string, unknown>;
  timelineSchedule: {
    startDate?: string | null; // Use ISO string format in Redux state
    endDate?: string | null;
  };
  financialDetails: Record<string, unknown>;
};

const initialState = {
  currentPageIndex: 0,
  formData: {
    projectProviderInformation: {},
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
    propertyDetails: {},
    propertyLocationDetails: {},
    timelineSchedule: {
      startDate: null,
      endDate: null,
    },
    financialDetails: {},
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
      if (state.currentPageIndex < state.pages.length - 1) {
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
