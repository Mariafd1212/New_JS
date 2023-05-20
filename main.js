// Variable para almacenar los productos del carrito
let cartProducts = [];

// Obtener referencia al contenedor del carrito en el DOM
const cartContainer = document.getElementById("cart-container");

// Función para mostrar los productos en el carrito
const showCartProducts = () => {
  // Limpiar el contenido del contenedor del carrito
  cartContainer.innerHTML = "";

  if (cartProducts.length === 0) {
    // Mostrar mensaje de carrito vacío si no hay productos
    cartContainer.innerHTML = "<p>El carrito está vacío</p>";
  } else {
    // Generar HTML para cada producto en el carrito
    cartProducts.forEach((product, index) => {
      const productItem = document.createElement("div");
      productItem.classList.add("product-item");

      // Generar HTML con información del producto
      productItem.innerHTML = `
        <span>${product.title}</span>
        <span>$${product.price}</span>
        <button class="remove-product" data-index="${index}">Eliminar</button>
      `;

      // Agregar evento de click al botón de eliminar producto
      const removeButton = productItem.querySelector(".remove-product");
      removeButton.addEventListener("click", removeProduct);

      // Agregar el producto al contenedor del carrito
      cartContainer.appendChild(productItem);
    });
  }
};

// Función para agregar un producto al carrito
const addProductToCart = (title, price) => {
  const product = { title, price };
  cartProducts.push(product);

  // Actualizar el carrito en el DOM
  showCartProducts();

  // Guardar el carrito en el almacenamiento (LocalStorage o SessionStorage)
  saveCartToStorage();
};

// Función para eliminar un producto del carrito
const removeProduct = (event) => {
  const index = event.target.dataset.index;
  cartProducts.splice(index, 1);

  // Actualizar el carrito en el DOM
  showCartProducts();

  // Guardar el carrito actualizado en el almacenamiento
  saveCartToStorage();
};

// Función para guardar el carrito en el almacenamiento
const saveCartToStorage = () => {
  // Convertir el carrito a formato JSON
  const cartJSON = JSON.stringify(cartProducts);

  // Guardar el carrito en el almacenamiento (LocalStorage o SessionStorage)
  localStorage.setItem("cart", cartJSON);
};

// Función para cargar el carrito desde el almacenamiento
const loadCartFromStorage = () => {
  // Obtener el carrito almacenado en formato JSON
  const cartJSON = localStorage.getItem("cart");

  if (cartJSON) {
    // Convertir el carrito JSON a objeto JavaScript
    cartProducts = JSON.parse(cartJSON);
  }

  // Actualizar el carrito en el DOM
  showCartProducts();
};

// Evento al cargar la página para cargar el carrito desde el almacenamiento
window.addEventListener("load", loadCartFromStorage);

// Evento al hacer clic en el botón "Agregar al carrito"
const addToCartButton = document.getElementById("add-to-cart");
addToCartButton.addEventListener("click", () => {
  const productTitle = document.getElementById("product-title").value;
  const productPrice = document.getElementById("product-price").value;
  addProductToCart(productTitle, productPrice);
});
