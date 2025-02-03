import { JSX, useState } from 'react';

import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import LayersIcon from '@mui/icons-material/Layers';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import PersonIcon from '@mui/icons-material/Person';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
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
} from './Sidebar.style';
import palette from '../../thems/primitives/palette';

interface SidebarData {
  title: string;
  icon: JSX.Element;
  options: string[];
}

const Sidebar = () => {
  const { content, handleClick, handleOptionClick, activeOption } =
    SideBarHooks();

  const [openSection, setOpenSection] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const SidebarData: SidebarData[] = [
    {
      title: 'Create & Manage',
      icon: <EditCalendarIcon />,
      options: ['Create Project', 'Create Task'],
    },

    {
      title: 'Projects',
      icon: <LayersIcon />,
      options: [
        'Live Projects',
        'Upcoming Projects',
        'Completed Projects',
        'All Projects & Quotes',
      ],
    },
    {
      title: 'Chat & Inbox',
      icon: <MarkunreadIcon />,
      options: ['Core Chat Functionality', 'Inbox Management'],
    },
    {
      title: 'User Management',
      icon: <ManageAccountsIcon />,
      options: ['Create User', 'Manage Users', 'User Permissions'],
    },
    {
      title: 'My Profile',
      icon: <PersonIcon />,
      options: ['Profile Information', 'Business Details', 'Advanced Settings'],
    },
  ];

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
    setActiveSection(index);
  };

  return (
    <SidebarContainer>
      <SidebarSection>
        <LinkBox>
          <LinkTypography onClick={() => handleClick('dashboard')}>
            <DashboardIcon /> Dashboard
          </LinkTypography>
          <LinkTypography onClick={() => handleClick('Calendar View')}>
            <CalendarMonthIcon /> Calendar View
          </LinkTypography>
        </LinkBox>

        {SidebarData.map((section, index) => (
          <div key={index}>
            <ToggleDiv
              onClick={() => toggleSection(index)}
              style={{
                fontWeight: activeSection === index ? 'bold' : 'normal',
                color: activeSection === index ? 'black' : 'grey',
              }}
            >
              <IconsDiv>
                {section.icon}
                <div style={{ fontSize: '20px' }}>{section.title}</div>
              </IconsDiv>
              <KeyboardArrowDownIcon
                style={{
                  transform:
                    openSection === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                }}
              />
            </ToggleDiv>

            {openSection === index && (
              <div style={{ paddingLeft: '20px' }}>
                {section.options.map((option) => (
                  <StyledTypography
                    key={option}
                    onClick={() => handleOptionClick(option)}
                    style={{
                      fontWeight: activeOption === option ? 'bold' : 'normal',

                      color:
                        activeOption === option
                          ? palette.decor.main
                          : palette.grey.main,
                    }}
                  >
                    <AccordionBox>
                      <AddCircleOutlineOutlinedIcon sx={{ height: '20px' }} />
                      {option}
                    </AccordionBox>
                    {activeOption === option && <ArrowRightAltOutlinedIcon />}
                  </StyledTypography>
                ))}
              </div>
            )}
          </div>
        ))}
      </SidebarSection>
      <ContentSection>{content}</ContentSection>
    </SidebarContainer>
  );
};

export default Sidebar;
