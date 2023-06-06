console.log('hello world')

fetch ('http://localhost:5678/api-docs/')
.then( data=> {
    return data.json()
}).then(json=>{
    console.log(json)
})
 Get ('http://localhost:5678/api/works')
 