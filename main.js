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
    // Agrego notificacion al elimiar producto
    Toastify({
      text: "Producto añadido✨",
      offset: {
        x: 20,
        y: 210,
      },
      duration: 1500,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        borderRadius: "10px",
        background: "#4CAF50",
      },
    }).showToast();
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

// Espera a que el documento esté cargado
$(document).ready(function () {
  // Manejador de eventos para el envío del formulario
  $("form").on("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Crear una promesa para simular una respuesta asincrónica
    var promise = new Promise(function (resolve, reject) {
      // Aquí puedes realizar cualquier lógica o llamada a una API

      // Simulación de una respuesta exitosa después de 2 segundos
      setTimeout(function () {
        resolve();
      }, 2000);
    });

    // Mostrar SweetAlert mientras se espera la respuesta
    Swal.fire({
      title: "Enviando formulario...",
      icon: "info",
      showCancelButton: false,
      showConfirmButton: false,
      allowOutsideClick: false,
      timerProgressBar: true,
      timer: 2000,
      didOpen: function () {
        Swal.showLoading();
      },
      willClose: function () {
        Swal.fire({
          title: "¡Formulario enviado!",
          icon: "success",
          showCancelButton: false,
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
      },
    });

    // Manejar el resultado de la promesa
    promise
      .then(function () {
        // Envío de formulario a Netlify
        const handleSubmit = (event) => {
          event.preventDefault();

          const myForm = event.target;
          const formData = new FormData(myForm);

          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
          })
            .then(() => console.log("Form successfully submitted"))
            .catch((error) => alert(error));
        };

        document.querySelector("form").addEventListener("submit", handleSubmit);

        $("form")[0].reset(); // Limpiar los campos del formulario
      })
      .catch(function () {
        // Aquí puedes manejar el caso en el que ocurra un error al enviar el formulario
        Swal.fire({
          title: "Error al enviar el formulario",
          text: "Por favor, inténtalo de nuevo más tarde.",
          icon: "error",
          showCancelButton: false,
          confirmButtonText: "Cerrar",
          confirmButtonColor: "#d33",
        });
      });
  });
});

let prueba = document.createElement("div");
prueba.classList.add("prueba");
prueba.innerHTML("Holis");

toastify.alert;
