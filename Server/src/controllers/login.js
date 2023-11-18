



const login = (req, res) => {
  const access = {
    email: "alexandermontenegro@gmail.com",
    password: "Alemont",
    isLoged: true,
  };
  const { email, password } = req.body;
  if (email === access.email && password === access.password) {
    access.isLoged = true;
    res.status(200).json({ isLoged: true });
  } else {
    res.status(200).json({ isLoged: false });
  }
}




module.exports = {login};