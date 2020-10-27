import React from 'react'
import Ticket from '../components/Ticket/Ticket'

export default function TicketsContainer({tickets}) {
    const renderTickets = () => {
        if(tickets.length > 0) {
            return tickets.map( ticket => {
                return <Ticket key={ticket.id} ticket={ticket} />
            })
        }
    }
    return (
        <div>
            <h3 className="center-text">Your Tickets:</h3>
            {tickets.length === 0 ? "No tickets" : ""}
            {renderTickets()}
        </div>
    )
}
