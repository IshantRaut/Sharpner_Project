const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Define the CORS headers for your proxy server
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Create a proxy middleware to forward requests to the API server
const apiProxy = createProxyMiddleware({
  target: 'https://crudcrud.com/api/ceedef30a56f407a81f17e898d0238bd',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // remove /api from the path
  },
});

// Use the proxy middleware for requests to /api
app.use('/api', apiProxy);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
