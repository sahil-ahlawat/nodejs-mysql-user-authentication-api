
const {decode:decode} = require("../utils/token") 
const validateCsrf =  (req, res, next) => {
    const { csrf } = req.headers;
    // If the token is present
	if(csrf){
		// Verify the token using jwt.verify method
		const decodee = decode(csrf);
		// const decode = jwt.verify(token, 'secret');
        if(!decodee){
			res.status(400).json({
				status: 'Error',
				message: "Spam Request"
			});
		}
        if(isNaN(decodee.id)){

			res.status(400).json({
				status: 'Error',
				message: "Spam Request"
			});
		}
		// Return response with decode data
		
	}
	else{
		res.status(400).json({
            status: 'Error',
            message: "Invalid csrf request."
        });
        return;
	}
	next();
}

module.exports = validateCsrf;

	
