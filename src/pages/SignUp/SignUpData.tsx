import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const SignUpData: React.FC = () => {
  const signUpData = useSelector((state: RootState) => state.signUp);

  return (
    <div>
      <h2>Sign-Up Data</h2>
      <p>{JSON.stringify(signUpData, null, 2)}</p>
    </div>
  );
};

export default SignUpData;
