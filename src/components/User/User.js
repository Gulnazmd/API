import React from "react";
import Model from "../Model/Model";
import './User.css';
import Button from '../UI/Button/Button';

const User = (props) => {

    const { users } = props;
    if (!users || users.length === 0) return <p>No users, sorry</p>;
    return (
        <div className="UsersDiv">
            {users.map((user) => {
                return (
                    <Model>
                        <img className="Photo" src={user.avatar_url} alt={user.avatar_url} />
                        <h3>{user.login}</h3>
                        <small>{user.type}</small>
                        <Button><a href={user.url}>Profile</a></Button>
                    </Model>
                )
            })
        }
        </div>
    )
}

export default User;