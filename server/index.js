const express = require('express');
const bodyParser = require('body-parser');
const searchData = require('./data.json')

const app = express();
const port = 5000;

const maxAnswers = 10;

app.use(bodyParser.urlencoded({ extended:true}));

app.get("/api/search/", function (req, res) {
    // console.log(req);
    const ans = []

    if (req.query && req.query.searchText) {
        for (let i=0; i < searchData.length; i++){
            if (ans.length === maxAnswers) break;
            if (searchData[i].title.includes(req.query.searchText)){
                ans.push(searchData[i].title)
            }
        }
    }

    res.send(ans)
});

app.listen(port, () => {
    console.log('Server started');
});