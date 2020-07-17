const config = require('../config')
const store = require('../store')
const events = require('./events')
const ui = require('./ui')

 store.player = "O"

const valueSelector =function(){
  if(store.player === "O"){
    store.player = "X"
    return store.player
  }else{
    store.player = "O"
    return store.player
  }
}

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
  return $.ajax({
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
          value: store.player
        },
        over: false
      }
    }
  })
}
const topMiddle = function(){
  return $.ajax({
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
          value: store.player
        },
        over: false
      }
    }
  })
}
const topRight = function(){
  return $.ajax({
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
          value: store.player
        },
        over: false
      }
    }
  })
}
const middleLeft = function(){
  return $.ajax({
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
          value: store.player
        },
        over: false
      }
    }
  })
}
const middleMiddle = function(){
  return $.ajax({
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
          value: store.player
        },
        over: false
      }
    }
  })
}
const middleRight = function(){
  return $.ajax({
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
          value: store.player
        },
        over: false
      }
    }
  })
}
const bottomLeft = function(){
  return $.ajax({
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
          value: store.player
        },
        over: false
      }
    }
  })
}
const bottomMiddle = function(){
  return $.ajax({
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
          value: store.player
        },
        over: false
      }
    }
  })
}
const bottomRight = function(){
  return $.ajax({
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
          value:  store.player
        },
        over:  false
      }
    }
  })
}

const getIndex = function(){
  return $.ajax({
    url: config.apiUrl + '/games',
    method: "GET",
    headers:{
      Authorization: 'Bearer ' + store.user.token
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
  newGame,
  valueSelector,
  getIndex
}
