export interface IUser {
  username: string;
}

export interface UserStatistics {
  username: string;
  numberOfPosts: number;
  numberOfComments: number;
}

export interface UserTableData {
  userList: UserStatistics[];
  disableUser: (Username: string) => Promise<any>;
  resetUserPassword: (Password: string, Username: string) => Promise<any>;
}

export interface UserPageProps {
  userList: UserStatistics[];
  totalPosts: number ;
  totalComments: number ;
  disableUser: (Username: string) => Promise<any>;
  resetUserPassword: (Password: string, Username: string) => Promise<any>;

}