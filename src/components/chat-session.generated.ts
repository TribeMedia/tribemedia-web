import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ChatSessionByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['UUID']['input'];
}>;


export type ChatSessionByIdQuery = { __typename?: 'Query', chatSessionCollection?: { __typename?: 'ChatSessionConnection', edges: Array<{ __typename?: 'ChatSessionEdge', node: { __typename?: 'ChatSession', id: any, userId?: any | null, title?: string | null, notes?: string | null, data?: any | null, createdAt: any, startedAt?: any | null, endedAt?: any | null, lastActiveAt?: any | null } }> } | null };

export type ChatSessionFragment = { __typename?: 'ChatSession', id: any, userId?: any | null, title?: string | null, notes?: string | null, data?: any | null, createdAt: any, startedAt?: any | null, endedAt?: any | null, lastActiveAt?: any | null };

export const ChatSessionFragmentDoc = gql`
    fragment ChatSession on ChatSession {
  id
  userId
  title
  notes
  data
  createdAt
  startedAt
  endedAt
  lastActiveAt
}
    `;
export const ChatSessionByIdDocument = gql`
    query ChatSessionById($id: UUID!) {
  chatSessionCollection(filter: {id: {eq: $id}}) {
    edges {
      node {
        ...ChatSession
      }
    }
  }
}
    ${ChatSessionFragmentDoc}`;

/**
 * __useChatSessionByIdQuery__
 *
 * To run a query within a React component, call `useChatSessionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useChatSessionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatSessionByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useChatSessionByIdQuery(baseOptions: Apollo.QueryHookOptions<ChatSessionByIdQuery, ChatSessionByIdQueryVariables> & ({ variables: ChatSessionByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChatSessionByIdQuery, ChatSessionByIdQueryVariables>(ChatSessionByIdDocument, options);
      }
export function useChatSessionByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChatSessionByIdQuery, ChatSessionByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChatSessionByIdQuery, ChatSessionByIdQueryVariables>(ChatSessionByIdDocument, options);
        }
export function useChatSessionByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ChatSessionByIdQuery, ChatSessionByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ChatSessionByIdQuery, ChatSessionByIdQueryVariables>(ChatSessionByIdDocument, options);
        }
export type ChatSessionByIdQueryHookResult = ReturnType<typeof useChatSessionByIdQuery>;
export type ChatSessionByIdLazyQueryHookResult = ReturnType<typeof useChatSessionByIdLazyQuery>;
export type ChatSessionByIdSuspenseQueryHookResult = ReturnType<typeof useChatSessionByIdSuspenseQuery>;
export type ChatSessionByIdQueryResult = Apollo.QueryResult<ChatSessionByIdQuery, ChatSessionByIdQueryVariables>;