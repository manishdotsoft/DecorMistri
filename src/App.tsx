import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import Home from "./pages/Dashboard/Home";
import Login from "./organisms/Login/Login";
import CalenderView from "./organisms/CalendarView/CalendarView";
import CreateProject from "./organisms/CreateProject/CreateProject";
import PasswordOtp from "./organisms/ForgetPage/PasswordOtp";
import NewPassword from "./organisms/ForgetPage/NewPassword";
import ResetPassword from "./organisms/ForgetPage/Resetpassword";
import ForgetPassword from "./organisms/ForgetPage/ForgotPassword";
import SignUpForm from "./organisms/SignUp/SignUp";
import SuccessfullyPage from "./organisms/SuccessfullyPage/SuccessfullyPage";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/passwordotp" element={<PasswordOtp />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/newpassword" element={<NewPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/calenderview" element={<CalenderView />} />
          <Route path="/create-Project" element={<CreateProject />} />
          <Route path="/success" element={<SuccessfullyPage />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
