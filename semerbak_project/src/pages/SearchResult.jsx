import React, { Component } from "react";
import Navigation from "../components/Navigation";
import ListProduct from "../components/ListProduct";
import Footer from "../components/Footer";
import { doSignOut } from "../store/actions/actionUser"
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class SearchResult extends Component {
    render() {
        return (
            <div>
                <Navigation {...this.props} />
                <h3 className="text-center">Search Result</h3>
                <ListProduct />
                <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);