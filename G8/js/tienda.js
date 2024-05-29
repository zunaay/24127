document.querySelector("body").onload = () => {
    cargarArticulos();
    document.querySelector(".contenedor").style.display = "block";
};

const cargarArticulos = () => {

    // Cargar articulos segun tipo
    let tipo = articulos.filter(v => v.tipo == "Hombre");
    dibujarArticulos(tipo, ".articulos.hombre .lista-articulos");
    document.querySelector("#hombre").innerText = "Hombre";

    tipo = articulos.filter(v => v.tipo == "Mujer");
    dibujarArticulos(tipo, ".articulos.mujer .lista-articulos");
    document.querySelector("#mujer").innerText = "Mujer";

    tipo = articulos.filter(v => v.tipo == "Niños");
    dibujarArticulos(tipo, ".articulos.nino .lista-articulos");
    document.querySelector("#nino").innerText = "Niños";

};

const dibujarArticulos = (datos, elemento) => {

    let padre = document.querySelector(elemento);
    padre.innerHTML = "";

    for (t = 0; t < datos.length; t++) {

        let fragmento = document.createDocumentFragment();

        let articulo = document.createElement("li");
        articulo.classList.add("articulo");

        let enlace = document.createElement("a");
        enlace.href = `producto.html?q=${datos[t].id}`;

        let detalle = document.createElement("div");
        detalle.classList.add("detalle");

        let articuloImagen = document.createElement("div");
        articuloImagen.classList.add("articulo-imagen");

        let imagen = document.createElement("img");
        imagen.src = datos[t].imagen;
        imagen.alt = datos[t].nombre;

        let info = document.createElement("div");
        info.classList.add("articulo-info");

        let titulo = document.createElement("p");
        titulo.classList.add("articulo-titulo");
        titulo.innerText = datos[t].nombre;

        let precio = document.createElement("p");
        precio.classList.add("articulo-precio");
        precio.innerText = `$ ${datos[t].precio}`;

        info.append(titulo, precio);
        articuloImagen.appendChild(imagen);
        detalle.append(articuloImagen, info);
        enlace.appendChild(detalle);
        articulo.appendChild(enlace);
        fragmento.appendChild(articulo);

        padre.appendChild(fragmento);

    };
}