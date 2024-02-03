
let cart = {};


function addToCart(product) {
  if (cart[product]) {
    cart[product]++;
  } else {
    cart[product] = 1;
  }

  showCart();
}

function showCart() {
  let cartContent = document.getElementById("cartContent");

  if (Object.keys(cart).length === 0) {
    cartContent.innerHTML = "Tu cesta está vacía.";
  } else {
    let cartItems = Object.keys(cart).map(function (product) {
      return product + " (" + cart[product] + ")";
    });
    cartContent.innerHTML =
      "Tu cesta contiene: " + "<br>" + cartItems.join("<br>");
  }
}


let buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let product = this.parentElement.querySelector(".card-title").textContent;
    addToCart(product);
  });
});

// Asegúrate de que este código esté después de la definición de addToCart() y showCart()

// Función para mostrar u ocultar el contenido del carrito
function toggleCart() {
    let cartContent = document.getElementById('cartContent');
    cartContent.classList.toggle('cart-visible');
  }
  
  // Añadir evento de clic al icono de la cesta
  document.getElementById('cartIcon').addEventListener('click', function(event) {
    event.stopPropagation(); // Evitar que el clic se propague al contenedor principal
    toggleCart(); // Mostrar u ocultar el contenido del carrito
  });
  
  // Añadir evento de clic al documento para ocultar el contenido del carrito si se hace clic fuera de él
  document.addEventListener('click', function(event) {
    let cartContent = document.getElementById('cartContent');
    if (!event.target.closest('#cartContent') && !event.target.closest('#cartIcon')) {
      cartContent.classList.remove('cart-visible');
    }
  });
  