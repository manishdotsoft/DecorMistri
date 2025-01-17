import { gql } from '@apollo/client';
import client from '../../apolloClient';

interface IForgotPasswordProps {
  input: {
    email: string;
    new_password: string;
    confirm_password: string;
  };
}

export const FORGOT_PASSWORD = gql`
  mutation ForgotPassword($input: ForgotPasswordInput!) {
    forgotPassword(input: $input) {
      message
    }
  }
`;

export const forgotPasswordMutation = async (params: IForgotPasswordProps) => {
  try {
    const { data } = await client.mutate({
      mutation: FORGOT_PASSWORD,
      variables: params,
    });
    return { data };
  } catch (error) {
    console.error('Error in forgotPasswordMutation',error);
    return { error };
  }
};
