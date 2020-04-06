// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var { searchWithTerm, searchWithEIN } = require("../utils/charityAPI");
const gravatar = require("gravatar");

<<<<<<< HEAD
module.exports = function(app) {
	// Using the passport.authenticate middleware with our local strategy.
	// If the user has valid login credentials, send them to the members page.
	// Otherwise the user will be sent an error
	app.post("/api/userlogin", passport.authenticate("local"), function(
		req,
		res
	) {
		res.json(req.user);
	});
=======
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
>>>>>>> 8dd3efea008a16919b50d780e970ec43f931f297

	// db.Users.findOne({
	//   where: {
	//     username: req.body.username
	//   }

<<<<<<< HEAD
	// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
	// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
	// otherwise send back an error
	app.post("/api/registration", function(req, res) {
		console.log(req.body.firstName);
=======
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
>>>>>>> 8dd3efea008a16919b50d780e970ec43f931f297

		console.log(db.Users);

<<<<<<< HEAD
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
			password: req.body.password
		})
			.then(function() {
				// res.send({ stringThing: "hello" });
				res.redirect(307, "/api/userlogin");
			})
			.catch(function(err) {
				res.status(401).json(err);
			});
	});

	// Route for logging user out
	app.get("/logout", function(req, res) {
		req.logout();
		res.redirect("/");
	});

	// Route for getting some data about our user to be used client side
	app.get("/api/user_data", function(req, res) {
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

	app.get("/api/charity/:search", function(req, res) {
		searchWithTerm(req.params.search).then(apiResponse => {
			res.json(apiResponse.data);
		});
	});

	app.get("/api/charity/id/:ein", function(req, res) {
		searchWithEIN(req.params.ein).then(apiResponse => {
			// let charityArray = apiResponse.data.filter(
			// 	charity => charity.ein === ein
			// );
=======
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
>>>>>>> 8dd3efea008a16919b50d780e970ec43f931f297

			res.json(apiResponse.data);
		});
	});

<<<<<<< HEAD
	app.post("/api/charity/save", function(req, res) {
		console.log({ UserId: req.user.id });
		db.Charity.create({
			CharityName: req.body.charityName,
			EIN: req.body.ein,
			UserId: req.user.id
		}).then(response => {
			console.log(response);
		});
	});
=======
  app.post("/api/charity/save", function (req, res) {
    console.log(req.body);
    db.Charity.findOne({
      where: {
        ein: req.body.ein,
      },
    }).then((response) => {
      if (response) {
        db.Charity.update(
          {
            donation: response.dataValues.donation + req.body.donation,
            volunteer: req.body.volunteer,
          },
          {
            where: { ein: req.body.ein },
          }
        ).then((response) => {
          db.Charity.findOne({
            where: {
              ein: req.body.ein,
            },
          }).then((response) => {
            res.send({ newDonation: response.dataValues.donation });
          });
        });
      } else {
        db.Charity.create(
          {
            charityName: req.body.charityName,
            ein: req.body.ein,
            UserId: req.user.id,
            donation: req.body.donation,
            volunteer: req.body.volunteer,
          },
          {
            returning: true,
            plain: true,
          }
        ).then((response) => {
          db.Charity.findOne({
            where: {
              ein: req.body.ein,
            },
          }).then((response) => {
            res.send({ newDonation: response.dataValues.donation });
          });
        });
      }
    });
  });

  app.get("/bananas", function (req, res) {
    db.Charity.findAll({
      where: {
        UserId: req.user.id,
      },
    }).then((response) => {
      console.log("USERCHARITIES", response);
      res.json(response);
    });
  });
>>>>>>> 8dd3efea008a16919b50d780e970ec43f931f297
};
