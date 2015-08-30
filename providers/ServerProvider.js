'use strict'

const ServiceProvider = require('fold').ServiceProvider

class ServerProvider extends ServiceProvider{
  *register(){
    this.app.singleton('Adonis/src/Server',function(){
      return require('../src/Server')
    })
  }
}

module.exports = ServerProvider
