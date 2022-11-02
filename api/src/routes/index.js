const { Router } = require('express');
const { Op } = require('sequelize');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Country, Activity } = require('../db.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/countries/:idCountry', async (req, res) => {
  try {
    let { idCountry } = req.params;
    let result = await Country.findAll({
      where: {
        id: idCountry
      },
      include: Activity
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({err: 'Conection to DB failed.', error})
  }
});

router.get('/countries', async (req, res) => {
  let { name } = req.query;
  let result;
  try {
    if (name) {
      result = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          }
        },
        include: Activity
      })
      if(!result) return res.status(200).json({msg: 'No countries.'})
    } else {
      result = await Country.findAll({include: Activity});
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({err: 'Conection to DB failed.', error})
  }
});

router.get('/activities', async (req, res) => {
  try {
    let result = await Country.findAll({include: Activity});
    let act = {};
    for (let i = 0; i < result.length; i++) {
      for (let x = 0; x < result[i].activities.length; x++) {
        let key = result[i].activities[x].name;
        act[key] = true;
      } 
    }
    res.status(200).json(act);
  } catch (error) {
    res.status(500).json({err: 'Conection to DB failed.', error})
  } 
})

router.post('/activities', async (req, res) => {
  let { name, skill, duration, season, countries } = req.body;
  try {
    let result = await Activity.create({
      name: name,
      skill: skill,
      duration: duration,
      season: season,
    })
    if (countries) {
      await result.setCountries(countries);
      return res.status(200).json({msg: 'Activity created and linked.'})
    }
    res.status(200).json({msg: 'Activity created.'})
  } catch (error) {
    res.status(500).json({err: 'Conection to DB failed.', error})
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
