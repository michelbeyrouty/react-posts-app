import React from 'react';
import styled from 'styled-components';
import { IPost } from 'interfaces/post.interface';
import { IUser } from 'interfaces/user.interface';
import { fetchPostsList, deletePost, addPost } from 'api/postAPI';
import { deleteComment, addComment } from 'api/commentAPI';
import { fetchCurrentUser } from 'api/adminAPI';
import Post from 'components/post';
import SubmitPost from 'components/SubmitPost';
import { AmplifySignOut } from '@aws-amplify/ui-react';

const Wrapper = styled.div`
  width: 100%;
`;
const UserPage: React.FC = () => {
  const [posts, setPosts] = React.useState<[] | IPost[]>([]);
  const [user, setUser] = React.useState<IUser>({
    username: 'test'
  });

  React.useEffect(() => {
    const renderData = async () => {
      const { postAndCommentList } = await fetchPostsList();
      const { username } = await fetchCurrentUser();

      console.log(postAndCommentList)

      if (postAndCommentList) setPosts(postAndCommentList);
      if (username) setUser({ username });
    };

    renderData();
  }, []);

  return (
    <Wrapper>
      <AmplifySignOut />
      <SubmitPost addPost={addPost} username={user.username} />
      <Post
        posts={posts}
        deletePost={deletePost}
        deleteComment={deleteComment}
        currentUser={user.username}
        addComment={addComment}
      />
    </Wrapper>
  );
};

export default UserPage;

// Dummy data

