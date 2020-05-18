import React, { Fragment } from "react";
import { Link } from "react-router-dom";

class NotFound extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="container bg-not-found text-center py-5">
          <h1>404 NOT FOUND</h1>
          <h3>
            Uh Oh.. Seems you are lost!
            <br />
            The page cannot be found
          </h3>
          <Link to="/">
            <button>Go Back Home</button>
          </Link>
        </div>
      </Fragment>
    );
  }
}

export default NotFound;
