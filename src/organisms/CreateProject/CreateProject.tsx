import { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  // Button,
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
];

const CreateProject = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

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

  const renderPageContent = () => {
    switch (pages[currentPageIndex]) {
      case "Project & Provider Information":
        return (
          <ProjectProviderInformation
            currentPageIndex={currentPageIndex}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        );
      case "Client Details":
        return (
          <ClientDetails
            currentPageIndex={currentPageIndex}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        );
      case "Property Details":
        return (
          <PropertyDetails
            currentPageIndex={currentPageIndex}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        );
      case "Property Location Details":
        return (
          <PropertyLocationDetails
            currentPageIndex={currentPageIndex}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        );
      case "Timeline & Schedule":
        return (
          <TimelineSchedule
            currentPageIndex={currentPageIndex}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        );

      case "Financial Details":
        return (
          <FinancialDetails
            currentPageIndex={currentPageIndex}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        );
      default:
        return <Typography>Select a page to view its content.</Typography>;
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
                // onClick={() => setCurrentPageIndex(index)}
                selected={currentPageIndex === index}
              >
                <ListItemText primary={page} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </StyledSidebar>

      <StyledPageContent>
        <Typography variant="h5" component="h1" gutterBottom>
          {pages[currentPageIndex]}
        </Typography>
        <Box>{renderPageContent()}</Box>
      </StyledPageContent>
    </Box>
  );
};

export default CreateProject;
