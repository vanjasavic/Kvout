var kvouts = [
    "\"I find that the harder I work, the more luck I seem to have.\"",
    "\"The only impossible journey is the one you never begin.\"",
    "\"Life is what happens when you're busy making other plans. \"",
    "\"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma -- which is living with the results of other people's thinking. \"",
    "\"Success is not final; failure is not fatal: It is the courage to continue that counts. \"",
    "\"You miss 100% of the shots you don't take. \"",
    "\"Everything you've ever wanted is on the other side of fear. \"",
    "\"Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So, throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover. \"",
    "\"The future belongs to those who believe in the beauty of their dreams. \"",
    "\"Never let the fear of striking out keep you from playing the game. \"",
];

function getKvout(){
    document.getElementById("kvout").innerHTML = kvouts[Math.floor(Math.random() * kvouts.length)];
}

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }