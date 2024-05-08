import express from 'express';
import {upload} from '../middleware/multer.mjs';
const router = express.Router();
import { addUser, getUser, putUser } from '../controller/userController.mjs';
import { validateUser,validateUpdateUser } from '../middleware/validateUser.mjs';
import { authenticateToken } from '../middleware/authenticateToken.mjs';


router.post('/user', validateUser, addUser);
router.get('/user', authenticateToken, getUser);
router.put('/user/:id',upload.single('profile'),validateUpdateUser, putUser);

export { router };