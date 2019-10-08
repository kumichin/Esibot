$(function() {
  $('.filter').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    let valor = $(this).attr('data-nombre');
    if (valor == 'todos') {
      $('.cont-work').show('1000');
    } else {
      $('.cont-work').not('.' + valor).hide('1000');
      $('.cont-work').filter('.' + valor).show('1000');
    }
  });

  let nosotros = $('#nosotros').offset().top,
    actividades = $('#actividades').offset().top,
    proyectos = $('#proyectos').offset().top,
    recursos = $('#recursos').offset().top,
    media = $('#media').offset().top,
    sponsors = $('#sponsors').offset().top,
    contacto = $('#contacto').offset().top;

  window.addEventListener('resize', function() {
    let nosotros = $('#nosotros').offset().top,
      actividades = $('#actividades').offset().top,
      proyectos = $('#proyectos').offset().top,
      recursos = $('#recursos').offset().top,
      media = $('#media').offset().top,
      sponsors = $('#sponsors').offset().top,
      contacto = $('#contacto').offset().top;
  });

  $('#enlace-nosotros').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: nosotros - 100
    }, 600);
  });

  $('#enlace-actividades').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: actividades - 100
    }, 600);
  });

  $('#enlace-proyectos').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: proyectos - 100
    }, 600);
  });


  $('#enlace-recursos').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: recursos - 100
    }, 600);
  });

  $('#enlace-media').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: media - 100
    }, 600);
  });

  $('#enlace-sponsors').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: sponsors - 100
    }, 600);
  });

  $('#enlace-contacto').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: contacto - 100
    }, 600);
  });
});
