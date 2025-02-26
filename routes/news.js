const express= require('express');
const {getTrendingNews, getNewsByCategory, searchNews} = require('../controllers/news.controller');
const router= express.Router();

router.get('/trending', getTrendingNews);

router.get('/category/:category', getNewsByCategory); 
router.get('/search', searchNews); 

module.exports= router;