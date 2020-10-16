import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AccountContainer extends Component {
    render() {
        return (
            <div className="main">
                My Account
                <Link to="/" >Back</Link>
            </div>
        )
    }
}
