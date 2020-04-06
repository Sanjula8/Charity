// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var { searchWithTerm, searchWithEIN } = require("../utils/charityAPI");
const gravatar = require("gravatar");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/userlogin", passport.authenticate("local"), function (
    req,
    res
  ) {
    res.json(req.user);
  });

  // db.Users.findOne({
  //   where: {
  //     username: req.body.username
  //   }

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  // const avatar = gravatar.url(email, {
  //   s: "200",
  //   r: "pg",
  //   d: "mm"
  // });

  app.post("/api/registration", function (req, res) {
    console.log(req.body.firstName);

    console.log(db.Users);

    db.Users.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      streetAddress: req.body.streetAddress,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
      phoneNumber: req.body.phoneNumber,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      avatar: req.body.avatar,
    })
      .then(function () {
        // res.send({ stringThing: "hello" });
        res.redirect(307, "/api/userlogin");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({ err: "User not found!" });
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      console.log(req.user);
      res.send(req.user);
    }
  });

  app.get("/api/charity/:search", function (req, res) {
    searchWithTerm(req.params.search).then((apiResponse) => {
      res.json(apiResponse.data);
    });
  });

  app.get("/api/charity/id/:ein", function (req, res) {
    searchWithEIN(req.params.ein).then((apiResponse) => {
      // let charityArray = apiResponse.data.filter(
      // 	charity => charity.ein === ein
      // );

      res.json(apiResponse.data);
    });
  });

  app.post("/api/charity/save", function (req, res) {
    db.Charity.findOne({
      where: {
        EIN: req.body.ein,
      },
    }).then((response) => {
      if (response) {
        db.Charity.update(
          {
            Donation: response.dataValues.Donation + req.body.donation,
            Volunteer: req.body.volunteer,
          },
          {
            where: { EIN: req.body.ein },
          }
        ).then((response) => {
          db.Charity.findOne({
            where: {
              EIN: req.body.ein,
            },
          }).then((response) => {
            res.send({ newDonation: response.dataValues.Donation });
          });
        });
      } else {
        db.Charity.create(
          {
            CharityName: req.body.charityName,
            EIN: req.body.ein,
            UserId: req.user.id,
            Donation: req.body.donation,
            Volunteer: req.body.volunteer,
          },
          {
            returning: true,
            plain: true,
          }
        ).then((response) => {
          db.Charity.findOne({
            where: {
              EIN: req.body.ein,
            },
          }).then((response) => {
            res.send({ newDonation: response.dataValues.Donation });
          });
        });
      }
    });
  });
};

app.get("/api/charity/profile", function (req, res) {
  var userdata, charitydata;
  db.Users.findOne({
    where: {
      username: req.body.username,
    },
  }).then((response) => {
    userdata = response.dataValues;
    db.Charity.findAll({
      where: {
        UserId: response.dataValues.id,
      },
    }).then((response) => {
      charitydata = response.dataValues;
      console.log(userdata);
      console.log(charitydata);
      res.send({ userdata: userdata, charitydata: chartydata });
    });
  });
});

// app.post("/api/charity/profile", function(req, res) {
//   db.Users.findOne({
//     where: {
//       username: req.body.username
//     }
//   }).then(response => {});
//   db.Charity.create({
//     CharityName: req.body.charityName,
//     EIN: req.body.ein,
//     UserId: req.user.id,
//     Donation: req.body.donation,
//     Volunteer: req.body.volunteer
//   }).then(response => {
//     console.log(req.body.donationValue);
//   });
// });
