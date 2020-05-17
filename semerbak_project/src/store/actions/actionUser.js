import axios from "axios";

export const doLogin = () => {
    return (dispatch, getState) => {
        const dataUsername = getState().user.inputUsername
        const dataPassword = getState().user.inputPassword

        axios.get("http://0.0.0.0:5000/auth", {
                params: {
                    username: dataUsername,
                    password: dataPassword
                }
            })
            .then((response) => {
                dispatch({ type: "LOGIN_SUCCESS", payload: response.data })
            })
            .catch((error) => {
                alert("Wrong username or password!")
            })
    };
};

export const changeInputUsername = (e) => {
    return {
        type: "CHANGE_USERNAME_INPUT",
        payload: e,
    };
};

export const changeInputPassword = (e) => {
    return {
        type: "CHANGE_PASSWORD_INPUT",
        payload: e,
    };
};

export const doSignOut = () => {
    return {
        type: "LOGOUT_SUCCESS",
    };
};