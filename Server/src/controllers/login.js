
const { User } = require('../models/User'); 
const login = async (req, res) => {
  const { email, password } = req.body;


  if (!email || !password) {
    return res.status(400).json({ message: "Faltan datos" });
  }

  try {

    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }


    const isPasswordValid = user.password === password;

 
    if (!isPasswordValid) {
      return res.status(403).json({ message: "Contraseña incorrecta" });
    }

    return res.status(200).json({ access: true });
  } catch (error) {

    console.error(error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = login;
