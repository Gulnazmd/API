import React, { useEffect, useState } from 'react';
import './Users.css';
import User from '../../components/User/User';
import axios from 'axios';
import Button from '../../components/UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';

function Users () {

    const [ myUsers, setUsers ] = useState({
        loading: false,
        users: null,
    });

    const dispatch = useDispatch()
    const page = useSelector(state => state.currentPage.currentPage)
    //const gitUsers = useSelector(state => state.gitUsers.gitUsers)

    const handlePrev = () => {
        dispatch({type: 'prev', payload: 1})
    }
    const handleNext = () => {
        dispatch({type: 'next', payload: 1})
    }

    useEffect(() => {
        setUsers({ loading: true });
        axios.get('https://api.github.com/users')
            .then((users) => {
                const allUsers = users.data;
                setUsers({loading: false, users: allUsers})
                //console.log(response);
            });
    }, [ setUsers ]);

        return (
            <div className='Users'>
                <h1>Github Users</h1>
                <User isLoading={myUsers.loading} users={myUsers.users} />
                <div className='myButtons'>
                    <Button clicked={() => handlePrev()}>Prev</Button>
                    <span style={{fontSize: '17px', color: 'grey', marginTop: '12px'}}>{ page < 1 ? 1 : page }</span>
                    <Button clicked={() => handleNext()}>Next</Button>
                </div>
            </div>
        )
    }

export default Users;