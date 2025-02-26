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

const getNewsByCategory = async (req, res) => {
    const { category } = req.params;
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWS_API_KEY}`;
      const response = await axios.get(url);
  
      res.status(200).json({ message: `News for category ${category} fetched successfully`,news: response.data.articles});
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error: error.message });
    }
  };
  
  const searchNews = async (req, res) => {
    const { query } = req.query;
    try {
      const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.NEWS_API_KEY}`;
      const response = await axios.get(url);
  
      res.status(200).json({
        message: `Search results for ${query} fetched successfully`,
        news: response.data.articles,
      });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error: error.message });
    }
  };
  


module.exports= {getTrendingNews, getNewsByCategory, searchNews};