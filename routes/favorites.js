const express= require('express');
const { addFavorite, getFavorite } = require('../controllers/userFavorites.controller');
const router= express.Router();

router.post('/', addFavorite);
router.get('/:user', getFavorite);


module.exports= router;