import React, { useReducer } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
    FormGroup,
    FormControl,
    InputLabel,
    Input,
    IconButton,
    FormControlLabel,
    Switch
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper
    },
}));

interface SubmitPostProps {
    username: string;
    addPost: (body: string, privacy: boolean, username: string) => Promise<any>;
}


const SubmitPost: React.FC<SubmitPostProps> = ({
    username,
    addPost
}) => {

    const [formInput, setFormInput] = useReducer(
        (state: any, newState: any) => ({ ...state, ...newState }),
        {
            postBody: "",
            postPrivacy: false
        }
    );

    const classes = useStyles();

    const handleSubmit = (event: any) => {
        event.preventDefault();

        addPost(formInput.postBody, formInput.postPrivacy, username)

    }

    const handleInput = (evt: any) => {

        const name = evt.target.name;
        const newValue = evt.target.value;

        name === "postPrivacy" ? setFormInput({ [name]: !formInput.postPrivacy }) :
            setFormInput({ [name]: newValue })

    };

    return (
        <FormGroup className={classes.root} >
            <FormControl>
                <InputLabel htmlFor="my-input">Post body</InputLabel>
                <Input id="posyBody" aria-describedby="my-helper-text" name="postBody" onChange={handleInput} />
            </FormControl>
            <FormControlLabel
                control={<Switch size="small" checked={formInput.postPrivacy} name="postPrivacy" onChange={handleInput} />}
                label="Public"
            />
            <IconButton type="submit" value="Submit" aria-label="add to favorites" onClick={handleSubmit}>
                <AddCircleIcon />
            </IconButton>
        </FormGroup>
    );

}

export default SubmitPost;