const axios= require('axios');
require('dotenv').config();

const getTrendingNews= async(req, res)=>{
    try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`;
        const response= await axios.get(url);

        res.status(200).json({message: 'Trending news fetched successfully', news:response.data});
        
    } catch (error) {
      res.status(500).json({message: 'Internal server error'});  
    }
};


module.exports= getTrendingNews;