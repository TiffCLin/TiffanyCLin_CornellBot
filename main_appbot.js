// main_appbot.js
// Tiffany C. Lin

// create instance of chatbot
var botui = new BotUI('botui-app')
var uname = ""

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
      content: '(well, technically, I\’m a chatbot standing in for her)'
    })
  })
  .then(() => { //Are they in the right place?
    return botui.message.bot({
      delay: 1000,
      loading: true,
      content: 'Welcome to my Cornell Tech MBA creative application'
    })
  })
  .then(() => { //Get names
    return botui.message.bot({
      delay: 700,
      loading: true,
      content: 'Could I get your name, please? '
    })
  })
  .then(() => { //Get name from USER
    return botui.action.text({
      action: {
        sub_type: 'text',
        placeholder: 'Please enter your name'
      }
    })
  })
  .then(res => {
    return botui.message.bot({
      uname = res.value;
      delay: 1000,
      loading: true,
      content: 'Nice to meet you, ' + res.value + '!',
    })
  })
  .then(() => { //Are they in the right place?
    return botui.message.bot({
      delay: 1000,
      loading: true,
      content: 'Are you here to learn more about my background and interest in the Tech MBA at Cornell?'
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
    if(res.value == 'no'){ //call exit_one function dialogue
      exit_one();
      end();
    } else { //Continue with decisions
      botui.message
      .bot({
        delay: 400,
        loading: true,
        content: 'Great!'
      })
      .then(() => {
        return botui.message.bot({
          delay: 700,
          loading: true,
          content: 'First of all, thank you so much for taking the time to review my application, ' + uname,
        })
      })
      .then(() => {
        return botui.message.bot({
          delay: 500,
          loading: true,
          content: 'I\’m really excited to be applying to Cornell Tech.''
        })
      })
      .then(() => {
        return botui.message.bot({
          delay: 1200,
          loading: true,
          content: 'Putting together this application was a unique opportunity for me to explore different methods of communication.'
        })
      })
      .then(() => {
        return botui.message.bot({
          delay: 700,
          loading: true,
          content: 'Alright, I am eager to get started and hope you are as well.'
        })
      })
      .then(() => {
        return botui.message.bot({
          delay: 500,
          loading: true,
          content: 'Which topic area would you like to hear about first?'
        })
      })
      options();

    }
  })


// Get Name
// Preamble
// Lets Start --> call options
