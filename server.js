const express= require('express');
const app= express();
require('dotenv').config();
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Welcome to the News Api Backend !');
});


require('./config/db');

app.use('/api/news', require('./routes/news'));
app.use('/api/favorites', require('./routes/favorites'));

app.use(errorHandler);

const port= process.env.PORT || 6000
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})
