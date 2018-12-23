const MainModel = require('../models/mainmodel');
var path    = require("path");
var Sprint = MainModel.sprintmodel;
module.exports = {
   
    getIndex: function(req, res){
        return res.sendFile(path.join(__dirname+'/index.html'));
    },

    getProjects: function(req, res){
        MainModel.projectmodel.find({}).sort([['CreateDate', 1]]).exec( (err, data) => {
        // Note that this error doesn't mean nothing was found,
        // it means the database had an error while searching, hence the 500 status
        if (err) return res.status(500).json(err)
        // send the list of all people
        res.header('Access-Control-Allow-Origin', "*")
        res.setHeader('Content-Type', 'application/json');

        return res.send(JSON.stringify(data));
        });
    },
    getParameters: function(req, res){
        MainModel.parametermodel.find({}).sort([['CreateDate', 1]]).exec( (err, data) => {
        // Note that this error doesn't mean nothing was found,
        // it means the database had an error while searching, hence the 500 status
        if (err) return res.status(500).json(err)
        // send the list of all people
        res.header('Access-Control-Allow-Origin', "*")
        res.setHeader('Content-Type', 'application/json');

        return res.send(JSON.stringify(data));
        });
    },
    getProjectDetail: function(req, res){
        var project = req.params.project;

        Sprint.find({'Project':project}).sort([['CreateDate', 1]]).exec( (err, data) => {
        // Note that this error doesn't mean nothing was found,
        // it means the database had an error while searching, hence the 500 status
        if (err) return res.status(500).json(err)
        // send the list of all people
        res.header('Access-Control-Allow-Origin', "*")
        res.setHeader('Content-Type', 'application/json');

        return res.send(JSON.stringify(data));
        });
    },
    getProjectPrediction: function(req, res){
        MainModel.predictionmodel.find({}).sort([['CreateDate', -1]]).limit(1).exec( (err, data) => {
        // Note that this error doesn't mean nothing was found,
        // it means the database had an error while searching, hence the 500 status
        if (err) return res.status(500).json(err)
        // send the list of all people
        res.header('Access-Control-Allow-Origin', "*")
        res.setHeader('Content-Type', 'application/json');

        return res.send(JSON.stringify(data));
        });
    },
    postProjectParameters: function(req, res){
        console.log('data');
        var sprint = new Sprint(req.body);
        sprint.save()
        .then(item=>{
              res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
                res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
                res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization'); // If needed
                res.setHeader('Access-Control-Allow-Credentials', true); // If needed
             return res.status(200).send("saved to database");  
       })
        .catch(err=> {
               res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
            return res.status(400).send("unable to save to database");

        })

    }



}