export interface IComment {
  id: string;
  body: string;
  username: string;
  postId: string;
  createdAt: number;
  privacy?: boolean;
}

export interface RootResponse {
  commentList: IComment[];
}
