// modules_appbot.js
// Tiffany C. Lin
// functions for main_appbot.js

// function: exit1
// Messages if user is not here to read application
var exit_one = function () {

  botui.message
    .bot ({
      delay: 700,
      loading: true,
      content: 'Oh!'
    })
    .then(() => {
      return botui.message.bot({
        delay: 700,
        loading: true,
        content: 'Well, I\'m afraid you might be in the wrong place'
      })
    })
    .then(() => {
      return botui.message.bot({
        delay: 700,
        loading: true,
        content: 'If you are looking for more information about some of the work I do why not try visiing my website'
      })
    })
    .then(() => {
      return botui.message.bot({
        //insert website link and image
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
    .bot ({
      delay: 700,
      loading: true,
      content: 'Oh!'
    })
    .then(() => {
      return botui.message.bot({
        delay: 700,
        loading: true,
        content: 'Well, I\'m afraid you might be in the wrong place'
      })
    })
    .then(() => {
      return botui.message.bot({
        delay: 700,
        loading: true,
        content: 'If you are looking for more information about some of the work I do why not try visiing my website'
      })
    })
    .then(() => {
      return botui.message.bot({
        //insert website link and image
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
