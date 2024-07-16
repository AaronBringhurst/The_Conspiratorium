import express from 'express';

const router = express.Router();

import friends from '';
import reactions from '';
import thoughts from '';
import users from '';

router.use('/users', users);
router.use('/thoughts', thoughts);
router.use('/reactions', reactions);
router.use('/friends', friends);

export default router;