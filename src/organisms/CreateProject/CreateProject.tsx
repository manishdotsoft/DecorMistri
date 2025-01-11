import { useState } from "react";
import { Box, Typography, Stepper, Step, StepLabel } from "@mui/material";

import ProjectProviderInformation from "./Layout/ProjectProviderInformation/ProjectProviderInformation";
import PropertyDetails from "./Layout/PropertyDetails/PropertyDetails";
import PropertyLocationDetails from "./Layout/PropertyLocationDetails/PropertyLocationDetails";

import {
  CompletedStepIcon,
  StepIconContainer,
  StepNumber,
  StyledPageContent,
  StyledSidebar,
} from "./CreateProject.style";
import ClientDetails from "./Layout/ClientDetails/ClientDetails";
import TimelineSchedule from "./Layout/TimelineSchedule/TimelineSchedule";
import FinancialDetails from "./Layout/FinancialDetails/FinancialDetails";

const pages = [
  "Project & Provider Information",
  "Client Details",
  "Property Details",
  "Property Location Details",
  "Timeline & Schedule",
  "Financial Details",
] as const;

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

const CreateProject = () => {
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
        updatedSteps[currentPageIndex] = false; // Uncheck the current step
        return updatedSteps;
      });
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  const updateFormData = (page: PageKey, data: Record<string, unknown>) => {
    setFormData((prevData) => ({
      ...prevData,
      [page]: { ...prevData[page], ...data },
    }));
  };

  const renderPageContent = () => {
    switch (pages[currentPageIndex]) {
      case "Project & Provider Information":
        return (
          <ProjectProviderInformation
            data={formData.projectProviderInformation}
            currentPageIndex={currentPageIndex}
            updateData={(data) =>
              updateFormData("projectProviderInformation", data)
            }
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        );
      case "Client Details":
        return (
          <ClientDetails
            data={formData.clientDetails}
            currentPageIndex={currentPageIndex}
            updateData={(data) => updateFormData("clientDetails", data)}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        );
      case "Property Details":
        return (
          <PropertyDetails
            data={formData.propertyDetails}
            currentPageIndex={currentPageIndex}
            updateData={(data) => updateFormData("propertyDetails", data)}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        );
      case "Property Location Details":
        return (
          <PropertyLocationDetails
            data={formData.propertyLocationDetails}
            currentPageIndex={currentPageIndex}
            updateData={(data) =>
              updateFormData("propertyLocationDetails", data)
            }
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        );
      case "Timeline & Schedule":
        return (
          <TimelineSchedule
            data={formData.timelineSchedule}
            currentPageIndex={currentPageIndex}
            updateData={(data) => updateFormData("timelineSchedule", data)}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        );
      case "Financial Details":
        return (
          <FinancialDetails
            data={formData.financialDetails}
            currentPageIndex={currentPageIndex}
            updateData={(data) => updateFormData("financialDetails", data)}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        );
      default:
        return (
          <Typography>Please select a valid page from the sidebar.</Typography>
        );
    }
  };

  return (
    <Box display="flex" height="100vh">
      {/* Sidebar */}
      <StyledSidebar>
        <Typography variant="h6" sx={{ marginBottom: 4 }}>
          Create Project
        </Typography>
        <Stepper activeStep={currentPageIndex} orientation="vertical">
          {pages.map((label, index) => (
            <Step key={label}>
              <StepLabel
                StepIconComponent={() => {
                  if (completedSteps[index]) {
                    return <CompletedStepIcon />;
                  }
                  return (
                    <StepIconContainer>
                      <StepNumber variant="body2">{index + 1}</StepNumber>
                    </StepIconContainer>
                  );
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </StyledSidebar>

      {/* Main Page Content */}
      <StyledPageContent>
        <Typography variant="h5" gutterBottom>
          {pages[currentPageIndex]}
        </Typography>
        {renderPageContent()}
      </StyledPageContent>
    </Box>
  );
};

export default CreateProject;
