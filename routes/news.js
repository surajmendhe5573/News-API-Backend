const express= require('express');
const getTrendingNews = require('../controllers/news.controller');
const router= express.Router();

router.get('/trending', getTrendingNews);

module.exports= router;