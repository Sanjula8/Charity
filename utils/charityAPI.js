var axios = require("axios");

module.exports = function(query) {
  // Gets all Non-Profits Organizations
  return axios.get(
    `https://api.data.charitynavigator.org/v2/Organizations?app_id=7c330aa5&app_key=e71ce963795487b79ed62c51b21c0529&search=${query}`
  );
};
