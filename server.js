const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const {logger} = require('./middleware/logEvents');
const PORT = process.env.PORT || 4000

//custom middleware
app.use(logger);

//thirdParty - cross Origin Resources Sharing
app.use(cors());

//for form data
app.use(express.urlencoded({ extended:false }));
//for json
app.use(express.json());
//to serve static files
app.use(express.static(path.join(__dirname, '/public')));

//routes
app.use('/', require('./routes/root'));
app.use('/subdir', require('./routes/subdir'));
app.use('/employee', require('./routes/api/employee'));


//nesting
/*app.get('/hello(.html)?', (req,res,next) => {
    console.log("everything fine...");
    next();
}, (req,res) => {
    res.send("Hello World!!!");
});

const one = (req,res,next) => {
    console.log("one");
    next();
};

const two = (req,res) => {
    console.log("two");
    res.send("finished");
};

app.get('/chain(.html)?', [one,two]);

//default
app.get('/*', (req,res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
*/
app.listen(PORT, () => console.log("server is running..."));