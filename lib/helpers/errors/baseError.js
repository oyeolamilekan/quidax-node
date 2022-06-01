class BaseError extends Error {
    /**
     * The BaseError Constructor.
     * @param {Object} options - A configuration object for errors.
     * @param {String} options.message - The error message if any.
     * @constructor BaseError
     */
    constructor(options = {}) {
        super()
        Error.captureStackTrace(this, this.constructor)
        this.name = this.constructor.name
        this.message = options.message
        this.status = options.status
    }
}

module.exports = BaseError
