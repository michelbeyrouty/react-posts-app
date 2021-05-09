import React from 'react';
import { HeaderBar } from 'components/headerbar';
import { fetchCurrentUser, listUsers } from 'api/adminAPI';
import { IUser } from "../../interfaces/user.interface"
import UserList from "components/UserList"

const AdminPage: React.FC = () => {

  const [userList, setUserList] = React.useState<[] | IUser[]>([]);
  const [currentUser, setCurrentUser] = React.useState<IUser>({
    username: ""
  });

  React.useEffect(() => {
    const renderPosts = async () => {
      const userList = await listUsers();
      const user = await fetchCurrentUser();

      if (userList) setUserList(userList);
      if (user) setCurrentUser(user);

    };
    renderPosts();
  }, [userList]);


  return (
    <>
      <HeaderBar title={"Admin Page of " + currentUser.username} />
      <UserList userList={userList} />
    </>
  )
};

export default AdminPage;
