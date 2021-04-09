/* eslint-disable */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  GraphbackObjectID: string;
  Time: any;
};

/**  @model  */
export type Comment = {
  __typename?: 'Comment';
  _id: Scalars['GraphbackObjectID'];
  text?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** @manyToOne(field: 'comments', key: 'noteId') */
  note?: Maybe<Note>;
};

export type CommentFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  text?: Maybe<StringInput>;
  description?: Maybe<StringInput>;
  noteId?: Maybe<GraphbackObjectIdInput>;
  and?: Maybe<Array<CommentFilter>>;
  or?: Maybe<Array<CommentFilter>>;
  not?: Maybe<CommentFilter>;
};

export type CommentResultList = {
  __typename?: 'CommentResultList';
  items: Array<Maybe<Comment>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type CommentSubscriptionFilter = {
  and?: Maybe<Array<CommentSubscriptionFilter>>;
  or?: Maybe<Array<CommentSubscriptionFilter>>;
  not?: Maybe<CommentSubscriptionFilter>;
  _id?: Maybe<GraphbackObjectIdInput>;
  text?: Maybe<StringInput>;
  description?: Maybe<StringInput>;
};

export type CreateCommentInput = {
  text?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  noteId?: Maybe<Scalars['GraphbackObjectID']>;
};

export type CreateMessageInput = {
  user: Scalars['String'];
  createdAt: Scalars['Time'];
  text: Scalars['String'];
};

export type CreateNoteInput = {
  sender?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Time']>;
};

export type CreateUsersInput = {
  name?: Maybe<Scalars['String']>;
};


export type GraphbackObjectIdInput = {
  ne?: Maybe<Scalars['GraphbackObjectID']>;
  eq?: Maybe<Scalars['GraphbackObjectID']>;
  le?: Maybe<Scalars['GraphbackObjectID']>;
  lt?: Maybe<Scalars['GraphbackObjectID']>;
  ge?: Maybe<Scalars['GraphbackObjectID']>;
  gt?: Maybe<Scalars['GraphbackObjectID']>;
  in?: Maybe<Array<Scalars['GraphbackObjectID']>>;
  between?: Maybe<Array<Scalars['GraphbackObjectID']>>;
};

/**  @model  */
export type Message = {
  __typename?: 'Message';
  _id: Scalars['GraphbackObjectID'];
  user: Scalars['String'];
  createdAt: Scalars['Time'];
  text: Scalars['String'];
};

export type MessageFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  user?: Maybe<StringInput>;
  createdAt?: Maybe<TimeInput>;
  text?: Maybe<StringInput>;
  and?: Maybe<Array<MessageFilter>>;
  or?: Maybe<Array<MessageFilter>>;
  not?: Maybe<MessageFilter>;
};

