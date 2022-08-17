import { gql } from 'apollo-server-micro'

export const typeDefs = gql`

type PostMeta {
  bannerPath: String
  date: String
  description: String
  imagePlaceholder: String
  tags: String
  teaser: String
  title: String
  slug: String
}


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
  posts: [PostMeta]!
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