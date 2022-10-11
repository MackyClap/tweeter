/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {
  
  const tweetData =  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
 };
  
 
 //createTweets and return the data
 const createTweetElement = (tweetData) => {

    return $(`
    <article class="tweet">
    <header>
    <div>
    ${tweetData.user.name}
    </div>
    <div class="user-tag">
    ${tweetData.user.handle}
    </div>
    </header>
    <span> ${tweetData.content.text}</span>
    
    <footer>
    ${tweetData.created_at}
    <div class="symbols">
    <i class="fa-solid fa-flag"></i>
    <i class="fa-solid fa-repeat"></i>
    <i class="fa-solid fa-heart"></i>
    </div>
    </footer>
    </article>`);
    
  };
  
  
  let $tweet = createTweetElement(tweetData);
  
  $(".tweets-container").append($tweet);

  $(".tweet").hover(function () {

    $(this).toggleClass('hover')
  });

  $("div.symbols").children().hover(function() {

    $(this).toggleClass('symbols-hover')
  });
});