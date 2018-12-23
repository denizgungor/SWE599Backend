
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProjectSchema = new Schema({
  Name: {type: String},
});

let ParameterSchema = new Schema({
  Name: {type: String},
});

let SprintSchema = new Schema({
	Project: {type: String},
	Name: {type: String},
	CreateDate: { type: Date },
	RequirementDefect: {type: Number},
	CodeUnitTestDefect: {type: Number},
	KLOC: {type: Number},
	RequirementPage: {type: Number},
	DesignPage: {type: Number},
	TargetTotalTestCases: {type: Number},
	TotalTestEffort: {type: Number},
	ActualFunctionalDefect: {type: Number},
});

let PredictionSchema = new Schema({
	CreateDate: { type: Date },
	RequirementDefect: {type: Number},
	CodeUnitTestDefect: {type: Number},
	KLOC: {type: Number},
	RequirementPage: {type: Number},
	DesignPage: {type: Number},
	TargetTotalTestCases: {type: Number},
	TotalTestEffort: {type: Number},
});



var projectmodel = mongoose.model('projects', ProjectSchema,'projects');
var parametermodel = mongoose.model('parameters', ParameterSchema,'parameters');
var sprintmodel = mongoose.model('sprints', SprintSchema,'sprints');
var predictionmodel = mongoose.model('predictions', PredictionSchema,'predictions');

module.exports = {
projectmodel : projectmodel,
parametermodel : parametermodel,
sprintmodel: sprintmodel,
predictionmodel: predictionmodel

};




