const store = require('../store')

const newGameSuccess = function(response){
  store.game = response.game
  $('#message').text('Game Started')
}
const newGameFailure = function(){
  $('#message').text('Game Not Started')
}

const topLeftSuccess = function(){
  console.log("we work")
  $('#message').text('work')
}

const topLeftFailure = function(){
  console.log("we work")
}

const topMiddleSuccess = function(){
  console.log("we work")
}
const topMiddleFailure = function(){
  console.log("we work")
}

const topRightSuccess = function(){
  console.log("we work")
}
const topRightFailure = function(){
  console.log("we work")
}


const middleLeftSuccess = function(){
  console.log("we work")
}
const middleLeftFailure = function(){
  console.log("we work")
}


const middleMiddleSuccess = function(){
  console.log("we work")
}
const middleMiddleFailure = function(){
  console.log("we work")
}


const middleRightSuccess = function(){
  console.log("we work")
}
const middleRightFailure = function(){
  console.log("we work")
}

const bottomLeftSuccess = function(){
  console.log("we work")
}
const bottomLeftFailure = function(){
  console.log("we work")
}

const bottomMiddleSuccess = function(){
  console.log("we work")
}
const bottomMiddleFailure = function(){
  console.log("we work")
}

const bottomRightSuccess = function(){
  console.log("we work")
}
const bottomRightFailure = function(){
  console.log("we work")
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
