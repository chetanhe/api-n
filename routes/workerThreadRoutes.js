const express = require('express');
const fibonacciworker = require('../workers/fibonacciworker');
const router = express.Router();

module.exports = router;

router.get('/', async function(req, res){
    const n = parseInt(req.query.n);
    const worker1 = await fibonacciworker(30);
    const worker2 = await fibonacciworker(40);
    const worker3 = await fibonacciworker(50);
    Promise.all([worker1, worker2, worker3]).then((values)=>{
        res.send({result:values});
    });
    //res.send({result});
});