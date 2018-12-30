// main_appbot.js
// Tiffany C. Lin

// create instance of chatbot
var botui = new BotUI('botui-app')

// Introduction
botui.message
  .bot({
    loading: true,
    delay: 1500,
    content: 'Hi!'
  })
  .then(() => {
    return botui.message.bot({
      delay: 1700,
      loading: true,
      content: 'I\'m Tiffany Lin'
      })
    }) //continue intro conversation with above template
  .then(() => {
    return botui.message.add({
      delay: 1000,
      loading: true,
      cssClass: 'botimage',
      content: '![Hi](images/profile.jpeg)'
      })
    })
  .then(() => {
      return botui.action.button({
        delay: 500,
        action: [{
          text: 'Hi!',
          value: 'yes'
        }]
      })
    })
  .then(() => { //Are they in the right place?
    return botui.message.bot({
      delay: 1000,
      loading: true,
      content: '(well, technically, I\’m a chatbot standing in for her)' //insert bot emoji
    })
  })
  .then(() => { //Are they in the right place?
    return botui.message.bot({
      delay: 700,
      loading: true,
      content: '🤖🤖🤖' //insert bot emoji
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
        delay: 700,
        loading: true,
        content: 'Great!'
      })
      .then(() => {
        return botui.message.bot({
          delay: 1500,
          loading: true,
          content: 'First of all, thank you so much for taking the time to review my application!'
        })
      })
      .then(() => {
        return botui.message.bot({
          delay: 1200,
          loading: true,
          content: 'I\’m really excited to be applying to Cornell Tech.'
        })
      })
      .then(() => {
        return botui.message.bot({
          delay: 1500,
          loading: true,
          content: 'Which topic area would you like to chat about first?'
        })
      })
      .then(() => {
        return choose_options();
      })
    }
  })

// Get Name
// Preamble
// Lets Start --> call options

//
//
// BEGIN FUNCTIONS
//
//

// function: exit_one
// Messages if user is not here to read application
function exit_one() {

 botui.message
 .bot({
     delay: 700,
     loading: true,
     content: 'Oh!'
   })
   .then(() => {
     return botui.message.bot({
       delay: 1500,
       loading: true,
       content: 'Well then our conversation might not be that interesting to you'
     })
   })
   .then(() => {
     return botui.message.bot({
       delay: 2000,
       loading: true,
       content: 'But I always love finding new people who are interested in internet policy, design, or art.'
     })
   })
   .then(() => {
     return botui.message.bot({
       delay: 1500,
       loading: true,
       content: 'If you\'d like, give my website visit and get in touch!'
     })
   })
   .then(() => {
     return botui.message.bot({
       delay: 1500,
       loading: true,
       content: '[![my website](images/website.png)](https://tiffclin.com)'
     })
   })
   .then(() => {
     return botui.action.button({
       delay: 500,
       action: [{
         text: 'Start Over?',
         value: 'yes'
       }]
     })
  })
}

// function: options
// Provide options for the user to read through the Application
// Options include calling the experience, future, interest, or exit_two module

function choose_options() {

  botui.action
  .button({
      delay: 600,
      action: [{
        text: 'Why an MBA? Why Cornell Tech?',
        value: 'whyMBA'
      }, {
        text: 'Let\’s talk about your experience',
        value: 'experience'
      }, {
        text: 'What\'s after an MBA?',
        value: 'future'
      }, {
          text: 'What would you bring to the community?',
          value: 'cornelltech'
        }, {
          text: 'I think that\’s all for now!',
          value: 'end'
        }]
      })
    .then(res => {
      if(res.value == 'whyMBA'){
        whyMBA();
      } else if(res.value == 'experience'){
        experience();
      } else if(res.value == 'future'){
        future();
      } else if(res.value == 'cornelltech'){
        cornelltech();
      } else if(res.value == 'end'){
        botui.message
        .bot({
          delay: 700,
          loading: true,
          content: 'Ok!'
        })
        .then(() => {
          return botui.message.bot({
            delay: 1000,
            loading: true,
            content: 'Thank you for taking the time to review my application.'
          })
        })
        .then(() => {
          return botui.message.bot({
            delay: 1500,
            loading: true,
            content: 'I hope you enjoyed reading it as much as I enjoyed making it.'
          })
        })
      }
    })
  }

