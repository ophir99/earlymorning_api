const user = require("./user.model");
const jwt = require("jsonwebtoken");

exports.create = (req, res) => {
  const User = new user({
    email: req.body.email,
    password: req.body.password
  });

  User.save()
    .then(result => {
      console.log("RES", result);
      res.send({ result });
    })
    .catch(err => {
      console.log("ERR", err);
      res.status(500).send({ err });
    });
};

exports.login = (req, res) => {
  user
    .find({
      email: req.body.email,
      password: req.body.password
    })
    .then(result => {
      let token = "";
      if (result.length > 0) {
        token = prepareToken(req.body.email);
        res.send({ token });
      } else {
        res.send({ token });
      }
    })
    .catch(err => res.status(500).send({ err }));
};

const prepareToken = email => jwt.sign(email, "APPSECRET");
