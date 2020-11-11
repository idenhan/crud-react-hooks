import React from 'react';
import { format } from 'date-fns';

const userTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Comment</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        { props.users.length > 0 ? (
          props.users.map(user => {
            const {name, password, comment} = user;
            return (
              <tr>
                <td>{name}</td>
                <td>{comment}</td>
                <td>{format(new Date(), 'yyyy-MM-dd')}</td>
                <td>
                  <button onClick={() => props.deleteUser(password)}>Delete</button>
                  <button>Edit</button>
                </td>
              </tr>
            )
          })
        ) : (
          <tr>
            <td colSpan={4}>No users found</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default userTable;