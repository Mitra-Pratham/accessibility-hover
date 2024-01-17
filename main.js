$("#button-show, #show-card").on("mouseover", function () {
    $("#show-card").show();
  });
  
  $("#button-show, #show-card").on("mouseout", function () {
    if ($("#button-show, #show-card").is(":focus")) {
      $("#show-card").show();
    } else {
      $("#show-card").hide();
    }
  });
  
  $("#button-show, #show-card").on("focusin", function () {
    $("#show-card").show();
  });
  
  $("#show-card").on("focusout", function () {
    $("#show-card").hide();
  });
  