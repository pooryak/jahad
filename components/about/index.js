import React from 'react';
import { useContext } from 'react';
import UserContext from '../../contexts/userContext';

const about = () => {
    const {direction , changeDirection}= useContext(UserContext);
    console.log(direction,"direection")
    return (
        <div>
            about
            <button onClick={e=>changeDirection()} >click me</button>
        </div>
    )
}

export default about;
