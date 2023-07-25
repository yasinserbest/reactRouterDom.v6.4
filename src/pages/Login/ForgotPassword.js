import React from "react";
import ForgorPasswordComponent from "../../components/Login/forgotPassword";
function ForgotPassword() {
  return (
    <div className="page">
      {/**css AddProducttan.scss geliyor */}
      <h2 className="page__title">Reset Your Password</h2>
      <ForgorPasswordComponent />
    </div>
  );
}

export default ForgotPassword;
