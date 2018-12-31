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
  .then(() => {
      return botui.action.button({
        delay: 500,
        action: [{
          text: 'Hi!',
        }]
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
      delay: 1500,
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
        content: 'Great! 💯'
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
          content: 'I\’m really excited to be applying to the Cornell Tech MBA program'
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
       content: 'But I always love finding new people who are interested in internet policy, design, or art'
     })
   })
   .then(() => {
     return botui.message.bot({
       delay: 1500,
       loading: true,
       content: 'If you\'d like, give my website a visit and get in touch!'
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
    .then(() => {
       location.reload();
       })
  })
}

// function: options
// Provide options for the user to read through the Application
// Options include calling the experience, future, interest, or exit_two module

function choose_options() {

  botui.action
  .button({
      delay: 1500,
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
    content: 'So, I have always wanted to harness technology to help communities around the world'
  })
  .then(() => {
    return botui.message.bot({
      delay: 2000,
      loading: true,
      content: 'At first, I thought I wanted to do this through influencing tech law and policy ⚖️'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 1500,
      loading: true,
      content: 'but over the last three years, I\'ve realized that my technical, design, and operational interests are better aligned with building products and programs'
    })
  })
  .then(() => {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: '👍',
      }]
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 4000,
      loading: true,
      content: 'I want to be working more directly with products, getting input into the design and development decisions, and finding ways to bridge between developers and those working on policy'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'I have the research and policy background to understand the longer term societal implications of technology, along with an understanding of the technical pieces,'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'but I know that in order to do the things I want'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'to influence tech products to be more socially responsible and sustainable'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'I need to build a strong foundation in business strategy, operations, and management'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'This is what inspired me to pursue an MBA'
    })
  })
  .then(() => {
    return botui.action.button({
      delay: 1000,
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
      content: 'I fell ♥️ with the program after attending one of the information sessions'
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
      content: 'but hearing Raymond Lutzy talk about the breadth of hands-on studios and interdisciplinary classes really cemented my interest'
    })
  })
  .then(res => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'I love the idea of the studio courses, getting a chance right away to work with companies right in New York City.'
    })
  })
  .then(() => {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: '🗽',
      }]
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
      content: 'having an interdisciplinary background myself, I like the idea of taking these hands-on studios along with other business, LL.M., and engineering students.'
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
      delay: 4500,
      loading: true,
      content: 'No other program provides such a close-knit opportunity to build an interdisciplinary community through both classes and extra-curriculars,'
    })
  })
  .then(res => {
    return botui.message.bot({
      delay: 4500,
      loading: true,
      content: 'and I absolutely want to be a part of that.'
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
    content: 'Often inspired by science fiction, I have always wanted to figure out the best ways in which technology could be used to benefit society'
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
        delay: 4500,
        loading: true,
        content: 'That is what led me to initially pursue tech policy over the last three years at the Berkman Klein Center.'
      })
    })
    .then(() => {
      return botui.message.bot({
        delay: 3500,
        loading: true,
        content: 'There, I had the opportunity to conduct research along with manage projects on issues on digital security, artificial intelligence, privacy, and platform regulation.'
      })
    })
    .then(() => {
      return botui.action.button({
        delay: 1000,
        action: [{
          text: '🤓',
        }]
      })
    })
    .then(() => {
      return botui.message.bot({
        delay: 2000,
        loading: true,
        content: 'I was in a unique position, spending half of my time on research and writing on key policy issues'
      })
    })
    .then(() => {
      return botui.message.bot({
        delay: 5000,
        loading: true,
        content: 'For example, I co-wrote a paper on the challenges law enforcements around the world were facing in accessing data (even when they had a warrant) needed to investigate criminal cases'
      })
    })
    .then(() => {
      return botui.message.bot({
        delay: 1500,
        loading: true,
        content: '[![my website](images/cbdar.png)](https://cyber.harvard.edu/publications/2017/09/berklett)'
      })
    })
    .then(() => {
      return botui.action.button({
        delay: 1000,
        action: [{
          text: '👍',
        }]
      })
    })
    .then(() => {
      return botui.message.bot({
        delay: 5000,
        loading: true,
        content: 'The other half of my time, I spent working with a team to develop an interdisciplinary program that brought together academics, developers, managers, and journalists'
      })
    })
    .then(() => {
      return botui.message.bot({
        delay: 3500,
        loading: true,
        content: 'This cohort would develop products or projects meant to tackle a key tech policy issue like digital security or ethics in artificial intelligence.'
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
        content: '[![Assembly](images/assembly.png)](https://bkmla.org/)'
      })
    })
    .then(() => {
      return botui.action.button({
        delay: 1000,
        action: [{
          text: '👍',
        }]
      })
    })
    .then(() => {
      return botui.message.bot({
        delay: 3500,
        loading: true,
        content: 'Researching and writing about tech policy issues provided me a great foundation to understand what some of the key problems in tech need solving right now.'
      })
    })
    .then(() => {
      return botui.message.bot({
        delay: 3500,
        loading: true,
        content: 'But working on the Assembly program helped me realize two things:'
      })
    })
    .then(() => {
      return botui.message.bot({
        delay: 3500,
        loading: true,
        content: '1️⃣ I loved the project management and operational side of my job and wanted to do more of it. I was able to work on building the program\'s strategy, branding, recruiting, and day-to-day management and loved every moment.'
      })
    })
    .then(() => {
      return botui.message.bot({
        delay: 4000,
        loading: true,
        content: 'I was able to work on building the program\'s strategy, branding, recruiting, and day-to-day management and loved every moment.'
      })
    })
    .then(() => {
      return botui.message.bot({
        delay: 5000,
        loading: true,
        content: '2️⃣ I could use my skills to influence tech more directly through working on products. I was lucky to work along side industry managers and at times executives of tech companies. I listened to what they did in their positions and realized I wanted to do what they did.'
      })
    })
    .then(() => {
      return botui.message.bot({
        delay: 4000,
        loading: true,
        content: 'I was lucky to work along side industry managers and at times executives of tech companies. I listened to what they did in their positions and realized I wanted to do what they did.'
      })
    })
    .then(() => {
      return botui.action.button({
        delay: 1000,
        action: [{
          text: '💡',
        }]
      })
    })
  .then(() => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'I have loved technology for as long as I can remember. I started building my own websites when I was 13, teaching myself HTML, CSS, and PHP.'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'While I have not been in primarily technical positions, this technical background was instrumental in my understanding of the internet policy issues I worked on.'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 4000,
      loading: true,
      content: 'Outside of my tech policy work, I tried to use my web design and front end development skills to help others communicate their policy work online'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 4500,
      loading: true,
      content: 'More recently, I have been doing independent consulting work'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3000,
      loading: true,
      content: 'I have been using my tech policy background and working with a consulting firm, GEER, to work with tech companies to understand the policy landscape more clearly.'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 4000,
      loading: true,
      content: 'I have been able to learn more about tech company teams and their internal decision making.'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'As I continue to transition into a more combined business and tech roles, I know that my technical background, policy knowledge, and continuing to build up my business knowledge will all be important to be impactful across across different product teams.'
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
      content: 'Short term ⏱️, I want to move into the industry I\'ve been influencing from the outside by taking a product management role at a technology and media company.'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'I am hoping to start at a larger company because I want to learn the ins and outs of different parts of the business.'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'I want to learn the ins and outs of different parts of the business and also get the opportunity to speak with people who work in different roles and have diverse sets of experience.'
    })
  })
  .then(() => {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: '👍',
      }]
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 1000,
      loading: true,
      content: 'Long term ⏳, I would want to be in a leadership position at a technology company.'
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
      delay: 3700,
      loading: true,
      content: ' I want to be able to influence product and policy in ways that would help make the company both profitable and socially productive.'
    })
  })
  .then(res => {
    return botui.message.bot({
      delay: 4000,
      loading: true,
      content: 'I know that in order to do this, I have a lot to learn about the strategic, financial, and management side of the technology industry,'
    })
  })
  .then(res => {
    return botui.message.bot({
      delay: 3000,
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
      content: 'Throughout various stages of my life, I would work at focusing more on one area, but always ended up feeling like something was missing. It took me a while to realize that this could be a strength, if I could harness it properly.'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'With regards to different skillsets, I think I could bring a combined knowledge of my various interests 🎨 💻 📚'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'I could work with other students who may not have as much of a technical background or are interested in learning more about major tech policy issues.'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3500,
      loading: true,
      content: 'but even more so, I am excited at the idea of bringing to Cornell Tech the passion and energy to create spaces where people from different disciplines could share skills, ideas, and initiatives together.'
    })
  })
  .then(() => {
    return botui.message.bot({
      delay: 3000,
      loading: true,
      content: 'Working with students from within the Tech MBA, LL.M., and engineering program, it would be great to continue the work from previous cohorts to build a larger community.'
    })
  })
  .then(() => {
    return choose_options();
  })
}
