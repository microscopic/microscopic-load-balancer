'use strict'

const chai = require('chai')
const expect = chai.expect

const LoadBalancer = require('../lib/index')

describe('LoadBalancer', () => {
  describe('cosntructor()', () => {
    it('should throw error when creating an object - abstract class', () => {
      expect(() => new LoadBalancer()).to.throw(TypeError)
    })
  })

  describe('balance()', () => {
    it('should throw not implemented error', () => {
      class TestLoadBalancer extends LoadBalancer {

      }

      const loadBalancer = new TestLoadBalancer()

      expect(() => loadBalancer.balance()).to.throw('Must be implemented by subclass!')
    })
  })
})
