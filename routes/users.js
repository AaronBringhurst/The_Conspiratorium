import express from 'express';
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} from '../controllers/users.js';

const router = express.Router();

// /api/users
router.route('/')
    .get(getAllUsers)
    .post(createUser);

// /api/users/:id
router.route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

    router.route('/:thoughtId/reactions')
    .post(addReaction);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

export default router;