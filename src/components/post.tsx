import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { IPost } from 'interfaces/post.interface';
import Comments from './comments';
import SubmitComment from "./SubmitComment"


interface PostProps {
  posts: IPost[];
  currentUser: string;
  deletePost: (postId: string, username: string) => Promise<any>;
  deleteComment: (postId: string, username: string) => Promise<any>
  addComment: (body: string, username: string, postId: string) => Promise<any>
}



const Post: React.FC<PostProps> = ({
  posts,
  deletePost,
  deleteComment,
  currentUser,
  addComment
}) => {
  return (
    <div className="Posts">
      <div className="PostStream">
        {posts.map((post: IPost, index: number) => {
          return (post.privacy || post.username === currentUser) && (
            <Card key={post.id} style={{ margin: '30px' }}>
              <CardHeader
                avatar={
                  <>
                    <Avatar
                      src={`https://ui-avatars.com/api/?color=ff0000&name=${post.username}`}
                      alt={post.username.split('@')[0]}
                      style={{
                        width: '40px',
                        marginRight: 10,
                        display: 'inline-block',
                        verticalAlign: 'middle'
                      }}
                    />
                    {post.username.split('@')[0]}
                  </>
                }
              />
              <IconButton aria-label="add to favorites" onClick={() => deletePost(post.id, currentUser)}>
                <DeleteIcon />
              </IconButton>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {post.body}
                </Typography>

                <Comments comments={post.commentList} deleteComment={deleteComment} username={currentUser} />
              </CardContent>
              <CardActions disableSpacing>
                <SubmitComment postId={post.id} username={currentUser} addComment={addComment} />
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Post;