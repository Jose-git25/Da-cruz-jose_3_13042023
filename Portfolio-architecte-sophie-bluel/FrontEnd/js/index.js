async function getWorks() {
  try {
    const response = await fetch("http://localhost:5678/api/works");
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getCategories() {
  try {
    const response = await fetch("http://localhost:5678/api/categories");
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function init() {
  const works = await getWorks();
  const allCat = { id: 0, name: "Tous" };
  const categories = await getCategories();
  categories.unshift(allCat);
  console.log(works, categories);
  createWorks(works);
  createCategories(categories);
}

init();

function createWorks(works) {
  let gallery = document.querySelector(".gallery");

  works.forEach((work) => {
    let figure = document.createElement("figure");
    let figureImg = document.createElement("img");
    figureImg.src = work.imageUrl;
    figureImg.alt = work.title;
    figure.appendChild(figureImg);

    let figureFigcaption = document.createElement("figcaption");
    figureFigcaption.textContent = work.title;
    figure.appendChild(figureFigcaption);

    gallery.appendChild(figure);
  });
}

function createCategories(categories) {
  categories.forEach((categorie) => {
    let nouvelleDiv = document.createElement("div");

    let button = document.createElement("button");
    button.type = "button";
    button.textContent = categorie.name;

    Filtres.appendChild(button);
  });
}
let userslogin = { name: "Sophie", surname: "bluel" };

fetch("http://localhost:5678/api/users/login");
{
  method: "POST", headers;

  {
    Accept: "application/json", Content - Type;
    application / json;
    {
      email: "string", password;
      "string", headers;
      JSON.stringify(user);
    }
  }
}
then((response) => response.json()).then(login);
then(users / login);
console.log(users / login);
// filter(works, categories);
// let url = "http://localhost:5678/api/works";

// fetch("http://localhost:5678/api/works", {
//   method: "GET",
//   headers: {
//     Accept: "application/json",
//   },
// })
//   .then((response) => response.json())
//   .then((works) => {
//     // console.log(works);
//     // //Le code pour afficher les works dans le HTML avec des CreateElement pour créer e  HTML
//   });

// fetch("http://localhost:5678/api/categories", {
//   method: "GET",
//   headers: {
//     Accept: "application/json",
//   },
// })
//   .then((response) => response.json())
//   .then((categories) => {
//     // console.log(categories);

//     let button = document.createElement("button");
//     button.type = "button";
//     button.textContent = "Tous";
//     Filtres.appendChild(button);

//     categories.forEach((categorie) => {
//       // console.log(categorie);
//       // console.log(categorie.name);
//       let nouvelleDiv = document.createElement("div");
//       // div = document.createElement("Filtres");
//       // div = document.createElement("button");

//       let button = document.createElement("button");
//       button.type = "button";
//       button.textContent = categorie.name;
//       // button.push("Tous");
//       Filtres.appendChild(button);

//       // console.log(Filtres);
//       // button.setAttribute(background, green);
//       //  button.addEventListener;
//       //  if (click) {
//       //    button.style.backgroundColor=green;
//       //  }

//       //  )
//       //  }
//       // });
//     });
//   });
