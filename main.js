// Variable para almacenar los productos del carrito
const contenidoIdiomas = document.getElementById("contenidoIdiomas");
const verCart = document.getElementById("verCart");
const compraContainer = document.getElementById("compraContainer");

const idiomas = [
  {
    id: 1,
    nombre: "Ingles",
    precio: 100,
    img: "img/usa_flag.png",
  },
  {
    id: 2,
    nombre: "Japones",
    precio: 120,
    img: "img/japan_flag.png",
  },
  {
    id: 3,
    nombre: "Frances",
    precio: 140,
    img: "img/france_flag.png",
  },
  {
    id: 4,
    nombre: "Aleman",
    precio: 200,
    img: "img/german_flag.png",
  },
];

let cart = [];

idiomas.forEach((idioma) => {
  let langs = document.createElement("div");
  langs.className = "card";
  langs.innerHTML = `
    <img class="img_idiomas" src="${idioma.img}">
    <h3 class="title_idiomas">${idioma.nombre}</h3>
    <p class="price">${idioma.precio} $</p>
    `;
  contenidoIdiomas.append(langs);

  let buy = document.createElement("button");
  buy.innerText = "Añadir";
  buy.className = "añadir";

  langs.append(buy);

  buy.addEventListener("click", () => {
    cart.push({
      img: idioma.img,
      nombre: idioma.nombre,
      precio: idioma.precio,
    });
    console.log(cart);
  });
});

verCart.addEventListener("click", () => {
  compraContainer.innerHTML = "";
  compraContainer.style.display = "flex";
  const compraHeader = document.createElement("div");
  compraHeader.className = "compra-header";
  compraHeader.innerHTML = `
  <h2 class ="compra-header-title">Idiomas a Abonar</h2>
  `;
  compraContainer.append(compraHeader);

  const compraButton = document.createElement("h2");
  compraButton.innerText = "x";
  compraButton.className = "compra-header-button";

  compraButton.addEventListener("click", () => {
    compraContainer.style.display = "none";
  });

  compraHeader.append(compraButton);

  cart.forEach((idioma) => {
    let cartContent = document.createElement("div");
    cartContent.className = "compraContent";
    cartContent.innerHTML = `
    <img src="${idioma.img}">
    <h3>${idioma.nombre}</h3>
    <p>${idioma.precio}</p>
    `;

    compraContainer.append(cartContent);
  });

  const total = cart.reduce((acc, cadauno) => acc + cadauno.precio, 0);

  const totalCompra = document.createElement("div");
  totalCompra.className = "total-content";
  totalCompra.innerHTML = `Total de la compra: ${total} $`;
  compraContainer.append(totalCompra);

  localStorage.setItem("cart", JSON.stringify(cart));
});

// Base de datos de idiomas
const BD = [
  { id: 1, nombre: "Inglés", precio: 100 },
  { id: 2, nombre: "Japonés", precio: 120 },
  { id: 3, nombre: "Francés", precio: 140 },
  { id: 4, nombre: "Alemán", precio: 200 },
];

//funcion para traer productos de otra pc
const invocarIdiomas = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(BD);
    }, 2000);
  });
};

invocarIdiomas()
  .then((list) => {
    console.log(list);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(console.log("outcome"));

//finally
const EventoCompra = (res) => {
  return new Promise((resolve, reject) => {
    res ? resolve("Promesa Resuelta") : reject("Promesa Rechazada");
  });
};
const enviar = document.createElement("div");
EventoCompra(true)
  .then((enviarForm) => {
    enviarForm.addEventListener("click", () => {
      Swal.fire({
        title: "¡Joya!",
        text: "¡Tu formulario fué enviado!",
        icon: "success",
        confirmButtonText: "Cool",
      });
      document.body.appendChild(enviarForm);
    });
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Fin de proceso");
  });
