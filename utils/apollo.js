import { ApolloClient, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useMemo } from 'react';
import apolloCache from './apolloCache';

let apolloClient;

function createApolloClient(session) {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`
  });

  const authLink = setContext((_, { headers, session: clientSession }) => {
    const jwt = session && session.jwt || clientSession && clientSession.jwt || ''
    const authorization = jwt ? `Bearer ${jwt}` : ''
    return { headers: { ...headers, authorization } }
  });

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(httpLink),
    cache: apolloCache
  })
};

export function initializeApollo(initialState = null, session) {
  const apolloClientGlobal = apolloClient ?? createApolloClient(session);

  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  };

  if (typeof window === 'undefined') return apolloClientGlobal;

  apolloClient = apolloClient ?? apolloClientGlobal;

  return apolloClient;
};

export function useApollo(initialState = null, session) {
  const store = useMemo(
    () => initializeApollo(initialState, session),
    [initialState, session]
  )
  return store
};