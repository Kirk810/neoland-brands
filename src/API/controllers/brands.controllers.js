const Brand = require('../models/brand.model');

const getAllBrands = async (req, res, next) => {
  try {
    const brands = await Brand.find().populate('models');
    res.status(200).json(brands);
  } catch (error) {
    return next(error);
  }
};

const createBrand = async (req, res, next) => {
  try {
    const newBrand = new Brand(req.body);
    const createdBrand = await newBrand.save();
    return res.status(201).json(createdBrand);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllBrands,
  createBrand,
};
