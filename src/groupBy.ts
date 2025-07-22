import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const groupBy = async () => {
  /* const groupPost = await prisma.post.groupBy({
    by: ["published"],
    _count: {
      title: true,
    },
  });

  console.log(groupPost); */

  // having
  const groupPost = await prisma.post.groupBy({
    by: ["published"],
    _count: {
      title: true,
    },
    having: {
      authorId: {
        _sum: {
          gt: 12,
        },
      },
    },
  });
  console.log(groupPost);
};

groupBy();
