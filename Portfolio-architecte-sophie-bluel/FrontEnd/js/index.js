console.log("hello world");

// let url = "http://localhost:5678/api/works";

fetch("http://localhost:5678/api/works", {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
})
  .then((response) => response.json())
  .then((works) => {
    console.log(works);

    let gallery = document.querySelector(".gallery");
    // gallery.innerHTML = "";/vider html/

    works.forEach((work) => {
      console.log(work);
      console.log(work.title);

      // let HTML = document.getElementsByClassName(".gallery");

      // let gallery = document.createElement("gallery");

      let figure = document.createElement("figure");
      let figureImg = document.createElement("img");
      figureImg.src = work.imageUrl;
      figureImg.alt = work.title;
      console.log(figureImg);
      figure.appendChild(figureImg);

      let figureFigcaption = document.createElement("figcaption");
      figureFigcaption.textContent = work.title;
      console.log(figureFigcaption);
      figure.appendChild(figureFigcaption);

      gallery.appendChild(figure);
      console.log(gallery);
    });

    // //Le code pour afficher les works dans le HTML avec des CreateElement pour créer e  HTML
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
