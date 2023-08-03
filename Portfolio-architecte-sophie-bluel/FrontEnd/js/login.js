let form = document.querySelector("form");

let label = document.querySelector("label");
// console.log(form);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("ok");
  let emailValue = document.getElementById("email").value;
  let passValue = document.getElementById("pass").value;

  const data = {
    email: emailValue,
    password: passValue,
  };
  console.log(data);
  //Fetch méthode ICI
  fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((data) => data.json())
    .then((response) => {
      console.log(response);
      localStorage.setItem("token", data);
      window.location.href = "./index.html";
      console.log(token);
    })
    .catch((error) => {
      console.log(error);
    });
  // });

  // fetch(
  //   "http://localhost:5678/api/users/login",

  //   {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify({
  //       email: emailValue,
  //       Motdepasse: passValue,
  //     }),

  // if(response = ok) {
  //   return json().then((value) => {
  //     const token = value.token;
  //     localStorage.setItem("mon_token,token");
  //     window.location.href = "./index.html";
  //   });
  // },
  // else(newError) {
  //   "Erreur dans l'identifiant ou le mot de passe";
  // },then(value){
  //  const token = value.token,
  //  localStorage.setItem ("mon_token,token")
  //  }

  // )
  // );
  // });

  // if (response.ok) {
  //  return json()
  //  .then login =>{
  //    localStorage.setItem ("mon_token,token");
  // window.location.href = "./index.html"};}

  //  else (throw newError){
  //   ("Erreur dans l'identifiant ou le mot de passe");
  // }

  // then(data);
  // {
  //   console.log(data);

  //   localStorage.setItem("mon_token,token");
  // }
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
});
