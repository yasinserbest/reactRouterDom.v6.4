import React from "react";
import "./SignIn.scss";
import Button from "../../ui/Button";
import { Form, redirect, useLocation, useNavigation } from "react-router-dom";
function SignIn() {
  const location = useLocation();
  const navigation = useNavigation();

  const from = location.state?.from?.pathname || "/";

  return (
    <Form method="POST" className="loginForm">
      <div className="nice-form-group">
        <label htmlFor="username">Username</label>
        <input
          required
          id="username"
          name="username"
          type="text"
          placeholder="user@gmail.com"
        />
      </div>
      <div className="nice-form-group">
        <label htmlFor="password">Password</label>
        <input
          required
          id="password"
          name="password"
          type="password"
          placeholder="* * * * * *"
        />
        <input name="from" type="hidden" defaultValue={from} />
      </div>
      <div className="loginForm__buttons">
        <div className="loginForm__buttons--links mb-m">
          <Button
            type="link"
            to="/signUp"
            className="loginForm__buttons--links-item"
          >
            Dont' have an account?
          </Button>
          <Button
            type="link"
            to="/forgotPassword"
            className="loginForm__buttons--links-item"
          >
            Forgot your password?
          </Button>
        </div>
      </div>

      <Button disabled={navigation.state === "submitting"} type="primary">
        {navigation.state === "submitting" ? "Submitting..." : "LOGIN"}
      </Button>
    </Form>
  );
}

export default SignIn;

export async function action({ request, params }) {
  const data = await request.formData();
  const from = data.get("from");

  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: data.get("username"),
      password: data.get("password"),
    }),
  });

  if (!response.ok) {
    return response.json();
  }
  const resData = await response.json(); //backendden dönen datayı alma
  const token = resData.token;
  localStorage.setItem("token", token);
  return redirect(from, { replace: true }); //bu çalışmıyor, login olduktan sonra gittiği protected routta back yaptığında tekrardan login form geliyor, gelmemeli. normalde navigate kullanılıyor ama component func olmadığı için kullanamıyosun burda onu
}
