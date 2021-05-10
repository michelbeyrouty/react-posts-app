import AWS from 'aws-sdk';
import { Auth } from 'aws-amplify';
import { IUser } from "interfaces/user.interface"

AWS.config.update({
  region: process.env.AWS_REGION,
  'accessKeyId': process.env.AWS_ACCESS_KEY_ID,
  'secretAccessKey': process.env.AWS_ACCESS_KEY
});

const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();


export const fetchCurrentUser = async () => {
  const user = Auth.currentAuthenticatedUser();
  return user;
};


export const listUsers = async (): Promise<IUser[]> => {

  var params = {
    UserPoolId: "eu-west-1_R48OKlhq0",
  };

  return new Promise((resolve, reject) => {

    cognitoidentityserviceprovider.listUsers(params, (err: any, data: any) => {
      if (err) {
        reject(err)
      }
      else {
        const userList: IUser[] = data.Users.map((user: any) => {
          return {
            username: user.Username
          }
        })
        resolve(userList)
      }
    })

  });

}


export const disableUser = async (Username: string) => {

  var params = {
    UserPoolId: "eu-west-1_R48OKlhq0",
    Username
  };

  console.log(params);

  return new Promise((resolve, reject) => {

    cognitoidentityserviceprovider.adminDisableUser(params, (err: any, data: any) => {
      if (err) {
        console.log(err);
        reject(err)
      }
      else {
        console.log("data", data);
        resolve(data)
      }
    })

  });
}


export const resetUserPassword = async (Username: string, Password: string) => {

  var params = {
    UserPoolId: "eu-west-1_R48OKlhq0",
    Username, /* required */
    ClientMetadata: {
      Password
    }
  };

  console.log(params);


  return new Promise((resolve, reject) => {

    cognitoidentityserviceprovider.adminResetUserPassword(params, (err: any, data: any) => {
      if (err) {
        console.log(err);
        reject(err)
      }
      else {
        console.log("data", data);
        resolve(data)
      }
    })

  });
}