import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.job.createMany({
    data: [
      {
        title: "Frontend Developer",
        location: "Nairobi",
        description: "Build UI with React and Next.js",
       type: "Full-time",
      },
      {
       title: "Backend Developer",
        location: "Remote",
        description: "Build APIs with Node.js and Prisma",
        type: "Contract",
      },
   ],
  });

  console.log("Seed completed 🚀");
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });