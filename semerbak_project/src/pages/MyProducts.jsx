import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ListProduct from "../components/ListProduct";
import { doSignOut } from "../store/actions/actionUser"
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class MyPoducts extends Component {
    render() {
        const is_login = this.props.dataUser.is_login;
        return (
            <div>
                {is_login ? (
                    <div>
                        <Navigation {...this.props} />
                        <button className="add-products ml-5">Add products</button>
                        <h1 className="text-center">My Products</h1>
                        <ListProduct />
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

export default connect(mapStateToProps, mapDispatchToProps)(MyPoducts);