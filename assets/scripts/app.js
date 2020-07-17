'use strict'
const authEvents = require('./auth/events')

const gameEvents = require('./game-actions/events')


$(() => {

  $('.authenticated').hide()

  $('.gameboard').hide()

  $('#newGameButton').on('click', function(){
     $('.gameboard').show()
  })

  $('#newGameButton').on('click', gameEvents.onNewGame)

  $('#signUp').on('submit', authEvents.onSignUp)

  $('#signIn').on('submit', authEvents.onSignIn)

  $('#signOut').on('submit', authEvents.onSignOut)

  $('#changePassword').on('submit', authEvents.onChangePassword)

  $('#topLeft').on('click', gameEvents.onTopLeft)

  $('#topMiddle').on('click',gameEvents.onTopMiddle)

  $('#topRight').on('click', gameEvents.onTopRight)

  $('#middleLeft').on('click',gameEvents.onMiddleLeft)

  $('#middleMiddle').on('click',gameEvents.onMiddleMiddle)

  $('#middleRight').on('click',gameEvents.onMiddleRight)

  $('#bottomLeft').on('click',gameEvents.onBottomLeft)

  $('#bottomMiddle').on('click',gameEvents.onBottomMiddle)

  $('#bottomRight').on('click',gameEvents.onBottomRight)

})
