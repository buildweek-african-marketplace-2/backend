exports.seed = async function(knex) {
	await knex("items").truncate()
	await knex("items").insert([
		{ image: 'https://bit.ly/3jo6hU7', name: 'dragon1', description: 'very nice1', price: 50, location: 'zimbabwe'},
		{ image: 'https://bit.ly/3jo6hU7', name: 'dragon2', description: 'very nice2', price: 50, location: 'Nigeria'},
		{ image: 'https://bit.ly/3jo6hU7', name: 'dragon3', description: 'very nice3', price: 50, location: 'Ethiopia'},
	])
}