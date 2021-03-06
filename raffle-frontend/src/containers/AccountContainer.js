import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadUser } from '../actions/UserActions'

import { Link } from 'react-router-dom'

import TicketContainer from './TicketsContainer'
import Loading from '../components/Loading'


class AccountContainer extends Component {
    componentDidMount() {
        this.props.loadUser(localStorage.id)
    }
    render() {
        return (
            <div className="main">
                <h1>My Account</h1>
                <hr/>
                <p>{localStorage.name}</p>
                <p>{localStorage.email}</p>
                <hr/>
                {this.props.user && this.props.user.tickets_b ? <TicketContainer tickets={this.props.user.tickets_b}/> : <Loading />}
                <hr/>
                <Link to="/" >Back</Link>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    loadUser: id => dispatch(loadUser(id))
})
const mapStateToProps = state => ({
    user: state.users.user
})
export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer)
