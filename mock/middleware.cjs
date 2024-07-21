const { faker } = require('@faker-js/faker')

// hello.js
module.exports = (req, res, next) => {
    if (req.path === '/hello') {
        return res.send('hello,world')
    }
    if (req.method === 'POST') {
        req.body.createdAt = Date.now()
    }
    if (req.path === '/echo') {
        return res.jsonp(req.query)
    }
    if (req.path === '/api/auth/login' && req.method === 'POST') {
        return res.jsonp({
            data: {
                id: 1,
                username: faker.internet.userName(),
                avatar: faker.internet.avatar(),
            }
        })
    }
    if (req.path === '/api/auth/logout' && req.method === 'GET') {
        return res.jsonp({
            data: {
                message: 'LOGOUT'
            }
        })
    }

    if (req.path === '/api/auth/profile' && req.method === 'GET') {
        return res.jsonp({
            data: {
                id: 1,
                username: faker.internet.userName(),
                avatar: faker.internet.avatar(),
            }
        })
    }

    next()
}