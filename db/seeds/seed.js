import mongoose from 'mongoose';
import { seedUsers } from './userSeeds.js';
import { seedThoughts } from './thoughtSeeds.js';

mongoose.connect('mongodb://localhost/socialApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const seedDatabase = async () => {
    try {

    // Seed users
    const users = await seedUsers();
    console.log('Users seeded');

    // Seed thoughts
    await seedThoughts(users);
    console.log('Thoughts seeded');

    console.log('Database seeded successfully');
    process.exit(0);
    } catch (err) {
    console.error(err);
    process.exit(1);
    }
};

seedDatabase();