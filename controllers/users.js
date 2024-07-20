import { Thought, User } from "../db/models/index.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-__v");
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .select("-__v")
      .populate("thoughts")
      .populate("friends");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createUser = async (req, res) => {
  try {
    console.log("Request Body:", req.body); // Log the request body
    const newUser = new User(req.body);
    console.log("New User Object:", newUser); // Log the new user object
    const savedUser = await newUser.save();
    console.log("Saved User:", savedUser); // Log the saved user object
    res.status(201).json(savedUser);
  } catch (err) {
    console.error("Error creating user:", err.message); // Log the error message
    res.status(400).json({ message: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Delete user's thoughts
    await Thought.deleteMany({ author: user._id });
    // Remove user from friends' lists
    await User.updateMany(
      { friends: user._id },
      { $pull: { friends: user._id } }
    );
    await user.deleteOne();
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addFriend = async (req, res) => {
  try {
    const { userId, friendId } = req.params;
    if (userId === friendId) {
      return res
        .status(400)
        .json({ message: "Cannot add yourself as a friend" });
    }
    const user = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { friends: friendId }, $inc: { friendCount: 1 } },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Add the user to the friend's friend list as well
    await User.findByIdAndUpdate(friendId, {
      $addToSet: { friends: userId },
      $inc: { friendCount: 1 },
    });

    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const removeFriend = async (req, res) => {
  try {
    const { userId, friendId } = req.params;
    // Remove friend from the user's friend list
    const user = await User.findByIdAndUpdate(
      userId,
      { $pull: { friends: friendId }, $inc: { friendCount: -1 } },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Remove user from the friend's friend list
    await User.findByIdAndUpdate(friendId, {
      $pull: { friends: userId },
      $inc: { friendCount: -1 },
    });
    
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};