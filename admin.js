function modificar(id) {
  $('#dynamic-load').load('roles-modal.php?id=' + id, function () {
    $('#activar_modificar_roles').click()
  })
}

function eliminar(id) {

  Swal.fire({
    title: 'Estas Seguro?',
    text: "¡No podrás revertir esto!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '¡Sí, bórralo!'
    }).then((result) => {
    if (result.isConfirmed) {

      var direccion =
      'operador.php?accion=EliminarUsuario&id=' +
      id +
      '&usuario=' +
      $('#usuario').val();
  
    //alert(direccion)
    $.getJSON(direccion, function (data) {
      if (data.resultado == 'exito') {
        window.location.href = './page.php?content=admin'
      }
    });


      Swal.fire(
        '¡Eliminado!',
        'Este usuario fue eliminado',
        'success'
      );
    }
    })



}


