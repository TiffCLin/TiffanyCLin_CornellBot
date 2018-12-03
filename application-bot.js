// use for testing ground
var botui = new BotUI('botui-app') // id of container

botui.message
  .bot({
    loading: 500,
    delay: 500,
    content: 'Hi!'
  })
  .then(() => {
    return botui.message.bot({ // second one
      delay: 700,
      loading: 700,
      content: 'I\'m Tiffany Lin'
      })
    })
  .then(() => {
    return botui.message.bot({ // second one
      delay: 1000,
      loading: 500,
      content: 'Are you here to see my Cornell Tech MBA Application?'
      })
    })
  .then(() => {
    return botui.action.button({ // let user do something
      delay: 1000,
      action: [{
        text: 'Yes!',
        value: 'yes'
      }, {
        text: 'Your what?',
        value: 'your_what'
      }]
    })
  })
  .then(res => {
    return botui.message.bot({
      delay: 1000,
      content: `You are feeling ${res.text}!`
    })
  })
