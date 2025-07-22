import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const interactive = async () => {
  const result = await prisma.$transaction(async (transactionClient) => {
    // query 1
    const getAllPost = await transactionClient.post.findMany({
      where: {
        published: true,
      },
    });

    //query 2
    const countUser = await transactionClient.user.count();

    // query 3
    const updateUser = await transactionClient.user.update({
      where: {
        id: 23,
      },
      data: {
        age: 45,
      },
    });

    return {
      getAllPost,
      countUser,
      updateUser,
    };
  });

  console.log(result);
};

interactive();
