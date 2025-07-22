import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  // find all posts
  /* const getAllPosts = await prisma.post.findMany(); */
  // find first post
  /*  const getFirstPost = await prisma.post.findFirstOrThrow({
    where: {
      published: false,
    },
  });
  console.log({ getFirstPost: getFirstPost }); */
  //find unique posts with specific field
  const getUniquePosts = await prisma.post.findUniqueOrThrow({
    where: {
      id: 10,
    },
    //select can be used to select specific fields
    select: {
      title: true,
      content: true,
      author: true,
    },
  });
  console.log({ getUniquePosts });
};

main();
