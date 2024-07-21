import mongoose from "mongoose";
import { seedUsers } from "./userSeeds.js";
import { seedThoughts } from "./thoughtSeeds.js";
import { User, Thought } from "../models/index.js";

mongoose.connect("mongodb://localhost/socialApp");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected successfully to MongoDB");
});

const clearDatabase = async () => {
  await User.deleteMany({});
  await Thought.deleteMany({});
  console.log("Database cleared");
};

const seedDatabase = async () => {
  try {
    await clearDatabase();

    // Seed users
    const users = await seedUsers();
    console.log("Users seeded");

    // Seed thoughts
    await seedThoughts(users);
    console.log("Thoughts seeded");

    console.log("Database seeded successfully");
    process.exit(0);
  } catch (err) {
    console.error("Error seeding database:", err);
    process.exit(1);
  }
};

seedDatabase();
