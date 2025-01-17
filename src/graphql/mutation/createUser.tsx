import { gql } from '@apollo/client';
import client from '../../apolloClient';

interface ICreateUserProps {
	input: {
		full_name: string;
		email: string;
		password: string;
		phone:string;
	};
}

export const CREATE_USER = gql`
	mutation CreateUser($input: CreateUserInput!) {
		createUser(input: $input) {
			_id
			full_name
			email
			phone
			role
		}
	}
`;

export const createUserMutation = async (params: ICreateUserProps) => {
	try {
		const { data } = await client.mutate({
			mutation: CREATE_USER,
			variables: params,
		});
		return { data };
	} catch (error) {
		console.error('Error in createUserMutation',error);
		return { error };
	}
};
