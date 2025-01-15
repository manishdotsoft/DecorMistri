import { gql } from '@apollo/client';
import client from '../../apolloClient';

interface ICreateUserProps {
	input: {
		full_name: string;
		email: string;
		password: string;
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
			password
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
		console.error(error);
		return { error };
	}
};
