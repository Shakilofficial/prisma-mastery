import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const relationalQueries = async () => {
  //fluent api
  /* const result = await prisma.user
    .findUnique({
      where: {
        id: 1,
      },
       // include: { post: true,},
    })
    .post();
 */

  // relational filter
  /*
  const result = await prisma.user.findMany({
    include: {
      post: {
        where: {
          published: true,
        },
      },
    },
  });
  console.dir(result, { depth: Infinity }); */

  //fitering

  /*   const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "Hello",
          },
         
        },
        {
          published: true,
        },
      ],
    },
  });
  console.log(andFiltering); */

  //or filtering
  /*   const orFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "Hello",
          },
        },
        {
          published: true,
        },
      ],
    },
  });
  console.log(orFiltering); */

  //not filtering
  /*  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "Hello",
          },
        },
      ],
    },
  });
  console.log(notFiltering); */

  // start with
  /*  const startWithFiltering = await prisma.post.findMany({
    where: {
      title: {
        startsWith: "Hi",
      },
    },
  });
  console.log(startWithFiltering); */

  // end with
  /*
  const endWithFiltering = await prisma.post.findMany({
    where: {
      title: {
        endsWith: "Dev",
      },
    },
  });
  console.log(endWithFiltering); */

  //equal
  /*   const equalFiltering = await prisma.post.findMany({
    where: {
      title: {
        equals: "Hello World",
      },
    },
  });

  console.log(equalFiltering); */

  //not equal
  /*  const notEqualFiltering = await prisma.post.findMany({
    where: {
      title: {
        not: "Hello World",
      },
    },
  });
  console.log(notEqualFiltering); */

  //in
  /*  const inFiltering = await prisma.post.findMany({
    where: {
      title: {
        in: ["Hello", "Dev"],
      },
    },
  });
  console.log(inFiltering); */

  //in depth data

  const inDepthData = await prisma.user.findUnique({
    where: {
      id: 22,
    },
    include: {
      post: {
        include: {
          postCategory: {
            include: {
              category: true,
            },
          },
        },
      },
    },
  });

  console.dir(inDepthData, { depth: Infinity });
};

relationalQueries();
