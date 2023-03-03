const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connect = require('./utils/connect');

const ModelsRoutes = require('./API/routes/Models.routes');
const BrandsRoutes = require('./API/routes/Brands.routes');

dotenv.config();
const PORT = process.env.PORT || 8081;

const server = express();
connect();

server.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

server.use(express.json({ limit: '5mb' }));
server.use(express.urlencoded({ limit: '5mb', extended: false }));

server.use('/api/v1/models', ModelsRoutes);
server.use('/api/v1/brands', BrandsRoutes);

server.use('*', (req, res, next) => {
  const error = new Error('Route not found');
  error.status = 404;
  return next(error);
});
server.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.message || 'Unexpected Error');
});

server.disable('x-powered-by');

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
