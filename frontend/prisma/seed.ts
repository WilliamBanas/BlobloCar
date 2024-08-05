import { PrismaClient } from "@prisma/client";
//import * as bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const roundsOfHashing = 10;

async function main() {
  console.log('Start seeding...');
  
 // const passwordJohn = await bcrypt.hash("password123", roundsOfHashing);
 // const passwordJane = await bcrypt.hash("password123", roundsOfHashing);

  const role1 = await prisma.role.upsert({
    where: { name: "admin" },
    update: {},
    create: {
      id: 1,
      name: "admin",
    },
  });

  const role2 = await prisma.role.upsert({
    where: { name: "user" },
    update: {},
    create: {
      id: 2,
      name: "user",
    },
  });

  const user1 = await prisma.user.upsert({
    where: { email: "john@mail.com" },
    update: {
      password: 'password123',
    },
    create: {
      lastname: "John",
      firstname: "Doe",
      email: "john@mail.com",
      password: 'password123',
      image: "blabla",
      role_id: 1,
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: "jane@mail.com" },
    update: {
      password: 'password123',
    },
    create: {
      lastname: "Jane",
      firstname: "Doe",
      email: "jane@mail.com",
      password: 'password123',
      image: "blabla",
      role_id: 2,
    },
  });

  const travel1 = await prisma.travel.upsert({
    where: { id: 1 },
    update: {},
    create: {
      description: "Travel to Canada",
      start_location: "Montreal",
      end_location: "Toronto",
      date: new Date(),
      capacity: 4,
      deviation_allowed: true,
      user_id: 2,
    },
  });

  const booking1 = await prisma.booking.upsert({
    where: { id: 1 },
    update: {},
    create: {
      status: "ENDED",
      pickup_location: "Montreal",
      comment: "Need help",
      nb_passengers: 3,
      travel_id: 1,
      user_id: 1,
    },
  });

  const review1 = await prisma.review.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: "Great experience",
      date: new Date(),
      rating: 5,
      comment: "I had a great time!",
      travel_id: 1,
      user_id: 1,
    },
  });

  console.log({ role1, role2, user1, user2, travel1, booking1, review1 });
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  });
