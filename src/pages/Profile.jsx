import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { doLogin, doSignOut } from "../store/actions/actionUser";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

class Profile extends Component {
  render() {
    const is_login = localStorage.getItem("token");
    return (
      <div>
        {is_login ? (
          <div>
            <Navigation {...this.props} />
            <div className="text-center">
              <h1 className="mt-5">
                Welcome{" "}
                <span style={{ color: "#e76f51" }}>
                  {this.props.dataUser.inputUsername}
                </span>
                ! This is your profile page!
              </h1>
              <p>Click the button below to edit your profile information!</p>
              <Link to="/form-biodata">
                <button>Edit my profile</button>
              </Link>
            </div>
            <Footer />
          </div>
        ) : (
          <Redirect to={{ pathname: "/login" }}></Redirect>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataUser: state.user,
});

const mapDispatchToProps = {
  doSignOut,
  doLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
