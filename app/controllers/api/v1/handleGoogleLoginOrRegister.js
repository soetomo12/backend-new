const axios = require("axios");
const jwt = require("jsonwebtoken");
const { users } = require("../../../models");
const { JWT_SECRET_KEY = "Rahasia" } = process.env;

function createToken(user) {
  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
  };

  return jwt.sign(payload, JWT_SECRET_KEY);
}

async function handleGoogleLoginOrRegister(req, res) {
  const { access_token } = req.body;

  try {
    const response = await axios.get(
      `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
    );
    const { email, name } = response.data;

    let user = await users.findOne({ where: { email } });
    if (!user)
      user = await users.create({
        email,
        name,
      });

    delete user.password;

    const token = createToken(user);

    res.status(201).json({ token, email });
  } catch (err) {
    console.log(err.message);
    res.status(401).json({ error: { name: err.name, message: err.message } });
  }
}

module.exports = handleGoogleLoginOrRegister;
