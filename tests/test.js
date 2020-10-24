const assert = require('assert')
const reqest = require('supertest')
const app = require('../index')

describe('Validate setting the test', () => {
    it('should be ok', () => {
        assert.ok(true)
    })
})

describe('GET "/"', () => {
    it('respond whit Hello!', (dons) => {
        require(app).get('/').expect('Hello', done)
    })
})