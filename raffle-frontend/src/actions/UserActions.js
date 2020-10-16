export function signUp(user) {
    return ({
        type: "SIGNUP",
        payload: user
    })
}
