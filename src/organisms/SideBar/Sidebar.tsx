import DashboardIcon from '../../assets/images/sidebar/dashboard.svg';
import calender from '../../assets/images/sidebar/calender.svg';
import createmanage from '../../assets/images/sidebar/createmanage.svg';
import projects from '../../assets/images/sidebar/projects.svg';
import chatInbox from '../../assets/images/sidebar/chatInbox.svg';
import userManage from '../../assets/images/sidebar/userManage.svg';
import profile from '../../assets/images/sidebar/profile.svg';
import dropdownArrow from '../../assets/images/sidebar/dropdownArrow.svg';
import plusIcon from '../../assets/images/sidebar/plusIcon.svg';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import SideBarHooks from './SideBar.Hooks';
import {
  SidebarContainer,
  SidebarSection,
  ContentSection,
  LinkBox,
  StyledTypography,
  LinkTypography,
  ToggleDiv,
  IconsDiv,
  AccordionBox,
  AccordionContainer,
  ContantBox,
} from './Sidebar.style';
import palette from '../../thems/primitives/palette';
import DashboardHeader from '../../Molecules/DashboardHeader/DashboardHeader';
import CreateProject from '../CreateProject/CreateProject';
import Notifications from '../../Molecules/Notifications/Notifications';

const Sidebar = () => {
  const {
    content,
    handleLinkClick,
    activeLink,
    toggleSection,
    openSection,
    selectedOption,
    setSelectedOption,
  } = SideBarHooks();

  const SidebarData = [
    {
      title: 'Create & Manage',
      icon: <img src={createmanage} alt="img" />,
      options: ['Create Project', 'Create Task'],
    },
    {
      title: 'Projects',
      icon: <img src={projects} alt="img" />,
      options: [
        'Live Projects',
        'Upcoming Projects',
        'Completed Projects',
        'All Projects & Quotes',
      ],
    },
    {
      title: 'Chat & Inbox',
      icon: <img src={chatInbox} alt="img" />,
      options: ['Core Chat Functionality', 'Inbox Management'],
    },
    {
      title: 'User Management',
      icon: <img src={userManage} alt="img" />,
      options: ['Create User', 'Manage Users', 'User Permissions'],
    },
    {
      title: 'My Profile',
      icon: <img src={profile} alt="img" />,
      options: ['Profile Information', 'Business Details', 'Advanced Settings'],
    },
  ];

  const handleLinkSelection = (option: string) => {
    setSelectedOption(option);
    handleLinkClick(option);
  };

  return (
    <SidebarContainer>
      <SidebarSection>
        <LinkBox>
          <LinkTypography
            style={{
              color:
                activeLink === 'Dashboard'
                  ? palette.decor.main
                  : palette.grey.main,
            }}
            onClick={() => handleLinkSelection('Dashboard')}
          >
            <img src={DashboardIcon} alt="img" />
            Dashboard
            {selectedOption === 'Dashboard' && <ArrowRightAltOutlinedIcon />}
          </LinkTypography>

          <LinkTypography
            style={{
              color:
                activeLink === 'Calendar View'
                  ? palette.decor.main
                  : palette.grey.main,
            }}
            onClick={() => handleLinkSelection('Calendar View')}
          >
            <img src={calender} alt="img" /> Calendar View
            {selectedOption === 'Calendar View' && (
              <ArrowRightAltOutlinedIcon />
            )}
          </LinkTypography>
        </LinkBox>

        {SidebarData.map((section, index) => (
          <AccordionContainer key={index}>
            <ToggleDiv
              onClick={() => toggleSection(index)}
              style={{
                fontWeight: openSection === index ? 'bold' : 'normal',
                color: openSection === index ? 'black' : palette.grey[400],
              }}
            >
              <IconsDiv
                style={
                  {
                    // filter:
                    //   selectedOption === section.title
                    //     ? 'invert(53%) sepia(6%) saturate(241%) hue-rotate(180deg) brightness(20%) contrast(50%)'
                    //     : 'invert(53%) sepia(6%) saturate(241%) hue-rotate(180deg) brightness(20%) contrast(20%)',
                  }
                }
              >
                {section.icon}
                <div>{section.title}</div>
              </IconsDiv>

              <img
                style={{
                  transform:
                    openSection === index ? 'rotate(180deg)' : 'inherit',
                }}
                src={dropdownArrow}
                alt="img"
              />
            </ToggleDiv>

            {openSection === index && (
              <div>
                {section.options.map((option) => (
                  <StyledTypography
                    key={option}
                    onClick={() => handleLinkSelection(option)}
                    style={{
                      color:
                        selectedOption === option
                          ? palette.decor.main
                          : palette.grey.main,
                    }}
                  >
                    <AccordionBox>
                      <img
                        src={plusIcon}
                        alt="img"
                        style={{
                          height: '18px',
                          filter:
                            selectedOption === option
                              ? 'invert(0%) brightness(0%)'
                              : 'invert(53%) sepia(6%) saturate(241%) hue-rotate(180deg) brightness(80%) contrast(87%)',
                        }}
                      />
                      {option}
                    </AccordionBox>
                    {selectedOption === option && <ArrowRightAltOutlinedIcon />}
                  </StyledTypography>
                ))}
              </div>
            )}
          </AccordionContainer>
        ))}
        <Notifications />
      </SidebarSection>
      <ContantBox>
        {[
          'Dashboard',
          'Live Projects',
          'Upcoming Projects',
          'Completed Projects',
          'All Projects & Quotes',
        ].includes(selectedOption) && (
          <DashboardHeader
            title={selectedOption}
            onLinkClick={handleLinkSelection}
          />
        )}

        <ContentSection>
          {selectedOption === 'Create Project' ? (
            <CreateProject />
          ) : (
            <div>{content}</div>
          )}
        </ContentSection>
      </ContantBox>
    </SidebarContainer>
  );
};

export default Sidebar;
