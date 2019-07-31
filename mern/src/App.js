import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import ExerciseList from './components/ExerciseList';
import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";
import Landing from "./components/Landing";
import UserList from "./components/UserList";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Route path="/" exact component={Landing}/>
        <Route path="/exercises" component={ExerciseList}/>
        <Route path="/users" component={UserList}/>
        <Route path="/edit" component={EditExercise}/>
        <Route path="/create" component={CreateExercise}/>
        <Route path="/user" component={CreateUser}/>
      </div>
    </Router>
  );
}

export default App;
