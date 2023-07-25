import React from "react";
import SignIn from "../../components/Login/SignIn";
import { useActionData } from "react-router-dom";

function Login() {
  const data = useActionData();
  return (
    <div className="page">
      {/**css AddProducttan.scss geliyor */}
      <h2 className="page__title">LOGIN</h2>
      <div className="page__errors">
        {data && `ERROR !! ${data.message} 💥💥`}
      </div>
      <SignIn />
    </div>
  );
}

export default Login;
