import React from "react";
import './UserDetails.css';
import Model from '../Model/Model';
import Button from '../UI/Button/Button';
import { useNavigate } from 'react-router-dom';



const PostDetails = (users) => {

    const navigateTo = useNavigate();

    const BackHandle = () => {
        navigateTo('/')
    }

    return (
        <div className="PostDetails">

                <Model>
                    <h3>{users.id}</h3>
                    <small>welcome</small>
                </Model>
            <Button clicked={BackHandle}>Back to Users</Button>
        </div>
            )
}

export default PostDetails;