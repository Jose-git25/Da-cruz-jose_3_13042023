console.log('hello world')

let works =[];
const apiWorks = async () => {
    try {
        await fetch ("http://localhost:5678/api/works" ,{
            method: "GET",
            headers: {
              Accept: "application/json",  
            },

        })
        .then((response) => response.json())
        .then((WorksResponse)) ; {
            works=WorksResponse;     
        };
    } catch (error)  {
     console.log("Erreur dans la récupération des données :", error)   
    }     

}; 

  let categories = []; 
const apiCategories = async () => {
    try {
        await fetch ("http://localhost:5678/api/works" ,{
            method: "GET",
            headers: {
              Accept: "application/json",  
            },

        })
        .then((response) => response.json())
        .then((WorksResponse)) ; {
            works=WorksResponse;     
        };
    } catch (error)  {
     console.log("Erreur dans la récupération des données :", error)   
    }  
       

};    
// }
// fetch ('http://localhost:5678/api-docs/')
// .then( data=> {
//     return data.json()
// }).then(json=>{
//     console.log(json)
// })
// //  get ('http://localhost:5678/api/works');
// //  get ('http://localhost:5678/api/categories');
//  fetch ('http://localhost:5678/api/works');{
//     get/works
//  }
 
 