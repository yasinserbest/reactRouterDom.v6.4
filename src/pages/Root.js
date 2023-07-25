import React from "react";
import Categories from "../components/Header/Categories";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import "./Root.scss";
function Root() {
  return (
    <div className="root">
      <Header />
      <Categories />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
