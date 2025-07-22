import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

prisma.$on("query", (e) => {
  console.log("Query", e.query);
  console.log("Duration", e.duration);
  console.log("Date & Time", e.timestamp);
});

const logging = async () => {
  const result = await prisma.user.findMany();
  console.log(result);
};

logging();
