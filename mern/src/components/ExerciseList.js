import React, { useState, useEffect } from 'react'
import Exercise from "./Exercise";

export default function ExerciseList() {
    const [exercises, setExercises] = useState(null);
    useEffect(() => {
        async function getExercises() {
            const data = await fetch('http://localhost:5000/exercise');
            const result = await data.json();
            setExercises(result);
            console.log("exercises: ", result);
        }
        getExercises();
    }, []);
    return (
        <div>
            {
                !exercises ?
                <h1>Loading...</h1> :
                exercises.map(exercise => <Exercise key={exercise._id} exercise={exercise}/>)
            }
        </div>
    )
}
