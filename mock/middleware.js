// hello.js
module.exports = (req, res, next) => {
    if (req.path === '/hello') {
        res.send('hello,world')
    }
    if (req.method === 'POST') {
        req.body.createdAt = Date.now()
    }
    if (req.path === 'echo') {
        res.jsonp(req.query)
    }
    next()
}