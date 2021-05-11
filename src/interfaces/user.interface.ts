export interface IUser {
  username: string;
}

export interface IUserStatistics {
  username: string;
  numberOfPosts: number;
  numberOfComments: number;
}
export interface statisticsRootResponse {
  userTableData: IUserTableData;
}

export interface IUserTableData {
  userList: IUserStatistics[];
  totalComments: number;
  totalPosts: number;
}