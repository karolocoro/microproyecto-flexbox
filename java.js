document.addEventListener("DOMContentLoaded", function(){

    const formulario = document.getElementById("loginForm");

    formulario.addEventListener("submit", function(e){
        e.preventDefault(); // evita recargar

        const usuario = document.getElementById("usuario").value.trim();
        const password = document.getElementById("password").value.trim();
        const mensaje = document.getElementById("mensajeError");

        if(usuario === "jhon" && password === "3007"){
            window.location.href = "Principal.html";
        }else if(usuario === "operario" && password === "1234"){
    // OPERARIO
    window.location.href = "principaloperario.html";
}
        else{
            mensaje.textContent = "Usuario o contraseña inválidos";
        }

    });

});
function cerrarSesion(){
    window.location.href = "Login.html";
}

function abrirModal(){
  document.getElementById("modalProducto").style.display = "flex";
}

function cerrarModal(){
  document.getElementById("modalProducto").style.display = "none";
}



let filaEditando = null;

function abrirModal(){
  document.getElementById("modalProducto").style.display = "flex";
}

function cerrarModal(){
  document.getElementById("modalProducto").style.display = "none";
  document.querySelector(".form-producto").reset();
  filaEditando = null;
}

document.addEventListener("DOMContentLoaded", function(){

  const form = document.querySelector(".form-producto");
  const tabla = document.querySelector("tbody");

  /* GUARDAR PRODUCTO */
  if(form){
    form.addEventListener("submit", function(e){
      e.preventDefault();

      const inputs = form.querySelectorAll("input");

      const codigo = inputs[0].value;
      const nombre = inputs[1].value;
      const categoria = inputs[2].value;
      const precioSalida = inputs[5].value;
      const cantidad = inputs[6].value;

      if(filaEditando){
        // EDITAR
        filaEditando.children[0].textContent = codigo;
        filaEditando.children[1].textContent = nombre;
        filaEditando.children[2].textContent = categoria;
        filaEditando.children[3].textContent = "$" + precioSalida;
        filaEditando.children[4].textContent = cantidad;
      } else {
        // CREAR
        const nuevaFila = document.createElement("tr");
        nuevaFila.innerHTML = `
          <td>${codigo}</td>
          <td>${nombre}</td>
          <td>${categoria}</td>
          <td>$${precioSalida}</td>
          <td>${cantidad}</td>
          <td>
            <button class="btn-tabla editar">Editar</button>
            <button class="btn-tabla eliminar">Eliminar</button>
          </td>
        `;
        tabla.appendChild(nuevaFila);
      }

      cerrarModal();
    });
  }

  /* EDITAR Y ELIMINAR */
  tabla.addEventListener("click", function(e){

    if(e.target.classList.contains("eliminar")){
      if(confirm("¿Seguro que deseas eliminar este producto?")){
        e.target.closest("tr").remove();
      }
    }

    if(e.target.classList.contains("editar")){
      filaEditando = e.target.closest("tr");
      const celdas = filaEditando.children;

      const inputs = document.querySelectorAll(".form-producto input");

      inputs[0].value = celdas[0].textContent;
      inputs[1].value = celdas[1].textContent;
      inputs[2].value = celdas[2].textContent;
      inputs[5].value = celdas[3].textContent.replace("$","");
      inputs[6].value = celdas[4].textContent;

      abrirModal();
    }

  });

});


/* ================= CLIENTES ================= */

let filaClienteEditando = null;

function abrirModalCliente(){
  const modal = document.getElementById("modalCliente");
  if(modal){
    modal.style.display = "flex";
  }
}

function cerrarModalCliente(){
  const modal = document.getElementById("modalCliente");
  if(modal){
    modal.style.display = "none";
  }

  const form = document.querySelector(".form-cliente");
  if(form){
    form.reset();
  }

  filaClienteEditando = null;
}

