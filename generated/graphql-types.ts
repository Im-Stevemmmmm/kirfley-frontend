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
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AuthError = {
  __typename?: 'AuthError';
  field: InputField;
  message: Scalars['String'];
};

export enum InputField {
  UsernameOrEmail = 'USERNAME_OR_EMAIL',
  Username = 'USERNAME',
  Email = 'EMAIL',
  Password = 'PASSWORD'
}

export type AuthResponse = {
  __typename?: 'AuthResponse';
  successful: Scalars['Boolean'];
  error?: Maybe<AuthError>;
};

export type RegisterUserInput = {
  year: Scalars['Float'];
  month: Scalars['Float'];
  day: Scalars['Float'];
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  comment?: Maybe<Comment>;
  findFirstComment?: Maybe<Comment>;
  comments: Array<Comment>;
  aggregateComment: AggregateComment;
  post?: Maybe<Post>;
  findFirstPost?: Maybe<Post>;
  posts: Array<Post>;
  aggregatePost: AggregatePost;
  user?: Maybe<User>;
  findFirstUser?: Maybe<User>;
  users: Array<User>;
  aggregateUser: AggregateUser;
  me?: Maybe<User>;
  checkFieldAvailability: Scalars['Boolean'];
};


export type QueryCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type QueryFindFirstCommentArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  cursor?: Maybe<CommentWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CommentDistinctFieldEnum>>;
};


export type QueryCommentsArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  cursor?: Maybe<CommentWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CommentDistinctFieldEnum>>;
};


export type QueryAggregateCommentArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  cursor?: Maybe<CommentWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CommentDistinctFieldEnum>>;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryFindFirstPostArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<PostDistinctFieldEnum>>;
};


export type QueryPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<PostDistinctFieldEnum>>;
};


export type QueryAggregatePostArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<PostDistinctFieldEnum>>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryFindFirstUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserDistinctFieldEnum>>;
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserDistinctFieldEnum>>;
};


export type QueryAggregateUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserDistinctFieldEnum>>;
};


export type QueryCheckFieldAvailabilityArgs = {
  field: InputField;
  value: Scalars['String'];
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['Int'];
  content: Scalars['String'];
  postId: Scalars['Int'];
  userId: Scalars['Int'];
  user: User;
  post: Post;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  dateOfBirth: Scalars['DateTime'];
  posts?: Maybe<Array<Post>>;
  comments?: Maybe<Array<Comment>>;
};


export type UserPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<PostDistinctFieldEnum>>;
};


export type UserCommentsArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  cursor?: Maybe<CommentWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CommentDistinctFieldEnum>>;
};


export type Post = {
  __typename?: 'Post';
  id: Scalars['Int'];
  uuid: Scalars['String'];
  content: Scalars['String'];
  creatorId: Scalars['Int'];
  creator: User;
  comments?: Maybe<Array<Comment>>;
};


export type PostCommentsArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  cursor?: Maybe<CommentWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CommentDistinctFieldEnum>>;
};