// function: whyMBA
// first of the options of conversations
function whyMBA() {
  botui.message
  .bot({
    delay: 1200,
    loading: true,
    content: 'I have always wanted to find the best ways to influence how tech could be made'
  })
  .then(() => {
    return botui.message.bot({
      delay: 700,
      loading: true,
      content: 'or used'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 1000,
      loading: true,
      content: 'to better communities around the world.'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3000,
      loading: true,
      content: 'At first, I thought I wanted to do this through influencing law and policy,'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'but over the last three years, I\'ve realized that my technical, design, and operational interests are better aligned with the private sector,'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3000,
      loading: true,
      content: 'working more directly with products, finding ways to bridge between developers and those working on policy'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3000,
      loading: true,
      content: 'and finding ways to bridge between developers and those working on policy.'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 1000,
      loading: true,
      content: 'This is what inspired me to pursue an MBA.'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'While I have a bit of a technical background, and I have the research and operational background in policy, I know that in order to do the things I want, I need to become more and more inspired by those around me to transition into the proper management and business foundation.'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 2000,
      loading: true,
      content: 'I know that in order to do the things I want,'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'I need to build a foundation in business and technology. That way I can transition into the proper management and business roles where I can work directly with products, and pursue my ambitions of creating socially responsible tech.'
    })
  })
  .then(() => {
    return botui.action.button({
      delay: 600,
      action: [{
        text: 'But why Cornell Tech?',
        value: 'why'
      }]
    })
  })
  .then(res => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'I fell in love with Cornell Tech when I attended the campus for one of the information sessions'
    })
  })
  .then(res => {
    return botui.message.bot({
      delay: 1500,
      loading: true,
      content: 'Before going, I had already liked the idea of the program\'s expedited timeline and the specific tech focus,'
    })
  })
  .then(res => {
    return botui.message.bot({
      delay: 2500,
      loading: true,
      content: 'but hearing Raymond Lutzy talk about the breadth of hands-on studios and interdisciplinary classes really cemented my interest.'
    })
  })
  .then(res => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'It was great to hear how excited other students were about impact of the studio courses. I love the idea of getting a chance right away to work with companies right in New York City.'
    })
  })
  .then(res => {
    return botui.message.bot({
      delay: 1000,
      loading: true,
      content: 'Also'
    })
  })
  .then(res => {
    return botui.message.bot({
      delay: 2500,
      loading: true,
      content: 'having an interdisciplinary background myself,'
    })
  })
  .then(res => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'I like the idea of taking courses along with business, LL.M., and engineering students.'
    })
  })
  .then(res => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'At a time when tech giants are facing huge amounts of scrutiny and backlash regarding their policy practices, I think there needs to be more dialogue and collaboration across these disciplines.'
    })
  })
  .then(res => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'No where else does it seem like there are these opportunities to build up that community in an educational setting than at the Cornell Tech campus, and I am excited at the opportunity to be a part of that.'
    })
  })
  .then(res => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'and I am excited at the opportunity to be a part of that.'
    })
  })
  .then(() => {
    return choose_options();
  })
}

