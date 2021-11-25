import prisma from '../../lib/prisma.ts';

// const prisma = new PrismaClient()

export default async function handler (req, res) {
  // mock data for now
  // res.status(200).json([{commentId: 3, commentMsg: 'This article rocks!'}, {commentId: 5, commentMsg: 'This article sucks...'}])

  // later we can implement axios https://javascript.plainenglish.io/serverless-function-in-next-js-3cd0d22ab983

  // and here is a Prisma db example
  const allDbComments = await prisma.comment.findMany();
  debugger
  res.status(200).json(allDbComments)
}