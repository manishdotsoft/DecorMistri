import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import Login from './organisms/Login/Login';
import PasswordOtp from './organisms/ForgetPage/PasswordOtp/PasswordOtp.tsx';
import NewPassword from './organisms/ForgetPage/NewPassword/NewPassword.tsx';
import ResetPassword from './organisms/ForgetPage/ResetPassword/Resetpassword.tsx';
import ForgetPassword from './organisms/ForgetPage/ForgotPassword/ForgotPassword.tsx';
import SignUpForm from './organisms/SignUp/SignUp';
import SuccessfullyPage from './organisms/SuccessfullyPage/SuccessfullyPage';
import AppLayout from './organisms/AppLayout/AppLayout.tsx';

import CreateProject from './organisms/CreateProject/CreateProject.tsx';
import CalendarView from './organisms/CalendarView/CalendarView.tsx';
import CreateTask from './organisms/CreateManage/CreateTask.tsx';
import LiveProjects from './organisms/Projects/LiveProject.tsx';
import UpcomeingProjets from './organisms/Projects/UpcomingProjects.tsx';
import CompletedProjects from './organisms/Projects/CompletedProjects.tsx';
import AllProjects from './organisms/Projects/AllProjects.tsx';
import CoreChat from './organisms/ChatInbox/CoreChat.tsx';
import InboxManagement from './organisms/ChatInbox/InboxManage.tsx';
import ManageUser from './organisms/UserManagement/ManageUser.tsx';
import CreateUser from './organisms/UserManagement/CreateUser.tsx';
import UserPermissions from './organisms/UserManagement/UserPermissions.tsx';
import AdvaceSetting from './organisms/MyProfile/AdvanceSetting.tsx';
import Business from './organisms/MyProfile/Business.tsx';
import Myprofile from './organisms/MyProfile/MyProfile.tsx';
import Dashboard from './pages/Dashboard/Dashboard.tsx';
import UpdateProfile from './organisms/UpdateProfile/UpdateProfile.tsx';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-project" element={<CreateProject />} />
            <Route path="/calendar" element={<CalendarView />} />
            <Route path="/create-task" element={<CreateTask />} />
            <Route path="/live-projects" element={<LiveProjects />} />
            <Route path="/upcoming-projects" element={<UpcomeingProjets />} />
            <Route path="/completed-projects" element={<CompletedProjects />} />
            <Route path="/all-projects&quotes" element={<AllProjects />} />
            <Route path="/core-chat" element={<CoreChat />} />
            <Route path="/inbox-management" element={<InboxManagement />} />
            <Route path="/create-user" element={<CreateUser />} />
            <Route path="/manage-user" element={<ManageUser />} />
            <Route path="/user-permissions" element={<UserPermissions />} />
            <Route path="/profile-information" element={<Myprofile />} />
            <Route path="/business-details" element={<Business />} />
            <Route path="/advance-settings" element={<AdvaceSetting />} />
          </Route>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route path="/passwordotp" element={<PasswordOtp />} />
          <Route path="/newpassword" element={<NewPassword />} />
          <Route path="/success" element={<SuccessfullyPage />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/updateProfile" element={<UpdateProfile />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
