const { Favorite } = require('../models/Favorite'); 

const deleteFav = async (req, res) => {
  const { id } = req.params;

  try {

    await Favorite.destroy({
      where: {
        id: id,
      },
    });

    const remainingFavorites = await Favorite.findAll();


    res.status(200).json(remainingFavorites);
  } catch (error) {

    console.error(error);
    res.status(500).json({ error: 'Hubo un error al eliminar el personaje favorito.' });
  }
};

module.exports = deleteFav;
