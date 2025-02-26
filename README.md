# News Aggregator App Backend

This is a backend service for fetching news articles and managing user favorites. It uses the [News Aggregator App
](https://newsapi.org/) to fetch news data and provides endpoints for managing user favorites.

## Table of Contents

- [Features](#features)
- [Endpoints](#endpoints)
- [Setup](#setup)
- [Environment Variables](#environment-variables)
- [Technologies Used](#technologies-used)

## Features

- Fetch trending news articles.
- Add articles to user favorites.
- Retrieve user's favorite articles.
- Fetch news articles by category.
- Search news articles by keyword.

## Endpoints

| Endpoint                        | Method | Description                                      |
|---------------------------------|--------|--------------------------------------------------|
| `/api/news/trending`            | GET    | Fetch trending news articles                     |
| `/api/favorites/:user`          | POST    | Add an article to the user's favorites        |
| `/api/favorites/`               | GET   | Retrieve user's favorite articles.           |
| `/api/news/category/:category`  | GET    | Fetch news articles filtered by category         |
| `/api/news/search?query=keyword`| GET    | Search news articles by keyword                  |


## Setup

1. Clone the repository:
   ```bash
   git clone <https://github.com/surajmendhe5573/News-Aggregator-App.git>
   cd <News-Aggregator-App>


## Getting Started

### Prerequisites
- Node.js and npm installed
- MongoDB installed

## Technologies Used
- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **API Testing**: Postman
- **Version Control**: Git and GitHub
## Environment Variables

Create a `.env` file in the root directory of the project with the following variables:

```
# Port
PORT=5000

# Database Connection
MONGO_URI=mongodb://localhost:27017/defaultdb

NEWS_API_KEY= default_api_key

```


## 🚀 About Me
I'm a Backend developer...


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/surajmendhe5573)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/suraj-mendhe-569879233/?original_referer=https%3A%2F%2Fsearch%2Eyahoo%2Ecom%2F&originalSubdomain=in)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)