document.addEventListener("DOMContentLoaded", function(){

  const tablaClientes = document.getElementById("tablaClientes");
  const formCliente = document.querySelector(".form-cliente");

  if(!tablaClientes || !formCliente) return;

  formCliente.addEventListener("submit", function(e){
    e.preventDefault();

    const inputs = formCliente.querySelectorAll("input");

    const nombre = inputs[0].value;
    const gmail = inputs[1].value;
    const telefono = inputs[2].value;
    const direccion = inputs[3].value;

    if(filaClienteEditando){
      filaClienteEditando.children[0].textContent = nombre;
      filaClienteEditando.children[1].textContent = gmail;
      filaClienteEditando.children[2].textContent = telefono;
      filaClienteEditando.children[3].textContent = direccion;
    } else {

      const nuevaFila = document.createElement("tr");

      nuevaFila.innerHTML = `
        <td>${nombre}</td>
        <td>${gmail}</td>
        <td>${telefono}</td>
        <td>${direccion}</td>
        <td>
          <button class="btn-tabla editar-cliente">Editar</button>
          <button class="btn-tabla eliminar-cliente">Eliminar</button>
        </td>
      `;

      tablaClientes.appendChild(nuevaFila);
    }

    cerrarModalCliente();
  });

  tablaClientes.addEventListener("click", function(e){

    if(e.target.classList.contains("eliminar-cliente")){
      if(confirm("¿Seguro que deseas eliminar este cliente?")){
        e.target.closest("tr").remove();
      }
    }

    if(e.target.classList.contains("editar-cliente")){
      filaClienteEditando = e.target.closest("tr");

      const celdas = filaClienteEditando.children;
      const inputs = document.querySelectorAll(".form-cliente input");

      inputs[0].value = celdas[0].textContent;
      inputs[1].value = celdas[1].textContent;
      inputs[2].value = celdas[2].textContent;
      inputs[3].value = celdas[3].textContent;

      abrirModalCliente();
    }

  });

});

let filaProveedorEditando = null;

function abrirModalProveedor(){
  document.getElementById("modalProveedor").style.display = "flex";
}

function cerrarModalProveedor(){
  document.getElementById("modalProveedor").style.display = "none";
  document.querySelector(".form-proveedor").reset();
  filaProveedorEditando = null;
}

