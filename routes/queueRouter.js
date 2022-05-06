const express = require('express');
var path = require('path');
var {ROOT_PATH} = require('../config/constants.js');
const FileService = require('../services/fileservice.js');

const router = express.Router();

module.exports = router;

router.get('/',   function(req, res, next){
    const filePath = path.join(ROOT_PATH, 'readfileseer', 'response.json');
    
    try {
        const fileData =  FileService.readFileAsync(filePath);  
        res.send({result: 'no async'});  
        res.end();
    } catch (error) {
        next(error);
    }

});