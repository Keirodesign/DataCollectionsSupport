/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
});

// $('#ILR').click(function() {
//     if ($(this).is(':checked')) {
//     $('#submissions tr').hide();
//     $('.ilr-row').show();
//   } else {
//     $('#submissions tr').show();
//   }
// });
//
// $('#ESF').click(function() {
//     if ($(this).is(':checked')) {
//     $('#submissions tr').hide();
//     $('.esf-row').show();
//   } else {
//     $('#submissions tr').show();
//   }
// });

$("#typeFilter :checkbox").click(function() {
    $("#submissions tr").hide();
    $("#typeFilter :checkbox:checked").each(function() {
        $("." + $(this).val()).show();
    });

    if (!$("#typeFilter :checkbox").is(':checked')) {
      $("#submissions tr").show();
    }
});

$("#yearFilter :checkbox").click(function() {
    $(".year-groups").hide();
    $("#yearFilter :checkbox:checked").each(function() {
        $("." + $(this).val()).show();
    });

    if (!$("#yearFilter :checkbox").is(':checked')) {
      $(".year-groups").show();
    }
});
