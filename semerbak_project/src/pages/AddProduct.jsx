import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { doSignOut } from "../store/actions/actionUser"
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";


class AddProduct extends Component {
    render() {
        const is_login = this.props.dataUser.is_login;
        return (
            <div>
                {is_login ? (
                    <div>
                        <Navigation {...this.props} />
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Product name</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlFile1">Upload product image</label>
                                <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Price</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Description</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Stock</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Category</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);



