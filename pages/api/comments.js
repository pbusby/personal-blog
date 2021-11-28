import prisma from '../../lib/prisma.ts';

export default async function handler (req, res) {
  // mock data for now
  // res.status(200).json([{commentId: 3, commentMsg: 'This article rocks!'}, {commentId: 5, commentMsg: 'This article sucks...'}])

  // and here is a basic Prisma db example
  // const allDbComments = await prisma.comment.findMany();
  // res.status(200).json(allDbComments)

  // later we can also implement axios https://javascript.plainenglish.io/serverless-function-in-next-js-3cd0d22ab983

  const { postTitle } = req.query
  const postComments = await prisma.comment.findMany({
    where: {
      postTitle: postTitle
    },
  })
  res.status(200).json(postComments)
}