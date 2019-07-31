import React from 'react'

export default function User({ user: { username } }) {
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
        </div>
    )
}
