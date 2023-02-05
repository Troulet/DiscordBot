const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('playlist')
		.setDescription('Envoie la playlist de la saison'),
	async execute(interaction) {
		await interaction.reply({ content: 'Voici le lien vers la playlist de la saison : https://kodcast.com/w/aPo1XhJrD5nyfW7p5ihA12', ephemeral: false });
	},
};