exports.seed = async function(knex) {
	await knex("users").truncate()
	await knex("users").insert([
		{ username: 'masantea', password: '$2a$10$BEMjgPC.u6b1imX1Pv3HNOEo7LWab2zKQ6PqZGNnVlIvVr7e7Nwa2'},
	])
}