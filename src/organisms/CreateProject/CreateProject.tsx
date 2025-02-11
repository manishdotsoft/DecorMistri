import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { updateFormDataAsync } from '../../store/reducers/action';

import { useCreateProject } from './CreateProject.hook';
import ProjectProviderInformation from './Layout/ProjectProviderInformation/ProjectProviderInformation';
import PropertyDetails from './Layout/PropertyDetails/PropertyDetails';
import PropertyLocationDetails from './Layout/PropertyLocationDetails/PropertyLocationDetails';
import ClientDetails from './Layout/ClientDetails/ClientDetails';
import TimelineSchedule from './Layout/TimelineSchedule/TimelineSchedule';
import FinancialDetails from './Layout/FinancialDetails/FinancialDetails';

import {
  CreateProjectHeader,
  HeaderIconSec,
  MainBox,
  StyledPageContent,
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
  StyledTypography,
} from './CreateProject.style';

import Toaster from '../../atoms/Toaster/Toaster';
import SaveImage from '../../assets/images/createProject/complete.svg';
import DownArrow from '../../assets/images/createProject/DownArrow.svg';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const CreateProject = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    currentPageIndex,
    formData,
    handleNext,
    handlePrevious,
    pages,
    handleSubmit,
    showToast,
    handleToasterClose,
    activePage,
    completedSteps,
    toastMessage,
    // setShowToast,
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
    return pages.map((page, index) => {
      const isExpanded = index === activePage;

      return (
        <StyledAccordion
          key={index}
          expanded={isExpanded}
          completed={completedSteps[index]}
        >
          <StyledAccordionSummary isExpanded={isExpanded}>
            <CreateProjectHeader>
              <StyledTypography isExpanded={isExpanded}>
                {page}
              </StyledTypography>
              <HeaderIconSec isExpanded={isExpanded}>
                {completedSteps[index] ? (
                  <img
                    src={SaveImage}
                    alt="Completed Step"
                    width="25"
                    height="25"
                  />
                ) : isExpanded ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <img src={DownArrow} alt="" />
                )}
              </HeaderIconSec>
            </CreateProjectHeader>
          </StyledAccordionSummary>

          <StyledAccordionDetails>
            {isExpanded && (
              <>
                {page === 'Project & Provider Information' && (
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
                    // showToast={showToast}
                    // handleToasterClose={handleToasterClose}
                    // setShowToast={setShowToast}
                  />
                )}
                {page === 'Client Details' && (
                  <ClientDetails
                    key={index}
                    data={formData.clientDetails}
                    currentPageIndex={index}
                    updateData={(data) =>
                      dispatch(
                        updateFormDataAsync({ page: 'clientDetails', data })
                      )
                    }
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                  />
                )}
                {page === 'Property Details' && (
                  <PropertyDetails
                    key={index}
                    data={formData.propertyDetails}
                    currentPageIndex={index}
                    updateData={(data) =>
                      dispatch(
                        updateFormDataAsync({ page: 'propertyDetails', data })
                      )
                    }
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                  />
                )}
                {page === 'Property Location Details' && (
                  <PropertyLocationDetails
                    key={index}
                    data={formData.propertyLocationDetails}
                    currentPageIndex={index}
                    updateData={(data) =>
                      dispatch(
                        updateFormDataAsync({
                          page: 'propertyLocationDetails',
                          data,
                        })
                      )
                    }
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                  />
                )}
                {page === 'Timeline & Schedule' && (
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
                )}
                {page === 'Financial Details' && (
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
                )}
              </>
            )}
          </StyledAccordionDetails>
        </StyledAccordion>
      );
    });
  };

  return (
    <MainBox>
      <StyledPageContent>{renderPages()}</StyledPageContent>
      {showToast && (
        <Toaster
          message={toastMessage}
          severity={'success'}
          open={showToast}
          onClose={handleToasterClose}
        />
      )}
    </MainBox>
  );
};

export default CreateProject;
