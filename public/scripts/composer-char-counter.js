$(document).ready(() => {
  $('#tweet-text').on('input', function(e) {
    let charNum = 140 - $(this).val().length;
    $('#counter').text(charNum);
    
  })


})