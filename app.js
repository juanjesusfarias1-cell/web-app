const productos = [
{ nombre: "Jabón líquido", precio: 1000 },
{ nombre: "Suavizante", precio: 1200 },
{ nombre: "Lavandina", precio: 800 },
{ nombre: "Detergente", precio: 900 },
{ nombre: "Desengrasante", precio: 1500 },
{ nombre: "Limpia vidrio", precio: 1100 },
{ nombre: "Alcohol líquido", precio: 1300 },
{ nombre: "Alcohol en gel", precio: 1400 },
{ nombre: "Trapo de piso", precio: 700 },
{ nombre: "Esponjita", precio: 500 }
];

let carrito = [];

const contenedor = document.getElementById("productos");
const listaCarrito = document.getElementById("listaCarrito");

function renderProductos() {
productos.forEach((prod, i) => {
contenedor.innerHTML += `       <div class="card">         <h3>${prod.nombre}</h3>         <p>$${prod.precio}</p>         <button onclick="agregar(${i})">Agregar</button>       </div>
    `;
});
}

function agregar(i) {
carrito.push(productos[i]);
renderCarrito();
}

function renderCarrito() {
listaCarrito.innerHTML = "";
carrito.forEach(p => {
listaCarrito.innerHTML += `<li>${p.nombre} - $${p.precio}</li>`;
});
}

function enviarPedido() {
let mensaje = "Hola, quiero pedir:%0A";

carrito.forEach(p => {
mensaje += `- ${p.nombre}%0A`;
});

const telefono = "5492475409370";

window.open(`https://wa.me/${telefono}?text=${mensaje}`);
}

renderProductos();
