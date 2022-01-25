import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
type Comment {
  id: Int
  postTitle: String
  authorName: String
  createdAt: String
  message: String
}

input CommentInput {
  postTitle: String
  authorName: String
  message: String
}

type Query {
  comments(postTitle: String): [Comment]!
}

type Mutation {
  createComment(postTitle: String!, authorName: String!, message: String!): Comment
}

type Mutation {
  deleteComment(id: Int!): Comment
}

type CommentUpdateResponse {
  success: Boolean!
  message: String
  comments: [Comment]
}

`