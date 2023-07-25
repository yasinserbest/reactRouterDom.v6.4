import React from "react";
import { Form, useNavigation } from "react-router-dom";
import Button from "../../ui/Button";

function ForgotPassword() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form className="loginForm">
      <div className="nice-form-group">
        <label htmlFor="email">E - Mail</label>
        <input
          required
          id="email"
          name="email"
          type="text"
          placeholder="user@gmail.com"
        />
      </div>
      <div className="loginForm__buttons">
        <Button disabled={isSubmitting} type="primary" className="mt-s">
          {isSubmitting ? "Submitting..." : "RESET"}
        </Button>
        <Button type="link" to="/login">
          Already have an account? Sign In.
        </Button>
      </div>
    </Form>
  );
}

export default ForgotPassword;
