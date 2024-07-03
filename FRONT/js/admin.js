const port = 7070;

document.addEventListener("DOMContentLoaded", () => {
    const tablaArticulos = document.querySelector("#seccion-articulos table tbody");
    const tablaVentas = document.querySelector("#seccion-ventas table tbody");
    const tablaMensajes = document.querySelector("#seccion-mensajes table tbody");

    // Obtener todos los datos de la API 
    const fetchArticulos = async () => {

        try {
            tablaArticulos.innerHTML = "";

            const respuesta = await axios.get(`http://localhost:${port}/articulos`);
            const articulos = respuesta.data;

            articulos.forEach(articulo => {
                // crear una nueva fila 
                const fila = document.createElement("tr");

                // crear celdas para el titulo, contenido y acciones
                const celdaId = document.createElement("td");
                const celdaNombre = document.createElement("td");
                const celdaCategoria = document.createElement("td");
                const celdaTipo = document.createElement("td");
                const celdaImagen = document.createElement("td");
                const celdaPrecio = document.createElement("td");
                const celdaAcciones = document.createElement("td");

                celdaId.textContent = articulo.id;
                celdaNombre.textContent = articulo.nombre;
                celdaCategoria.textContent = articulo.categoria;
                celdaTipo.textContent = articulo.tipo;
                celdaPrecio.textContent = articulo.precio;

                const celdaImagenIMG = document.createElement("img");
                celdaImagenIMG.src = articulo.imagen;
                celdaImagen.appendChild(celdaImagenIMG);

                // Crear y añadir botones de acciones
                const botonStock = document.createElement("button");
                const botonEditar = document.createElement("button");
                const botonEliminar = document.createElement("button");
                botonStock.textContent = "Ver Stock";
                botonEditar.textContent = "Editar";
                botonEliminar.textContent = "Eliminar";
                botonStock.addEventListener("click", () => {mostrarStock(articulo.id)});
                botonEditar.addEventListener("click", () => {editarArticulo(articulo.id)});
                botonEliminar.addEventListener("click", () => {eliminarArticulo(articulo.id)});
                celdaAcciones.appendChild(botonStock);
                celdaAcciones.appendChild(botonEditar);
                celdaAcciones.appendChild(botonEliminar);

                // Añadir celdas a la fila
                fila.appendChild(celdaId);
                fila.appendChild(celdaNombre);
                fila.appendChild(celdaCategoria);
                fila.appendChild(celdaTipo);
                fila.appendChild(celdaImagen);
                fila.appendChild(celdaPrecio);
                fila.appendChild(celdaAcciones);

                // Agregar fila al cuerpo de la tabla
                tablaArticulos.appendChild(fila);

            });
        } catch (error) {
            console.error("Error al cargar los articulos: ", error);
        };
        
    };

    const fetchVentas = async () => {
        try {
            tablaVentas.innerHTML = "";

            const respuesta = await axios.get(`http://localhost:${port}/ventas`);
            const ventas = respuesta.data;

            ventas.forEach(venta => {
                // crear una nueva fila 
                const fila = document.createElement("tr");

                // crear celdas para el titulo, contenido y acciones
                const celdaId = document.createElement("td");
                const celdaProductos = document.createElement("td");
                const celdaCantidades = document.createElement("td");
                const celdaTalles = document.createElement("td");
                const celdaImporte = document.createElement("td");
                const celdaAcciones = document.createElement("td");
                
                celdaId.textContent = venta.id;
                celdaProductos.textContent = venta.productos;
                celdaCantidades.textContent = venta.cantidad;
                celdaTalles.textContent = venta.talles;
                celdaImporte.textContent = venta.importe;

                // Crear y añadir botones de acciones
                const botonDetalles = document.createElement("button");
                const botonEliminar = document.createElement("button");
                botonDetalles.textContent = "Detalles";
                botonEliminar.textContent = "Eliminar";
                botonDetalles.addEventListener("click", () => {detallesVenta(venta.id)});
                botonEliminar.addEventListener("click", () => {eliminarVenta(venta.id)});
                celdaAcciones.appendChild(botonDetalles);
                celdaAcciones.appendChild(botonEliminar);

                // Añadir celdas a la fila
                fila.appendChild(celdaId);
                fila.appendChild(celdaProductos);
                fila.appendChild(celdaCantidades);
                fila.appendChild(celdaTalles);
                fila.appendChild(celdaImporte);
                fila.appendChild(celdaAcciones);

                // Agregar fila al cuerpo de la tabla
                tablaVentas.appendChild(fila);

            });
            
        } catch (error) {
            console.error("Error al cargar las ventas: ", error);
        };
    };

    const fetchMensajes = async () => {
        try {
            tablaMensajes.innerHTML = "";

            const respuesta = await axios.get(`http://localhost:${port}/mensajes`);
            const mensajes = respuesta.data;

            mensajes.forEach(mensaje => {

                // crear una nueva fila 
                const fila = document.createElement("tr");

                // crear celdas para el titulo, contenido y acciones
                const celdaId = document.createElement("td");
                const celdaNombre = document.createElement("td");
                const celdaEmail = document.createElement("td");
                const celdaTelefono = document.createElement("td");
                const celdaAsunto = document.createElement("td");
                const celdaAcciones = document.createElement("td");
                
                celdaId.textContent = mensaje.id;
                celdaNombre.textContent = mensaje.nombre;
                celdaEmail.textContent = mensaje.email;
                celdaTelefono.textContent = mensaje.telefono;
                celdaAsunto.textContent = mensaje.asunto;

                // Crear y añadir botones de acciones
                const botonMensaje = document.createElement("button");
                const botonEliminar = document.createElement("button");
                botonMensaje.textContent = "Mensaje";
                botonEliminar.textContent = "Eliminar";
                botonMensaje.addEventListener("click", () => {mostrarMensaje(mensaje.id)});
                botonEliminar.addEventListener("click", () => {eliminarMensaje(mensaje.id)});
                celdaAcciones.appendChild(botonMensaje);
                celdaAcciones.appendChild(botonEliminar);

                // Añadir celdas a la fila
                fila.appendChild(celdaId);
                fila.appendChild(celdaNombre);
                fila.appendChild(celdaEmail);
                fila.appendChild(celdaTelefono);
                fila.appendChild(celdaAsunto);
                fila.appendChild(celdaAcciones);

                // Agregar fila al cuerpo de la tabla
                tablaMensajes.appendChild(fila);

            });
        } catch (error) {
            console.error("Error al cargar las ventas: ", error);
        };
    };

    // Cargar tablas
    fetchArticulos();
    fetchVentas();
    fetchMensajes();


    // Funciones de botones

    const mostrarStock = async (id) => {
        // Muestra popup y oculta otras secciones
        document.querySelector("#layout-popup").style.display = "flex";
        ocultarSeccionesPopup();
        document.querySelector("#mostrar-stock").removeAttribute("style");

        try {
            const respuesta = await axios.get(`http://localhost:${port}/stock/${id}`);
            const talle = respuesta.data;

            // Obtener celdas 
            const celdaXS = document.querySelector("#celda-xs");
            const celdaS = document.querySelector("#celda-s");
            const celdaM = document.querySelector("#celda-m");
            const celdaL = document.querySelector("#celda-l");
            const celdaXL = document.querySelector("#celda-xl");
            const celdaXXL = document.querySelector("#celda-xxl");

            // Rellenar celdas
            celdaXS.textContent = talle.XS;
            celdaS.textContent = talle.S;
            celdaM.textContent = talle.M;
            celdaL.textContent = talle.L;
            celdaXL.textContent = talle.XL;
            celdaXXL.textContent = talle.XXL;

            document.querySelector("#stock-info").textContent = `Artículo # ${id}`;

        } catch (error) {
            console.error("Error al cargar el stock: ", error);
        };
    };

    const editarArticulo = (id) => { // pendiente
        // Muestra popup y oculta otras secciones
        document.querySelector("#layout-popup").style.display = "flex";
        ocultarSeccionesPopup();
        document.querySelector("#editar-articulo").removeAttribute("style");

    };

    const eliminarArticulo = (id) => { // pendiente
        const text = `¿Está seguro que desea eliminar este artículo?`;

        if (confirm(text)) {
            alert(`Eliminar articulo ${id}`);


        };
    };

    const anadirArticulo = async () => {
    
        const nuevoNombre = document.querySelector("#nuevo-nombre").value;
        const nuevaCategoria = document.querySelector("#nueva-categoria").value;
        const nuevoTipo = document.querySelector("#nuevo-tipo option:checked").value;
        const nuevaImagen = document.querySelector("#nueva-imagen").value;
        const nuevoPrecio = document.querySelector("#nuevo-precio").value;
    
        if (!isNaN(parseInt(nuevoPrecio))) {
            try {
                const nuevoArticulo = {
                    nombre: nuevoNombre,
                    categoria: nuevaCategoria,
                    tipo: nuevoTipo,
                    imagen: nuevaImagen,
                    precio: nuevoPrecio
                };
                
                // Es necesario añadir su respectivo stock !
                const nuevoStock = { XS: 0, S: 0, M: 0, L: 0, XL: 0, XXL: 0 }
    
                await axios.post(`http://localhost:${port}/articulos/`, nuevoArticulo);
                await axios.post(`http://localhost:${port}/stock/`, nuevoStock);
                alert("Artículo añadido con éxito");
    
                // Limpiar formulario
                document.querySelector("#form-nuevo-articulo").reset();
                // Recargar lista de articulos
                fetchArticulos();
                
            } catch (error) {
                console.error("Error al añadir el articulo: ", error);
            };
    
    
    
        } else {
            alert("El precio debe ser un número");
        };
    };

    const detallesVenta = async (id) => {
        // Muestra popup y oculta otras secciones
        document.querySelector("#layout-popup").style.display = "flex";
        ocultarSeccionesPopup();
        document.querySelector("#detalles-venta").removeAttribute("style");

        document.querySelector("#venta-info").textContent = `Venta # ${id}`;

        try {
            const respuesta = await axios.get(`http://localhost:${port}/ventas/${id}`);
            const ventas = respuesta.data;

            const articulos = ventas.productos.split(",");
            const talles = ventas.talles.split(",");
            const unidades = ventas.cantidad.split(",");

            const tablaDetallesVentas = document.querySelector("#detalles-venta table tbody");
            tablaDetallesVentas.innerHTML = "";

            let suma = 0;

            for (i = 0; i < articulos.length; i++) {

                const fila = document.createElement("tr");

                try {
                    const respArt = await axios.get(`http://localhost:${port}/articulos/${articulos[i]}`);
                    const articulo = respArt.data;

                    const celdaID = document.createElement("td");
                    const celdaNombre = document.createElement("td");
                    const celdaTalle = document.createElement("td");
                    const celdaUnidades = document.createElement("td");
                    const celdaImporte = document.createElement("td");

                    celdaID.textContent = articulo.id;
                    celdaNombre.textContent = articulo.nombre;
                    celdaTalle.textContent = talles[i];
                    celdaUnidades.textContent = unidades[i];
                    celdaImporte.textContent = `$ ${(articulo.precio * unidades[i])}`;
                    suma += (articulo.precio * unidades[i]);

                    fila.appendChild(celdaID);
                    fila.appendChild(celdaNombre);
                    fila.appendChild(celdaTalle);
                    fila.appendChild(celdaUnidades);
                    fila.appendChild(celdaImporte);

                    tablaDetallesVentas.appendChild(fila);

                } catch (error) {
                    console.error("Error al cargar un producto: ", error);
                };

                document.querySelector("#venta-info-precio-total").textContent = `Total: $ ${suma}`;

            };

        } catch (error) {
            console.error("Error al cargar las ventas: ", error);
        };
    };

    const eliminarVenta = (id) => { // pendiente
        const text = `¿Está seguro que desea eliminar esta venta?`;

        if (confirm(text)) {
            alert(`Eliminar venta ${id}`);


        };
    };

    const mostrarMensaje = async (id) => {
        // Muestra popup y oculta otras secciones
        document.querySelector("#layout-popup").style.display = "flex";
        ocultarSeccionesPopup();
        document.querySelector("#mostrar-mensaje").removeAttribute("style");

        try {
            const respuesta = await axios.get(`http://localhost:${port}/mensajes/${id}`);
            const mensaje = respuesta.data;

            document.querySelector("#autor-mensaje").textContent = `Mensaje de ${mensaje.nombre}:`
            document.querySelector("#ver-mensaje").value = mensaje.mensaje;
            
        } catch (error) {
            console.error("Error al cargar el mensaje: ", error);
        };
    };

    const eliminarMensaje = (id) => { // pendiente
        const text = `¿Está seguro que desea eliminar este mensaje?`;
        
        if (confirm(text)) {
            alert(`Eliminar mensaje ${id}`);


        };        
    };




    document.querySelector("#form-nuevo-articulo").addEventListener("submit", (event) => {
        event.preventDefault();
        anadirArticulo();
    });
});






const ocultarSeccionesPopup = () => {
    document.querySelector("#mostrar-stock").style.display = "none";
    document.querySelector("#editar-articulo").style.display = "none";
    document.querySelector("#detalles-venta").style.display = "none";
    document.querySelector("#mostrar-mensaje").style.display = "none";
};




// EVENTOS 

document.querySelector("#layout-popup").addEventListener("click", () => {
    document.querySelector("#layout-popup").style.display = "none";
});

document.querySelector("#popup-contenedor").addEventListener("click", (e) => {
    e.stopPropagation();
});