export type CommentWhereInput = {
  AND?: Maybe<Array<CommentWhereInput>>;
  OR?: Maybe<Array<CommentWhereInput>>;
  NOT?: Maybe<Array<CommentWhereInput>>;
  id?: Maybe<IntFilter>;
  content?: Maybe<StringFilter>;
  user?: Maybe<UserRelationFilter>;
  post?: Maybe<PostRelationFilter>;
  postId?: Maybe<IntFilter>;
  userId?: Maybe<IntFilter>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<IntFilter>;
  username?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  dateOfBirth?: Maybe<DateTimeFilter>;
  posts?: Maybe<PostListRelationFilter>;
  comments?: Maybe<CommentListRelationFilter>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type PostListRelationFilter = {
  every?: Maybe<PostWhereInput>;
  some?: Maybe<PostWhereInput>;
  none?: Maybe<PostWhereInput>;
};

export type PostWhereInput = {
  AND?: Maybe<Array<PostWhereInput>>;
  OR?: Maybe<Array<PostWhereInput>>;
  NOT?: Maybe<Array<PostWhereInput>>;
  id?: Maybe<IntFilter>;
  uuid?: Maybe<StringFilter>;
  content?: Maybe<StringFilter>;
  creator?: Maybe<UserRelationFilter>;
  creatorId?: Maybe<IntFilter>;
  comments?: Maybe<CommentListRelationFilter>;
};

export type CommentListRelationFilter = {
  every?: Maybe<CommentWhereInput>;
  some?: Maybe<CommentWhereInput>;
  none?: Maybe<CommentWhereInput>;
};

export type PostRelationFilter = {
  is?: Maybe<PostWhereInput>;
  isNot?: Maybe<PostWhereInput>;
};

export type CommentOrderByInput = {
  id?: Maybe<SortOrder>;
  content?: Maybe<SortOrder>;
  postId?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type CommentWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export enum CommentDistinctFieldEnum {
  Id = 'id',
  Content = 'content',
  PostId = 'postId',
  UserId = 'userId'
}

export type PostOrderByInput = {
  id?: Maybe<SortOrder>;
  uuid?: Maybe<SortOrder>;
  content?: Maybe<SortOrder>;
  creatorId?: Maybe<SortOrder>;
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export enum PostDistinctFieldEnum {
  Id = 'id',
  Uuid = 'uuid',
  Content = 'content',
  CreatorId = 'creatorId'
}

export type AggregateComment = {
  __typename?: 'AggregateComment';
  count: Scalars['Int'];
  avg?: Maybe<CommentAvgAggregate>;
  sum?: Maybe<CommentSumAggregate>;
  min?: Maybe<CommentMinAggregate>;
  max?: Maybe<CommentMaxAggregate>;
};

export type CommentAvgAggregate = {
  __typename?: 'CommentAvgAggregate';
  id: Scalars['Float'];
  postId: Scalars['Float'];
  userId: Scalars['Float'];
};

export type CommentSumAggregate = {
  __typename?: 'CommentSumAggregate';
  id: Scalars['Int'];
  postId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type CommentMinAggregate = {
  __typename?: 'CommentMinAggregate';
  id: Scalars['Int'];
  postId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type CommentMaxAggregate = {
  __typename?: 'CommentMaxAggregate';
  id: Scalars['Int'];
  postId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type AggregatePost = {
  __typename?: 'AggregatePost';
  count: Scalars['Int'];
  avg?: Maybe<PostAvgAggregate>;
  sum?: Maybe<PostSumAggregate>;
  min?: Maybe<PostMinAggregate>;
  max?: Maybe<PostMaxAggregate>;
};

export type PostAvgAggregate = {
  __typename?: 'PostAvgAggregate';
  id: Scalars['Float'];
  creatorId: Scalars['Float'];
};

export type PostSumAggregate = {
  __typename?: 'PostSumAggregate';
  id: Scalars['Int'];
  creatorId: Scalars['Int'];
};

export type PostMinAggregate = {
  __typename?: 'PostMinAggregate';
  id: Scalars['Int'];
  creatorId: Scalars['Int'];
};

export type PostMaxAggregate = {
  __typename?: 'PostMaxAggregate';
  id: Scalars['Int'];
  creatorId: Scalars['Int'];
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type UserOrderByInput = {
  id?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  dateOfBirth?: Maybe<SortOrder>;
};

export enum UserDistinctFieldEnum {
  Id = 'id',
  Username = 'username',
  Email = 'email',
  Password = 'password',
  DateOfBirth = 'dateOfBirth'
}

export type AggregateUser = {
  __typename?: 'AggregateUser';
  count: Scalars['Int'];
  avg?: Maybe<UserAvgAggregate>;
  sum?: Maybe<UserSumAggregate>;
  min?: Maybe<UserMinAggregate>;
  max?: Maybe<UserMaxAggregate>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id: Scalars['Float'];
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id: Scalars['Int'];
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  id: Scalars['Int'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  id: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment: Comment;
  deleteComment?: Maybe<Comment>;
  updateComment?: Maybe<Comment>;
  deleteManyComment: BatchPayload;
  updateManyComment: BatchPayload;
  upsertComment: Comment;
  createPost: Post;
  deletePost?: Maybe<Post>;
  updatePost?: Maybe<Post>;
  deleteManyPost: BatchPayload;
  updateManyPost: BatchPayload;
  upsertPost: Post;
  createUser: User;
  deleteUser?: Maybe<User>;
  updateUser?: Maybe<User>;
  deleteManyUser: BatchPayload;
  updateManyUser: BatchPayload;
  upsertUser: User;
  registerUser: AuthResponse;
  login: AuthResponse;
  logout: Scalars['Boolean'];
};


export type MutationCreateCommentArgs = {
  data: CommentCreateInput;
};


export type MutationDeleteCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type MutationUpdateCommentArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationDeleteManyCommentArgs = {
  where?: Maybe<CommentWhereInput>;
};


export type MutationUpdateManyCommentArgs = {
  data: CommentUpdateManyMutationInput;
  where?: Maybe<CommentWhereInput>;
};


export type MutationUpsertCommentArgs = {
  where: CommentWhereUniqueInput;
  create: CommentCreateInput;
  update: CommentUpdateInput;
};


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationDeleteManyPostArgs = {
  where?: Maybe<PostWhereInput>;
};


export type MutationUpdateManyPostArgs = {
  data: PostUpdateManyMutationInput;
  where?: Maybe<PostWhereInput>;
};


export type MutationUpsertPostArgs = {
  where: PostWhereUniqueInput;
  create: PostCreateInput;
  update: PostUpdateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationUpsertUserArgs = {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
};


export type MutationRegisterUserArgs = {
  options: RegisterUserInput;
};


export type MutationLoginArgs = {
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
};

export type CommentCreateInput = {
  content: Scalars['String'];
  user: UserCreateOneWithoutCommentsInput;
  post: PostCreateOneWithoutCommentsInput;
};

export type UserCreateOneWithoutCommentsInput = {
  create?: Maybe<UserCreateWithoutCommentsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutcommentsInput>;
};

export type UserCreateWithoutCommentsInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  dateOfBirth: Scalars['DateTime'];
  posts?: Maybe<PostCreateManyWithoutCreatorInput>;
};

export type PostCreateManyWithoutCreatorInput = {
  create?: Maybe<Array<PostCreateWithoutCreatorInput>>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutcreatorInput>>;
};

export type PostCreateWithoutCreatorInput = {
  uuid?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  comments?: Maybe<CommentCreateManyWithoutPostInput>;
};

export type CommentCreateManyWithoutPostInput = {
  create?: Maybe<Array<CommentCreateWithoutPostInput>>;
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutpostInput>>;
};

export type CommentCreateWithoutPostInput = {
  content: Scalars['String'];
  user: UserCreateOneWithoutCommentsInput;
};

export type CommentCreateOrConnectWithoutpostInput = {
  where: CommentWhereUniqueInput;
  create: CommentCreateWithoutPostInput;
};

export type PostCreateOrConnectWithoutcreatorInput = {
  where: PostWhereUniqueInput;
  create: PostCreateWithoutCreatorInput;
};

export type UserCreateOrConnectWithoutcommentsInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutCommentsInput;
};

export type PostCreateOneWithoutCommentsInput = {
  create?: Maybe<PostCreateWithoutCommentsInput>;
  connect?: Maybe<PostWhereUniqueInput>;
  connectOrCreate?: Maybe<PostCreateOrConnectWithoutcommentsInput>;
};

export type PostCreateWithoutCommentsInput = {
  uuid?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  creator: UserCreateOneWithoutPostsInput;
};

export type UserCreateOneWithoutPostsInput = {
  create?: Maybe<UserCreateWithoutPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutpostsInput>;
};

export type UserCreateWithoutPostsInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  dateOfBirth: Scalars['DateTime'];
  comments?: Maybe<CommentCreateManyWithoutUserInput>;
};

export type CommentCreateManyWithoutUserInput = {
  create?: Maybe<Array<CommentCreateWithoutUserInput>>;
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutuserInput>>;
};

export type CommentCreateWithoutUserInput = {
  content: Scalars['String'];
  post: PostCreateOneWithoutCommentsInput;
};

export type CommentCreateOrConnectWithoutuserInput = {
  where: CommentWhereUniqueInput;
  create: CommentCreateWithoutUserInput;
};

export type UserCreateOrConnectWithoutpostsInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutPostsInput;
};

export type PostCreateOrConnectWithoutcommentsInput = {
  where: PostWhereUniqueInput;
  create: PostCreateWithoutCommentsInput;
};

export type CommentUpdateInput = {
  content?: Maybe<StringFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCommentsInput>;
  post?: Maybe<PostUpdateOneRequiredWithoutCommentsInput>;
};

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type UserUpdateOneRequiredWithoutCommentsInput = {
  create?: Maybe<UserCreateWithoutCommentsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutCommentsInput>;
  upsert?: Maybe<UserUpsertWithoutCommentsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutcommentsInput>;
};

export type UserUpdateWithoutCommentsInput = {
  username?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  dateOfBirth?: Maybe<DateTimeFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutCreatorInput>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type PostUpdateManyWithoutCreatorInput = {
  create?: Maybe<Array<PostCreateWithoutCreatorInput>>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutCreatorInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereWithoutCreatorInput>>;
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutCreatorInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutcreatorInput>>;
};

export type PostUpdateWithWhereUniqueWithoutCreatorInput = {
  where: PostWhereUniqueInput;
  data: PostUpdateWithoutCreatorInput;
};

export type PostUpdateWithoutCreatorInput = {
  uuid?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
};

export type CommentUpdateManyWithoutPostInput = {
  create?: Maybe<Array<CommentCreateWithoutPostInput>>;
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereWithoutPostInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutPostInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutpostInput>>;
};

export type CommentUpdateWithWhereUniqueWithoutPostInput = {
  where: CommentWhereUniqueInput;
  data: CommentUpdateWithoutPostInput;
};

export type CommentUpdateWithoutPostInput = {
  content?: Maybe<StringFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCommentsInput>;
};

export type CommentUpdateManyWithWhereWithoutPostInput = {
  where: CommentScalarWhereInput;
  data: CommentUpdateManyMutationInput;
};

export type CommentScalarWhereInput = {
  AND?: Maybe<Array<CommentScalarWhereInput>>;
  OR?: Maybe<Array<CommentScalarWhereInput>>;
  NOT?: Maybe<Array<CommentScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  content?: Maybe<StringFilter>;
  postId?: Maybe<IntFilter>;
  userId?: Maybe<IntFilter>;
};

export type CommentUpdateManyMutationInput = {
  content?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CommentUpsertWithWhereUniqueWithoutPostInput = {
  where: CommentWhereUniqueInput;
  update: CommentUpdateWithoutPostInput;
  create: CommentCreateWithoutPostInput;
};

export type PostUpdateManyWithWhereWithoutCreatorInput = {
  where: PostScalarWhereInput;
  data: PostUpdateManyMutationInput;
};

export type PostScalarWhereInput = {
  AND?: Maybe<Array<PostScalarWhereInput>>;
  OR?: Maybe<Array<PostScalarWhereInput>>;
  NOT?: Maybe<Array<PostScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  uuid?: Maybe<StringFilter>;
  content?: Maybe<StringFilter>;
  creatorId?: Maybe<IntFilter>;
};

export type PostUpdateManyMutationInput = {
  uuid?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
};

export type PostUpsertWithWhereUniqueWithoutCreatorInput = {
  where: PostWhereUniqueInput;
  update: PostUpdateWithoutCreatorInput;
  create: PostCreateWithoutCreatorInput;
};

export type UserUpsertWithoutCommentsInput = {
  update: UserUpdateWithoutCommentsInput;
  create: UserCreateWithoutCommentsInput;
};

export type PostUpdateOneRequiredWithoutCommentsInput = {
  create?: Maybe<PostCreateWithoutCommentsInput>;
  connect?: Maybe<PostWhereUniqueInput>;
  update?: Maybe<PostUpdateWithoutCommentsInput>;
  upsert?: Maybe<PostUpsertWithoutCommentsInput>;
  connectOrCreate?: Maybe<PostCreateOrConnectWithoutcommentsInput>;
};

export type PostUpdateWithoutCommentsInput = {
  uuid?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  creator?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
};

export type UserUpdateOneRequiredWithoutPostsInput = {
  create?: Maybe<UserCreateWithoutPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutPostsInput>;
  upsert?: Maybe<UserUpsertWithoutPostsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutpostsInput>;
};

export type UserUpdateWithoutPostsInput = {
  username?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  dateOfBirth?: Maybe<DateTimeFieldUpdateOperationsInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
};

export type CommentUpdateManyWithoutUserInput = {
  create?: Maybe<Array<CommentCreateWithoutUserInput>>;
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereWithoutUserInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutuserInput>>;
};

export type CommentUpdateWithWhereUniqueWithoutUserInput = {
  where: CommentWhereUniqueInput;
  data: CommentUpdateWithoutUserInput;
};

export type CommentUpdateWithoutUserInput = {
  content?: Maybe<StringFieldUpdateOperationsInput>;
  post?: Maybe<PostUpdateOneRequiredWithoutCommentsInput>;
};

export type CommentUpdateManyWithWhereWithoutUserInput = {
  where: CommentScalarWhereInput;
  data: CommentUpdateManyMutationInput;
};

export type CommentUpsertWithWhereUniqueWithoutUserInput = {
  where: CommentWhereUniqueInput;
  update: CommentUpdateWithoutUserInput;
  create: CommentCreateWithoutUserInput;
};

export type UserUpsertWithoutPostsInput = {
  update: UserUpdateWithoutPostsInput;
  create: UserCreateWithoutPostsInput;
};

export type PostUpsertWithoutCommentsInput = {
  update: PostUpdateWithoutCommentsInput;
  create: PostCreateWithoutCommentsInput;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};

export type PostCreateInput = {
  uuid?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  creator: UserCreateOneWithoutPostsInput;
  comments?: Maybe<CommentCreateManyWithoutPostInput>;
};

export type PostUpdateInput = {
  uuid?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  creator?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
};

export type UserCreateInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  dateOfBirth: Scalars['DateTime'];
  posts?: Maybe<PostCreateManyWithoutCreatorInput>;
  comments?: Maybe<CommentCreateManyWithoutUserInput>;
};

export type UserUpdateInput = {
  username?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  dateOfBirth?: Maybe<DateTimeFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutCreatorInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
};

export type UserUpdateManyMutationInput = {
  username?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  dateOfBirth?: Maybe<DateTimeFieldUpdateOperationsInput>;
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
  year: Scalars['Float'];
  month: Scalars['Float'];
  day: Scalars['Float'];
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
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
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
    mutation RegisterUser($year: Float!, $month: Float!, $day: Float!, $username: String!, $email: String!, $password: String!) {
  registerUser(
    options: {year: $year, month: $month, day: $day, username: $username, email: $email, password: $password}
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