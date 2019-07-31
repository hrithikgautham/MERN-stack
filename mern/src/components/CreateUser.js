import React, { useState } from 'react'

export default function CreateUser(props) {
    const [value, setValue] = useState("");
    async function postUser(user) {
        let resp;
        try {
            resp = await fetch('http://localhost:5000/user/add', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }catch(err) {
            console.error('Error: ', err);
        }
        console.log("User Resp: ", resp);
    }
    function handleSubmit(e) {
        e.preventDefault();
        postUser({ username: value });
        setValue("");
    }
    return (
        <div>
            <form onSubmit={handleSubmit} style={{display: "flex", flexFlow: "column nowrap", justifyContent: "space-evenly", height: "40vh"}}>
                <label>
                    Enter User Name: <input value={value} type="text" onChange={(e) => setValue(e.target.value)}/>
                </label>
                <label>
                    <input type="submit" value="Create User"/>
                </label>
            </form>
        </div>
    )
}
