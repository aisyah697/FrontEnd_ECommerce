const initialState = {
    username: "",
    password: "",
    email: "",
    address: "",
    // avatar: "",
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
                // username: action.payload.username,
                // email: action.payload.email,
                // avatar: action.payload.avatar,
                // address: action.payload.address,
                is_login: true,
            };
            // case 'LOGIN_FAILED':
            //     return {
            //         ...userState,
            //         message: "Wrong username or password!",
            //     };
        case "LOGOUT_SUCCESS":
            return {
                ...userState,
                is_login: false,
            };
        default:
            return userState;
    }
}