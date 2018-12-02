var botui = new BotUI('botui-app') // id of container

botui.message.add({
  delay: 300,
  content: 'Hello from bot.'
});

botui.message.bot({ // show first message
  delay: 200,
  content: 'Hi! I\'m Tiffany Lin!'
}).then(() => {
  return botui.message.bot({ // second one
    delay: 1000, // wait 1 sec.
    content: 'Are you here to see my Cornell Tech MBA Application?'
  })
}).then(() => {
  return botui.action.button({ // let user do something
    delay: 1000,
    action: [
      {
        text: 'Yes!',
        value: 'yes'
      },
      {
        text: 'Your what?',
        value: 'your_what'
      }
    ]
  })
}).then(res => {
  return botui.message.bot({
    delay: 1000,
    content: `You are feeling ${res.text}!`
  })
})
