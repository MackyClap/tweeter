/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {
  
  //createTweets and return the data
  const createTweetElement = (obj) => {
  
    let $tweet = $(`
    <article class="tweet">
    <header>
    <div>
    ${obj.user.name}
    </div>
    <div class="user-tag">
    ${obj.user.handle}
    </div>
    </header>
    <span> ${obj.content.text}</span>
    
    <footer>
    ${obj.created_at}
    <div class="symbols">
    <i class="fa-solid fa-flag"></i>
    <i class="fa-solid fa-repeat"></i>
    <i class="fa-solid fa-heart"></i>
    </div>
    </footer>
    </article>`);
  
    return $tweet;
    
  };
  
  //definte function to take in array of tweets and append
  const renderTweets = (tweetData) => {
    for (const tweet of tweetData) {
      let eachTweet = tweet;
      //add tweets to tweets container
      $(".tweets-container").prepend(createTweetElement(eachTweet));
    }
  };

  //Prevent post request 
  $("#submit-tweet").submit(function(e) {
    e.preventDefault();
    let newTweetData = $("#submit-tweet").serialize();
    
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: newTweetData
    })
    
  })

  const loadTweets = () => {
    const $button = $('#submit-tweet');
    $button.submit(function () {

      $.ajax('tweets', { method: 'GET'})
      .then(function (eachTweet) {
        renderTweets(eachTweet)
      });
    });
  };

  loadTweets();

  //make box shadow on hover
  $(".tweet").hover(function() {

    $(this).toggleClass('hover');
  });

  //make symbols below tweet change color
  $("div.symbols").children().hover(function() {

    $(this).toggleClass('symbols-hover');
  });
});