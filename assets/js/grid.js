function clearForm() {
  $('input[name="grid-number"]').prop('checked', false);
  $('input[type="checkbox"]').prop('checked', false);
}

$(document).ready(function() {
  clearForm();
  
  $('.fontawesome-cog').on('click', function() {
    $('.settings-pane').toggleClass('show');
  });
  $('#visibility').change(function(){
    var visibility = this.checked ? 'grid' : 'none';
    $('#grid').css('display', visibility);
    var gridHeight = $('#prewiew').height();
    $('#grid').css('height', gridHeight);
  });
  
  $('input[name="grid-number"]').change(function() {
    if (this.value == 'grid-12') {
      $('#grid').addClass('grid-12').removeClass('grid-16');
      $('.grid-12 .span-1-16').remove();
      i = 0;
      while (i < 12) {
        $('.grid-12').append('<span class="span-1-12">'+(i+1)+'</span>');i++;
      }
      
    } else if (this.value == 'grid-16') {
      $('#grid').addClass('grid-16').removeClass('grid-12');
      $('.grid-16 .span-1-12').remove();
      i = 0;
      while (i < 16) {
        $('.grid-16').append('<span class="span-1-16">'+(i+1)+'</span>');i++;
      }
    }
  });
  
  $('#gap').change(function(){
    var gap = this.checked ? '.5rem' : '0';
    $('#grid').css('grid-gap', gap);
  });
  
  $('#border').change(function(){
    var gap = this.checked ? '2px dashed green' : 'none';
    $('#grid').css('border', gap);
  });
  
  $('#custom').change(function() {
    var customWidth = +$('#custom').val();
    $('#grid').css({"max-width": customWidth, "left": "calc((1200px - "+customWidth+"px)/2)"});
  });
  
  $('#grid span').each(function () {
      $(counter).appendTo('span');
      counter++;
  });
  
  $('#reload').on('click', function() {
    location.reload();
  })
  
}); 
