import {
  SidebarContainer,
  SidebarSection,
  ContentSection,
  LinkBox,
  TitleTypography,
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
  StyledTypography,
  ExpandIconStyled,
  LinkTypography,
} from './Sidebar.styel';
import { Typography } from '@mui/material';
import SideBarHooks from './SideBar.Hooks';

const Sidebar = () => {
  const { content, handleClick, handleOptionClick, activeOption } =
    SideBarHooks();

  return (
    <SidebarContainer>
      <SidebarSection>
        <TitleTypography variant="h6">DECORDMISTRI</TitleTypography>

        <LinkBox>
          <LinkTypography onClick={() => handleClick('dashboard')}>
            Dashboard
          </LinkTypography>
          <LinkTypography onClick={() => handleClick('Calendar View')}>
            Calendar View
          </LinkTypography>
        </LinkBox>

        {/* Dropdown for Create & Manage */}
        <StyledAccordion>
          <StyledAccordionSummary expandIcon={<ExpandIconStyled />}>
            <Typography>Create & Manage</Typography>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <StyledTypography
              onClick={() => handleOptionClick('Create Project')}
              style={{
                fontWeight:
                  activeOption === 'Create Project' ? 'bold' : 'normal',
              }}
            >
              Create Project
            </StyledTypography>
            <StyledTypography
              onClick={() => handleOptionClick('Create Task')}
              style={{
                fontWeight: activeOption === 'Create Task' ? 'bold' : 'normal',
              }}
            >
              Create Task
            </StyledTypography>
          </StyledAccordionDetails>
        </StyledAccordion>

        <StyledAccordion>
          <StyledAccordionSummary expandIcon={<ExpandIconStyled />}>
            <Typography>Projects</Typography>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <StyledTypography
              onClick={() => handleOptionClick('Live Projects')}
              style={{
                fontWeight:
                  activeOption === 'Live Projects' ? 'bold' : 'normal',
              }}
            >
              Live Projects
            </StyledTypography>
            <StyledTypography
              onClick={() => handleOptionClick('Upcoming Projects')}
              style={{
                fontWeight:
                  activeOption === 'Upcoming Projects' ? 'bold' : 'normal',
              }}
            >
              Upcoming Projects
            </StyledTypography>
            <StyledTypography
              onClick={() => handleOptionClick('Completed Projects')}
              style={{
                fontWeight:
                  activeOption === 'Completed Projects' ? 'bold' : 'normal',
              }}
            >
              Completed Projects
            </StyledTypography>
            <StyledTypography
              onClick={() => handleOptionClick('All Projects & Quotes')}
              style={{
                fontWeight:
                  activeOption === 'All Projects & Quotes' ? 'bold' : 'normal',
              }}
            >
              All Projects & Quotes
            </StyledTypography>
          </StyledAccordionDetails>
        </StyledAccordion>

        {/* Dropdown for Chat & Inbox */}
        <StyledAccordion>
          <StyledAccordionSummary expandIcon={<ExpandIconStyled />}>
            <Typography>Chat & Inbox</Typography>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <StyledTypography
              onClick={() => handleOptionClick('Core Chat Functionality')}
              style={{
                fontWeight:
                  activeOption === 'Core Chat Functionality'
                    ? 'bold'
                    : 'normal',
              }}
            >
              Core Chat Functionality
            </StyledTypography>
            <StyledTypography
              onClick={() => handleOptionClick('Inbox Management')}
              style={{
                fontWeight:
                  activeOption === 'Inbox Management' ? 'bold' : 'normal',
              }}
            >
              Inbox Management
            </StyledTypography>
          </StyledAccordionDetails>
        </StyledAccordion>

        {/* Dropdown for User Management */}
        <StyledAccordion>
          <StyledAccordionSummary expandIcon={<ExpandIconStyled />}>
            <Typography>User Management</Typography>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <StyledTypography
              onClick={() => handleOptionClick('Create User')}
              style={{
                fontWeight: activeOption === 'Create User' ? 'bold' : 'normal',
              }}
            >
              Create User
            </StyledTypography>
            <StyledTypography
              onClick={() => handleOptionClick('Manage Users')}
              style={{
                fontWeight: activeOption === 'Manage Users' ? 'bold' : 'normal',
              }}
            >
              Manage Users
            </StyledTypography>
            <StyledTypography
              onClick={() => handleOptionClick('User Permissions')}
              style={{
                fontWeight:
                  activeOption === 'User Permissions' ? 'bold' : 'normal',
              }}
            >
              User Permissions
            </StyledTypography>
          </StyledAccordionDetails>
        </StyledAccordion>

        {/* Dropdown for My Profile */}
        <StyledAccordion>
          <StyledAccordionSummary expandIcon={<ExpandIconStyled />}>
            <Typography>My Profile</Typography>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <StyledTypography
              onClick={() => handleOptionClick('Profile Information')}
              style={{
                fontWeight:
                  activeOption === 'Profile Information' ? 'bold' : 'normal',
              }}
            >
              Profile Information
            </StyledTypography>
            <StyledTypography
              onClick={() => handleOptionClick('Business Details')}
              style={{
                fontWeight:
                  activeOption === 'Business Details' ? 'bold' : 'normal',
              }}
            >
              Business Details
            </StyledTypography>
            <StyledTypography
              onClick={() => handleOptionClick('Advanced Settings')}
              style={{
                fontWeight:
                  activeOption === 'Advanced Settings' ? 'bold' : 'normal',
              }}
            >
              Advanced Settings
            </StyledTypography>
          </StyledAccordionDetails>
        </StyledAccordion>
      </SidebarSection>

      <ContentSection>{content}</ContentSection>
    </SidebarContainer>
  );
};

export default Sidebar;
