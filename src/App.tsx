import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ForgetPassword from './pages/ForgetPage/ForgotPassword';
import SignUpForm from './pages/SignUp/SignUp';
import AppLayout from './components/AppLayout/AppLayout';
import UserManagement from './pages/UserManagement/UserManagement';
import CalendarView from './pages/CalendarView/CalendarView';
import ChatInbox from './pages/ChatInbox/ChatInbox';
import CreateManager from './pages/CreateManage/CreateManage';
import MyProfile from './pages/MyProfile/MyProfile';
import Business from './pages/MyProfile/Business';
import Projects from './pages/Projects/Projects';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route element={<AppLayout />}>
          <Route path="/usermanagement" element={<UserManagement />} />
          <Route path="/calenderview" element={<CalendarView />} />
          <Route path="/chatinbox" element={<ChatInbox />} />
          <Route path="/createmanager" element={<CreateManager />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/business" element={<Business />} />

          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