// function: experience
// first of the options of conversations
function experience() {
  botui.message
  .bot({
    delay: 1200,
    loading: true,
    content: ' I have loved technology and have been excited about its potential for as long as I can remember. I started building my own websites when I was 13,  teaching myself HTML, CSS, and PHP.'
  })
  .then(() => {
    return botui.message.bot({
      delay: 2500,
      loading: true,
      content: 'While I have not been in primarily technical positions, having that technical background has been instrumental in understanding a lot of the internet policy issues I have worked on.'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: ' As I continue to transition into a more combined business and tech roles, I know that my technical knowledge will be invaluable in being able to communicate across different product teams.'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3000,
      loading: true,
      content: 'While working on my Tech MBA, I want to learn more from my technical peers and take my skills to the next level.'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 2000,
      loading: true,
      content: 'I also want to use what I do know so far to help other students who may not have a technical background at all.'
    })
  })
  .then(() => {
    return botui.action.button({
      delay: 600,
      action: [{
        text: 'Tell me more about your tech policy background',
        value: 'more'
      }]
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 700,
      loading: true,
      content: 'Often inspired by science fiction, I have always wanted to figure out the best ways in which technology could be used to benefit society'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 1500,
      loading: true,
      content: ' (or prevent some of the more dystopian stories from coming true).'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 2500,
      loading: true,
      content: 'That ambition is what led me to initially pursue internet policy over the last three years at the Berkman Klein Center.'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'There, I had the opportunity to conduct research and also manage projects on issues on digital security, artificial intelligence, privacy, and platform regulation.'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'I was in a unique position, spending half of my time on research and writing on key policy issues'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'and the other half working with a team to develop an interdisciplinary program that brought together academics, developers, managers, and journalists to develop code solutions to key policy problems.'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: '(If you would like to read more about the program, their website is here)'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'link to assembly'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'It was through this program that I realized I wanted to transition my career into the private sector and into a product focused role.'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'Discussing the hands-on ways that other managers and product developers can influence technology as well as build in important policy decisions made me realize that instead of critiquing the industry from the outside, I wanted to be working on product management within the industry.'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'Being exposed to researchers at the forefront of internet policy shaped how I think technology development can benefit society and I want to bring this background and knowledge into industry in a more product focused role.'
    })
  })
  .then(() => {
    return choose_options();
  })
}

// function: future
// first of the options of conversations
function future() {
  botui.message
  .bot({
    delay: 1200,
    loading: true,
    content: 'My ambition is to be able to influence technology and media product decisions through management.'
  })
  .then(() => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'Short term, I want to do that by moving into the industry I\'ve been influencing from the outside by taking a product management role at a technology and media company.'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'I want to start in a larger company because I want to learn the ins and outs of different parts of the business.'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3000,
      loading: true,
      content: 'Being in a larger company would also give me the opportunity to speak with people who work in different roles and have diverse sets of experience, making for a great learning experience for me.'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 1000,
      loading: true,
      content: 'Long term, my goal is to be in a leadership position at a technology company.'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3000,
      loading: true,
      content: 'Whether at an established company, or in company I started myself,'
    })
  })
  .then(res => {
    return botui.message.bot({
      delay: 2700,
      loading: true,
      content: ' I want to be able to influence product and policy in ways that would help make the company both profitable and socially productive.'
    })
  })
  .then(res => {
    return botui.message.bot({
      delay: 2700,
      loading: true,
      content: 'I know that in order to do this, I have a lot to learn about the strategic, financial, and management side of the technology industry,'
    })
  })
  .then(res => {
    return botui.message.bot({
      delay: 2700,
      loading: true,
      content: 'and I am eager to learn in an environment like Cornell Tech that emphasizes an interdisciplinary and hands-on curriculum specifically focused on the tech industry.'
    })
  })
  .then(() => {
    return choose_options();
  })
}

// function: cornelltech
// first of the options of conversations
function cornelltech() {
  botui.message
  .bot({
    delay: 1200,
    loading: true,
    content: 'I have always had diverse sets of interests and skills in art, design, technology, and policy.'
  })
  .then(() => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'Throughout various stages of my life, I worked at focusing more on one area, but always ended up feeling like something was missing. It took me a while to realize that this could be a strength, if I could harness it properly.'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'With my extensive policy background, I think I could bring a knowledge base that is in demand at the moment with tech companies needing (which I think is great) to be more socially and policy conscious.'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3000,
      loading: true,
      content: 'I also think I can bring an art and design background that I have been developing over the last 15 years.'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 1000,
      loading: true,
      content: ' What I am most excited about potentially bringing to Cornell Tech is the passion and energy to bring people together. I want to build bridges across disciplines for those who are even more steeped in those areas compared to myself,'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3000,
      loading: true,
      content: 'and work with my peers whether in studios, classes, or outside of class to create products and initiatives that take business, engineering, and policy into account.'
    })
  })
  .then(res => {
    return botui.message.bot({
      delay: 2700,
      loading: true,
      content: 'One of the main reasons why I am transitioning into industry and more management roles is because I can both understand the products and issues, and bring the right people to bring it to the world.'
    })
  })
  .then(() => {
    return choose_options();
  })
}
