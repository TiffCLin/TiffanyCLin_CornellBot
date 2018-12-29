// modules_appbot.js
// Tiffany C. Lin
// functions for main_appbot.js

// function: exit_one
// Messages if user is not here to read application
 function exit_one() {

  console.log("test")
  botui.message
  .bot({
      delay: 700,
      loading: true,
      content: 'Oh!'
    })
    .then(() => {
      return botui.message.bot({
        delay: 700,
        loading: true,
        content: 'Well then our conversation probably will not be that interesting to you'
      })
    })
    .then(() => {
      return botui.message.bot({
        delay: 700,
        loading: true,
        content: 'But I always love finding new people who are interested in internet policy, design, or art.'
      })
    })
    .then(() => {
      return botui.message.bot({
        delay: 700,
        loading: true,
        content: 'or my art insta'
      })
    })
    .then(() => {
      return botui.message.bot({
        delay: 700,
        //insert art IG link and image
      })
    })

}

// function: options
// Provide options for the user to read through the Application
// Options include calling the experience, future, interest, or exit_two module
var options = function () {

  botui.message
  .bot({
      delay: 700,
      loading: true,
      content: 'Well, I\'m afraid you might be in the wrong place'
    })
  })
}
