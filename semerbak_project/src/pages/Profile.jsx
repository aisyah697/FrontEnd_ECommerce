import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { doSignOut } from "../store/actions/actionUser";
import { Redirect } from "react-router-dom";


class Profile extends Component {
    render() {
        const is_login = this.props.dataUser.is_login;
        return (
            <div>
                {is_login ? (
                    <div>
                        <Navigation {...this.props} />
                        <h1 className="text-center my-5">Welcome! This is your profile page!</h1>
                        <Footer />
                    </div>
                ) : (
                        <Redirect to={{ pathname: "/login" }}>
                        </Redirect>
                    )}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    dataUser: state.user
})

const mapDispatchToProps = {
    doSignOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);