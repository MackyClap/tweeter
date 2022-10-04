$(document).ready(() => {

  $('#tweet-text').on('input', function() {
    let charNum = 140 - $(this).val().length;
    

    if (charNum >= 0) {
      $('#redCounter').attr('id', 'counter');
      $('#counter').text(charNum);
      $('#redCounter').text(charNum);
    } else {
      $('#counter').attr('id', 'redCounter');
      $('#redCounter').text(charNum);
    }
  });
});