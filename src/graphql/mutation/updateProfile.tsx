import { gql } from '@apollo/client';
import client from '../../apolloClient';

interface ICupdateProfileProps {
  input: {
    businessName: string;
    professionalCategory: string;
    designTypeExpertise: string;
    styleTypeExpertise: string;
    state: string;
    city: string;
    location: string;
  };
}

export const UPDATE_PROFILE = gql`
  mutation UpdateProfile($input: updateProfileInput!) {
    updateProfile(input: $input) {
      _id
      businessName
      professionalCategory
      designTypeExpertise
      styleTypeExpertise
      state
      city
      location
    }
  }
`;

export const updateProfileMutation = async (params: ICupdateProfileProps) => {
  try {
    const { data } = await client.mutate({
      mutation: UPDATE_PROFILE,
      variables: params,
    });
    return { data };
  } catch (error) {
    console.error('Error in updateProfileMutation', error);
    return { error };
  }
};
