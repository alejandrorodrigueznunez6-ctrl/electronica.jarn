let carrito = [];
let totalPagar = 0;

// Tu número de teléfono configurado (México)
const miTelefono = "526465209347";

/**
 * Agrega un producto al carrito
 */
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    totalPagar += precio;
    actualizarInterfaz();
}

/**
 * Actualiza el carrito visual en la pantalla
 */
function actualizarInterfaz() {
    const listaHTML = document.getElementById('elementos-carrito');
    const totalHTML = document.getElementById('total');
    
    listaHTML.innerHTML = '';
    
    carrito.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)} MXN`;
        listaHTML.appendChild(li);
    });
    
    totalHTML.textContent = totalPagar.toFixed(2);
}

/**
 * Construye el mensaje de texto y abre WhatsApp
 */
function enviarWhatsApp() {
    if (carrito.length === 0) {
        alert("Por favor, agrega al menos un producto al carrito.");
        return;
    }

    let mensaje = "Hola, me gustaría realizar el siguiente pedido:\n\n";
    
    carrito.forEach((item, index) => {
        mensaje += `${index + 1}. ${item.nombre} - $${item.precio} MXN\n`;
    });

    mensaje += `\n*Total a pagar:* $${totalPagar.toFixed(2)} MXN`;

    const mensajeCodificado = encodeURIComponent(mensaje);
    const urlWhatsApp = `https://wa.me/${miTelefono}?text=${mensajeCodificado}`;

    window.open(urlWhatsApp, '_blank');
}