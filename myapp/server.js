/*const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
*/

'use strict';
var mongoose = require('mongoose'), Admin = mongoose.mongo.Admin;
var routes = require('./routes/mainRouter');
const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
 
// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/mainDB', function(err){
	if (err) {
        console.log('Unable to connect to the server. Please start the server. Error:', err);
    } else {
        console.log('Connected to Server successfully!');
    }
});
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/*app.use(express.json());

*/
app.use('/', routes);


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);