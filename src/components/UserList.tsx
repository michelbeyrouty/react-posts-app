import React from 'react';
import { IUser } from "../interfaces/user.interface"
import UserField from "./UserField"

interface UserListProps {
    userList: IUser[];
}

const UserList: React.FC<UserListProps> = ({
    userList = [],
}) => {

    return (
        <div>
            {userList.map(user => {
                return (
                    <div key={user.username}>
                        <UserField username={user.username} />
                    </div>
                )
            })}
        </div>
    )
};


export default UserList


