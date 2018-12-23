var express = require('express');
var mainController = require('../controllers/mainController');
var mainRouter = express.Router();


mainRouter.route('/').get(mainController.getIndex);

mainRouter.route('/projects').get(mainController.getProjects);
mainRouter.route('/parameters').get(mainController.getParameters);

mainRouter.route('/postparameters').post(mainController.postProjectParameters);


mainRouter.route('/projectdetail/:project').get(mainController.getProjectDetail);
mainRouter.route('/projectprediction').get(mainController.getProjectPrediction);



module.exports = mainRouter;