const store = require('../store')
const app = require('../app')

const newGameSuccess = function(response){
  store.game = response.game
  $('#message').text('Game Started')
}
const newGameFailure = function(){
  $('#message').text('Game Not Started')
}

const topLeftSuccess = function(response){
    $('#topLeft').text(response.game.cells[0])
}

const topLeftFailure = function(error){
  $('#message').text("Invalid Move")
}

const topMiddleSuccess = function(response){
  $('#topMiddle').text(response.game.cells[1])
}
const topMiddleFailure = function(error){
  $('#message').text("Invalid Move")
}

const topRightSuccess = function(response){
  $('#topRight').text(response.game.cells[2])
}
const topRightFailure = function(error){
  $('#message').text("Invalid Move")
}


const middleLeftSuccess = function(response){
  $('#middleLeft').text(response.game.cells[3])
}
const middleLeftFailure = function(error){
  $('#message').text("Invalid Move")
}


const middleMiddleSuccess = function(response){
  $('#middleMiddle').text(response.game.cells[4])
}
const middleMiddleFailure = function(error){
  $('#message').text("Invalid Move")
}


const middleRightSuccess = function(response){
  $('#middleRight').text(response.game.cells[5])
}
const middleRightFailure = function(error){
  $('#message').text("Invalid Move")
}

const bottomLeftSuccess = function(response){
  $('#bottomLeft').text(response.game.cells[6])
}
const bottomLeftFailure = function(error){
  $('#message').text("Invalid Move")
}

const bottomMiddleSuccess = function(response){
  $('#bottomMiddle').text(response.game.cells[7])
}
const bottomMiddleFailure = function(error){
  $('#message').text("Invalid Move")
}

const bottomRightSuccess = function(response){
  $('#bottomRight').text(response.game.cells[8])
}
const bottomRightFailure = function(error){
  $('#message').text("Invalid Move")
}

module.exports = {
  topLeftSuccess,
  topLeftFailure,
  topMiddleSuccess,
  topMiddleFailure,
  topRightSuccess,
  topRightFailure,
  middleLeftSuccess,
  middleLeftFailure,
  middleMiddleSuccess,
  middleMiddleFailure,
  middleRightSuccess,
  middleRightFailure,
  bottomLeftSuccess,
  bottomLeftFailure,
  bottomMiddleSuccess,
  bottomMiddleFailure,
  bottomRightSuccess,
  bottomRightFailure,
  newGameSuccess,
  newGameFailure
}
