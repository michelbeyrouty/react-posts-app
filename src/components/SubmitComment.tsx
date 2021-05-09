import React, { useReducer } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
    FormGroup,
    FormControl,
    InputLabel,
    Input,
    IconButton,
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper
    },
}));

interface SubmitCommentProps {
    postId: string;
    username: string;
    addComment: (body: string, username: string, postId: string) => Promise<any>;
}


const SubmitComment: React.FC<SubmitCommentProps> = ({
    postId,
    username,
    addComment
}) => {

    const [formInput, setFormInput] = useReducer(
        (state: any, newState: any) => ({ ...state, ...newState }),
        {
            commentBody: "",
        }
    );

    const classes = useStyles();

    const handleSubmit = (event: any) => {
        event.preventDefault();

        addComment(formInput.commentBody, username, postId)

    }

    const handleInput = (evt: any) => {
        const name = evt.target.name;
        const newValue = evt.target.value;

        setFormInput({ [name]: newValue })
    };

    return (
        <FormGroup className={classes.root} >
            <FormControl>
                <InputLabel htmlFor="my-input">Comment body</InputLabel>
                <Input id="commentBody" aria-describedby="my-helper-text" name="commentBody" onChange={handleInput} />
            </FormControl>
            <IconButton type="submit" value="Submit" aria-label="add to favorites" onClick={handleSubmit}>
                <AddCircleIcon />
            </IconButton>
        </FormGroup>
    );

}

export default SubmitComment;