
const {decode:decode} = require("../utils/token") 
const validateToken =  (req, res, next) => {
    const { email, token } = req.headers;
    // If the token is present
	if(token && email){
		// Verify the token using jwt.verify method
		const decodee = decode(token);
		// const decode = jwt.verify(token, 'secret');
        if(!decodee){
			res.status(400).json({
				status: 'Error',
				message: "Spam Request"
			});
		}
        if(decodee.id != email){

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
            message: "Token or email is not defined, possibly user not logged in."
        });
        return;
	}
	next();
}

module.exports = validateToken;

	
