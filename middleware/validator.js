const Validator = require('./validator/index');

module.exports = (validator) => {
    if(!Validator.hasOwnProperty(validator)){
        throw new Error(`validator ${validator} is not exist`)
    }

    return async (req,res,next) => {
        try {
            const validate = await Validator[validator].validateAsync(req.body);
            req.body = validate
            next()
        } catch (error) {
            return res.status(500).json({
                success : false,
                message : error.message
            })
        }
    }
}