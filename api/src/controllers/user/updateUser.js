var crypto = require('crypto');

const { User } = require('../../db.js');

const updateUser = async (req, res) => {
  let { mail, pass } = req.body;
  try {
    if (mail && pass) {
      let hashedpass = crypto.createHash('md5').update(pass).digest('hex');
      let result = await User.update({ pass: hashedpass }, {
        where: {
          mail: mail,
        },
      });
      if(result[0] === 0) return res.status(400).json({msg: 'Invalid user credentials'});
      return res.status(200).json({msg: 'User updated'});
    }
    res.status(400).json({msg: 'Invalid user credentials'});
  } catch (error) {
    res.status(500).json({err: 'Conection to DB failed.', error})
  }
};

module.exports = updateUser;