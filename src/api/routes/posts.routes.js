const express = require('express');
const {getPosts, postPosts} = require('../controllers/posts.controllers');
const { isAuth } = require('../../middlewares/auth');
const postRoutes = express.Router();

postRoutes.get('/', getPosts)
postRoutes.post('/', postPosts);


module.exports = postRoutes;