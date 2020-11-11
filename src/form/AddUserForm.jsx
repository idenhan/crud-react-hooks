import React, { useState } from 'react';

const AddUserForm = (props) => {
  const initUser = { name: '', password: '', comment: ''};

  const [user, setUser] = useState(initUser);

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({...user, [name] : value});
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (user.name && user.comment) {
      handleChange(e, props.addUser(user));
    }
  }

  return (
    <form>
      <label>Name</label>
      <input className='u-full-width' type='text' name='name' value={user.name} onChange={handleChange}/>
      <label>Comment</label>
      <input className='u-full-width' type='text' name='comment' value={user.comment} onChange={handleChange}/>
      <button className='button-primary' type='submit' onClick={handleSubmit}>Add user</button>
    </form>
  )
}

export default AddUserForm;