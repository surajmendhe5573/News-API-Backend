const errorHandler = (err, req, res, next) => {
    console.error('Error:', err.message || err);
  
    const status = err.response?.status || 500;
  
    res.status(status).json({
      message: err.response?.data?.message || 'An unexpected error occurred',
      status,
    });
  };
  
  
  module.exports = errorHandler;
  