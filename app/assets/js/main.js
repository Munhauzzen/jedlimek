$(function () {

  $("footer__navLinka").click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body, html").animate({ scrollTop: destination }, 800);
  });

  $('select').styler();

});

