import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import TeamMember from './components/TeamMember';



function App() {
  const [teamList, setTeamList] = useState({
    name: '',
    email: '',
    role: ''
  });
  const [team, setTeam] = useState([]);
  const [formError, setFormError] = useState('');

  const updateForm = (inputName, inputValue) => {
    setTeamList({ ...teamList, [inputName]: inputValue })
  }

  const submitForm = () => {
    const newTeam = {
      name: teamList.name.trim(),
      email: teamList.email.trim(),
      role: teamList.role
    }

    if (!teamList.name || !teamList.email || teamList.role) {
      setFormError('You need to fill out name, email, and role!')
    }

    setTeamList({
      name: '',
      email: '',
      role: ''
    });
  }
  return (
    <div className="App">
      <h1>New Team Member Form</h1>
      {formError && <h2>{formError}</h2>}
      
      <Form 
      values={teamList}
      update={updateForm}
      submit={submitForm}
      />
      {
        team.map(team => {
          return (
            <TeamMember key={team.id} details={team} />
          )
        })
      }
    </div>
  );
}

export default App;
