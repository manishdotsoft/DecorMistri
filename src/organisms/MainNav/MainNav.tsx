import React, { ReactElement, useState } from 'react';
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Typography,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { NavList, StyledNavLink } from './MainNav.style';
import DashboardIcon from '../../assets/images/sidebar/dashboard.svg';
import CalendarIcon from '../../assets/images/sidebar/calender.svg';
import CreateProjectIcon from '../../assets/images/sidebar/plusIcon.svg';
import CreateTaskIcon from '../../assets/images/sidebar/plusIcon.svg';
import CreateandManageIcon from '../../assets/images/sidebar/createmanage.svg';
import ProjectsIcon from '../../assets/images/sidebar/projects.svg';
import LivePrjIcon from '../../assets/images/sidebar/plusIcon.svg';
import UpcomingPrjIcon from '../../assets/images/sidebar/plusIcon.svg';
import CompletedPrjIcon from '../../assets/images/sidebar/plusIcon.svg';
import AllPrjIcon from '../../assets/images/sidebar/plusIcon.svg';
import ChatInboxIcon from '../../assets/images/sidebar/chatInbox.svg';
import CoreChatFunctionality from '../../assets/images/sidebar/plusIcon.svg';
import InboxManagement from '../../assets/images/sidebar/plusIcon.svg';
import UserManagementIcon from '../../assets/images/sidebar/userManage.svg';
import CreateUserIcon from '../../assets/images/sidebar/plusIcon.svg';
import ManageUsersIcon from '../../assets/images/sidebar/plusIcon.svg';
import UserPermitionsIcon from '../../assets/images/sidebar/plusIcon.svg';
import MyProfileIcon from '../../assets/images/sidebar/profile.svg';

import ProfileInformationIcon from '../../assets/images/sidebar/plusIcon.svg';
import BusinessDetailsIcon from '../../assets/images/sidebar/plusIcon.svg';
import AdvancedSettingsIcon from '../../assets/images/sidebar/plusIcon.svg';

import KeyArrowIcon from '../../assets/images/sidebar/keyArrow.svg';

interface NavItem {
  title: string;
  path?: string;
  subItems?: NavItem[];
  icon?: ReactElement;
}

const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <img src={DashboardIcon} alt="" />,
  },
  {
    title: 'Calendar',
    path: '/calendar',
    icon: <img src={CalendarIcon} alt="" />,
  },
  {
    title: 'Create & Manage',
    icon: <img src={CreateandManageIcon} alt="" />,
    subItems: [
      {
        title: 'Create Project',
        path: '/create-project',
        icon: <img src={CreateProjectIcon} alt="" />,
      },
      {
        title: 'Create Task',
        path: '/create-task',
        icon: <img src={CreateTaskIcon} alt="" />,
      },
    ],
  },
  {
    title: 'Projects',
    icon: <img src={ProjectsIcon} alt="" />,
    subItems: [
      {
        title: 'Live Projects',
        path: '/live-projects',
        icon: <img src={LivePrjIcon} alt="" />,
      },
      {
        title: 'Upcoming Projects',
        path: '/upcoming-projects',
        icon: <img src={UpcomingPrjIcon} alt="" />,
      },
      {
        title: 'Completed Projects',
        path: '/completed-projects',
        icon: <img src={CompletedPrjIcon} alt="" />,
      },
      {
        title: 'All Projects & Quotes',
        path: '/all-projects&quotes',
        icon: <img src={AllPrjIcon} alt="" />,
      },
    ],
  },
  {
    title: 'Chat & Inbox',
    icon: <img src={ChatInboxIcon} alt="" />,
    subItems: [
      {
        title: 'Core Chat',
        path: '/core-chat',
        icon: <img src={CoreChatFunctionality} alt="" />,
      },
      {
        title: 'Inbox Management',
        path: '/inbox-management',
        icon: <img src={InboxManagement} alt="" />,
      },
    ],
  },
  {
    title: 'User Management',
    icon: <img src={UserManagementIcon} alt="" />,
    subItems: [
      {
        title: 'Create User',
        path: '/create-user',
        icon: <img src={CreateUserIcon} alt="" />,
      },
      {
        title: 'Manage Users',
        path: '/manage-user',
        icon: <img src={ManageUsersIcon} alt="" />,
      },
      {
        title: 'User Permissions',
        path: '/user-permissions',
        icon: <img src={UserPermitionsIcon} alt="" />,
      },
    ],
  },
  {
    title: 'My Profile',
    icon: <img src={MyProfileIcon} alt="" />,
    subItems: [
      {
        title: 'Profile Information',
        path: '/profile-information',
        icon: <img src={ProfileInformationIcon} alt="" />,
      },
      {
        title: 'Business Details',
        path: '/business-details',
        icon: <img src={BusinessDetailsIcon} alt="" />,
      },
      {
        title: 'Advanced Settings',
        path: '/advance-settings',
        icon: <img src={AdvancedSettingsIcon} alt="" />,
      },
    ],
  },
];

