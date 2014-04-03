(function() {
  $(function() {
    $(".entry-content [href=#]").click(function(e) {
      return e.preventDefault();
    });
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        return $(".scrollup").fadeIn();
      } else {
        return $(".scrollup").fadeOut();
      }
    });
    $(".scrollup").click(function() {
      return $("html, body").animate({
        scrollTop: 0
      }, 600, false);
    });
    return $(".font-resize").jfontsize({
      btnMinusClasseId: ".jfontsize-m",
      btnDefaultClasseId: ".jfontsize-d",
      btnPlusClasseId: ".jfontsize-p"
    });
  });
}).call(this);
