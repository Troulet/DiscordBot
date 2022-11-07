const { SlashCommandBuilder } = require("discord.js");
const buenoId = '229241724130557952'
const trouletId = '321215339079925761'

module.exports = {
	data: new SlashCommandBuilder()
		.setName('vote')
		.setDescription('Votez pour vos openings d\'animés préférés')
        .addStringOption(option =>
            option.setName('20_votes')
                .setDescription('Liste de 20 nombres correspondant aux openings d\'animés')
                .setRequired(true)),
	async execute(interaction) {
        const {client, options} = interaction;
        client.users.fetch(buenoId).then((user) => {
            user.send(options.getString('20_votes'))
            user.send(interaction.user.username)
        })
		await interaction.reply({ content: `Vote bien pris en compte !`, ephemeral: true });
        await interaction.followUp({ content: `Merci pour ton vote ${interaction.user.username} !`, ephemeral: false })
	},
};