let carrito = {};

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
  if (carrito[producto]) {
    carrito[producto]++;
    
  } else {
    carrito[producto] = 1;
  }

  mostrarCarrito(); 
}

// Función para mostrar el contenido del carrito
function mostrarCarrito() {
  let contenidoCarrito = document.getElementById("cartContent");
  let botonCompra = document.createElement("button");
  let botonCerrar = document.createElement("button");
  let botonVaciar = document.createElement("button");

  let itemsCarrito = Object.keys(carrito).map(function (producto) {//map() crea un nuevo array con los resultados de llamar a una función para cada elemento del array. En este caso, para cada producto en el carrito, se ejecuta la función que toma el producto como argumento.
    return producto + " (" + carrito[producto] + ")";//toma el nombre del producto como argumento y devuelve el nombre y la cantidad del producto en el carrito
  });
  contenidoCarrito.innerHTML = "Tu cesta contiene: " + "<br>" + itemsCarrito.join("<br>");

  botonCompra.setAttribute("id", "compra");
  botonCerrar.setAttribute("id", "cerrarCarrito");
  botonVaciar.setAttribute("id", "vaciarCarrito");

  botonCompra.innerHTML = "Comprar";
  botonCerrar.innerHTML = "Cerrar";
  botonVaciar.innerHTML = "Vaciar";

  contenidoCarrito.appendChild(botonCompra);  
  contenidoCarrito.appendChild(botonCerrar);
  contenidoCarrito.appendChild(botonVaciar);

  botonCerrar.onclick = cerrarCarro;
  botonVaciar.onclick = vaciarCarrito;
}

function cerrarCarro(){
  let contenidoCarrito = document.getElementById('cartContent');
  contenidoCarrito.classList.remove('cart-visible');
}

function vaciarCarrito(){
  carrito = {}; // Vaciar el objeto del carrito
  mostrarCarrito()
}
// Obtener todos los botones en la página
let botones = document.querySelectorAll("button");


botones.forEach(function (boton) {// el foreach recoge los elementos del array botones y los ejecuta una vez por cada elemento del array
  boton.addEventListener("click", function () {
    let producto = this.parentElement.querySelector(".card-title").textContent;//se obtiene el nombre del producto asociado al botón y el querySelector selecciona el elemento HTML correspondiente
    agregarAlCarrito(producto); // Agregar el producto al carrito
  });
});

// Función para mostrar u ocultar el contenido del carrito
function alternarCarrito() {
    let contenidoCarrito = document.getElementById('cartContent');
    contenidoCarrito.classList.toggle('cart-visible');//classList devulve un objeto con las clases de un elemento y el toggle cambia entre las clases
  }
  
  // Agregar un escucha de evento de clic al ícono del carrito
document.getElementById('cartIcon').addEventListener('click', function(event) {
  event.stopPropagation(); // Evitar que el clic se propague
  alternarCarrito(); // Mostrar u ocultar el contenido del carrito
});


