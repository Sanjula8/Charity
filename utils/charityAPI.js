var axios = require("axios");

function searchWithTerm(query) {
  // Gets all Non-Profits Organizations
  return axios.get(
    `https://api.data.charitynavigator.org/v2/Organizations?app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&search=${query}`
  );
}

function searchWithEIN(ein) {
  return axios.get(
    `https://api.data.charitynavigator.org/v2/Organizations/${ein}?app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`
  );
}

module.exports = { searchWithTerm, searchWithEIN };
