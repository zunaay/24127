document.querySelector("body").onload = () => {
    let productoID = obtenerEnlace();
    cargarProducto(productoID);
    document.querySelector(".contenedor").style.display = "block";
};

const obtenerEnlace = () => {
    let search = (window.location.search).replace("?q=","");
    if (search != "") return search;
    window.location.href = "tienda.html";
};

const cargarProducto = (id) => {
    
    let producto = articulos.filter(v => v.id == id);

    // Añadir categorías
    let padre = document.querySelector("ul.navegacion");
    let tipo = document.createElement("li");
    tipo.innerText = producto[0].tipo;

    let categoria = document.createElement("li");
    categoria.innerText = producto[0].categoria;
    padre.append(tipo, categoria);

    // Imagen
    let imagen = document.createElement("img");
    imagen.src = producto[0].imagen;
    imagen.alt = producto[0].nombre;
    document.querySelector(".imagen-contenedor").appendChild(imagen);

    // Nombre del articulo
    document.querySelector(".detalles h2").innerText = producto[0].nombre;

    // Precio del articulo
    document.querySelector(".detalles .precio").innerText = `$ ${producto[0].precio}`;

    // Talles
    document.querySelector(".M").classList.add("activo");
    mostrarStock(id);
};

const mostrarStock = (id) => {
    let talle = (document.querySelector(".activo").classList.value).split(" ")[0];
    
    let producto = articulos.filter(v => v.id == id);
    let stock = producto[0].stock.filter(v => v.talle == talle);

    if (stock[0].disponible == 0 || stock[0].disponible == null) {
        document.querySelector(".talles-info").innerText = "No disponible en este talle.";

        // Deshabilitar boton del carrito
        document.querySelector(".boton-carrito input").classList.add("deshabilitado");

    } else {
        // Habilitar boton del carrito
        document.querySelector(".boton-carrito input").classList.remove("deshabilitado");

        if (stock[0].disponible == 1) {
            document.querySelector(".talles-info").innerText = "¡Último disponible!";
        } else {
            document.querySelector(".talles-info").innerText = `${stock[0].disponible} disponibles.`;
        };
    };

};

const cambiarTalle = (talle) => {
    document.querySelector(".talles input.activo").classList.remove("activo");
    document.querySelector(`.${talle}`).classList.add("activo");
    mostrarStock(obtenerEnlace());
};

document.querySelector(".talles .XS").addEventListener("click", () => {
    cambiarTalle("XS");
});

document.querySelector(".talles .S").addEventListener("click", () => {
    cambiarTalle("S");
});

document.querySelector(".talles .M").addEventListener("click", () => {
    cambiarTalle("M");
});

document.querySelector(".talles .L").addEventListener("click", () => {
    cambiarTalle("L");
});

document.querySelector(".talles .XL").addEventListener("click", () => {
    cambiarTalle("XL");
});

document.querySelector(".talles .XXL").addEventListener("click", () => {
    cambiarTalle("XXL");
});