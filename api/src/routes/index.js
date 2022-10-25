const { Router } = require('express');
const { Op } = require('sequelize');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Country, Activity } = require('../db.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/countries/:idPais', async (req, res) => {
  try {
    let { idPais } = req.params;
    let result = await Country.findAll({
      where: {
        id: idPais
      },
      include: Activity
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({err: 'Fallo la conexion con la BD.'})
  }
});

router.get('/countries', async (req, res) => {
  let { name } = req.query;
  let result;
  try {
    if (name) {
      // manejar el error en caso de nombre inexsitente
      console.log(name)
      result = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          }
        }
      })
      if(result.length === 0) result = {msg: 'No hay paises con ese nombre'}
    } else {
      result = await Country.findAll();
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({err: 'Fallo la conexion con la BD.', error})
  }
});

router.post('/activities', async (req, res) => {
  let { name, skill, term, season, countries } = req.body;
  console.log(name, skill, term, season, countries)
  try {
    let result = await Activity.create({
      name: name,
      skill: skill,
      term: term,
      season: season,
    })
    if (countries) {
      await result.setCountries(countries);
      return res.status(200).json({msg: 'Actividad creada y asociada.'})
    }
    res.status(200).json({msg: 'Actividad creada.'})
  } catch (error) {
    res.status(500).json({err: 'Fallo la conexion con la BD.'})
  }
})

// ESTA RUTA ES PROPIA, NO PEDIDA EN EL PI, ES PARA AGREGAR ACTIVIDADES
// A UN PAIS... DESPUES VER COMO VERLO EN EL FRONT
router.post('/assign', async (req, res) => {
  // esto hay que cambiarlo para que reciba varias actividades
  // wanda sequelize en 1.08.00 lo explica
  try {
    let { idCountry, idActivity } = req.body; 
    let country = await Country.findByPk(idCountry);
    let result = await country.setActivities(idActivity);
    res.status(200).json({msg: 'Actividad/es agregada/s.'});
  } catch (error) {
    res.status(500).json({err: error});
  }
});



module.exports = router;
