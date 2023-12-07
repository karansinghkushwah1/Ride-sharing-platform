import express from 'express';
import { singupUser, loginUser } from '../controller/user-controller.js';
import { createPost , getAllPosts, getPost, updatePost, deletePost} from '../controller/post-controller.js';
import { authenticateToken } from '../controller/jwt-controller.js';

const router = express.Router();

router.post('/signup', singupUser);
router.post('/login', loginUser);

router.post('/create', authenticateToken, createPost);
router.get('/posts', authenticateToken, getAllPosts);
router.get('/post/:id', authenticateToken, getPost);


router.delete('/delete/:id', authenticateToken, deletePost);

export default router;