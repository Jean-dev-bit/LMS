const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        {
          name: "Intelligence Artificielle",
        },
        {
          name: "Réseaux & Télécommunications",
        },
        {
          name: "Comptabilité",
        },
        {
          name: "Commerce digital",
        },
        {
          name: "Graphisme",
        },
        {
          name: "Programmation informatique",
        },
        {
          name: "Entrepreneuriat digital",
        },
      ],
    });
    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();
