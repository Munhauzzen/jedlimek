$(function () {

  $("footer__navLinka").click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body, html").animate({ scrollTop: destination }, 800);
  });

  $('.product-order-or__text-1').on('click', function () {
    $('.product-order-or__text-1').addClass('active');
    $('.product-order-or__text-2').removeClass('active');
  });
  $('.product-order-or__text-2').on('click', function () {
    $('.product-order-or__text-2').addClass('active');
    $('.product-order-or__text-1').removeClass('active');
  });

});

