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
  createCategories(categories, works);
}

init();

function createWorks(works) {
  let gallery = document.querySelector(".gallery");
  gallery.innerHTML = "";

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

function createCategories(categories, works) {
  categories.forEach((categorie) => {
    let nouvelleDiv = document.createElement("div");

    let button = document.createElement("button");
    button.type = "button";
    button.textContent = categorie.name;

    if ("Tous" == categorie.name) {
      button.className = "filter_active";
    }

    filter(button, works);

    Filtres.appendChild(button);
  });
}

function filter(button, works) {
  button.addEventListener("click", function () {
    console.log(this.textContent);
    let filtredItems = works.filter((item) => {
      return item.category.name === this.textContent;
    });
    if ("Tous" == this.textContent) {
      filtredItems = works;
      console.log("Ok");
    }
    createWorks(filtredItems);

    // Gérerle le déplacement de la class filter_active
  });
}

 const form = document.queryselector("form");
 form.addEventlistener("submit", function (event) {
   event.preventDefault();
 let emailValue = document.getElementById("#email").Value;
  let password = document.getElementById("#pass").Value;
   fetch("http://localhost:5678/api/users/login", {
     method: "POST",
     headers: {
       Accept: "application/json",
     },
     body: JSON.stringify({
       email: emailValue,
       password: passwordValue,
     }),
   });
   });
  then(response);
  if (response.ok) {
   return json()
   .then login =>{
     localStorage.setItem ("mon_token,token");
  window.location.href = "./index.html"};}

   else (throw newError){
    ("Erreur dans l'identifiant ou le mot de passe");
  }

 then(data);
 {
   console.log(data);

   localStorage.setItem("mon_token,token");
 }
  // )}
//  }
//  });

//
// .then((response) =>
//   response.json().then(userslogin)
// );
// {
//   console.log(userslogin);
// }
// {   method: "POST",
//   headers: {
//      Accept: "application/json",
// declare
//    },
//  };
//
//   .then((userslogin) => {
// //     // console.log(userslogin);};

//  then((response) => response.json()).then(users / login) =>{console.log(userslogin);}
//

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

//       //  )
//       //  }
//       // });
//     }}
