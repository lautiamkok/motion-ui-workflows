$( document ).ready(function() {
  $(".button").click(function() {
    var $animation = $("#yeti").data("animation");
    MotionUI.animateIn($("#yeti"), $animation);
  });
});