const Sidebar: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>('Dashboard');

  const handleToggle = (title: string) => {
    setOpenSection(openSection === title ? null : title);
  };
  const handleSelect = (title: string) => {
    setSelectedItem(title);
  };
  return (
    <Box sx={{ bgcolor: '#fff', paddingTop: '1.5rem' }}>
      <NavList>
        {navItems.map((item) => (
          <Box key={item.title} sx={{ color: '#626061' }}>
            {item.subItems ? (
              <>
                <ListItemButton
                  onClick={() => handleToggle(item.title)}
                  sx={{
                    '&.MuiListItemButton-root': {
                      padding: '10px 10px 10px 28px',
                      backgroundColor: `${selectedItem === item.title ? '#f3f3f3' : '#ffffff'}`,
                      borderLeft: `5px solid ${selectedItem === item.title ? '#C7148A' : '#ffffff'}`,
                    },
                  }}
                >
                  {item.icon}
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          ml: 1,
                          fontSize: '0.95rem',
                          color:
                            openSection === item.title ||
                            selectedItem === item.title
                              ? '#000000'
                              : '#606062',
                          fontWeight:
                            openSection === item.title ||
                            selectedItem === item.title
                              ? 'bold'
                              : '500',
                        }}
                      >
                        {item.title}
                      </Typography>
                    }
                  />

                  {openSection === item.title ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse
                  in={openSection === item.title}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {item.subItems.map((subItem) => (
                      <ListItemButton
                        key={subItem.title}
                        sx={{
                          pl: 6,
                          '& .MuiTypography-root': {
                            fontSize: '0.95rem',
                          },

                          '&.MuiListItemButton-root': {
                            backgroundColor: `${selectedItem === subItem.title ? '#f3f3f3' : '#ffffff'}`,
                            borderLeft: `5px solid ${selectedItem === subItem.title ? '#C7148A' : '#ffffff'}`,
                          },
                        }}
                        component={StyledNavLink}
                        to={subItem.path || '#'}
                        onClick={() => handleSelect(subItem.title)}
                      >
                        {subItem.icon}
                        <ListItemText
                          primary={
                            <Typography
                              sx={{
                                ml: 1,
                                fontSize: '0.95rem',
                                color:
                                  selectedItem === subItem.title
                                    ? '#C7148A'
                                    : '#606062',
                                fontWeight:
                                  selectedItem === subItem.title
                                    ? 'bold'
                                    : '500',
                              }}
                            >
                              {subItem.title}
                            </Typography>
                          }
                        />

                        {selectedItem === subItem.title && (
                          <Box>
                            <img src={KeyArrowIcon} alt="" />
                          </Box>
                        )}
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </>
            ) : (
              <ListItemButton
                component={StyledNavLink}
                to={item.path || '#'}
                onClick={() => handleSelect(item.title)}
                sx={{
                  '&.MuiListItemButton-root': {
                    padding: '10px 15px 10px 24px', // Change this value as needed
                    backgroundColor: `${selectedItem === item.title ? '#f3f3f3' : '#ffffff'}`,
                    borderLeft: `5px solid ${selectedItem === item.title ? '#C7148A' : '#ffffff'}`,
                  },
                }}
              >
                {item.icon}

                <ListItemText
                  primary={item.title}
                  sx={{
                    ml: 1,
                    '& .MuiTypography-root': {
                      fontSize: '0.95rem',

                      color: `${selectedItem === item.title ? '#C7148A' : '#606062'}`,
                      fontWeight: `${selectedItem === item.title ? '600' : '500'}`,
                    },
                  }}
                />
                {selectedItem === item.title && (
                  <Box>
                    <img src={KeyArrowIcon} alt="" />
                  </Box>
                )}
              </ListItemButton>
            )}
          </Box>
        ))}
      </NavList>
    </Box>
  );
};

export default Sidebar;
