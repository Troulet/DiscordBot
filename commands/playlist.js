const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('playlist')
		.setDescription('Envoie la playlist de la saison'),
	async execute(interaction) {
		await interaction.reply({ content: 'Voici le lien vers la playlist de la saison : https://kodcast.com/w/qethJR8weJdGQT5j4Whfvr', ephemeral: false });
	},
};