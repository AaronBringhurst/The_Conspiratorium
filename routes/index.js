import express from 'express';

const router = express.Router();

import thoughts from '';
import users from '';

router.use('/users', users);
router.use('/thoughts', thoughts);



export default router;