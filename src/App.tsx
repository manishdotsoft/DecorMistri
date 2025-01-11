import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ForgetPassword from './organisms/ForgetPage/ForgotPassword';
import SignUpForm from './organisms/SignUp/SignUp';

import Home from './pages/Dashboard/Home';
import Login from './organisms/Login/Login';
import CalenderView from './organisms/CalendarView/CalendarView';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/dashboard" element={<Home />} />

        <Route path="/calenderview" element={<CalenderView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
