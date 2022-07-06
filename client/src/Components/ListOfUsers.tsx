import React from 'react';
import { GET_ALL_USERS } from '../Graphql/Queries';
import { useQuery } from '@apollo/client';

const MyComponent = () => {
    const { data } = useQuery(GET_ALL_USERS);

    return (
        <div>
            { data && (data.getAllUsers.map((user: any) => {
                return <div key={ user.id }> { user.name } / { user.username }</div>
            })) }
        </div>
    );
};

export default MyComponent;
