import { INTERNAL_API } from './api';
import { AxiosRequestConfig } from 'axios';
import { RootResponse } from '../interfaces/post.interface';

export const fetchPostsList = async () => {

  const response = await INTERNAL_API.get<RootResponse>('/posts');

  return response.data;
};

export const deletePost = async (postId: string, username: string) => {

  const config: AxiosRequestConfig = {
    method: 'DELETE',
    url: `/posts/${postId}`,
    data: {
      username
    }
  };


  console.log("deleting post: " + postId + username)
  const response = await INTERNAL_API.request<RootResponse>(config);

  window.location.reload(false);

  return response.data;
};

export const addPost = async (body: string, privacy: boolean, username: string) => {

  const config: AxiosRequestConfig = {
    method: 'POST',
    url: `/posts`,
    data: {
      body,
      privacy,
      username
    }
  };

  console.log({
    body,
    privacy,
    username
  })


  const response = await INTERNAL_API.request<RootResponse>(config);

  window.location.reload(false);

  return response.data;
};
