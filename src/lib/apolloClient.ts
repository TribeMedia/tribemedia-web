import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/v1/graphql`,
  cache: new InMemoryCache(),
  headers: {
    apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
  },
});
