const express = require('express');

const BrandsRoutes = express.Router();

const {
  getAllBrands,
  createBrand,
} = require('../controllers/brands.controller');

BrandsRoutes.get('/', getAllBrands);
BrandsRoutes.post('/', createBrand);

module.exports = BrandsRoutes;
