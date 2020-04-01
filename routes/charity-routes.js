var axios = require("axios");

module.exports = function(app) {
	// Gets all Non-Profits Organizations
	axios
		.get(
			"https://api.data.charitynavigator.org/v2/Organizations?app_id=7c330aa5&app_key=e71ce963795487b79ed62c51b21c0529"
		)
		.then(data => {
			console.log(data);
		});
};
