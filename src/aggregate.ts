import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const aggregate = async () => {
  /* const avgAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });
  console.log(avgAge); */
  /*
  const countUser = await prisma.user.count();
  console.log(countUser); */
  /*
  const sumofAge = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });
  console.log(sumofAge); */

  // find max age
  /*  const maxAge = await prisma.user.aggregate({
    _max: {
      age: true,
    },
  });
  console.log(maxAge); */

  // find min age
  /*  const minAge = await prisma.user.aggregate({
    _min: {
      age: true,
    },
  });
  console.log(minAge); */

  const countPublishedPost = await prisma.post.aggregate({
    _count: {
      title: true,
    },
    where: {
      published: true,
    },
  });
  console.log(countPublishedPost);
};

aggregate();
