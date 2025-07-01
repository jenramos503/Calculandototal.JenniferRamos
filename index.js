
const precioBase = 400000;


const spanPrecio = document.querySelector(".precio-inicial");
const spanCantidad = document.querySelector(".cantidad");
const spanTotal = document.querySelector(".valor-total");
const btnMas = document.querySelector(".btn-mas");
const btnMenos = document.querySelector(".btn-menos");


let cantidad = 0;
spanPrecio.innerHTML = precioBase;
spanCantidad.innerHTML = cantidad;
spanTotal.innerHTML = 0;


function actualizarTotal() {
    const total = cantidad * precioBase;
    spanTotal.innerHTML = total;
}


btnMas.addEventListener("click", () => {
    cantidad++;
    spanCantidad.innerHTML = cantidad;
    actualizarTotal();
});

btnMenos.addEventListener("click", () => {
    if (cantidad > 0) {
        cantidad--;
        spanCantidad.innerHTML = cantidad;
        actualizarTotal();
    }
});
