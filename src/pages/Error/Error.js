import React from "react";
import Categories from "../../components/Header/Categories";
import Header from "../../components/Header/Header";
import PageNotFound from "../../components/Error/PageNotFound";
import ErrorComponent from "../../components/Error/Error";
import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  let title = "An error occured! ";
  let message = "Something went wrong!";

  if (error.status === 404) {
    return <PageNotFound />;
  }

  if (error.status === 500) {
    message = error.data.message;
  }

  return (
    <div className="root">
      <Header />
      <Categories />
      <ErrorComponent title={title} message={message} />
    </div>
  );
}

export default Error;
