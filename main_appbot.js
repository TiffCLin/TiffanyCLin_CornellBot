// main_appbot.js
// Tiffany C. Lin

// create instance of chatbot
var botui = new BotUI('botui-app')

// Introduction
botui.message
  .bot({
    loading: true,
    delay: 500,
    content: 'Hi!'
  })
  .then(() => {
    return botui.message.bot({
      delay: 700,
      loading: true,
      content: 'I\'m Tiffany Lin'
      })
    }) //continue intro conversation with above template
  .then(() => { //Are they in the right place?
    return botui.message.bot({
      delay: 1000,
      loading: true,
      content: 'Are you here to see my Cornell Tech MBA Application?'
    })
  })
  .then(() => {
    return botui.action.button({
      delay: 500,
      action: [{
        text: 'Yes!',
        value: 'yes'
      }, {
        text: 'No',
        value: 'no'
      }]
    })
  })
  .then(res => {
    //No? Call Exit 1
    if(res.value == 'no'){
      exit_one();
      end();
    } else { //Get name
      botui.message
      .bot({
        delay: 500,
        loading: true,
        content: 'Great!'
      })
      .then(() => {
        return botui.message.bot({
          delay: 700,
          loading: true,
          content: 'Before we move forward, could I get your name?'
        })
      })
      .then(() => {
        return botui.action.text({
          action: {
            sub_type: 'text',
            placeholder: 'Please enter your name'
          }
        })
      })
      .then(res => {
        return botui.message.bot({
          delay: 700,
          loading: true,
          content: 'Thanks for reading through my application ' + res.value
        })
      })

    }
  })


// Get Name
// Preamble
// Lets Start --> call options
