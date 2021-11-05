const fetchData=(callback=>{
    const promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('done!')
        },5000)
        setTimeout(()=>{
            reject('reject!')
        },5000)
    })
    return promise

   })

setTimeout(()=>{
        console.log('Test time');
        fetchData().then(text=>{
            console.log(text);
            return fetchData()
        }).then(text2=>{
            console.log('text2')
        }).catch(cath=>{
            console.log('reject')
        })
    },1000)

console.log('Hi');
console.log('How r u?')