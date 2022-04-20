var express = require('express');
var axios = require('axios')
const cors = require('cors');


var app = express()

app.use(cors({
    origin: '*'
}));


const getData = async () => {
    try {
        return await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
    } catch (err) {
        console.log(err)
    }
}

const setData = async (payload) => {
    try {
        return await axios.post('http://dummy.restapiexample.com/api/v1/create', payload)
    } catch (err) {
        console.log(err);
    }
}

app.get('/', (req, res) => {
    // res.send('Hello World!!!');
    // res.setHeader('Content-Type', 'text/plain');
    getData()
        .then((response) => {
            console.log("Response", response.data);
            res.send(response.data);
        })
        .catch((err) => {
            console.log("Error", err);
            res.send('Failed')
        })
})

app.post('/add', (req, res) => {
    console.log("Request Body", res.json({requestBody: req.body}));
    // res.json({requestBody: req.body})
    setData(req.body)
        .then(response => {
            console.log("Post Response", response.data);
        })
        .catch(err => {
            console.log("Post Error", err);
        })
    // const add_data = req.body;
    // console.log("Body data", add_data)
    // res.send("New add success")
})

var server = app.listen("8080", () => {
    var host = server.address().address
    var port = server.address().port
    console.log(host);
    console.log('App is listening at http://%s:%s', host, port)
})