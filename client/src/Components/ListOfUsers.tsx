import React from 'react';
import { GET_ALL_USERS } from '../Graphql/Queries';
import { DELETE_USER } from '../Graphql/Mutations';
import { useQuery, useMutation } from '@apollo/client';

const MyComponent = () => {
    const { data } = useQuery(GET_ALL_USERS);

    const [deleteUser]  = useMutation(DELETE_USER);

    return (
        <div>
            { data && (data.getAllUsers.map((user: any) => {
                return <div key={ user.id }> { user.name } / { user.username } <button onClick={ () => { deleteUser({ variables: { id: user.id } }) } }>Delete User</button> </div>
            })) }
        </div>
    );
};

export default MyComponent;
