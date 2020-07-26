const itemsDB = require('./items-model')
const router = require('express').Router();
const authenticate = require ('../auth/authenticate-middleware.js')

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



router.get("/:id", async (req, res, next) => {
	try {
		const item = await itemsDB.findById(req.params.id)
		if (!item) {
			return res.status(404).json({
				message: "Item not found",
			})
		}

		res.json(item)
	} catch (err) {
		next(err)
	}
})

// router.get("/:id", async (req, res, next) => {
// 	try {
// 			const { id } = req.params
// 			const item = await itemsDB.findById(id)
// 			if (item) {
// 					return res.status(200).json(item)
// 			} else {
// 					return res.status(404).json({ message: "Could not find item with this Id." })
// 			}

// 	}
// 	catch (err) {
// 			next(err)
// 	}
// })



///////////////////
//   CREATE
///////////////////

// router.post("/", async (req, res, next) => {
// 	try {
// 		const item = await itemsDB.add(req.body)
// 		res.status(201).json(item)
// 	} catch(err) {
// 		next(err)
// 	}
// })

router.post("/", async (req, res, next) => {
	try {
			const id = await itemsDB.add(req.body) //returns an array

			const item = await itemsDB.findById(id)

			return res.status(201).json(item)
	}
	catch (err) {
			next(err)
	}
})

///////////////////
//   UPDATE
///////////////////

router.put("/:id", async (req, res, next) => {
	try {
			const { id } = req.params //returns an object
			const item = await itemsDB.update(id, req.body)

			if (item) {
					res.json(item)
			} else {
					return res.status(404).json({
							message: "Could not find item with given id.",
					})
			}
	} catch (err) {
			next(err)
	}
})


///////////////////
//   DELETE
///////////////////

router.delete("/:id", async (req, res, next) => {
	try {
		const { id } = req.params
			const item = await itemsDB.remove(id)
					.where({ id: req.params.id })
					.del()
			return res.status(200).json({ id: req.params.id })
	}
	catch (err) {
			next(err)
	}
})


module.exports = router;