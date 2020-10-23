import React from 'react'

export default function TicketsContainer({tickets}) {
    return (
        <div>
            {tickets.map( ticket => {
                    return <p>{ticket.number}</p>
            })}
        </div>
    )
}
