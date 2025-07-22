import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const deleteData = async () => {
  // delete a single data
  /*  const result = await prisma.post.delete({
    where: {
      id: 1,
    },
  }); */
  // delete multiple data
  /*  const result = await prisma.post.deleteMany({
    where: {
      title: "Hello World 2",
    },
  }); */
  // delete all data
  const result = await prisma.post.deleteMany({});
  console.log(result);
};

deleteData();
