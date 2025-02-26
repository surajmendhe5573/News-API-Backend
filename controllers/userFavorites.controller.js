const Favorite= require('../models/userFavorites.model');

const addFavorite= async(req, res)=>{
    try {
        const {user, article}= req.body;

        if(!user || !article){
            return res.status(400).json({message: 'Title and Article are required'});
        }

        const favorites= new Favorite({
            user,
            article
        })

        await favorites.save();
        return res.status(201).json({message: 'Article saved to favorites', favorites});
        
    } catch (error) {
        console.log(error);
       res.status(500).json({message: 'Internal server server'}); 
    }
};

const getFavorite= async(req, res)=>{
    try {

        const {user}= req.params;
        
        const favorites = await Favorite.find({user});
        if(favorites.length == 0){
            return res.status(404).json({message: 'Article not found'})
        }

        res.status(200).json({message: 'Favorite Article fetched successfully', favorites});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal server error'});
    }
};


module.exports= {addFavorite, getFavorite};