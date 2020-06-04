import axios from "axios";

const base_url = process.env.REACT_APP_BASE_URL

export const doLogin = () => {
    return (dispatch, getState) => {
        const dataUsername = getState().user.inputUsername
        const dataPassword = getState().user.inputPassword

        axios.get(base_url + "auth", {
                params: {
                    username: dataUsername,
                    password: dataPassword
                }
            })
            .then((response) => {
                dispatch({ type: "LOGIN_SUCCESS", payload: response.data })
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("is_login", true);
            })
            .catch((error) => {
                alert("Wrong username or password!")
            })
    };
};

export const doRegister = () => {
    return (dispatch, getState) => {
        const dataUsername = getState().user.inputUsername;
        const dataPassword = getState().user.inputPassword;

        const bodyRequest = {
            username: dataUsername,
            password: dataPassword
        }

        axios.post(base_url + "user", bodyRequest)
            .then((response) => {
                doLogin()
                dispatch({ type: "REGISTER_SUCCESS", payload: response.data })
            })
    }
}

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
    localStorage.removeItem("token");
    localStorage.removeItem("is_login");
    return {
        type: "LOGOUT_SUCCESS",
    };
};