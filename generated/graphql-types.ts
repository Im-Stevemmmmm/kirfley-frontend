import { GraphQLClient } from "graphql-request";
import { print } from "graphql";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type User = {
  id: Scalars["Float"];
  username: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
  dateOfBirth: Scalars["String"];
};

export type AuthError = {
  field: Scalars["String"];
  message: Scalars["String"];
};

export type AuthResponse = {
  user: User;
  successful: Scalars["Boolean"];
  error?: Maybe<AuthError>;
};

export type Query = {
  me?: Maybe<User>;
  checkFieldAvailability: Scalars["Boolean"];
};

export type QueryCheckFieldAvailabilityArgs = {
  field: InputField;
  value: Scalars["String"];
};

export enum InputField {
  UsernameOrEmail = "USERNAME_OR_EMAIL",
  Username = "USERNAME",
  Email = "EMAIL",
  Password = "PASSWORD",
}

export type Mutation = {
  registerUser: AuthResponse;
  login: AuthResponse;
  logout: Scalars["Boolean"];
};

export type MutationRegisterUserArgs = {
  data: RegisterUserDto;
};

export type MutationLoginArgs = {
  data: LoginDto;
};

export type RegisterUserDto = {
  username: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
};

export type LoginDto = {
  usernameOrEmail: Scalars["String"];
  password: Scalars["String"];
};

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars["String"];
  password: Scalars["String"];
}>;

export type LoginMutation = {
  login: Pick<AuthResponse, "successful"> & {
    error?: Maybe<Pick<AuthError, "field" | "message">>;
  };
};

export type RegisterUserMutationVariables = Exact<{
  username: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type RegisterUserMutation = {
  registerUser: Pick<AuthResponse, "successful"> & {
    error?: Maybe<Pick<AuthError, "field" | "message">>;
  };
};

export type CheckFieldAvailabiltyQueryVariables = Exact<{
  field: InputField;
  value: Scalars["String"];
}>;

export type CheckFieldAvailabiltyQuery = Pick<Query, "checkFieldAvailability">;

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  me?: Maybe<Pick<User, "username" | "email" | "password">>;
};

export const LoginDocument = gql`
  mutation Login($usernameOrEmail: String!, $password: String!) {
    login(data: { usernameOrEmail: $usernameOrEmail, password: $password }) {
      successful
      error {
        field
        message
      }
    }
  }
`;
export const RegisterUserDocument = gql`
  mutation RegisterUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    registerUser(
      data: { username: $username, email: $email, password: $password }
    ) {
      successful
      error {
        field
        message
      }
    }
  }
`;
export const CheckFieldAvailabiltyDocument = gql`
  query CheckFieldAvailabilty($field: InputField!, $value: String!) {
    checkFieldAvailability(field: $field, value: $value)
  }
`;
export const MeDocument = gql`
  query Me {
    me {
      username
      email
      password
    }
  }
`;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    Login(
      variables: LoginMutationVariables,
      requestHeaders?: Headers
    ): Promise<LoginMutation> {
      return withWrapper(() =>
        client.request<LoginMutation>(
          print(LoginDocument),
          variables,
          requestHeaders
        )
      );
    },
    RegisterUser(
      variables: RegisterUserMutationVariables,
      requestHeaders?: Headers
    ): Promise<RegisterUserMutation> {
      return withWrapper(() =>
        client.request<RegisterUserMutation>(
          print(RegisterUserDocument),
          variables,
          requestHeaders
        )
      );
    },
    CheckFieldAvailabilty(
      variables: CheckFieldAvailabiltyQueryVariables,
      requestHeaders?: Headers
    ): Promise<CheckFieldAvailabiltyQuery> {
      return withWrapper(() =>
        client.request<CheckFieldAvailabiltyQuery>(
          print(CheckFieldAvailabiltyDocument),
          variables,
          requestHeaders
        )
      );
    },
    Me(
      variables?: MeQueryVariables,
      requestHeaders?: Headers
    ): Promise<MeQuery> {
      return withWrapper(() =>
        client.request<MeQuery>(print(MeDocument), variables, requestHeaders)
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
