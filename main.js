// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function likeTrigger() {
  mimicServerCall().then(
    // param1 is callback for success
    // param2 is callback for failure
    () => {
      const likebutton = document.getElementById(`likebutton1`);

      if (likebutton.innerHTML === FULL_HEART) {
        likebutton.innerHTML = EMPTY_HEART;
        //Removes the CSS Class Name(activated-heart) from likebutton
        likebutton.classList.remove(`activated-heart`);
        likebutton.className = "like-glyph";

      } else {
        // Adds Multiple class names to a single HTML element
        likebutton.classList.add("activated-heart", "like-glyph");
        likebutton.innerHTML = FULL_HEART;
      }
    })
    .catch((error) => {
      const modal = document.getElementById("modal");
      //Removes the hidden classname from modal
      modal.className = "";
      // Display the server error code
      document.getElementById("modal-message").innerHTML = error;
      // Hides the error div after 3 seconds
      setTimeout(() => modal.className = `hidden`, 3000)
    });
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
