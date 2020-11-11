import React, { useState } from 'react';
import userList from './data';
import UserTable from './tables/UserTable';
import AddUserForm from './form/AddUserForm';

const App = () => {
  const [users, setUsers] = useState(userList);
  const addUser = user => {
    setUsers([...users, user]);
  }
  return (
    <div className='container'>
      <h1>React 게시판 App with Hooks by Iden Han</h1>
      <div className='row'>
        <div className='five columns'>
          <h2>Add comment</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className='seven columns'>
          <h2>View comments</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  )
}

export default App;