# react-posts-app
* simple app for users to create posts and comment on them with admin console. 

User Portal

 - Register, Sign In, sign out ,verify user, and forget password
 - Create a post where the post can be private post (only user can see it ) or public post where others can see and comment on it
 - Users can only delete posts and comments of their own
 - Front end app of your own choice to interact with the apis
 - Authentication process using AWS Cognito

Admin Portal

 - Admin can disable users from login
 - Admin can reset user passwords
 - Admin have a dashboard to see overview statistics about user posts (number of users , number of posts , number of post per user , number of comments per post) 
 

# Getting Started with React Post App

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Setup EsLint and Prettier with VSCode

Let's install the devDependencies for ESlint -

```bash
yarn add -D prettier \                     # Prettier itself
         eslint-plugin-react \          # Eslint plugin for react
         eslint-plugin-react-hooks \    # Eslint plugin for react hooks, helps you write modern functional react components
         eslint-config-prettier \       # Eslint config for prettier, it will extend the style guide to match prettier
         eslint-plugin-prettier \       # Eslint plugin for prettier, it will raise eslint errors about formatting
         eslint-plugin-jsx-a11y         # Eslint plugin to raise accessibility violation errors
```


