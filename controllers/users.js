
import { User, Thought } from '../db/models/index.js';

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-__v');
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    };

Router.delete('/'), async (req, res) => {
    try{
        //use User.where mongoose method to find the usder id, pass it into the User.deleteOne.
        const user = await User.deleteOne({ _id: req.prams._id})// fix the id section later, currently not pointing correctlly
    } catch (error) {
        console.log('Your route dont wurk:', error);
    }
}

//add friend to user
export const addFriend = async (req, res) => {
    try{
        // if statement that checks to see if the user id is the same as frend id or the user id
    } catch {

    }
};