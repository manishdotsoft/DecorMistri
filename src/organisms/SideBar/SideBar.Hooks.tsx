import { useState } from 'react';
import CreateTask from '../CreateManage/CreateTask';
import CreateProject from '../CreateManage/CreateProject';
import LiveProjects from '../Projects/LiveProject';
import UpcomeingProjets from '../Projects/UpcomingProjects';
import CompletedProjects from '../Projects/CompletedProjects';
import AllProjcts from '../Projects/AllProjects';
import CoreChat from '../ChatInbox/CoreChat';
import InboxManagement from '../ChatInbox/InboxManage';
import CreateUser from '../UserManagement/CreateUser';
import MannageUser from '../UserManagement/ManageUser';
import UserPermission from '../UserManagement/UserPermissions';
import Myprofile from '../MyProfile/MyProfile';
import Business from '../MyProfile/Business';
import AdvaceSetting from '../MyProfile/AdvanceSetting';

import CalenderView from '../CalendarView/CalendarView';

import Dashboard from '../../pages/Dashboard/Dashboard';

const SideBarHooks = () => {
  const [selectedOption, setSelectedOption] = useState('dashboard');

  const handleOptionChange = setSelectedOption;
  const handleClick = setSelectedOption;

  const handleSelectOption = (option: string) => {
    handleOptionChange(option);
  };

  const [activeOption, setActiveOption] = useState('');

  const handleOptionClick = (option: string) => {
    setActiveOption(option);
    handleSelectOption(option);
  };

  let content;
  if (selectedOption === 'Create Project') {
    content = <CreateProject />;
  } else if (selectedOption === 'Create Task') {
    content = <CreateTask />;
  } else if (selectedOption === 'Live Projects') {
    content = <LiveProjects />;
  } else if (selectedOption === 'Upcoming Projects') {
    content = <UpcomeingProjets />;
  } else if (selectedOption === 'Completed Projects') {
    content = <CompletedProjects />;
  } else if (selectedOption === 'All Projects & Quotes') {
    content = <AllProjcts />;
  } else if (selectedOption === 'Core Chat Functionality') {
    content = <CoreChat />;
  } else if (selectedOption === 'Inbox Management') {
    content = <InboxManagement />;
  } else if (selectedOption === 'Create User') {
    content = <CreateUser />;
  } else if (selectedOption === 'Manage Users') {
    content = <MannageUser />;
  } else if (selectedOption === 'User Permissions') {
    content = <UserPermission />;
  } else if (selectedOption === 'Profile Information') {
    content = <Myprofile />;
  } else if (selectedOption === 'Business Details') {
    content = <Business />;
  } else if (selectedOption === 'Advanced Settings') {
    content = <AdvaceSetting />;
  } else if (selectedOption === 'Calendar View') {
    content = <CalenderView />;
  } else if (selectedOption === 'dashboard') {
    content = <Dashboard />;
  }

  return {
    selectedOption,
    handleOptionChange,
    content,
    handleClick,
    handleSelectOption,
    handleOptionClick,
    activeOption,
  };
};

export default SideBarHooks;
