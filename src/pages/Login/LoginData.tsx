import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const LoginDataComponent: React.FC = () => {
  const loginData = useSelector((state: RootState) => state.logIn);

  return (
    <div>
      <h2>Login Data</h2>
      <pre>{JSON.stringify(loginData, null, 2)}</pre>
    </div>
  );
};

export default LoginDataComponent;
