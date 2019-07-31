import React, { useState } from 'react'

export default function EditExercise() {
    const [hasId, setHasId] = useState(false);
    const [userName, setUserName] = useState("");
    const [desc, setDesc] = useState("");
    const [duration, setDuration] = useState("");
    const [id, setId] = useState("");
    const [actualValues, setActualValues] = useState({});
    const [useActualUserName, setActualUserName] = useState(false);
    const [useActualDesc, setActualDesc] = useState(false);
    const [useActualDuration, setActualDuration] = useState(false);
    
    async function getExerciseById() {
        const data = await fetch(`http://localhost:5000/exercise/${id}`);
        const result = await data.json();
        setHasId(true);
        let actualUserName = result.username;
        let actualDesc = result.description;
        let actualDuration = result.duration;
        setActualValues({
            actualUserName,
            actualDesc,
            actualDuration
        });
        console.log("actualUserName: ", actualUserName);
        console.log("actualDesc: ", actualDesc);
        console.log("actualDuration: ", actualDuration);
    }
    function handleIdSubmit(e) {
        e.preventDefault();
        getExerciseById();
    }
    async function updateExercise(exercise) {
        let resp;
        try {
            resp = await fetch(`http://localhost:5000/exercise/update/${id}`, {
                method: 'POST',
                body: JSON.stringify(exercise),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }catch(err){
            console.error('Error: ', err);
            return;
        }
        setId("");
        setHasId(false);
        setActualValues({});
        console.log("update resp: ", resp);
    }
    function handleEdit(e) {
        e.preventDefault();
        const updatedExercise = {
            username: userName,
            description: desc,
            duration: duration,
            date: new Date()
        };
        updateExercise(updatedExercise);
        setDesc("");
        setDuration("");
        setUserName("");
        setActualDesc(false);
        setActualDuration(false);
        setActualUserName(false);
    }
    function handleActualUserName() {
        setActualUserName(!useActualUserName);
        setUserName(!useActualUserName ? actualValues.actualUserName : "");
    }
    function handleActualDesc() {
        setActualDesc(!useActualDesc);
        setDesc(!useActualDesc ? actualValues.actualDesc : "");
    }
    function handleActualDuration() {
        setActualDuration(!useActualDuration);
        setDuration(!useActualDuration ? actualValues.actualDuration : "");
    }
    return (
        <div>
            <h1>Welcome to Edit page</h1>
            {
                !hasId ? 
                (
                    <form onSubmit={handleIdSubmit} style={{display: "flex", flexFlow: "column nowrap", justifyContent: "space-evenly", height: "20vh"}}>
                        <label>
                            Enter Exercise Id: <input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
                        </label>
                        <label>
                            <input type="submit" value="continue" disabled={!Boolean(id)}/>
                        </label>
                    </form>
                ) :
                (
                    <div>
                        <form onSubmit={handleEdit} style={{display: "flex", flexFlow: "column nowrap", justifyContent: "space-evenly", height: "80vh"}}>
                            <label>
                                Current User Name: <b>{ actualValues.actualUserName }</b>, Change To <input value={useActualUserName ? actualValues.actualUserName : userName} type="text" onChange={(e) => setUserName(e.target.value)}/>
                                <span><input onClick={handleActualUserName} type="button" value={!useActualUserName ? "Use Default" : "Revert"}/></span>
                            </label>
                            
                            <label>
                                Current Description: <b>{ actualValues.actualDesc }</b>, Change To <input value={useActualDesc ? actualValues.actualDesc : desc} type="text" onChange={(e) => setDesc(e.target.value)}/>
                                <span><input onClick={handleActualDesc} type="button" value={!useActualDuration ? "Use Default" : "Revert"}/></span>
                            </label>
                            <label>
                                Current Duration: <b>{ actualValues.actualDuration }</b>, Change To <input value={useActualDuration ? actualValues.actualDuration : duration} type="text" onChange={(e) => setDuration(e.target.value)}/>
                                <span><input onClick={handleActualDuration} type="button" value={!useActualDuration ? "Use Default" : "Revert"}/></span>
                            </label>
                            <label>
                                <input type="submit" value="Update Exercise"/>
                            </label>
                        </form>
                    </div>
                )
            }
        </div>
    )
}
