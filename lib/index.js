'use strict'

const utils = require('microscopic-utils')
const Asserts = utils.asserts

class LoadBalancer {
  constructor () {
    Asserts.assert(this.constructor !== LoadBalancer,
      new TypeError('Abstract class "LoadBalancer" cannot be instantiated directly'))
  }

  /**
   * Returns selected node.
   *
   * @abstract
   *
   * @param {array.<ServiceDefinition>} nodes
   * @return {ServiceDefinition}
   */
  balance (nodes) {
    throw new Error('Must be implemented by subclass!')
  }
}

module.exports = LoadBalancer
