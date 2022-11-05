const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Vous aide si vous ne savez plus comment m\'utiliser'),
	async execute(interaction) {
		await interaction.reply({ 
            embeds: [
                new EmbedBuilder()
                    .setTitle('Je suis là pour vous aider')
                    .setAuthor({
                        name: 'MiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiisterBueno',
                        iconURL: 'https://m.media-amazon.com/images/M/MV5BNjg5NmE5MjAtNGJjNC00YmM4LWI4MDUtMjBkYWJhMTYwMWYzXkEyXkFqcGdeQXVyMTAzNTI3NjUw._V1_.jpg'
                    })
                    .addFields(
                        { name: '**/watch**', value: 'Vous permet de voir un opening en particulier', inline: false }
                    )
                    .addFields(
                        { name: '**/playlist**', value: 'Vous permet de voir la playlist de la saison', inline: false }
                    )
                    .addFields(
                        { name: '**/vote**', value: 'Vous permet de voter pour vos openings préféré', inline: false }
                    )
            ]});
	},
};