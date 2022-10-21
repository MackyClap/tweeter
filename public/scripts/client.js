/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {
  
  $(".error").hide()

  const escape = function (str) {
    let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
  };

  //createTweets and return the data
  const createTweetElement = (obj) => {
    const ago = timeago.format(obj.created_at)
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
    <span>${escape(obj.content.text)}</span>
    
    <footer>
    ${ago}
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
    //empty tweets container so as to not call all tweets
    $(".tweets-container").empty();
    for (const tweet of tweetData) {
      let eachTweet = tweet;
      //add tweets to tweets container
      $(".tweets-container").prepend(createTweetElement(eachTweet));
    }
  };


  $("#submit-tweet").submit(function (e) {
    //Prevent post request that goes to /tweets
    e.preventDefault();
    let newTweetData = $("#submit-tweet").serialize();
    let textAreaCount = $("#submit-tweet").find('textarea').val().length;
    
    //validate if tweet is over 140 characters
    if(textAreaCount > 140) {
      $(".error").slideUp()
      $(".max").slideDown()
      //validate if tweet is empty
    } else if (textAreaCount === 0) {
      $(".error").slideUp()
      $(".noTweet").slideDown()
    } else {
      
      $(".error").slideUp()  
      //post tweet to server
      $.ajax({
        type: "POST",
        url: "/tweets",
        data: newTweetData,
        success: loadTweets()
        
      })}
  })

  const loadTweets = () => {
    $.ajax('tweets', { method: 'GET' })
      .then(function (eachTweet) {
        renderTweets(eachTweet)
      });
  };

  loadTweets();

  //make box shadow on hover
  $(".tweet").hover(function () {
    $(this).toggleClass('hover');
  });

  //make symbols below tweet change color
  $("div.symbols").children().hover(function () {
    $(this).toggleClass('symbols-hover');
  });
});