import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const batch = async () => {
  /*   const createUser = await prisma.user.create({
    data: {
      username: "jhondoe",
      email: "john@doe.com",
    },
  });
  console.log(createUser);

  const updateUser = await prisma.user.update({
    where: {
      id: 32,
    },
    data: {
      username: "jhon",
    },
  });
  console.log(updateUser);
 */

  const createUser = prisma.user.create({
    data: {
      username: "jhankar",
      email: "jkr@ph.com",
    },
  });

  const updateUser = prisma.user.update({
    where: {
      id: 22,
    },
    data: {
      age: 30,
    },
  });

  const [userData, updateData] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);

  console.log(userData, updateData);
};
batch();
