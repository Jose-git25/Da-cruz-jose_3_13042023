console.log("hello world");

// let works = [];
// const apiWorks = async () => {
//   try {
//     await fetch("http://localhost:5678/api/works", {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then(worksResponse);
//     {
//       works = worksResponse;
//     }
//   } catch (error) {
//     console.log("Erreur dans la récupération des données :", error);
//   }
// };

// let categories = [];
// const apiCategories = async () => {
//   try {
//     await fetch("http://localhost:5678/api/categories", {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then((categoriesResponse) => {
//         console.log(categoriesResponse);
//         categories = categoriesResponse;
//       });
//   } catch (error) {
//     console.log("Erreur dans la récupération des données :", error);
//   }
// };

fetch("http://localhost:5678/api/works", {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
})
  .then((response) => response.json())
  .then((works) => {
    console.log(works);

    //Le code pour afficher les works dans le HTML avec des CreateElement pour créer e  HTML

    // <figure>
    //   <img
    //     src="assets/images/appartement-paris-v.png"
    //     alt="Appartement Paris V"
    //   />
    //   <figcaption>Appartement Paris V</figcaption>
    // </figure>;
  });
// fetch ('http://localhost:5678/api/categories",
// method: "GET",
// headers: {
// Accept: "application/json",
// }

// apiCategories();

// console.log(categories);

// const apiCategories = async () => {

// };

// async function apiCategories() {

// }

// }
// )
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
