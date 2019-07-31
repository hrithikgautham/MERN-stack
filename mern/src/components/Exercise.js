import React from 'react'

export default function Exercise({ exercise: { username, description: desc, duration, date } }) {
    function getStyles() {
        return {
            margin: 20,
            padding: 10,
            border: "2px solid black",
        };
    }
    return (
        <div style={getStyles()}>
            <h1>User Name: { username }</h1>
            <h2>Description: { desc }</h2>
            <p>Duration: { duration }</p>
            <p>Date: { date }</p>
        </div>
    )
}
