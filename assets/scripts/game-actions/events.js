const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const app = require('../app')
const store = ("../store")

const onGetIndex = function(){
  event.preventDefault()
  api.getIndex()
    .then(ui.onGetIndexSuccess)
    .catch(ui.onGetIndexFailure)
}

const onNewGame = function(){
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onTopLeft = function(){
  event.preventDefault()
    if($('#topLeft').text() === ""){
      api.valueSelector()
      api.topLeft()
        .then(ui.topLeftSuccess)
        .catch(ui.topLeftFailure)
      }else{
        $('#message2').text("Invalid Move")
      }
}
const onTopMiddle = function(){
  event.preventDefault()
    if($('#topMiddle').text() === ""){
      api.valueSelector()
      api.topMiddle()
      .then(ui.topMiddleSuccess)
      .catch(ui.topMiddleFailure)
    }else{
      $('#message2').text("Invalid Move")
    }
}
const onTopRight = function(){
  event.preventDefault()
    if($('#topRight').text() === ""){
      api.valueSelector()
      api.topRight()
      .then(ui.topRightSuccess)
      .catch(ui.topRightFailure)
    }else{
      $('#message2').text("Invalid Move")
    }
}
const onMiddleLeft = function(){
  event.preventDefault()
    if($('#middleLeft').text() === ""){
      api.valueSelector()
      api.middleLeft()
      .then(ui.middleLeftSuccess)
      .catch(ui.middleLeftFailure)
    }else{
      $('#message2').text("Invalid Move")
    }
}
const onMiddleMiddle = function(){
  event.preventDefault()
    if($('#middleMiddle').text() === ""){
      api.valueSelector()
      api.middleMiddle()
      .then(ui.middleMiddleSuccess)
      .catch(ui.middleMiddleFailure)
    }else{
      $('#message2').text("Invalid Move")
    }
}
const onMiddleRight = function(){
  event.preventDefault()
    if($('#middleRight').text() === ""){
      api.valueSelector()
      api.middleRight()
      .then(ui.middleRightSuccess)
      .catch(ui.middleRightFailure)
    }else{
      $('#message2').text("Invalid Move")
    }
}
const onBottomLeft = function(){
  event.preventDefault()
    if($('#bottomLeft').text() === ""){
      api.valueSelector()
      api.bottomLeft()
      .then(ui.bottomLeftSuccess)
      .catch(ui.bottomLeftFailure)
    }else{
      $('#message2').text("Invalid Move")
    }
}
const onBottomMiddle = function(){
  event.preventDefault()
    if($('#bottomMiddle').text() === ""){
      api.valueSelector()
      api.bottomMiddle()
      .then(ui.bottomMiddleSuccess)
      .catch(ui.bottomMiddleFailure)
    }else{
      $('#message2').text("Invalid Move")
    }
}
const onBottomRight = function(){
  event.preventDefault()
    if($('#bottomRight').text() === ""){
      api.valueSelector()
      api.bottomRight()
      .then(ui.bottomRightSuccess)
      .catch(ui.bottomRightFailure)
    }else{
      $('#message2').text("Invalid Move")
    }
}

module.exports = {
  onTopLeft,
  onTopRight,
  onTopMiddle,
  onMiddleLeft,
  onMiddleMiddle,
  onMiddleRight,
  onBottomLeft,
  onBottomMiddle,
  onBottomRight,
  onNewGame,
  onGetIndex
}
