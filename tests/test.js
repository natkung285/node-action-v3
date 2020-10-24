const assert = require('assert')
const request = require('supertest')
const app = require('../index')

describe('Validate setting the test', () => {
    it('should be ok', () => {
        assert.ok(true)
    })
})

describe('GET "/"', () => {
    it('respond whit Hello!', (done) => {
        request(app).get('/').expect('Hello!', done)
    })
})

describe('GET "/item"', () => {
    it('respond whit arry of item', (done) => {
        let want = [
            { id: 1, name: "Iphone 12 Pro Max"},
            { id: 2, name: "Google Pixel 5"}
        ]
        request(app).get('/item').expect(want, done)
    })
})