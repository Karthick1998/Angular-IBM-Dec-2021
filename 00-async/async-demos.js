(function(){
    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`);
        const result = x + y;
        console.log(`   [@service] returning the result`);
        return result;
    }

    function addSyncClient(x,y){
        console.log(`[@client] invoking the service`);
        const result = addSync(x,y);
        console.log(`[@client] result = ${result}`);
    }

    window['addSyncClient'] = addSyncClient;

    function addAsync(x,y, callback){
        console.log(`   [@service] processing ${x} and ${y}`);
        setTimeout(function(){
            const result = x + y;
            console.log(`   [@service] returning the result`);
            callback(result);
        }, 5000);
    }

    function addAsyncClient(x,y){
        console.log(`[@client] invoking the service`);
        addAsync(x,y, function(result){
            console.log(`[@client] result = ${result}`);
        });
    }

    window['addAsyncClient'] = addAsyncClient;

    function addAsyncPromise(x,y){
        console.log(`   [@service] processing ${x} and ${y}`);
        const p = new Promise(function(resolveFn, rejectFn){
            setTimeout(function(){
                const result = x + y;
                console.log(`   [@service] returning the result`);
                resolveFn(result);
            }, 5000);
        });
        return p;
    }

    /* 
        p => promise 
            .then(function(result){
            })

            .catch(function(err){
            })
    */

    
    /* 
    function addAsyncPromiseClient(x,y){
        console.log(`[@client] invoking the service`);
        const promise = addAsyncPromise(x,y);
        promise.then(function(result){
            console.log(`[@client] result = ${result}`);
        })
    } 
    */

    async function addAsyncPromiseClient(x,y){
        console.log(`[@client] invoking the service`);
        const result = await addAsyncPromise(x,y);
        console.log(`[@client] result = ${result}`);
        return result * 2;
    } 
    
    window['addAsyncPromiseClient'] = addAsyncPromiseClient;
})()