// const Posts: { postAndCommentList: IPost[] } = {
//   postAndCommentList: [
//     {
//       createdAt: 1620335071788,
//       username: 'michelbeyrouty1@gmail.com',
//       id: 'a7373dd0-aeae-11eb-ab22-698676b3dd60',
//       body: 'This a Post',
//       privacy: false,
//       commentList: [
//         {
//           createdAt: 1620335071788,
//           username: 'michelbeyrouty1@gmail.com',
//           id: 'a7373dd0-aeae-11eb-ab22-698676b3dd60',
//           privacy: false,
//           body: 'This is a comment',
//           postId: 'b04c3920-aeae-11eb-ab22-698676b3dd60'
//         },
//         {
//           createdAt: 1620335094982,
//           username: 'michelbeyrouty@gmail.com',
//           id: 'b50a3660-aeae-11eb-ab22-698676b3dd60',
//           privacy: false,
//           body: 'This is a comment',
//           postId: 'b04c3920-aeae-11eb-ab22-698676b3dd60'
//         },
//         {
//           createdAt: 1620335082991,
//           username: 'michelbeyrouty1@gmail.com',
//           id: 'ade487f0-aeae-11eb-ab22-698676b3dd60',
//           privacy: true,
//           body: 'This is a comment',
//           postId: 'b04c3920-aeae-11eb-ab22-698676b3dd60'
//         },
//         {
//           createdAt: 1620506942800,
//           username: 'michelbeyrouty@gmail.com',
//           id: 'd2524500-b03e-11eb-bb79-2bde76a8574c',
//           privacy: false,
//           body: 'fetch from text input',
//           postId: 'b04c3920-aeae-11eb-ab22-698676b3dd60'
//         },
//         {
//           createdAt: 1620335087026,
//           username: 'michelbeyrouty@gmail.com',
//           id: 'b04c3920-aeae-11eb-ab22-698676b3dd60',
//           privacy: true,
//           body: 'This is a comment',
//           postId: 'b04c3920-aeae-11eb-ab22-698676b3dd60'
//         }
//       ]
//     },
//     {
//       createdAt: 1620335094982,
//       username: 'michelbeyrouty@gmail.com',
//       id: 'b50a3660-aeae-11eb-ab22-698676b3dd60',
//       privacy: false,
//       body: 'This a Post',
//       commentList: [
//         {
//           createdAt: 1620335071788,
//           username: 'michelbeyrouty1@gmail.com',
//           id: 'a7373dd0-aeae-11eb-ab22-698676b3dd60',
//           privacy: false,
//           body: 'This is a comment',
//           postId: 'b04c3920-aeae-11eb-ab22-698676b3dd60'
//         },
//         {
//           createdAt: 1620335094982,
//           username: 'michelbeyrouty@gmail.com',
//           id: 'b50a3660-aeae-11eb-ab22-698676b3dd60',
//           privacy: false,
//           body: 'This is a comment',
//           postId: 'b04c3920-aeae-11eb-ab22-698676b3dd60'
//         },
//         {
//           createdAt: 1620335082991,
//           username: 'michelbeyrouty1@gmail.com',
//           id: 'ade487f0-aeae-11eb-ab22-698676b3dd60',
//           privacy: true,
//           body: 'This is a comment',
//           postId: 'b04c3920-aeae-11eb-ab22-698676b3dd60'
//         },
//         {
//           createdAt: 1620506942800,
//           username: 'michelbeyrouty@gmail.com',
//           id: 'd2524500-b03e-11eb-bb79-2bde76a8574c',
//           privacy: false,
//           body: 'fetch from text input',
//           postId: 'b04c3920-aeae-11eb-ab22-698676b3dd60'
//         },
//         {
//           createdAt: 1620335087026,
//           username: 'michelbeyrouty@gmail.com',
//           id: 'b04c3920-aeae-11eb-ab22-698676b3dd60',
//           privacy: true,
//           body: 'This is a comment',
//           postId: 'b04c3920-aeae-11eb-ab22-698676b3dd60'
//         }
//       ]
//     },
//     {
//       createdAt: 1620335082991,
//       username: 'michelbeyrouty1@gmail.com',
//       id: 'ade487f0-aeae-11eb-ab22-698676b3dd60',
//       privacy: true,
//       body: 'This a Post',
//       commentList: [
//         {
//           createdAt: 1620335071788,
//           username: 'michelbeyrouty1@gmail.com',
//           id: 'a7373dd0-aeae-11eb-ab22-698676b3dd60',
//           privacy: false,
//           body: 'This is a comment',
//           postId: 'b04c3920-aeae-11eb-ab22-698676b3dd60'
//         },
//         {
//           createdAt: 1620335094982,
//           username: 'michelbeyrouty@gmail.com',
//           id: 'b50a3660-aeae-11eb-ab22-698676b3dd60',
//           privacy: false,
//           body: 'This is a comment',
//           postId: 'b04c3920-aeae-11eb-ab22-698676b3dd60'
//         },
//         {
//           createdAt: 1620335082991,
//           username: 'michelbeyrouty1@gmail.com',
//           id: 'ade487f0-aeae-11eb-ab22-698676b3dd60',
//           privacy: true,
//           body: 'This is a comment',
//           postId: 'b04c3920-aeae-11eb-ab22-698676b3dd60'
//         },
//         {
//           createdAt: 1620506942800,
//           username: 'michelbeyrouty@gmail.com',
//           id: 'd2524500-b03e-11eb-bb79-2bde76a8574c',
//           privacy: false,
//           body: 'fetch from text input',
//           postId: 'b04c3920-aeae-11eb-ab22-698676b3dd60'
//         },
//         {
//           createdAt: 1620335087026,
//           username: 'michelbeyrouty@gmail.com',
//           id: 'b04c3920-aeae-11eb-ab22-698676b3dd60',
//           privacy: true,
//           body: 'This is a comment',
//           postId: 'b04c3920-aeae-11eb-ab22-698676b3dd60'
//         }
//       ]
//     },
//     {
//       createdAt: 1620506942800,
//       username: 'michelbeyrouty@gmail.com',
//       id: 'd2524500-b03e-11eb-bb79-2bde76a8574c',
//       privacy: false,
//       body: 'fetch from text input',
//       commentList: [
//         {
//           createdAt: 1620335071788,
//           username: 'michelbeyrouty1@gmail.com',
//           id: 'a7373dd0-aeae-11eb-ab22-698676b3dd60',
//           privacy: false,
//           body: 'This is a comment',
//           postId: 'b04c3920-aeae-11eb-ab22-698676b3dd60'
//         },
//         {
//           createdAt: 1620335094982,
//           username: 'michelbeyrouty@gmail.com',
//           id: 'b50a3660-aeae-11eb-ab22-698676b3dd60',
//           privacy: false,
//           body: 'This is a comment',
//           postId: 'b04c3920-aeae-11eb-ab22-698676b3dd60'
//         },
//         {
//           createdAt: 1620335082991,
//           username: 'michelbeyrouty1@gmail.com',
//           id: 'ade487f0-aeae-11eb-ab22-698676b3dd60',
//           privacy: true,
//           body: 'This is a comment',
//           postId: 'b04c3920-aeae-11eb-ab22-698676b3dd60'
//         },
//         {
//           createdAt: 1620506942800,
//           username: 'michelbeyrouty@gmail.com',
//           id: 'd2524500-b03e-11eb-bb79-2bde76a8574c',
//           privacy: false,
//           body: 'fetch from text input',
//           postId: 'b04c3920-aeae-11eb-ab22-698676b3dd60'
//         },
//         {
//           createdAt: 1620335087026,
//           username: 'michelbeyrouty@gmail.com',
//           id: 'b04c3920-aeae-11eb-ab22-698676b3dd60',
//           privacy: true,
//           body: 'This is a comment',
//           postId: 'b04c3920-aeae-11eb-ab22-698676b3dd60'
//         }
//       ]
//     },
//     {
//       createdAt: 1620335087026,
//       username: 'michelbeyrouty@gmail.com',
//       id: 'b04c3920-aeae-11eb-ab22-698676b3dd60',
//       privacy: true,
//       body: 'This a Post',
//       commentList: [
//         {
//           createdAt: 1620335071788,
//           username: 'michelbeyrouty1@gmail.com',
//           id: 'a7373dd0-aeae-11eb-ab22-698676b3dd60',
//           privacy: false,
//           body: 'This is a comment',
//           postId: 'b04c3920-aeae-11eb-ab22-698676b3dd60'
//         },
//         {
//           createdAt: 1620335094982,
//           username: 'michelbeyrouty@gmail.com',
//           id: 'b50a3660-aeae-11eb-ab22-698676b3dd60',
//           privacy: false,
//           body: 'This is a comment',
//           postId: 'b04c3920-aeae-11eb-ab22-698676b3dd60'
//         },
//         {
//           createdAt: 1620335082991,
//           username: 'michelbeyrouty1@gmail.com',
//           id: 'ade487f0-aeae-11eb-ab22-698676b3dd60',
//           privacy: true,
//           body: 'This is a comment',
//           postId: 'b04c3920-aeae-11eb-ab22-698676b3dd60'
//         },
//         {
//           createdAt: 1620506942800,
//           username: 'michelbeyrouty@gmail.com',
//           id: 'd2524500-b03e-11eb-bb79-2bde76a8574c',
//           privacy: false,
//           body: 'fetch from text input',
//           postId: 'b04c3920-aeae-11eb-ab22-698676b3dd60'
//         },
//         {
//           createdAt: 1620335087026,
//           username: 'michelbeyrouty@gmail.com',
//           id: 'b04c3920-aeae-11eb-ab22-698676b3dd60',
//           privacy: true,
//           postId: 'b04c3920-aeae-11eb-ab22-698676b3dd60',
//           body: 'This is a comment'
//         }
//       ]
//     }
//   ]
// };
