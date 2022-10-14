/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {
  
  const tweetData = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];
  
  
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
      $(".tweets-container").append(createTweetElement(eachTweet));
    }
  };

  renderTweets(tweetData);

  //Prevent post request 
  $("#submit-tweet").submit(function(e) {
    let newTweetData = $("#submit-tweet").serialize();
    console.log(newTweetData);
    e.preventDefault();
  })


  

  //make box shadow on hover
  $(".tweet").hover(function() {

    $(this).toggleClass('hover');
  });

  //make symbols below tweet change color
  $("div.symbols").children().hover(function() {

    $(this).toggleClass('symbols-hover');
  });
});