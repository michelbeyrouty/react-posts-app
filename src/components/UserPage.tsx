import React from 'react';
import { IUserStatistics } from "../interfaces/user.interface"
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


export interface UserPageProps {
    userList: IUserStatistics[];
    totalPosts: number ;
    totalComments: number ;
    disableUser: (Username: string) => Promise<any>;
    resetUserPassword: (Password: string, Username: string) => Promise<any>;
  
  }