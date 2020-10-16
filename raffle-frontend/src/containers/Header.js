import React from 'react'
import Registration from './Registration'

export default function Header(props) {
    return (
        <div className="header">
            <a href="/" className="logo">Raffle</a>
            <Registration signUp={props.signUp} login={props.login}/>
        </div>
    )
}