document.addEventListener("DOMContentLoaded", function(){

  const tablaProveedores = document.querySelector(".content table tbody");
  const formProveedor = document.querySelector(".form-proveedor");

  if(!tablaProveedores || !formProveedor) return;

  /* GUARDAR */
  formProveedor.addEventListener("submit", function(e){
    e.preventDefault();

    const inputs = formProveedor.querySelectorAll("input");
    const nombre = inputs[0].value;
    const email = inputs[1].value;
    const telefono = inputs[2].value;
    const direccion = inputs[3].value;

    if(filaProveedorEditando){
      filaProveedorEditando.children[0].textContent = nombre;
      filaProveedorEditando.children[1].textContent = email;
      filaProveedorEditando.children[2].textContent = telefono;
      filaProveedorEditando.children[3].textContent = direccion;
    } else {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${nombre}</td>
        <td>${email}</td>
        <td>${telefono}</td>
        <td>${direccion}</td>
        <td>
          <button class="btn-tabla editar-proveedor">Editar</button>
          <button class="btn-tabla eliminar-proveedor">Eliminar</button>
        </td>
      `;
      tablaProveedores.appendChild(fila);
    }

    cerrarModalProveedor();
  });

  
  tablaProveedores.addEventListener("click", function(e){

    if(e.target.classList.contains("eliminar-proveedor")){
      if(confirm("¿Eliminar proveedor?")){
        e.target.closest("tr").remove();
      }
    }

    if(e.target.classList.contains("editar-proveedor")){
      filaProveedorEditando = e.target.closest("tr");
      const celdas = filaProveedorEditando.children;
      const inputs = document.querySelectorAll(".form-proveedor input");

      inputs[0].value = celdas[0].textContent;
      inputs[1].value = celdas[1].textContent;
      inputs[2].value = celdas[2].textContent;
      inputs[3].value = celdas[3].textContent;

      abrirModalProveedor();
    }

  });

});

/* ================= COTIZACIONES PROVEEDORES ================= */

let filaCotizacionEditando = null;

function abrirModalCotizacion(){
  document.getElementById("modalCotizacion").style.display = "flex";
}

function cerrarModalCotizacion(){
  document.getElementById("modalCotizacion").style.display = "none";
  document.querySelector(".form-cotizacion").reset();
  filaCotizacionEditando = null;
}

document.addEventListener("DOMContentLoaded", function(){

  const tablaCotizaciones = document.querySelector(".content table tbody");
  const formCotizacion = document.querySelector(".form-cotizacion");

  if(!tablaCotizaciones || !formCotizacion) return;

  formCotizacion.addEventListener("submit", function(e){
    e.preventDefault();

    const inputs = formCotizacion.querySelectorAll("input");

    const nombre = inputs[0].value;
    const nit = inputs[1].value;
    const producto = inputs[2].value;
    const cantidad = inputs[3].value;
    const precio = inputs[4].value;
    const fecha = inputs[5].value;

    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${nombre}</td>
      <td>${nit}</td>
      <td>${producto}</td>
      <td>${cantidad}</td>
      <td>$${Number(precio).toLocaleString()}</td>
      <td>${fecha}</td>
    `;

    tablaCotizaciones.appendChild(fila);
    cerrarModalCotizacion();
  });

});




let filaCotizacion = null;

function abrirModalCotizacion(){
  document.getElementById("modalCotizacion").style.display = "flex";
}

function cerrarModalCotizacion(){
  document.getElementById("modalCotizacion").style.display = "none";
  document.querySelector(".form-cotizacion").reset();
  filaCotizacionEditando = null;
}

document.addEventListener("DOMContentLoaded", function(){

  const tablaCotizaciones = document.querySelector(".tabla-cotizaciones tbody");
  const formCotizacion = document.querySelector(".form-cotizacion");

  if(!tablaCotizaciones || !formCotizacion) return;

  // CLICK EN EDITAR / ELIMINAR
  tablaCotizaciones.addEventListener("click", function(e){

    // ELIMINAR
    if(e.target.classList.contains("eliminar-cotizacion")){
      if(confirm("¿Eliminar cotización?")){
        e.target.closest("tr").remove();
      }
    }

    // EDITAR
    if(e.target.classList.contains("editar-cotizacion")){
      filaCotizacionEditando = e.target.closest("tr");
      const celdas = filaCotizacionEditando.children;
      const inputs = formCotizacion.querySelectorAll("input");

      inputs[0].value = celdas[0].textContent; // nombre
      inputs[1].value = celdas[1].textContent; // producto
      inputs[2].value = celdas[2].textContent; // cantidad
      inputs[3].value = celdas[3].textContent.replace("$","").replace(/\./g,""); // precio
      inputs[4].value = celdas[4].textContent; // fecha
      inputs[5].value = celdas[5].textContent; // metodo pago

      abrirModalCotizacion();
    }

  });

  // GUARDAR / ACTUALIZAR
  formCotizacion.addEventListener("submit", function(e){
    e.preventDefault();

    const inputs = formCotizacion.querySelectorAll("input");

    const nombre = inputs[0].value;
    const producto = inputs[1].value;
    const cantidad = inputs[2].value;
    const precio = inputs[3].value;
    const fecha = inputs[4].value;
    const metodo = inputs[5].value;

    if(filaCotizacionEditando){
      filaCotizacionEditando.innerHTML = `
        <td>${nombre}</td>
        <td>${producto}</td>
        <td>${cantidad}</td>
        <td>$${Number(precio).toLocaleString()}</td>
        <td>${fecha}</td>
        <td>${metodo}</td>
        <td>
          <button class="btn-tabla editar-cotizacion">Editar</button>
          <button class="btn-tabla eliminar-cotizacion">Eliminar</button>
        </td>
      `;
    } else {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${nombre}</td>
        <td>${producto}</td>
        <td>${cantidad}</td>
        <td>$${Number(precio).toLocaleString()}</td>
        <td>${fecha}</td>
        <td>${metodo}</td>
        <td>
          <button class="btn-tabla editar-cotizacion">Editar</button>
          <button class="btn-tabla eliminar-cotizacion">Eliminar</button>
        </td>
      `;
      tablaCotizaciones.appendChild(fila);
    }

    cerrarModalCotizacion();
  });

});

function buscarCliente(){
  const input = document.getElementById("buscarCliente");
  const filtro = input.value.toLowerCase();
  const filas = document.querySelectorAll("tbody tr");

  filas.forEach(fila => {
    const nombre = fila.children[0].textContent.toLowerCase();
    const correo = fila.children[1].textContent.toLowerCase();

    if(nombre.includes(filtro) || correo.includes(filtro)){
      fila.style.display = "";
    } else {
      fila.style.display = "none";
    }
  });
}

function buscarProducto(){
  const input = document.getElementById("buscarProducto");
  const filtro = input.value.toLowerCase();
  const filas = document.querySelectorAll("tbody tr");

  filas.forEach(fila => {
    const nombre = fila.children[0].textContent.toLowerCase();
    const categoria = fila.children[1].textContent.toLowerCase();

    if(nombre.includes(filtro) || categoria.includes(filtro)){
      fila.style.display = "";
    } else {
      fila.style.display = "none";
    }
  });
}