export type MessageResultList = {
  __typename?: 'MessageResultList';
  items: Array<Maybe<Message>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type MessageSubscriptionFilter = {
  and?: Maybe<Array<MessageSubscriptionFilter>>;
  or?: Maybe<Array<MessageSubscriptionFilter>>;
  not?: Maybe<MessageSubscriptionFilter>;
  _id?: Maybe<GraphbackObjectIdInput>;
  user?: Maybe<StringInput>;
  createdAt?: Maybe<TimeInput>;
  text?: Maybe<StringInput>;
};

export type MutateCommentInput = {
  _id: Scalars['GraphbackObjectID'];
  text?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  noteId?: Maybe<Scalars['GraphbackObjectID']>;
};

export type MutateMessageInput = {
  _id: Scalars['GraphbackObjectID'];
  user?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Time']>;
  text?: Maybe<Scalars['String']>;
};

export type MutateNoteInput = {
  _id: Scalars['GraphbackObjectID'];
  sender?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Time']>;
};

export type MutateUsersInput = {
  _id: Scalars['GraphbackObjectID'];
  name?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createNote?: Maybe<Note>;
  updateNote?: Maybe<Note>;
  deleteNote?: Maybe<Note>;
  createUsers?: Maybe<Users>;
  updateUsers?: Maybe<Users>;
  deleteUsers?: Maybe<Users>;
  createMessage?: Maybe<Message>;
  updateMessage?: Maybe<Message>;
  deleteMessage?: Maybe<Message>;
  createComment?: Maybe<Comment>;
  updateComment?: Maybe<Comment>;
  deleteComment?: Maybe<Comment>;
};


export type MutationCreateNoteArgs = {
  input: CreateNoteInput;
};


export type MutationUpdateNoteArgs = {
  input: MutateNoteInput;
};


export type MutationDeleteNoteArgs = {
  input: MutateNoteInput;
};


export type MutationCreateUsersArgs = {
  input: CreateUsersInput;
};


export type MutationUpdateUsersArgs = {
  input: MutateUsersInput;
};


export type MutationDeleteUsersArgs = {
  input: MutateUsersInput;
};


export type MutationCreateMessageArgs = {
  input: CreateMessageInput;
};


export type MutationUpdateMessageArgs = {
  input: MutateMessageInput;
};


export type MutationDeleteMessageArgs = {
  input: MutateMessageInput;
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationUpdateCommentArgs = {
  input: MutateCommentInput;
};


export type MutationDeleteCommentArgs = {
  input: MutateCommentInput;
};

/**  @model  */
export type Note = {
  __typename?: 'Note';
  _id: Scalars['GraphbackObjectID'];
  sender?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Time']>;
  /**
   * @oneToMany(field: 'note', key: 'noteId')
   * @oneToMany(field: 'note')
   */
  comments: Array<Maybe<Comment>>;
};


/**  @model  */
export type NoteCommentsArgs = {
  filter?: Maybe<CommentFilter>;
};

export type NoteFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  sender?: Maybe<StringInput>;
  text?: Maybe<StringInput>;
  created_at?: Maybe<TimeInput>;
  and?: Maybe<Array<NoteFilter>>;
  or?: Maybe<Array<NoteFilter>>;
  not?: Maybe<NoteFilter>;
};

export type NoteResultList = {
  __typename?: 'NoteResultList';
  items: Array<Maybe<Note>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type NoteSubscriptionFilter = {
  and?: Maybe<Array<NoteSubscriptionFilter>>;
  or?: Maybe<Array<NoteSubscriptionFilter>>;
  not?: Maybe<NoteSubscriptionFilter>;
  _id?: Maybe<GraphbackObjectIdInput>;
  sender?: Maybe<StringInput>;
  text?: Maybe<StringInput>;
  created_at?: Maybe<TimeInput>;
};

export type OrderByInput = {
  field: Scalars['String'];
  order?: Maybe<SortDirectionEnum>;
};

export type PageRequest = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  getDraftNotes?: Maybe<Array<Maybe<Note>>>;
  getNote?: Maybe<Note>;
  findNotes: NoteResultList;
  getUsers?: Maybe<Users>;
  findUsers: UsersResultList;
  getMessage?: Maybe<Message>;
  findMessages: MessageResultList;
  getComment?: Maybe<Comment>;
  findComments: CommentResultList;
};


export type QueryGetNoteArgs = {
  id: Scalars['GraphbackObjectID'];
};


export type QueryFindNotesArgs = {
  filter?: Maybe<NoteFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
};


export type QueryGetUsersArgs = {
  id: Scalars['GraphbackObjectID'];
};


export type QueryFindUsersArgs = {
  filter?: Maybe<UsersFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
};


export type QueryGetMessageArgs = {
  id: Scalars['GraphbackObjectID'];
};


export type QueryFindMessagesArgs = {
  filter?: Maybe<MessageFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
};


export type QueryGetCommentArgs = {
  id: Scalars['GraphbackObjectID'];
};


export type QueryFindCommentsArgs = {
  filter?: Maybe<CommentFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
};

export enum SortDirectionEnum {
  Desc = 'DESC',
  Asc = 'ASC'
}

export type StringInput = {
  ne?: Maybe<Scalars['String']>;
  eq?: Maybe<Scalars['String']>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  newNote: Note;
  updatedNote: Note;
  deletedNote: Note;
  newUsers: Users;
  updatedUsers: Users;
  deletedUsers: Users;
  newMessage: Message;
  updatedMessage: Message;
  deletedMessage: Message;
  newComment: Comment;
  updatedComment: Comment;
  deletedComment: Comment;
};


export type SubscriptionNewNoteArgs = {
  filter?: Maybe<NoteSubscriptionFilter>;
};


export type SubscriptionUpdatedNoteArgs = {
  filter?: Maybe<NoteSubscriptionFilter>;
};


export type SubscriptionDeletedNoteArgs = {
  filter?: Maybe<NoteSubscriptionFilter>;
};


export type SubscriptionNewUsersArgs = {
  filter?: Maybe<UsersSubscriptionFilter>;
};


export type SubscriptionUpdatedUsersArgs = {
  filter?: Maybe<UsersSubscriptionFilter>;
};


export type SubscriptionDeletedUsersArgs = {
  filter?: Maybe<UsersSubscriptionFilter>;
};


export type SubscriptionNewMessageArgs = {
  filter?: Maybe<MessageSubscriptionFilter>;
};


export type SubscriptionUpdatedMessageArgs = {
  filter?: Maybe<MessageSubscriptionFilter>;
};


export type SubscriptionDeletedMessageArgs = {
  filter?: Maybe<MessageSubscriptionFilter>;
};


export type SubscriptionNewCommentArgs = {
  filter?: Maybe<CommentSubscriptionFilter>;
};


export type SubscriptionUpdatedCommentArgs = {
  filter?: Maybe<CommentSubscriptionFilter>;
};


export type SubscriptionDeletedCommentArgs = {
  filter?: Maybe<CommentSubscriptionFilter>;
};


export type TimeInput = {
  ne?: Maybe<Scalars['Time']>;
  eq?: Maybe<Scalars['Time']>;
  le?: Maybe<Scalars['Time']>;
  lt?: Maybe<Scalars['Time']>;
  ge?: Maybe<Scalars['Time']>;
  gt?: Maybe<Scalars['Time']>;
  in?: Maybe<Array<Scalars['Time']>>;
  between?: Maybe<Array<Scalars['Time']>>;
};

/**  @model  */
export type Users = {
  __typename?: 'Users';
  _id: Scalars['GraphbackObjectID'];
  name?: Maybe<Scalars['String']>;
};

export type UsersFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  name?: Maybe<StringInput>;
  and?: Maybe<Array<UsersFilter>>;
  or?: Maybe<Array<UsersFilter>>;
  not?: Maybe<UsersFilter>;
};

export type UsersResultList = {
  __typename?: 'UsersResultList';
  items: Array<Maybe<Users>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type UsersSubscriptionFilter = {
  and?: Maybe<Array<UsersSubscriptionFilter>>;
  or?: Maybe<Array<UsersSubscriptionFilter>>;
  not?: Maybe<UsersSubscriptionFilter>;
  _id?: Maybe<GraphbackObjectIdInput>;
  name?: Maybe<StringInput>;
};
