/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {

  $(".tweet").hover(function () {

    $(this).toggleClass('hover')
  });

  $("div.symbols").children().hover(function() {

    $(this).toggleClass('symbols-hover')
  });

})