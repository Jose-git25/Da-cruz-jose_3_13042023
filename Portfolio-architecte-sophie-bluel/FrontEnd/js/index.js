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

let url = "http://localhost:5678/api/works";
fetch("http://localhost:5678/api/works", {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
})
  .then((response) => response.json())
  .then((works) => {
    console.log(works);

    // let HTML = document.getElementsByClassName("gallery");
    works.forEach((work) => {
      console.log(work);
      console.log(work.title);
      // let gallery = document.createElement("gallery");
      let figure = document.createElement("figure");
      let figureImg = document.createElement("img");
      figureImg.src = work.imageUrl;
      figureImg.alt = work.title;
      console.log(figureImg);
      figure.appendChild(figureImg);
      let figureFigcaption = document.createElement("figcaption");
      figureFigcaption.title = work.title;
      console.log(figureFigcaption);
    });
    //Le code pour afficher les works dans le HTML avec des CreateElement pour créer e  HTML
    let gallery = document.createElement("gallery");
    console.log(gallery);

    let figure = document.createElement("figure");

    console.log(figure);

    let figureImg = document.createElement("img");
    figureImg.src = "./assets/images/appartement-paris-v.png";
    figureImg.alt = "Appartement Paris V";
    // console.log(figureImg);
    figure.appendChild(figureImg);

    let figureFigcaption = document.createElement("figcaption");
    figureFigcaption.textContent = "Appartement Paris V";

    figure.appendChild(figureFigcaption);
    // console.log(figureFigcaption);
    // figureFigcaption;

    // console.log(figure);

    // figure = document.querySelector(figure);
    // let HTML = document.getElementById(figure);
    // let form = document.createElement("form");
    // console.log(form);

    // <figure>
    //   <img
    //     src=assets/images/appartement-paris-v.png
    //     alt="Appartement Paris V"
    //   />
    //   <figcaption>Appartement Paris V</figcaption>
    // </figure>;
  });
fetch("http://localhost:5678/api/categories", {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
})
  .then((response) => response.json())
  .then((categories) => {
    console.log(categories);

    categories.forEach((categorie) => {
      console.log(categorie);
      // console.log(categorie.title);
    });
  });
// function displayGallery(works) {
//   gallery = document.querySelector(".gallery");
//   gallery.innerHTML = "";

//   works.forEach((work) => {
//     const workCard = document.createElement("figure");
//     const workImage = document.createElement("img");
//     const workTitle = document.createElement("figcaption");
//     workImage.src = work.imageUrl;
//     workImage.alt = work.title;
//     workTitle.innerText = work.title;
//     workCard.dataset.category = work.category.name;
//     workCard.className = "workCard";

//     gallery.appendChild(workCard);
//     workCard.append(workImage, workTitle);
//   });
