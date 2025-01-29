import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import {
  nextPage,
  previousPage,
  updateFormData,
} from '../../store/reducers/createProjectSlice';
import { createProjectMutation } from '../../graphql/mutation/createProject';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../utils/formateDate';

export const useCreateProject = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentPageIndex = useSelector(
    (state: RootState) => state.createProject.currentPageIndex
  );
  const formData = useSelector(
    (state: RootState) => state.createProject.formData
  );
  const completedSteps = useSelector(
    (state: RootState) => state.createProject.completedSteps
  );
  const pages = useSelector((state: RootState) => state.createProject.pages);
  const [showToast, setShowToast] = useState(false);

  const handleNext = () => {
    dispatch(nextPage());
  };

  const handlePrevious = () => {
    dispatch(previousPage());
  };

  const updatePageData = (page: string, data: Record<string, unknown>) => {
    dispatch(updateFormData({ page: page as PageKey, data }));
  };

  const handleSubmit = async (finalData: typeof formData) => {
    const mutationInput = {
      projectId: finalData?.projectProviderInformation?.projectNumber,
      dateOfIssue: formatDate(
        finalData?.projectProviderInformation?.dateOfIssue || ''
      ),
      email: finalData?.projectProviderInformation?.email,
      phone: finalData?.projectProviderInformation?.phoneNumber,
      website: finalData?.projectProviderInformation?.website,
      city: finalData?.projectProviderInformation?.city,
      country: finalData?.projectProviderInformation?.country,
      state: finalData?.projectProviderInformation?.state,
      zip_code: finalData?.projectProviderInformation?.zipCode,
      address1: finalData?.projectProviderInformation?.addressLine1,
      address2: finalData?.projectProviderInformation?.addressLine2,
      budget: finalData?.financialDetails?.estimatedBudget,
      interiorDesignerName: finalData?.projectProviderInformation?.designerName,
      startDate: formatDate(finalData?.timelineSchedule?.startDate || ''),
      endDate: formatDate(finalData?.timelineSchedule?.endDate || ''),
      paymentReceived: finalData?.financialDetails?.paymentReceived,
      client_info: {
        name: finalData?.clientDetails?.clientName,
        email: finalData?.clientDetails?.clientEmail,
        address1: finalData?.clientDetails?.addressLine1,
        phone: finalData?.clientDetails?.phoneNumber,
        address2: finalData?.clientDetails?.addressLine2,
        city: finalData?.clientDetails?.city,
        state: finalData?.clientDetails?.state,
        country: finalData?.clientDetails?.country,
        zip_code: finalData?.clientDetails?.zipCode,
        property_info: {
          size: finalData?.propertyDetails?.size,
          phases: finalData?.propertyDetails?.phases,
          comments: finalData?.propertyDetails?.comments,
          property_address: {
            address1: finalData?.propertyLocationDetails?.addressLine1,
            address2: finalData?.propertyLocationDetails?.addressLine2,
            city: finalData?.propertyLocationDetails?.city,
            state: finalData?.propertyLocationDetails?.state,
            country: finalData?.propertyLocationDetails?.country,
            zip_code: finalData?.propertyLocationDetails?.zip,
          },
          designType: finalData?.propertyDetails?.designType,
          subCategory: finalData?.propertyDetails?.subcategories,
        },
      },
    };
    try {
      const response = await createProjectMutation({ input: mutationInput });
      if (response) {
        setShowToast(true);
        navigate('/dashboard');
        return;
      }
    } catch (err) {
      console.error('Unexpected error:', err);
    }
  };

  const handleToasterClose = () => {
    setShowToast(false);
  };

  return {
    currentPageIndex,
    formData,
    completedSteps,
    pages,
    handleNext,
    handlePrevious,
    updatePageData,
    handleSubmit,
    showToast,
    handleToasterClose,
  };
};
