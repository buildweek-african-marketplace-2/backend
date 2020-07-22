const itemsDB = require('./items-model')
const router = require('express').Router();


///////////////
//READ 
//////////////

router.get('/', async (req, res, next) => {
  try {
		res.json(await itemsDB.find())
	} catch(err) {
		next(err)
	}
});


///////////////////
//   CREATE
///////////////////

router.post("/", async (req, res, next) => {
	try {
		const item = await itemsDB.add(req.body)
		res.status(201).json(item)
	} catch(err) {
		next(err)
	}
})

module.exports = router;
