import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const rawQuery = async () => {
  /*   const posts = await prisma.$queryRaw`
  SELECT * FROM posts
  WHERE published = true
`;
  console.log(posts); */

  //delete category table
  await prisma.$queryRaw`TRUNCATE TABLE "categories" CASCADE`;
};

rawQuery();
