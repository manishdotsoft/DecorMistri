import { gql } from '@apollo/client';
import client from '../../apolloClient';

interface ILoginUserProps {
  input: {
    email: string;
    password: string;
  };
}

export const LOGIN_USER = gql`
  mutation LoginUser($input: LoginUserInput!) {
    loginUser(input: $input) {
      message
      token
    }
  }
`;

export const loginUserMutation = async (params: ILoginUserProps) => {
  try {
    const { data } = await client.mutate({
      mutation: LOGIN_USER,
      variables: params,
    });
    return { data };
  } catch (error) {
    console.error(error);
    return { error };
  }
};
