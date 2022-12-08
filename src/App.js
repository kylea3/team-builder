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

  const submitForm = () => {
    setTeam({teamList, ...team});

      setTeamList({
        name: '',
        email: '',
        role: ''
      });

}
  const updateForm = (inputName, inputValue) => {
      setTeamList({ ...teamList, [inputName]: inputValue })
    }
    
  return (
    <div className="App">
      <h1>New Team Member Form</h1>
      
      <Form 
      values={teamList}
      update={updateForm}
      submit={submitForm}
      />
      { team.map((member, idx) => {
          return (
            <TeamMember key={idx} details={member} />
          )
        })
      }
    </div>
  )
}

export default App;
