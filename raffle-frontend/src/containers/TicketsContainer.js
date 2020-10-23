import React from 'react'
import Ticket from '../components/Ticket/Ticket'

export default function TicketsContainer({tickets}) {
    return (
        <div>
            <h3 className="center-text">Your Tickets:</h3>
            {tickets.map( ticket => {
                    return <Ticket key={ticket.id} ticket={ticket} />
            })}
        </div>
    )
}
