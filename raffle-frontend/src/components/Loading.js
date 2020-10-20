import React from 'react'

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

export default function Loading() {
    return(<div className="loading-container" ><FontAwesomeIcon icon={faSync} className="loading" /></div>)
}
