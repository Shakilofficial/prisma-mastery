import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const update = async () => {
  // update a single data
  /* const result = await prisma.post.update({
    where: {
      id: 1,
    },
    data: {
      title: "Hello World",
      content: "Hello World from Prisma",
      // published: true,
      // author: "Shakil",
    },
    },
  }); */
  // update multiple data
  /*  const result = await prisma.post.updateMany({
    where: {
      title: "Hello World 2",
    },
    data: {
      published: true,
    },
  });
 */
  // update like upsert
  const result = await prisma.post.upsert({
    where: { id: 19 },
    update: {
      title: "Hello World",
      content: "Hello World from Prisma",
    },
    create: {
      title: "Hello World 1",
      content: "Hello World from Prisma 1",
      author: "PS",
    },
  });

  console.log(result);
};

update();
