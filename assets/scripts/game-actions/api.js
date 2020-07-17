const config = require('../config')
const store = require('../store')

const newGame = function(){
  return $.ajax({
    url: config.apiUrl + '/games',
    method: "POST",
    headers:{
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const topLeft = function(){
  $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: "PATCH",
    headers:{
      id: store.game._id,
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game:{
        cell: {
          index: $('#topLeft').attr('data-cell-index'),
          value: "X"
        },
        over: false
      }
    }
  })
}
const topMiddle = function(){
  $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: "PATCH",
    headers:{
      id: store.game._id,
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game:{
        cell: {
          index: $('#topMiddle').attr('data-cell-index'),
          value: "X"
        },
        over: "false"
      }
    }
  })
}
const topRight = function(){
  $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: "PATCH",
    headers:{
      id: store.game._id,
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game:{
        cell: {
          index: $('#topRight').attr('data-cell-index'),
          value: "X"
        },
        over: "false"
      }
    }
  })
}
const middleLeft = function(){
  $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: "PATCH",
    headers:{
      id: store.game._id,
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game:{
        cell: {
          index: $('#middleLeft').attr('data-cell-index'),
          value: "X"
        },
        over: "false"
      }
    }
  })
}
const middleMiddle = function(){
  $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: "PATCH",
    headers:{
      id: store.game._id,
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game:{
        cell: {
          index: $('#middleMiddle').attr('data-cell-index'),
          value: "X"
        },
        over: "false"
      }
    }
  })
}
const middleRight = function(){
  $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: "PATCH",
    headers:{
      id: store.game._id,
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game:{
        cell: {
          index: $('#middleRight').attr('data-cell-index'),
          value: "X"
        },
        over: "false"
      }
    }
  })
}
const bottomLeft = function(){
  $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: "PATCH",
    headers:{
      id: store.game._id,
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game:{
        cell: {
          index: $('#bottomLeft').attr('data-cell-index'),
          value: "X"
        },
        over: "false"
      }
    }
  })
}
const bottomMiddle = function(){
  $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: "PATCH",
    headers:{
      id: store.game._id,
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game:{
        cell: {
          index: $('#bottomMiddle').attr('data-cell-index'),
          value: "X"
        },
        over: "false"
      }
    }
  })
}
const bottomRight = function(){
  $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: "PATCH",
    headers:{
      id: store.game._id,
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game:{
        cell: {
          index: $('#bottomRight').attr('data-cell-index'),
          value:  "X"
        },
        over:  "false"
      }
    }
  })
}

module.exports = {
  topLeft,
  topRight,
  topMiddle,
  middleLeft,
  middleMiddle,
  middleRight,
  bottomLeft,
  bottomMiddle,
  bottomRight,
  newGame
}
