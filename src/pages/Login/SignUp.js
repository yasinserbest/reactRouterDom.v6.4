import React from "react";
import SignUpComponent from "../../components/Login/SignUp";
import { useActionData } from "react-router-dom";

function SignUp() {
  const data = useActionData();
  return (
    <div className="page">
      <h2 className="page__title">Create New Account</h2>
      <div className="page__errors">
        {data && `ERROR !! ${data.message} 💥💥`}
      </div>
      <SignUpComponent />
    </div>
  );
}

export default SignUp;
