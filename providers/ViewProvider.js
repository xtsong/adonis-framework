'use strict'

const ServiceProvider = require('fold').ServiceProvider

class ViewProvider extends ServiceProvider{
  *register(){
    this.app.singleton('Adonis/src/View',function(){
      return require('../src/View')
    })
  }
}

module.exports = ViewProvider
