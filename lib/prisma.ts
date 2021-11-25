import { PrismaClient } from '@prisma/client';
// ways to call Prisma: https://daily.dev/blog/nextjs-with-prisma

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;