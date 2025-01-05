import { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { StyledSidebar, StyledPageContent, Title } from "./CreateProject.style";
import ProjectProviderInformation from "./ProjectProviderInformation/ProjectProviderInformation";
import ClientDetails from "./ClientDetails/ClientDetails";
import PropertyDetails from "./PropertyDetails/PropertyDetails";
import PropertyLocationDetails from "./PropertyLocationDetails/PropertyLocationDetails";
import TimelineSchedule from "./TimelineSchedule/TimelineSchedule";
import FinancialDetails from "./FinancialDetails/FinancialDetails";

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

const CreateProject = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [formData, setFormData] = useState<
    Record<PageKey, Record<string, unknown>>
  >({
    projectProviderInformation: {},
    clientDetails: {},
    propertyDetails: {},
    propertyLocationDetails: {},
    timelineSchedule: {},
    financialDetails: {},
  });

  const handleNext = () => {
    if (currentPageIndex < pages.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPageIndex > 0) {
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
      <StyledSidebar>
        <Title>Create Project</Title>
        <List>
          {pages.map((page, index) => (
            <ListItem component="li" key={page}>
              <ListItemButton
                selected={currentPageIndex === index}
                sx={{
                  "&.Mui-selected": { backgroundColor: "#e0f7fa" },
                }}
              >
                <ListItemText primary={page} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </StyledSidebar>

      <StyledPageContent>
        <Typography variant="h5" gutterBottom>
          {pages[currentPageIndex]}
        </Typography>
        <Box>{renderPageContent()}</Box>
      </StyledPageContent>
    </Box>
  );
};

export default CreateProject;
