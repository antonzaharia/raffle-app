export function signUp(user) {
    return ({
        type: "SIGNUP",
        payload: user
    })
}
export function login(user) {
    return ({
        type: "LOGIN",
        payload: user
    })
}
