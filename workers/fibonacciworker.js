const {Worker, isMainThread, parentPort, workerData} = require('worker_threads');

if(isMainThread){
    module.exports = (n) => {
        return new Promise((resolve, reject)=>{
            const worker = new Worker(__filename, {
                workerData: n
            });
            console.log('main thread '+isMainThread);
            worker.on('message', resolve);
            worker.on('error', reject);
            worker.on('exit', (code)=>{
                if(code !== 0){
                    reject(new Error(`worker stopped with exit code ${code}`));
                }
            });
        });
    }
}else{
    const result = fibonacci(workerData);
    parentPort.postMessage(result);
}


function fibonacci(n){
    if(n === 1 || n === 2){
        return 1;
    }else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}