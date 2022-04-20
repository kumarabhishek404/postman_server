var express = require('express');
var axios = require('axios')

var app = express()

const getData = async () => {
    try {
        return await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments') 
    } catch (err) {
        console.log(err)
    }
}

app.get('/', (req,res) => {
    res.send('Hello World!!!');
    // res.setHeader('Content-Type', 'text/plain');
    getData()
    .then((respose) => {
        console.log("Response", respose.data);
        return respose.data
    })
    .catch((err) => {
        console.log("Error", err);
        res.send('Failed')
    })
})

var server = app.listen("8080", () => {
    var host = server.address().address
    var port = server.address().port
    console.log(host);
    console.log('App is listening at http://%s:%s', host,port)
})