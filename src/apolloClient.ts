import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_API_URL || '',
  headers: {
    'x-api-key': import.meta.env.VITE_API_KEY || '',
  },
  cache: new InMemoryCache(),
});

export default client;
