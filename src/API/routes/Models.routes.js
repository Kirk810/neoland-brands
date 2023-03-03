const express = require('express');
const ModelsRouter = express.Router();

const {
  getAllModels,
  getModelsByID,
  createModels,
  updateModels,
  deleteModels,
} = require('../controllers/models.controller');

ModelsRouter.get('/', getAllModels);
ModelsRouter.get('/:id', getModelsByID);
ModelsRouter.post('/', createModels);
ModelsRouter.put('/:id', updateModels);
ModelsRouter.delete('/:id', deleteModels);

module.exports = ModelsRouter;
