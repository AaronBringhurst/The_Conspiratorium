import { Thought, User } from "../db/models/index.js";

export const getAllThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find().populate("author", "username");
    res.json(thoughts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getThoughtById = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id).populate(
      "author",
      "username"
    );
    if (!thought) {
      return res.status(404).json({ message: "Thought not found" });
    }
    res.json(thought);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createThought = async (req, res) => {
  try {
    const { content, userId } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const newThought = new Thought({
      content,
      author: userId,
    });
    const savedThought = await newThought.save();
    user.thoughts.push(savedThought._id);
    await user.save();
    res.status(201).json(savedThought);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateThought = async (req, res) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      req.params.id,
      { content: req.body.content },
      { new: true, runValidators: true }
    );
    if (!updatedThought) {
      return res.status(404).json({ message: "Thought not found" });
    }
    res.json(updatedThought);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteThought = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id);
    if (!thought) {
      return res.status(404).json({ message: "Thought not found" });
    }
    await User.findByIdAndUpdate(thought.author, {
      $pull: { thoughts: thought._id },
    });
    await thought.deleteOne();
    res.json({ message: "Thought deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addReaction = async (req, res) => {
  try {
    const { thoughtId } = req.params;
    const { emoji, userId } = req.body;
    const updatedThought = await Thought.findByIdAndUpdate(
      thoughtId,
      { $push: { reactions: { emoji, user: userId } } },
      { new: true, runValidators: true }
    );
    if (!updatedThought) {
      return res.status(404).json({ message: "Thought not found" });
    }
    res.json(updatedThought);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const removeReaction = async (req, res) => {
  try {
    const { thoughtId, reactionId } = req.params;
    const updatedThought = await Thought.findByIdAndUpdate(
      thoughtId,
      { $pull: { reactions: { _id: reactionId } } },
      { new: true }
    );
    if (!updatedThought) {
      return res.status(404).json({ message: "Thought not found" });
    }
    res.json(updatedThought);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
