import React from 'react';
import { HeaderBar } from 'components/headerbar';
import { fetchCurrentUser } from 'api/adminAPI';
import { IUser } from "../../interfaces/user.interface";
import UserPage from "components/UserPage";
import { disableUser, resetUserPassword} from "../../api/adminAPI"
import { fetchUserTableData } from 'api/adminAPI';
import { IUserTableData } from "../../interfaces/user.interface"

const AdminPage: React.FC = () => {

  const [localUserTableData, setLocalUserTableData] = React.useState<IUserTableData>({
    userList: [],
    totalComments: 0,
    totalPosts: 0
  });
  const [currentUser, setCurrentUser] = React.useState<IUser>({
    username: ""
  });

  React.useEffect(() => {

    const renderData = async () => {
      const user = await fetchCurrentUser();
      const { userTableData } = await fetchUserTableData()

      if (user) setCurrentUser(user);
      if(userTableData) setLocalUserTableData(userTableData)
      

    };

    renderData();
    
  }, []);


  return (
    <>
      <HeaderBar title={"Admin Page of " + currentUser.username} />
      <UserPage 
      userList={localUserTableData.userList} 
      disableUser={disableUser} 
      resetUserPassword={resetUserPassword}
      totalPosts={localUserTableData.totalPosts}
      totalComments={localUserTableData.totalComments}
         />
    </>
  )
};

export default AdminPage;


const userTableData2 = {
userList: [
  {
      username: "michel",
      numberOfPosts: 2,
      numberOfComments: 2
  },
  {
    username: "aziz",
    numberOfPosts: 2,
    numberOfComments: 2
  }
],
totalPosts: 3 ,
totalComments: 3 ,
}