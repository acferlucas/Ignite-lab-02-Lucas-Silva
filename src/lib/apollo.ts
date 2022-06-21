import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o5qrj40o1401xi15uz60ia/master',
  cache: new InMemoryCache()
})