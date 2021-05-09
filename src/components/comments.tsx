import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
  Typography
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { IComment } from 'interfaces/comment.interface';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  fonts: {
    fontWeight: 'bold'
  },
  inline: {
    display: 'inline'
  }
}));

interface CommentsProps {
  comments: IComment[];
  deleteComment: (commentId: string, username: string) => Promise<any>;
  username: string
}

const Comments: React.FC<CommentsProps> = ({ comments, deleteComment, username }) => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {comments.map((comment) => {
        const createdDate = new Date(comment.createdAt).toString().split('GMT')[0];
        return (
          <React.Fragment key={comment.id}>
            <ListItem key={comment.id} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="avatar"
                  src={`https://ui-avatars.com/api/?color=ff0000&name=${comment.username}`}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography className={classes.fonts}>
                    {comment.username.split('@')[0]}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary">
                      {comment.body}
                    </Typography>
                    {` - ${createdDate}`}
                  </>
                }
              />
              <IconButton aria-label="add to favorites" onClick={() => deleteComment(comment.id, username)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
            <Divider />
          </React.Fragment>
        );
      })}
    </List>
  );
};

export default Comments;
