var {ROOT_PATH} = require('../config/constants.js');
var path = require('path');
const FileService = require('../services/fileservice.js');
var express = require('express');
var router = express.Router();



router.get('/read', async function(req, res, next){
    const filePath = path.join(ROOT_PATH, 'readfiles', 'response.json');
    try {
        const fileData = await FileService.readFileAsync(filePath);
        res.send({fileData:JSON.parse(fileData)});
    } catch (error) {
        res.send({err:error.message});
    }
    //res.send({root_path:constants.ROOT_PATH, filePath, fileData:JSON.parse(fileData.toString())});
});

router.get('/category', function(req, res, next){
    
    const categories = [ 
        {cat_name:'Men', child:[{cat_name:'Fashion'}, {cat_name: 'Clothing'}, {cat_name: 'Accessories'}] },
        {cat_name:'Women', child:[{cat_name:'Fashion'}, {cat_name: 'Clothing'}] } 
    ];
    res.send({categories});
});



module.exports = router;