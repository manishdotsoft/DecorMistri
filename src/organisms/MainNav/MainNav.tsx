import React, { ReactElement, useEffect, useState } from 'react';
import { Box, List, ListItemText, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  ChildSidebar,
  DropDownItems,
  DropDownLableTitle,
  DropDownListItemButton,
  IconWrapper,
  ListItemButtonIcon,
  ListItemTextSec,
  MainSidebar,
  NavList,
  StyledNavLink,
  SubItemTitle,
} from './MainNav.style';
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
import { useLocation } from 'react-router-dom';

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

const MainNav: React.FC = () => {
  const location = useLocation();
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>('Dashboard');

  // Automatically set active menu item based on the current URL
  useEffect(() => {
    const currentPath = location.pathname;
    let foundItem: string | null = null;

    navItems.forEach((item) => {
      if (item.path === currentPath) {
        foundItem = item.title;
      } else if (item.subItems) {
        const subItemMatch = item.subItems.find(
          (subItem) => subItem.path === currentPath
        );
        if (subItemMatch) {
          foundItem = subItemMatch.title;
          setOpenSection(item.title); // Open the parent section
        }
      }
    });

    setSelectedItem(foundItem);
  }, [location.pathname]);

  const handleToggle = (title: string) => {
    setOpenSection(openSection === title ? null : title);
  };
  const handleSelect = (title: string) => {
    setSelectedItem(title);
  };

  return (
    <MainSidebar>
      <NavList>
        {navItems.map((item) => (
          <ChildSidebar key={item.title}>
            {item.subItems ? (
              <>
                <DropDownListItemButton
                  onClick={() => handleToggle(item.title)}
                >
                  <IconWrapper
                    selectedItem={selectedItem}
                    itemTitle={item.title}
                    openSection={openSection}
                  >
                    {item.icon}
                  </IconWrapper>

                  <ListItemText
                    primary={
                      <DropDownLableTitle
                        isOpen={openSection === item.title}
                        isSelected={
                          openSection === item.title ||
                          selectedItem === item.title
                        }
                      >
                        {item.title}
                      </DropDownLableTitle>
                    }
                  />

                  {openSection === item.title ? <ExpandLess /> : <ExpandMore />}
                </DropDownListItemButton>
                <Collapse
                  in={openSection === item.title}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {item.subItems.map((subItem) => (
                      <DropDownItems
                        key={subItem.title}
                        sx={{}}
                        component={StyledNavLink}
                        to={subItem.path || '#'}
                        onClick={() => handleSelect(subItem.title)}
                        itemTitle={subItem.title}
                        selectedItem={selectedItem}
                      >
                        <IconWrapper
                          selectedItem={selectedItem}
                          itemTitle={subItem.title}
                          openSection={openSection}
                        >
                          {subItem.icon}
                        </IconWrapper>

                        <ListItemText
                          primary={
                            <SubItemTitle
                              isSelected={selectedItem === subItem.title}
                            >
                              {subItem.title}
                            </SubItemTitle>
                          }
                        />

                        {selectedItem === subItem.title && (
                          <Box>
                            <img src={KeyArrowIcon} alt="" />
                          </Box>
                        )}
                      </DropDownItems>
                    ))}
                  </List>
                </Collapse>
              </>
            ) : (
              <ListItemButtonIcon
                component={StyledNavLink}
                to={item.path || '#'}
                onClick={() => handleSelect(item.title)}
                selectedItem={selectedItem}
                itemTitle={item.title}
              >
                <IconWrapper
                  selectedItem={selectedItem}
                  itemTitle={item.title}
                  openSection={openSection}
                >
                  {item.icon}
                </IconWrapper>
                <ListItemTextSec
                  primary={item.title}
                  selectedItem={selectedItem}
                  itemTitle={item.title}
                />
                {selectedItem === item.title && (
                  <Box>
                    <img src={KeyArrowIcon} alt="" />
                  </Box>
                )}
              </ListItemButtonIcon>
            )}
          </ChildSidebar>
        ))}
      </NavList>
    </MainSidebar>
  );
};

export default MainNav;
