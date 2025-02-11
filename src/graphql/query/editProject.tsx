import { gql } from '@apollo/client';
import client from '../../apolloClient';

export const GET_PROJECT = gql`
  query GetProject($projectId: String!) {
    getProject(projectId: $projectId) {
      _id
      projectId
      creator
      dateOfIssue
      interiorDesignerName
      email
      phone
      website
      country
      state
      city
      zip_code
      address1
      address2
      startDate
      endDate
      budget
      paymentReceived
      createdAt
      updatedAt
      client_info {
        name
        email
        phone
        country
        state
        city
        zip_code
        address1
        address2
        property_info {
          size
          designType
          subCategory
          phases
          comments
          property_address {
            address1
            address2
            country
            state
            city
            zip_code
          }
        }
      }
    }
  }
`;

export const fetchProjectQuery = async (projectId: string) => {
  try {
    const response = await client.query({
      query: GET_PROJECT,
      variables: { projectId },
    });
    return response?.data?.getProject;
  } catch (error) {
    console.error('Error fetching project:', error);
    return undefined;
  }
};
