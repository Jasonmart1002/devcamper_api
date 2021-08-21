const errorHandler = (err, req, res, next) => {

    // Log to console for dev
    console.log(err.stack.red)

    //Mongoose bad ObjectID
    if(err.name === 'CastError') {
        const message = `Resource not found with id of ${err.value}`
    }

    res.status(err.statusCode || 500).json({
        success: false,
        error: err.message || 'Server Error'
    })
}

module.exports = errorHandler