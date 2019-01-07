const genFunctions = require('./generator/mygenerator');
const generator = require('./generator/generator');
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
var session = require('express-session');
let generatorsMap = [];
app.use('/public', express.static('public'));
app.use(bodyParser.json())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}))

var server = app.listen(3002, function () {
    console.log('Server listening on port 3000');
});
//Route for normal index file
app.get('/', function (req, resp) {
    resp.sendFile(path.resolve(__dirname) + '/public/index.html');
});
//Route to initialize the session with fibonacci generator
app.get('/fib', function (req, resp) {
    let mygen = new genFunctions();
    generatorsMap[req.session.id] = mygen.fibonacciSeq;
    req.session.save();
    resp.send('Generator Loaded');
})
//Route to initialize the session with factorial generator
app.get('/fact', function (req, resp) {
    let mygen = new genFunctions();
    generatorsMap[req.session.id] = mygen.factorialSeq;
    req.session.save();
    resp.send('Generator Loaded');
})
//Route to initialize the session with range generator
app.post('/range', function (req, resp) {
    let mygen = new genFunctions();
    generatorsMap[req.session.id] = mygen.rangeSeq;
    //Stores the concerned attributes in session
    req.session.initialValue = req.body.initialValue;
    req.session.step = req.body.step;
    req.session.save();
    resp.send('Generator Loaded');
})
//Route to initialize the session with partial sum generator
app.post('/sum', function (req, resp) {
    let mygen = new genFunctions();
    generatorsMap[req.session.id] = mygen.partialSumSeq;
    //Store the attributes in session
    req.session.partialvalues = req.body.valueArr;
    req.session.save();
    resp.send('Generator Loaded');
})
//Route to initialize the session with Prime number generator
app.get('/prime', function (req, resp) {
    let mygen = new genFunctions();
    generatorsMap[req.session.id] = mygen.primeSeq;
    req.session.save();
    resp.send('Generator Loaded');
})
//Route to initialize the session with next number generator
app.get('/next', function (req, resp) {
    var genFn = generatorsMap[req.session.id];
    let gen;
    if (req.session.initialValue != undefined) {
        gen = new generator(genFn, parseInt(req.session.initialValue), parseInt(req.session.step));
    } else if (req.session.partialvalues != undefined) {
        var partialValues = req.session.partialvalues;
        gen = new generator(genFn, partialValues);
    } else {
        gen = new generator(genFn);
    }
    var nextVal = '';
    try {
        nextVal = gen.next();
    } catch (e) {
        console.error(e);
    }
    resp.status(200).send({ next: nextVal });
})