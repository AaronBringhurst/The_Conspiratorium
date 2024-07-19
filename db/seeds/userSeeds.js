import { User } from '../models/index.js';

export const seedUsers = async () => {
    const users = [
    { username: 'TruthSeeker42', email: 'truthseeker42@example.com' },
    { username: 'CosmicWanderer', email: 'cosmic.wanderer@example.com' },
    { username: 'SkepticNo1', email: 'skeptic.no.1@example.com' },
    { username: 'IlluminatiHunter', email: 'illuminati.hunter@example.com' },
    { username: 'FlatEarthFan', email: 'flat.earth.fan@example.com' },
    ];

    return User.insertMany(users);
};