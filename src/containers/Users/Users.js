import React, { useEffect, useState } from 'react';
import './Users.css';
import User from '../../components/User/User';
import axios from 'axios';

function Users () {
    //const [appState, setAppState] = useState({
    //loading: false,
    //users: null,
    //});
    // useEffect(() => {
    // setAppState({ loading: true });
    //const apiUrl = 'https://api.github.com/users';
    //axios.get(apiUrl).then((users) => {
    //const allUsers = users.data;
    // setAppState({ loading: false, users: allUsers });
    // });
    // }, [ setAppState ]);

    // const users = this.state.users.map(user => {
    // return(
    // <Link to={'/users/' + user.id} key={user.id}>
    // <User
    //  login={user.login}
    // avatar_url={user.avatar_url}
    //  />
    //</Link>);
    // })

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
                <User isLoading={myUsers.loading} users={myUsers.users}/>
            </div>
        )
    }

export default Users;