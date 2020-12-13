const dotenv = require('dotenv');
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);
var textapi = {
    application_key: process.env.API_KEY
};
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()
const router = express.Router()
const bodyParser = require('body-parser');

app.use(require('body-parser').urlencoded({ extended: false }));
app.use(router);

// app.use(express.static('dist'))
app.use(express.static(__dirname + '/client'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.route('/nlp')
    .post( function (req, res, next) {
        var url = 'http://api.meaningcloud.com/sentiment-2.1?key=';
        var body = '&txt=' + req.body;
        console.log(body);
        var key = textapi.application_key;
        console.log(key);

        fetch(url+key+body)
            .then(res => res.json())
            .then(data => {
                res.send({ data });
            })
            .catch(err => {
                res.send(err);
            });
})
