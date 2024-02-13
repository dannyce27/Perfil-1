const selectOpcion = document.getElementById("selectorLicencia");

// Definición de precios para las licencias
const PreciolicenciaSencilla = 100;
const PreciolicenciaPremium = 450;

// Obtiene elementos del DOM
const selectorLicencia = document.getElementById('selectorLicencia');
const descripcionLicencia = document.getElementById('descripcion');
const comprarBtn = document.getElementById('comprarBtn');
let precioLicencia = document.getElementById('precio');

// Evento de cambio en el selector de licencias
selectorLicencia.addEventListener('change', function() {
  // Verifica la opción seleccionada y actualiza descripción y precio en la página
  if (selectorLicencia.value === 'sencilla') {
    descripcionLicencia.textContent = 'Licencia Sencilla: Acceso a funciones básicas.';
    precioLicencia.textContent = ` $${PreciolicenciaSencilla}`;
  } else if (selectorLicencia.value === 'premium') {
    descripcionLicencia.textContent = 'Licencia Premium: Acceso completo a todas las características y soporte prioritario.';
    precioLicencia.textContent = ` $${PreciolicenciaPremium}`;
  } else {
    descripcionLicencia.textContent = 'Seleccione una Licencia';
    precioLicencia.textContent = `$`;
  }
  
});

// Evento de clic en el botón de compra
comprarBtn.addEventListener('click', function() {
  // Verifica si no se ha seleccionado ninguna licencia
  if (selectorLicencia.value === 'ninguno') {
    Swal.fire('Por favor, seleccione una opción', '', 'error');
    return; // Detén el proceso si no se ha seleccionado una licencia
  }

  // Muestra una alerta de confirmación utilizando SweetAlert
  Swal.fire({
    icon: 'question',
    title: 'Confirmar Compra',
    text: '¿Estás seguro de comprar la licencia?',
    showCancelButton: true,
    confirmButtonText: 'Sí, Comprar',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    // Si el usuario confirma la compra, muestra una alerta de éxito
    if (result.isConfirmed) {
      Swal.fire('¡Licencia comprada exitosamente!', '', 'success');
    }
  });
});