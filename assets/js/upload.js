$(document).ready(function(){

  function readURL(input) {

    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function(e) {
        $('.display').append('<img id="prewiew" alt="Preview" />');
        $('#prewiew').attr('src', e.target.result).width('100%');
      }

      reader.readAsDataURL(input.files[0]);
    }
  }

  $("#thumbnail").change(function() {
    readURL(this);
    $('#prewiew').css('display', 'block');
  }); 
  
  $('#delete').on('click', function() {
    $('#prewiew').remove();
    //location.reload(true);
  });

});
