const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onNewGame = function(){
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onTopLeft = function(){
  event.preventDefault()
  api.topLeft()
    .then(ui.topLeftSuccess)
    .catch(ui.topLeftFailure)
}
const onTopMiddle = function(){
  event.preventDefault()
  api.topMiddle()
    .then(ui.topMiddleSuccess)
    .catch(ui.topMiddleFailure)
}
const onTopRight = function(){
  event.preventDefault()
  api.topRight()
    .then(ui.topRightSuccess)
    .catch(ui.topRightFailure)
}
const onMiddleLeft = function(){
  event.preventDefault()
  api.middleLeft()
    .then(ui.middleLeftSuccess)
    .catch(ui.middleLeftFailure)
}
const onMiddleMiddle = function(){
  event.preventDefault()
  api.middleMiddle()
    .then(ui.middleMiddleSuccess)
    .catch(ui.middleMiddleFailure)
}
const onMiddleRight = function(){
  event.preventDefault()
  api.middleRight()
    .then(ui.middleRightSuccess)
    .catch(ui.middleRightFailure)
}
const onBottomLeft = function(){
  event.preventDefault()
  api.bottomLeft()
    .then(ui.bottomLeftSuccess)
    .catch(ui.bottomLeftFailure)
}
const onBottomMiddle = function(){
  event.preventDefault()
  api.bottomMiddle()
    .then(ui.bottomMiddleSuccess)
    .catch(ui.bottomMiddleFailure)
}
const onBottomRight = function(){
  event.preventDefault()
  api.bottomRight()
    .then(ui.bottomRightSuccess)
    .catch(ui.bottomRightFailure)
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
  onNewGame
}
