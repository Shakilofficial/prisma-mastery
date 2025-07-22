import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  //offset pagination

  /*  const result = await prisma.post.findMany({
    skip: 2,
    take: 2,
  }); */

  // cursor pagination
  /*  const result = await prisma.post.findMany({
    skip: 2,
    take: 2,
    cursor: {
      id: 12,
    },
  }); */

  // sort by title or other condition and pagination

  const result = await prisma.post.findMany({
    where: {
      published: false,
    },
    skip: 2,
    take: 2,
    orderBy: {
      id: "asc",
    },
  });

  console.log(result);
};

main();
