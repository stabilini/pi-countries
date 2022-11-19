const crypto = require('crypto');

const { User } = require('../../db.js');

const createUser = async (req, res) => {
  let { mail, pass } = req.body;
  try {
    if (mail && pass) {
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/;
      if (mail.match(validRegex)) {
        let hashedpass = crypto.createHash('md5').update(pass).digest('hex');
        let result = await User.create({
          mail: mail,
          pass: hashedpass,
        })
        return res.status(201).json({msg: 'User created'})
      }
      return res.status(400).json({msg: 'Bad email format'})
    }
    res.status(400).json({msg: 'Missing information'})
  } catch (error) {
    res.status(500).json({err: 'Conection to DB failed.', error})
  }
};

module.exports = createUser;