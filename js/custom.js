$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

$(document).on('hidden.bs.modal', function (event) {
  if ($('.modal:visible').length) {
    $('body').addClass('modal-open');
  }
});

function myFunction() {
  alert("Your request will be processed as soon as possible, and if accepted, credit will be returned to your BoilerExpress account.");
}

function myFunction2() {
  alert("Your request will be processed as soon as possible, and the Fix It team will be notified.");
}
