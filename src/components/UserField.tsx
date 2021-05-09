import React from 'react';
import { IUser } from "../interfaces/user.interface"
import { disableUser, resetUserPassword } from 'api/adminAPI';

const UserField: React.FC<IUser> = ({
    username = "",
}) => {
    return (
        <div>
            <h5>User: {username}</h5>
            <button onClick={() => disableUser(username)} > disableUser </button >
            <input type="text"></input>
            <button onClick={() => resetUserPassword(username, "get password from text field")} > resetUserPassword</button >
            <h1>-----------------------------------------</h1>
        </div>
    )
};


export default UserField


