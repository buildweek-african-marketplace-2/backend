exports.seed = async function(knex) {
	await knex("items").truncate()
	await knex("items").insert([
		{ image: 'https://bit.ly/3jo6hU7', name: 'dragon1', description: 'very nice1', price: 50, location: 'zimbabwe'},
	])
}