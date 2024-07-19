import { Thought } from '../models/index.js';

const conspiracyTheories = [
    "Birds aren't real - they're actually government surveillance drones!",
    "The Earth is flat and NASA is a Hollywood studio.",
    "Bigfoot is just a misunderstood time traveler stuck in our era.",
    "Clouds are actually cotton candy machines run by sky giants.",
    "The moon landing was faked... on Mars!",
    "Dinosaurs built the pyramids as landing pads for their spaceships.",
    "Trees are actually alien communication antennas.",
    "Gravity is just a collective hallucination.",
    "Cats can control the weather with their whiskers.",
    "The Bermuda Triangle is a portal to a parallel universe full of socks that disappeared from dryers.",
    "Vegetables are a myth created by parents to trick kids into eating grass clippings.",
    "The world is run by a secret society of sentient houseplants.",
    "Mirrors are actually windows to alternate dimensions.",
    "Sleep is just a conspiracy by mattress companies to sell more beds.",
    "The color purple doesn't exist, it's a mass hallucination.",
];

export const seedThoughts = async (users) => {
    const thoughts = conspiracyTheories.map((theory) => ({
    content: theory,
    author: users[Math.floor(Math.random() * users.length)]._id,
    }));

    return Thought.insertMany(thoughts);
};