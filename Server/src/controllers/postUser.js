const { Op } = require('sequelize');
const { User } = require('../models/User'); 

const postUser = async (req, res) => {
  try {
    const { email, password } = req.body;


    if (!email || !password) {
      return res.status(400).json({ message: 'Faltan datos' });
    }


    const [user, created] = await User.findOrCreate({
      where: {
        email: {
          [Op.iLike]: email, 
        },
      },
      defaults: {
        email,
        password,
      },
    });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = postUser;
