import React from 'react';
import { HeaderBar } from 'components/headerbar';
import { fetchCurrentUser } from 'api/adminAPI';
import { IUser } from "../../interfaces/user.interface";
import UserPage from "components/UserPage";
import { UserPageProps } from "../../interfaces/user.interface"
import { disableUser, resetUserPassword} from "../../api/adminAPI"
//import { fetchUserTableData } from 'api/postAPI';

const AdminPage: React.FC = () => {

  //const [userTableData, setUserTableData] = React.useState<[] | UserPageData[]>([]);
  const [currentUser, setCurrentUser] = React.useState<IUser>({
    username: ""
  });

  React.useEffect(() => {
    const renderPosts = async () => {
      const user = await fetchCurrentUser();
      if (user) setCurrentUser(user);

    };
    renderPosts();
  }, []);


  return (
    <>
      <HeaderBar title={"Admin Page of " + currentUser.username} />
      <UserPage 
      userList={userTableData.userList} 
      disableUser={disableUser} 
      resetUserPassword={resetUserPassword}
      totalPosts={userTableData.totalPosts}
      totalComments={userTableData.totalComments}
         />
    </>
  )
};

export default AdminPage;


const userTableData: UserPageProps = {
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
disableUser,
resetUserPassword,
totalPosts: 3 ,
totalComments: 3 ,
}