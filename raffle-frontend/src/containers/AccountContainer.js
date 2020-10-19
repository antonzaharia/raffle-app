import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AccountContainer extends Component {
    render() {
        return (
            <div className="main">
                <h1>My Account</h1>
                <hr/>
                <p>{localStorage.name}</p>
                <p>{localStorage.email}</p>
                <hr/>
                <Link to="/" >Back</Link>
            </div>
        )
    }
}
