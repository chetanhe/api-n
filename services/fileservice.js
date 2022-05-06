const fs = require('fs/promises');
const readFileAsync =  function(path){
    //return buffer if you don't provide utf8
    //to convert buffer to string buf.toString() need to use
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            const fileData =  fs.readFile(path, 'utf8').then((fileData)=>{
                resolve(fileData);
            }).catch((err)=>{ 
                reject(new Error(err)) 
            });
            //return fileData;
        }, 5000);
    });
}

exports.readFileAsync = readFileAsync;