import { gql } from '@apollo/client';
import client from '../../apolloClient';

export const LIST_PROJECTS = gql`
  query ListProjects($limit: Int!) {
    listProjects(limit: $limit) {
      items {
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
  }
`;

export const fetchProjectListQuery = async (limit = 2) => {
  const token = localStorage.getItem('authTocken');
  try {
    const response = await client.query({
      query: LIST_PROJECTS,
      variables: { limit },
      context: {
        headers: {
          Authorization: `${token}`,
        },
      },
    });
    return response?.data?.listProjects?.items;
  } catch (error) {
    console.error('Error fetching project list:', error);
    return undefined;
  }
};
