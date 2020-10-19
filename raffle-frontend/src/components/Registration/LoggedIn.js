import React from 'react'
import Button from "react-bootstrap/Button";
import { logout } from '../../actions/UserActions'
import { connect } from 'react-redux'


function LoggedIn({logout}) {
    const handleLogout = () => {
        logout()
    }
    return (
        <div className="right-text">
        <Button className="header-btn" variant="link">{localStorage.name}</Button>
        <Button className="header-btn" variant="warning" onClick={handleLogout} >Logout</Button>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})
export default connect(null, mapDispatchToProps)(LoggedIn)