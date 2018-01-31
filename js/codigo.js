$(function() {


  // Zona Inicial
  $('#codigoqr').on('click', ocultarQR);
  $('#iconoBar').on('click', irInicio);
  $('a#iraInicio').on('click', irInicio);
  $('a#iraPedidos').on('click', irZonaPedidos);

  // Zona Reservas
  $('#confirmarCompra').on('click', mostrarAlertConfirmarCompra);
  $('#botonConfirmarCompra').on('click', cerrarAlertConfirmarCompra);
  $('#botonDenegarCompra').on('click', cerrarAlertConfirmarCompra);
  $('#cerrarCompraCorrecto').on('click', cerrarAlertConfirmarCompraReservada);

  // Zona Favoritos Menús
  $('#botonConfirmarCompraFav').on('click', confirmarAlertConfirmarCompraFav);
  $('#botonDenegarCompraFav').on('click', cerrarAlertConfirmarCompraFav);
  $('#menuFavIncorrecto').on('click', mostrarIncorrectoPedidoFav);
  $('#cerrarFavCorrecto').on('click', cerrarCorrectoPedidoFav);
  $('#cerrarFavIncorrecto').on('click', cerrarIncorrectoPedidoFav);
  $('#menuFavCorrecto').on('click', mostrarAlertConfirmarCompraFav);

  // Zona Favoritos Añadir Menús
  $('#anyadirFavButton').on('click', mostrarAlertAnyadirFav);
  $('#confirmarAnyadirMenú').on('click', cerrarAlertAnyadirFav);
  $('#denegarAnyadirMenú').on('click', cerrarAlertAnyadirFav);

  // Ocultando elementos
  $(".alert").hide();
  $('div#menu').hide();
  $('div#paginaInicial').hide();

  // Funciones de movilidad por la barra de navegación
  function irInicio(){
    $("#bs-example-navbar-collapse-1").removeClass('in open');
    $('#zonaPedidos').hide(500);
    $('#paginaInicial').show(500);
  }

  function irZonaPedidos(){
    console.log("Hola");
    $("#bs-example-navbar-collapse-1").removeClass('in open');
    $('#zonaPedidos').show(500);
    $('#paginaInicial').hide(500);
  }


  // Funcionalidades
  function mostrarMensaje(){
    console.log("Buenos días");
  }

  function ocultarQR(){
    $('#codigo').hide(500);
    $('div#menu').show(500);
  }

  function cerrarAlertConfirmarCompraReservada() {
    $('div#confirmarcompraRealizada').slideUp();
    $('button#confirmarCompra').removeAttr("disabled");
  }

  function cerrarAlertAnyadirFav() {
    $('div#alertAnyadirNuevoMenuFav').slideUp();
    $("#containerFav").children().removeAttr("disabled");
    $("div#anyadirFav").children().removeAttr("disabled");
  }

  function mostrarAlertAnyadirFav() {
    $('div#alertAnyadirNuevoMenuFav').slideDown();
    $("#containerFav").children().attr("disabled", "true");
    $("div#anyadirFav").children().attr("disabled", "true");
  }


  function cerrarAlertConfirmarCompra() {
    $('div#confirmarCompraAlert').slideUp();
    $('div#confirmarcompraRealizada').slideDown();
  }

  function confirmarAlertConfirmarCompraFav() {
    $('div#confirmarCompraFavAlert').slideUp();
    $("#containerFav").children().removeAttr("disabled");
    $("div#anyadirFav").children().removeAttr("disabled");
    mostrarCorrectoPedidoFav();
  }

  function cerrarAlertConfirmarCompraFav() {
    $('div#confirmarCompraFavAlert').slideUp();
    $("#containerFav").children().removeAttr("disabled");
    $("div#anyadirFav").children().removeAttr("disabled");
  }

  function cerrarIncorrectoPedidoFav() {
    $("div#falloPedidoFav").slideUp();
    $("#containerFav").children().removeAttr("disabled");
    $("div#anyadirFav").children().removeAttr("disabled");
  }

  function cerrarCorrectoPedidoFav() {
    $("div#correctoPedidoFav").slideUp();
    $("#containerFav").children().removeAttr("disabled");
    $("div#anyadirFav").children().removeAttr("disabled");
  }

  function mostrarCorrectoPedidoFav() {
    $("div#correctoPedidoFav").slideDown();
    $("#containerFav").children().attr("disabled", "true");
    $("div#anyadirFav").children().attr("disabled", "true");
  }

  function mostrarIncorrectoPedidoFav() {
    $("div#falloPedidoFav").slideDown();
    $("#containerFav").children().attr("disabled", "true");
    $("div#anyadirFav").children().attr("disabled", "true");
  }

  function mostrarAlertConfirmarCompra() {
    $('div#confirmarCompraAlert').slideDown();
    $('button#confirmarCompra').attr("disabled", "true");
  }

  function mostrarAlertConfirmarCompraFav() {
    $('div#confirmarCompraFavAlert').slideDown();
    $("#containerFav").children().attr("disabled", "true");
    $("div#anyadirFav").children().attr("disabled", "true");
  }

});
