import React from 'react';
import { UserPageProps } from "../interfaces/user.interface"
import UserTable from "./userTable"
import AppStatisticsCard from "./AppStatisticsCard"

const UserPage: React.FC<UserPageProps> = ({
    userList = [],
    disableUser,
    resetUserPassword,
    totalPosts,
    totalComments,
}) => {

    return (
        <div>
          <UserTable userList={userList} disableUser={disableUser} resetUserPassword={resetUserPassword} />
          <AppStatisticsCard totalPosts={totalPosts} totalComments={totalComments}/>
        </div>
    )
};

export default UserPage;