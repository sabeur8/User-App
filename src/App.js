import { useState } from 'react';
import './App.css';
import User from './components/User';


function App() {
  const [users,setUsers] = useState([
    { summary: "sabero", EmailAdress: "saber@gmail", phonenumber: "23232322", location: "tunis", tags: "important" },
    { summary: "ahmed", EmailAdress: "ahmed@gmail", phonenumber: "23200322", location: "ariana", tags: "customer" },
    { summary: "asma", EmailAdress: "asma@gmail", phonenumber: "28800322", location: "bEJA", tags: "lead" }
  ]);

  
  const mapper = (element) =>(
    
    <User data = {element} />
    
  )
  
  
  const [mappedUsers, setMappedUsers] = useState(users.map(mapper));

  const handleChange = (e) => {
    
    const findUser = e.target.value.trim();
    const filterUsers = (element) => (
      element.summary.startsWith(findUser) 
    )
    const filtredUsers = users.filter(filterUsers);
    const newUsers = filtredUsers.map(mapper);
    setMappedUsers(newUsers);
  }
  
  return (
    <div>
    <table className='users' style={{textAlign:"center"}}>
      <tr className='TabTitre'>
        <th> Summary </th>
        <th> Email_Adress </th>
        <th> phone number </th>
        <th> Location </th>
        <th> Tags </th>
      </tr>
      {mappedUsers}
    </table>
    <input className='RechZone' type='texte' placeholder='find user' onChange={handleChange}/>
    <button className='submit' > ok </button>
    </div>
  
  );
}

export default App;
