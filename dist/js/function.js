$("#checkAll").click(function() {
    $('input:checkbox').not(this).prop('checked', this.checked);
});

// Loader Animation ===========================
function dismissLoader(){
    $('.animationload').fadeOut();
  }
//   After setting API you can change setTimeout
setTimeout(dismissLoader, 1000);

// Submit form from Modal =====================
$( "#modalButton" ).click(function() {
    $( "#resultForm" ).submit();
  });


// Insert Modal input into Form ===============
let  = $('#modalEmailInput').val();
$("#emailInput").val(modalEmailInput);