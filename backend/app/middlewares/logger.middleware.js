module.exports = (req, res, next) => {
    const url = req.originalUrl
    const method = req.method
    console.log(`Invoked [ ${url} ] with [ ${method} ].`)

    next()
}