import React, { useState, useEffect } from 'react'
import User from "./User";

export default function UserList() {
    const [users, setUsers] = useState(null);
    useEffect(() => {
        async function getUsers() {
            const data = await fetch('http://localhost:5000/user');
            const result = await data.json();
            setUsers(result);
            console.log("users: ", result);
        }
        getUsers();
    }, []);
    return (
        <div>
            {
                !users ?
                <h1>Loading...</h1> :
                users.map(user => <User key={user._id} user={user}/>)
            }
        </div>
    )
}
