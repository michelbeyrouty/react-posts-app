import { IComment } from './comment.interface';

export interface IPost {
  id: string;
  body: string;
  privacy: boolean;
  username: string;
  commentList: IComment[];
  createdAt: number;
}

export interface RootResponse {
  postAndCommentList: IPost[];
}
