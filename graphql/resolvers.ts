import { argsToArgsConfig } from "graphql/type/definition"

export const resolvers = {
  Query: {
    // hardcoded
    // comments: () => {
    //   return [
    //     {
    //       id: 69,
    //       postTitle: 'Through the misty islands',
    //       authorName: 'Kate M Busby',
    //       createdAt: new Date(),
    //       message: 'I am a GRAPHQL Comment Stub'
    //     }
    //   ]
    // }

    // db connection
    comments: (_parent, args, ctx) => {
      return ctx.prisma.comment.findMany({
        where: {
          postTitle: args.postTitle
        }
      })
    },
    posts: (_parent, _args, ctx) => {
      return ctx.prisma.postMeta.findMany();
    }
  },

  Mutation: {
    createComment: (_parent, args, ctx) => {
      return ctx.prisma.comment.create({
        data: {
          postTitle: args.postTitle,
          authorName: args.authorName,
          message: args.message
        }
      })
    },
    deleteComment: (_parent, args, ctx) => {
      return ctx.prisma.comment.delete({
        where: {
          id: args.id
        }
      })
    }
  }

}