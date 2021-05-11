import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { IUserStatistics } from "../interfaces/user.interface"

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const UserTable: React.FC<UserTableData> = ({
  userList = [],
  disableUser,
  resetUserPassword,
}) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Posts</TableCell>
            <TableCell align="right">Comments</TableCell>
            <TableCell align="right">ChangePassword</TableCell>
            <TableCell align="right">Disable</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map((row) => (
            <TableRow key={row.username}>
              <TableCell component="th" scope="row">
                {row.username}
              </TableCell>
              <TableCell align="right">{row.numberOfPosts}</TableCell>
              <TableCell align="right">{row.numberOfComments}</TableCell>
              <TableCell align="right">{
                <button onClick={() => {resetUserPassword(row.username, "passwording") }} >ChangePassword</button>
              }</TableCell>
              <TableCell align="right">{
                <button onClick={() => {disableUser(row.username) }} >Disable</button>
              }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default UserTable;


export interface UserTableData {
  userList: IUserStatistics[];
  disableUser: (Username: string) => Promise<any>;
  resetUserPassword: (Password: string, Username: string) => Promise<any>;
}