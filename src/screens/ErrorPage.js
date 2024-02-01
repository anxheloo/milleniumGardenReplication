import { useRouteError } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <Link to={"/"}>
        <div>Back to home page</div>
      </Link>
    </div>
  );
}
