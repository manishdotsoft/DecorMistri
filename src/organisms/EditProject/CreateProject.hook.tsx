/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { fetchProjectQuery } from '../../graphql/query/editProject';

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

const pages = [
  'Project & Provider Information',
  'Client Details',
  'Property Details',
  'Property Location Details',
  'Timeline & Schedule',
  'Financial Details',
] as const;

export const useCreateProject = (projectId: any) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [formData, setFormData] = useState<{
    projectProviderInformation: Record<string, unknown>;
    clientDetails: ClientDetailsType;
    propertyDetails: Record<string, unknown>;
    propertyLocationDetails: Record<string, unknown>;
    timelineSchedule: Record<string, unknown>;
    financialDetails: Record<string, unknown>;
  }>({
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
    timelineSchedule: {},
    financialDetails: {},
  });
  const [completedSteps, setCompletedSteps] = useState<boolean[]>(
    Array(pages.length).fill(false)
  );

  const handleNext = () => {
    setCompletedSteps((prevSteps) => {
      const updatedSteps = [...prevSteps];
      updatedSteps[currentPageIndex] = true;
      return updatedSteps;
    });
    if (currentPageIndex < pages.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPageIndex > 0) {
      setCompletedSteps((prevSteps) => {
        const updatedSteps = [...prevSteps];
        updatedSteps[currentPageIndex] = false;
        return updatedSteps;
      });
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  const updateFormData = (page: PageKey, data: Record<string, unknown>) => {
    setFormData((prevData) => {
      const updatedPageData = { ...prevData[page], ...data };
      if (JSON.stringify(updatedPageData) !== JSON.stringify(prevData[page])) {
        return { ...prevData, [page]: updatedPageData };
      }
      return prevData;
    });
  };

  console.log(projectId, 'id');

  const fetchProjectDetails = (id: any) => {
    try {
      const response = fetchProjectQuery(id);
      if (response) {
        console.log(response);
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProjectDetails(11);
  }, [projectId]);

  // 679b182d38d507261077ef9a
  // 679b18ef38d507261077ef9f

  return {
    currentPageIndex,
    formData,
    completedSteps,
    handleNext,
    handlePrevious,
    updateFormData,
    pages,
  };
};
