import React from 'react'
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'
import { logout } from '../../actions/UserActions'
import { connect } from 'react-redux'


function LoggedIn({logout}) {
    const handleLogout = () => {
        logout()
    }
    return (
        <div className="right-text">
        <Link to='/account'><Button variant="link">{localStorage.name}</Button></Link>
        <Button className="header-btn" variant="warning" onClick={handleLogout} >Logout</Button>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})
export default connect(null, mapDispatchToProps)(LoggedIn)