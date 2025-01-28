import { gql } from '@apollo/client';
import client from '../../apolloClient';

interface IAddressData {
  address1: string;
  address2?: string;
  city: string;
  state: string;
  country: string;
  zip_code: string;
}

interface IPropertyData {
  size: number;
  type: string;
  category: string;
  phases: number;
  comments: string;
  address_data: IAddressData;
}

interface IClientData {
  name: string;
  email: string;
  phone: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  country: string;
  zip_code: string;
  property_data: IPropertyData;
}

interface ICreateProjectInput {
  project_id: number;
  interior_designer_name: string;
  email: string;
  phone: string;
  website: string;
  country: string;
  city: string;
  state: string;
  zip_code: string;
  address1: string;
  address2?: string;
  start_date: string;
  end_date: string;
  budget: number;
  payment: boolean;
  client_data: IClientData;
}

interface ICreateProjectProps {
  input: ICreateProjectInput;
}

export const CREATE_PROJECT = gql`
  mutation CreateProject($input: CreateProjectInput!) {
    createProject(input: $input) {
      _id
      project_id
      interior_designer_name
      email
      phone
      website
      country
      city
      state
      zip_code
      address1
      address2
      start_date
      end_date
      budget
      payment
      client_data {
        name
        email
        phone
        address1
        address2
        city
        state
        country
        zip_code
        property_data {
          size
          type
          category
          phases
          comments
          address_data {
            address1
            address2
            city
            state
            country
            zip_code
          }
        }
      }
    }
  }
`;

export const createProjectMutation = async (params: ICreateProjectProps) => {
  try {
    const { data } = await client.mutate({
      mutation: CREATE_PROJECT,
      variables: params,
    });
    return { data };
  } catch (error) {
    console.error('Error in createProjectMutation', error);
    return { error };
  }
};
