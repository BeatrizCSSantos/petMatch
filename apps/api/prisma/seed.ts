import { PrismaClient } from '@prisma/client';
import 'dotenv/config';

const prisma = new PrismaClient();

async function main() {
  await prisma.animal.createMany({
    data: [
      {
        name: 'Luna',
        species: 'Dog',
        breed: 'Labrador',
        age: 3,
        description: 'Friendly and energetic',
      },
      {
        name: 'Milo',
        species: 'Cat',
        breed: 'Siamese',
        age: 2,
        description: 'Calm and affectionate',
      },
      {
        name: 'Thor',
        species: 'Dog',
        breed: 'German Shepherd',
        age: 4,
        description: 'Protective and loyal',
      },
      {
        name: 'Nina',
        species: 'Cat',
        breed: 'Persian',
        age: 1,
        description: 'Quiet and fluffy',
      },
      {
        name: 'Max',
        species: 'Dog',
        breed: 'Golden Retriever',
        age: 5,
        description: 'Very friendly',
      },
    ],
  });
}

main()
  .then(() => {
    console.log('Seed completed 🌱');
  })
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
