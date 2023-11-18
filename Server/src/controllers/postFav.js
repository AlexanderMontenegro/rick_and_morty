const { Favorite } = require('../models/Favorite'); 

const postFav = async (req, res) => {
  try {
  
    const { name, origin, status, image, species, gender } = req.body;


    if (!name || !origin || !status || !image || !species || !gender) {
      return res.status(401).json({ message: 'Faltan datos' });
    }


    const [favorite, created] = await Favorite.findOrCreate({
      where: { name, origin, status, image, species, gender },
    });

    const allFavorites = await Favorite.findAll();


    res.status(200).json(allFavorites);
  } catch (error) {
  
    res.status(500).json({ message: error.message });
  }
};

module.exports = postFav;
