import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  dateOfBirth: Scalars['String'];
};

export type AuthError = {
  __typename?: 'AuthError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  user: User;
  successful: Scalars['Boolean'];
  error?: Maybe<AuthError>;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  checkFieldAvailability: Scalars['Boolean'];
};


export type QueryCheckFieldAvailabilityArgs = {
  field: InputField;
  value: Scalars['String'];
};

export enum InputField {
  UsernameOrEmail = 'USERNAME_OR_EMAIL',
  Username = 'USERNAME',
  Email = 'EMAIL',
  Password = 'PASSWORD'
}

export type Mutation = {
  __typename?: 'Mutation';
  registerUser: AuthResponse;
  login: AuthResponse;
  logout: Scalars['Boolean'];
};


export type MutationRegisterUserArgs = {
  data: RegisterUserDto;
};


export type MutationLoginArgs = {
  data: LoginDto;
};

export type RegisterUserDto = {
  year: Scalars['Int'];
  month: Scalars['Int'];
  day: Scalars['Int'];
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginDto = {
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'AuthResponse' }
    & Pick<AuthResponse, 'successful'>
    & { error?: Maybe<(
      { __typename?: 'AuthError' }
      & Pick<AuthError, 'field' | 'message'>
    )> }
  ) }
);

export type RegisterUserMutationVariables = Exact<{
  year: Scalars['Int'];
  month: Scalars['Int'];
  day: Scalars['Int'];
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterUserMutation = (
  { __typename?: 'Mutation' }
  & { registerUser: (
    { __typename?: 'AuthResponse' }
    & Pick<AuthResponse, 'successful'>
    & { error?: Maybe<(
      { __typename?: 'AuthError' }
      & Pick<AuthError, 'field' | 'message'>
    )> }
  ) }
);

export type CheckFieldAvailabiltyQueryVariables = Exact<{
  field: InputField;
  value: Scalars['String'];
}>;


export type CheckFieldAvailabiltyQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'checkFieldAvailability'>
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'username' | 'email' | 'password'>
  )> }
);


export const LoginDocument = gql`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(data: {usernameOrEmail: $usernameOrEmail, password: $password}) {
    successful
    error {
      field
      message
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      usernameOrEmail: // value for 'usernameOrEmail'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterUserDocument = gql`
    mutation RegisterUser($year: Int!, $month: Int!, $day: Int!, $username: String!, $email: String!, $password: String!) {
  registerUser(
    data: {year: $year, month: $month, day: $day, username: $username, email: $email, password: $password}
  ) {
    successful
    error {
      field
      message
    }
  }
}
    `;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      year: // value for 'year'
 *      month: // value for 'month'
 *      day: // value for 'day'
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, baseOptions);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const CheckFieldAvailabiltyDocument = gql`
    query CheckFieldAvailabilty($field: InputField!, $value: String!) {
  checkFieldAvailability(field: $field, value: $value)
}
    `;

/**
 * __useCheckFieldAvailabiltyQuery__
 *
 * To run a query within a React component, call `useCheckFieldAvailabiltyQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckFieldAvailabiltyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckFieldAvailabiltyQuery({
 *   variables: {
 *      field: // value for 'field'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useCheckFieldAvailabiltyQuery(baseOptions: Apollo.QueryHookOptions<CheckFieldAvailabiltyQuery, CheckFieldAvailabiltyQueryVariables>) {
        return Apollo.useQuery<CheckFieldAvailabiltyQuery, CheckFieldAvailabiltyQueryVariables>(CheckFieldAvailabiltyDocument, baseOptions);
      }
export function useCheckFieldAvailabiltyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckFieldAvailabiltyQuery, CheckFieldAvailabiltyQueryVariables>) {
          return Apollo.useLazyQuery<CheckFieldAvailabiltyQuery, CheckFieldAvailabiltyQueryVariables>(CheckFieldAvailabiltyDocument, baseOptions);
        }
export type CheckFieldAvailabiltyQueryHookResult = ReturnType<typeof useCheckFieldAvailabiltyQuery>;
export type CheckFieldAvailabiltyLazyQueryHookResult = ReturnType<typeof useCheckFieldAvailabiltyLazyQuery>;
export type CheckFieldAvailabiltyQueryResult = Apollo.QueryResult<CheckFieldAvailabiltyQuery, CheckFieldAvailabiltyQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    username
    email
    password
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;