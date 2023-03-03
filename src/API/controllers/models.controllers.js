const Model = require('../models/model.model');

const getAllModels = async (req, res, next) => {
  try {
    const models = await Model.find();
    return res.status(200).json(models);
  } catch (error) {
    return next(error);
  }
};

const getModelByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const model = await Model.findById(id);
    return res.status(200).json(model);
  } catch (error) {
    return next(error);
  }
};

const createModel = async (req, res, next) => {
  try {
    const newModel = new Model(req.body);
    const createdModel = await newModel.save();
    return res.status(201).json(createdModel);
  } catch (error) {
    return next(error);
  }
};

const updateModel = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedModel = await Model.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(updatedModel);
  } catch (error) {
    return next(error);
  }
};

const deleteModel = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteModel = await Model.findByIdAndDelete(id);
    res.status(200).json(deleteModel);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllModels,
  getModelByID,
  createModel,
  updateModel,
  deleteModel,
};
