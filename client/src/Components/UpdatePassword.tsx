import React, { useState } from 'react';
import { UPDATE_PASSWORD } from '../Graphql/Mutations';
import { useMutation } from '@apollo/client';

const UpdatePassword = () => {
  const [username, setUsername] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const [updatePassword] = useMutation(UPDATE_PASSWORD);

  return (
    <div>
      <input type="text" placeholder="Username..." onChange={(event) => {setUsername(event.target.value)}} />
      <input type="text" placeholder="Old Password..." onChange={(event) => {setOldPassword(event.target.value)}} />
      <input type="text" placeholder="New Password..." onChange={(event) => {setNewPassword(event.target.value)}} />
      <button onClick={() => {updatePassword({ variables: { username, oldPassword, newPassword } })}}>Update Password</button>
    </div>
  );
};

export default UpdatePassword;
