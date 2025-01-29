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
  designType: string;
  subCategory: string;
  phases: number;
  comments: string;
  property_address: IAddressData;
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
  property_info: IPropertyData;
}

interface ICreateProjectInput {
  projectId: number;
  interiorDesignerName: string;
  email: string;
  phone: string;
  website: string;
  country: string;
  city: string;
  state: string;
  zip_code: string;
  address1: string;
  address2?: string;
  startDate: string;
  endDate: string;
  budget: number;
  paymentReceived: boolean;
  client_info: IClientData;
}

interface ICreateProjectProps {
  input: ICreateProjectInput;
}

export const CREATE_PROJECT = gql`
  mutation CreateProject($input: CreateProjectInput!) {
    createProject(input: $input) {
      _id
      projectId
      interiorDesignerName
      email
      phone
      website
      country
      city
      state
      zip_code
      address1
      address2
      startDate
      endDate
      budget
      paymentReceived
      client_info {
        name
        email
        phone
        address1
        address2
        city
        state
        country
        zip_code
        property_info {
          size
          designType
          subCategory
          phases
          comments
          property_address {
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
  const token = localStorage.getItem('authTocken');
  try {
    const { data, errors } = await client.mutate({
      mutation: CREATE_PROJECT,
      variables: params,
      context: {
        headers: {
          Authorization: `${token}`,
        },
      },
    });

    if (errors) {
      console.error('GraphQL Errors:', errors);
    }
    return { data };
  } catch (error) {
    console.error('Error in createProjectMutation:', error);
    return { error };
  }
};
