import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

const main = async () => {
  // create a single data
  /* const result = await prisma.post.create({
    data: {
      title: "Hello World 2",
      content: "Hello World from Prisma",
      published: true,
      author: "Shakil",
    },
  }); */

  // create multiple data
  /* const result = await prisma.post.createMany({
    data: [
      {
        title: "Hello World 2",
        content: "Hello World from Prisma",
        author: "Shakil",
      },
      {
        title: "Hello World 3",
        content: "Hello World from Prisma",
        author: "Shakil",
      },
      {
        title: "Hello World 4",
        content: "Hello World from Prisma",
        author: "Shakil",
      },
    ],
  }); */

  /* const createUser = await prisma.user.create({
    data: {
      username: "Sharik",
      email: "sharik@gmail.com",
      role: UserRole.user,
    },
  }); */

  /* const createProfile = await prisma.profile.create({
    data: {
      bio: "I am a developer",
      userId: 1,
    },
  }); */

  /* const createCategory = await prisma.category.create({
    data: {
      name: "JavaScript",
    },
  }); */

  const createPost = await prisma.post.create({
    data: {
      title: "Hello Dev",
      content: "I am a developer",
      published: true,
      authorId: 22,
      postCategory: {
        create: [
          {
            categoryId: 1,
          },
          {
            categoryId: 2,
          },
          {
            categoryId: 4,
          },
        ],
      },
    },
    include: {
      postCategory: true,
    },
  });
  console.log(createPost);
};

main();
