const contenidoIdiomas = $("#contenidoIdiomas");
const verCart = $("#verCart");
const compraContainer = $("#compraContainer");

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
  let langs = $("<div>").addClass("card");
  langs.html(`
    <img class="img_idiomas" src="${idioma.img}">
    <h3 class="title_idiomas">${idioma.nombre}</h3>
    <p class="price">${idioma.precio} $</p>
    `);
  contenidoIdiomas.append(langs);

  let buy = $("<button>").text("Añadir").addClass("añadir");

  langs.append(buy);

  buy.on("click", () => {
    cart.push({
      img: idioma.img,
      nombre: idioma.nombre,
      precio: idioma.precio,
    });
    console.log(cart);
  });
});

verCart.on("click", () => {
  compraContainer.html("");
  compraContainer.css("display", "flex");
  const compraHeader = $("<div>").addClass("compra-header");
  compraHeader.html(`
  <h2 class ="compra-header-title">Idiomas a Abonar</h2>
  `);
  compraContainer.append(compraHeader);

  const compraButton = $("<h2>").text("x").addClass("compra-header-button");

  compraButton.on("click", () => {
    compraContainer.css("display", "none");
  });

  compraHeader.append(compraButton);

  cart.forEach((idioma) => {
    let cartContent = $("<div>").addClass("compraContent");
    cartContent.html(`
    <img src="${idioma.img}">
    <h3>${idioma.nombre}</h3>
    <p>${idioma.precio}</p>
    `);

    compraContainer.append(cartContent);
  });

  const total = cart.reduce((acc, cadauno) => acc + cadauno.precio, 0);

  const totalCompra = $("<div>").addClass("total-content");
  totalCompra.html(`Total de la compra: ${total} $`);
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

// Función para traer productos de otra PC
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
  .finally(() => console.log("outcome"));

// Finally
const EventoCompra = (res) => {
  return new Promise((resolve, reject) => {
    res ? resolve("Promesa Resuelta") : reject("Promesa Rechazada");
  });
};

// Manejar el envío del formulario
EventoCompra(true)
  .then((enviarForm) => {
    enviarForm.on("submit", (event) => {
      event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

      Swal.fire({
        title: "¡Joya!",
        text: "¡Tu formulario fue enviado!",
        icon: "success",
        confirmButtonText: "Cool",
      });

      // Aquí puedes realizar cualquier otra acción con los datos del formulario

      // Por ejemplo, puedes enviar los datos del formulario a un servidor
      // utilizando una solicitud AJAX

      // Después de realizar cualquier acción necesaria, puedes resetear el formulario
      enviarForm[0].reset();
    });
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Fin de proceso");
  });
