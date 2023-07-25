import React from "react";
import { Form, redirect, useNavigation } from "react-router-dom";
import Button from "../../ui/Button";

function SignUp() {
  const navigation = useNavigation();
  return (
    <Form method="POST" className="loginForm">
      <div className="nice-form-group">
        <label htmlFor="firstName">Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="Kemal"
        />
      </div>
      <div className="nice-form-group">
        <label htmlFor="lastName">Surname</label>
        <input id="lastName" name="lastName" type="text" placeholder="Ademi" />
      </div>
      <div className="nice-form-group">
        <label htmlFor="birthDate">Birth Date</label>
        <input
          id="birthDate"
          name="birthDate"
          type="date"
          defaultValue="yyyy-mm-dd"
        />
      </div>
      <div className="nice-form-group">
        <label htmlFor="email">E-Mail</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="mail@gmail.com"
        />
      </div>
      <div className="nice-form-group">
        <label htmlFor="gender">Gender</label>
        <input id="gender" name="gender" type="text" placeholder="Male" />
      </div>
      <div className="nice-form-group">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="00389 070 699 159"
        />
      </div>
      <div className="nice-form-group">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="berlinkaplani87"
        />
      </div>
      <div className="nice-form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="* * * * * * * "
        />
      </div>
      <div className="loginForm__buttons">
        <Button disabled={navigation.state === "submitting"} type="primary">
          {navigation.state === "submitting" ? "Submitting..." : "SIGN UP"}
        </Button>
        <Button type="link" to="/login">
          Already have an account? Sign In.
        </Button>
      </div>
    </Form>
  );
}

export default SignUp;

export async function action({ request, params }) {
  const data = await request.formData(); //get entered data
  const userData = Object.fromEntries(data);

  const response = await fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    return { message: "Couldn't create account. 💥💥" };
  }
  return redirect("/");
}
