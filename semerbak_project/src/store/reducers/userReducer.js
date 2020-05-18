const initialState = {
    username: "",
    password: "",
    email: "",
    address: "",
    is_login: false,
};

export default function userReducer(userState = initialState, action) {
    switch (action.type) {
        case "CHANGE_USERNAME_INPUT":
            return {
                ...userState,
                inputUsername: action.payload.target.value,
            };
        case "CHANGE_PASSWORD_INPUT":
            return {
                ...userState,
                inputPassword: action.payload.target.value,
            };
        case "LOGIN_SUCCESS":
            return {
                ...userState,
                token: action.payload.token,
                is_login: true,
            };
        case "LOGOUT_SUCCESS":
            return {
                ...userState,
                is_login: false,
            };
        case "REGISTER_SUCCESS":
            return userState;
        default:
            return userState;
    }
}