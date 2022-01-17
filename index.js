$(".project-images img").click(function() {
  var attr = $(this).attr("id");

  if (typeof attr !== 'undefined' && attr !== false) {
    $(this).removeAttr("id")
  } else {
    $(this).attr("id", "selected-img")
  }
})
