import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { updateFormDataAsync } from '../../store/reducers/action';
import { Typography, Stepper, Step, StepLabel } from '@mui/material';
import { useCreateProject } from './CreateProject.hook';
import ProjectProviderInformation from './Layout/ProjectProviderInformation/ProjectProviderInformation';
import PropertyDetails from './Layout/PropertyDetails/PropertyDetails';
import PropertyLocationDetails from './Layout/PropertyLocationDetails/PropertyLocationDetails';
import ClientDetails from './Layout/ClientDetails/ClientDetails';
import TimelineSchedule from './Layout/TimelineSchedule/TimelineSchedule';
import FinancialDetails from './Layout/FinancialDetails/FinancialDetails';
import {
  // CompletedStepIcon,
  MainBox,
  // StepIconContainer,
  // StepNumber,
  StyledPageContent,
  // StyledSidebar,
} from './CreateProject.style';
import Toaster from '../../atoms/Toaster/Toaster';

const CreateProject = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    currentPageIndex,
    formData,
    completedSteps,
    handleNext,
    handlePrevious,
    pages,
    handleSubmit,
    showToast,
    handleToasterClose,
  } = useCreateProject();
  const previousFormData = useRef(formData);

  useEffect(() => {
    const page = pages[currentPageIndex];
    const currentPageData = formData[page];

    if (
      JSON.stringify(previousFormData.current[page]) !==
      JSON.stringify(currentPageData)
    ) {
      dispatch(updateFormDataAsync({ page, data: currentPageData }));
      previousFormData.current[page] = currentPageData;
    }
  }, [currentPageIndex, formData, dispatch, pages]);

  const renderPages = () => {
    return pages.slice(0, currentPageIndex + 1).map((page, index) => {
      switch (page) {
        case 'Project & Provider Information':
          return (
            <ProjectProviderInformation
              key={index}
              data={formData.projectProviderInformation}
              currentPageIndex={index}
              updateData={(data) =>
                dispatch(
                  updateFormDataAsync({
                    page: 'projectProviderInformation',
                    data,
                  })
                )
              }
              handleNext={handleNext}
              handlePrevious={handlePrevious}
            />
          );
        case 'Client Details':
          return (
            <ClientDetails
              key={index}
              data={formData.clientDetails}
              currentPageIndex={index}
              updateData={(data) =>
                dispatch(updateFormDataAsync({ page: 'clientDetails', data }))
              }
              handleNext={handleNext}
              handlePrevious={handlePrevious}
            />
          );
        case 'Property Details':
          return (
            <PropertyDetails
              key={index}
              data={formData.propertyDetails}
              currentPageIndex={index}
              updateData={(data) =>
                dispatch(updateFormDataAsync({ page: 'propertyDetails', data }))
              }
              handleNext={handleNext}
              handlePrevious={handlePrevious}
            />
          );
        case 'Property Location Details':
          return (
            <PropertyLocationDetails
              key={index}
              data={formData.propertyLocationDetails}
              currentPageIndex={index}
              updateData={(data) =>
                dispatch(
                  updateFormDataAsync({ page: 'propertyLocationDetails', data })
                )
              }
              handleNext={handleNext}
              handlePrevious={handlePrevious}
            />
          );
        case 'Timeline & Schedule':
          return (
            <TimelineSchedule
              key={index}
              data={formData.timelineSchedule}
              currentPageIndex={index}
              updateData={(data) =>
                dispatch(
                  updateFormDataAsync({ page: 'timelineSchedule', data })
                )
              }
              handleNext={handleNext}
              handlePrevious={handlePrevious}
            />
          );
        case 'Financial Details':
          return (
            <FinancialDetails
              key={index}
              data={formData.financialDetails}
              currentPageIndex={index}
              updateData={(data) =>
                dispatch(
                  updateFormDataAsync({ page: 'financialDetails', data })
                )
              }
              handleNext={handleNext}
              handlePrevious={handlePrevious}
              handleSubmit={() => handleSubmit(formData)}
            />
          );
        default:
          return (
            <Typography key={index}>Please select a valid page.</Typography>
          );
      }
    });
  };

  return (
    <MainBox>
      {/* Sidebar */}
      {/* <StyledSidebar>
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
      </StyledSidebar> */}

      {/* Main Page Content */}
      <StyledPageContent>
        <Typography variant="h5" gutterBottom>
          {pages[currentPageIndex]}
        </Typography>
        {renderPages()}
      </StyledPageContent>
      {showToast ? (
        <Toaster
          message={'Project Created SuccessFully'}
          severity={'success'}
          open={showToast}
          onClose={handleToasterClose}
        />
      ) : (
        ''
      )}
    </MainBox>
  );
};

export default CreateProject;

// -------------------------------

{
  /* <MainBox>
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

      <StyledPageContent>
        <Typography variant="h5" gutterBottom>
          {pages[currentPageIndex]}
        </Typography>
        {renderPageContent()}
      </StyledPageContent>
    </MainBox> */
}
