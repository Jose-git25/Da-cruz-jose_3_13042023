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

    if ("Appartements" == this.textContent) {
      button.className = "filter_active";
      filter(button, works);

      Filtres.appendChild(button);
    }
    if ("Objets" == this.textContent) {
      button.className = "filter_active";
      filter(button, works);

      Filtres.appendChild(button);
    }
    if ("Hotels & restaurants" == this.textContent) {
      button.className = "filter_active";
      filter(button, works);

      Filtres.appendChild(button);
    }
  });
}
