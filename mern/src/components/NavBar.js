import React from 'react';
import { Link } from 'react-router-dom';
import "./styleLinks.css";

export default function NavBar() {
    return (
        <div className="container">
            <h1 style={{cursor: "pointer"}} onClick={() => window.location="/"}>NavBar</h1>
            <div className="links">
                <div><Link to="/users">Users</Link></div>
                <div><Link to="/exercises">Exercises</Link></div>
                <div><Link to="/create">Create Exercise</Link></div>
                <div><Link to="/user">Create User</Link></div>
                <div><Link to="/edit">Edit Exercise</Link></div>
            </div>
        </div>
    )
}
