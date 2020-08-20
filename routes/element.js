const express = require('express');
const elementJSON = require('./elements.json')
const JsonFilter = require('@barreljs/json-filter')

const router = express.Router();



const isEmpty = (obj) => {return Object.keys(obj).length === 0;}
const capitalize = (string) => {    return string.charAt(0).toUpperCase() + string.slice(1);}



router.get('/series/:series', function(req, res, next) {
    const series = capitalize(req.params.series)
    console.log(series);
    const filter = {series: series};
    console.log(filter);
    const result = JsonFilter(elementJSON, filter)
    const elements = result.all()
    if(isEmpty(elements)){
        res.sendStatus(404)
    }
    else{
        res.json(elements)
    }


    

});

router.get('/period/:period', function(req, res, next) {
    const period = parseInt(req.params.period)
    console.log(period);
    const filter = {period: period};
    console.log(filter);
    const result = JsonFilter(elementJSON, filter)
    const elements = result.all()
    if(isEmpty(elements)){
        res.sendStatus(404)
    }
    else{
        res.json(elements)
    }


    

});

router.get('/group/:group', function(req, res, next) {
    const group = parseInt(req.params.group)
    console.log(group);
    const filter = {group_id: group};
    console.log(filter);
    const result = JsonFilter(elementJSON, filter)
    const elements = result.all()
    if(isEmpty(elements)){
        res.sendStatus(404)
    }
    else{
        res.json(elements)
    }


    

});

router.get('/block/:block', function(req, res, next) {
    const block = req.params.block
    console.log(block);
    const filter = {block: block};
    console.log(filter);
    const result = JsonFilter(elementJSON, filter)
    const elements = result.all()
    if(isEmpty(elements)){
        res.sendStatus(404)
    }
    else{
        res.json(elements)
    }


    

});

router.get('/symbol/:symbol', function(req, res, next) {
    const symbol = capitalize(req.params.symbol)
    console.log(symbol);
    const filter = {symbol: symbol};
    console.log(filter);
    const result = JsonFilter(elementJSON, filter)
    const elements = result.all()
    if(isEmpty(elements)){
        res.sendStatus(404)
    }
    else{
        res.json(elements[0])
    }


    

});


router.get('/atomicname/:name', function(req, res, next) {
    const name = req.params.name
    console.log(name);
    const filter = {name: name};
    console.log(filter);
    const result = JsonFilter(elementJSON, filter)
    const elements = result.all()
    if(isEmpty(elements)){
        res.sendStatus(404)
    }
    else{
        res.json(elements[0])
    }


    

});

router.get('/atomicnumber/:an', function(req, res, next) {
    const an = parseInt(req.params.an)
    console.log(an);
    const filter = {atomic_number: an};
    console.log(filter);
    const result = JsonFilter(elementJSON, filter)
    const elements = result.all()
    if(isEmpty(elements)){
        res.sendStatus(404)
    }
    else{
        res.json(elements[0])
    }

    

});

router.get('/all', function(req, res, next) {
    console.log("all elements in pt"); 
    res.json(elementJSON);
});

module.exports = router;