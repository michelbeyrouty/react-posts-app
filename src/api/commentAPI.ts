import { RootResponse } from '../interfaces/comment.interface';
import { INTERNAL_API } from './api';
import { AxiosRequestConfig } from 'axios';

export const addComment = async (body: string, username: string, postId: string) => {

  const config: AxiosRequestConfig = {
    method: 'POST',
    url: `/comments`,
    data: {
      body,
      username,
      postId
    }
  };

  console.log({
    body,
    username,
    postId
  });


  const response = await INTERNAL_API.request<RootResponse>(config);

  window.location.reload(false);

  return response.data;
};


export const deleteComment = async (commentId: string, username: string) => {

  const config: AxiosRequestConfig = {
    method: 'DELETE',
    url: `/comments/${commentId}`,
    data: {
      username
    }
  };

  console.log(commentId);

  const response = await INTERNAL_API.request<RootResponse>(config);

  window.location.reload(false);

  return response.data;
};