const { Router } = require('express');
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
      }
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({err: 'Fallo la conexion con la BD.'})
  }
});

router.get('/countries', async (req, res) => {
  let { name } = req.query;
  let result;
  // ¿falta parser de query? el name viene con ej %Argentina%

  try {
    if (name) {
      // manejar el error en caso de nombre inexsitente
      console.log(name)
      result = await Country.findAll({
        where: {
          name: {
            [Op.iRegexp]: `^[${name}]`,
          }
        }
      })
    } else {
      result = await Country.findAll();
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({err: 'Fallo la conexion con la BD.'})
  }
});

router.post('/activities', async (req, res) => {
  let { name, skill, term, season } = req.body;
  try {
    let result = await Activity.create({
      name: name,
      skill: skill,
      term: term,
      season: season,
    })
    res.status(200).json({msg: 'Actividad creada.'})
  } catch (error) {
    res.status(500).json({err: 'Fallo la conexion con la BD.'})
  }
})

module.exports = router;
