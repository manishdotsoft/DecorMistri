import { useState } from "react";

type PageKey =
  | "projectProviderInformation"
  | "clientDetails"
  | "propertyDetails"
  | "propertyLocationDetails"
  | "timelineSchedule"
  | "financialDetails";

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
  "Project & Provider Information",
  "Client Details",
  "Property Details",
  "Property Location Details",
  "Timeline & Schedule",
  "Financial Details",
] as const;

export const useCreateProject = () => {
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
      clientName: "",
      clientEmail: "",
      phoneNumber: "",
      city: "",
      country: "",
      state: "",
      zipCode: "",
      addressLine1: "",
      addressLine2: "",
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
