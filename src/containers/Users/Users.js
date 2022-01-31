import React, { useEffect, useState } from 'react';
import './Users.css';
import User from '../../components/User/User';
import axios from 'axios';
import Button from '../../components/UI/Button/Button';

function Users () {

    const [ myUsers, setUsers ] = useState({
        loading: false,
        users: null,
    });

    useEffect(() => {
        setUsers({ loading: true });
        axios.get('https://api.github.com/users')
            .then((users) => {
                const allUsers = users.data;
                setUsers({loading: false, users: allUsers})
                //console.log(response);
            });
    }, [setUsers]);
        return (
            <div className='Users'>
                <h1>Github Users</h1>
                <User isLoading={myUsers.loading} users={myUsers.users} />
                <div className='myButtons'>
                    <Button>Prev</Button>
                    <Button>Next</Button>
                </div>
            </div>
        )
    }

export default Users;