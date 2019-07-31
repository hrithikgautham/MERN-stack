import React, { useState } from 'react'

export default function CreateExercise(props) {
    const [userName, setUserName] = useState("");
    const [desc, setDesc] = useState("");
    const [duration, setDuration] = useState("");
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(false);

    async function postExercise(exercise) {
        let resp;
        try {
            resp = await fetch('http://localhost:5000/exercise/add', {
                method: 'POST',
                body: JSON.stringify(exercise),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }catch(err){
            console.error('Error: ', err);
        }
        console.log("Exercise resp: ", resp);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const exercise = {
            username: userName,
            description: desc,
            duration: Number(duration),
            date: new Date()
        }
        postExercise(exercise);
        setDesc("");
        setDuration("");
        setUserName("");
        if(!show)
            setShow(true);
        setCount(count+1);
    }
    return (
        <div>
            {
                show ? <h1>You have submitted { count } { count > 1 ? 'exercises' : "exercise"}.</h1> : <h1>You Haven't Submitted any Exercises.</h1>
            }
            <form onSubmit={handleSubmit} style={{display: "flex", flexFlow: "column nowrap", justifyContent: "space-evenly", height: "80vh"}}>
                <label>
                    Enter User Name: <input value={userName} type="text" onChange={(e) => setUserName(e.target.value)}/>
                </label>
                <label>
                    Enter Description: <input value={desc} type="text" onChange={(e) => setDesc(e.target.value)}/>
                </label>
                <label>
                    Enter Duration: <input value={duration} type="text" onChange={(e) => setDuration(e.target.value)}/>
                </label>
                <label>
                    <input type="submit" value="Create Exercise"/>
                </label>
            </form>
        </div>
    )
}
