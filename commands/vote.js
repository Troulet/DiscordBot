const { SlashCommandBuilder } = require("discord.js");
const buenoId = '229241724130557952'
const trouletId = '321215339079925761'
const re = new RegExp('\d+\D*\d+\D*\d+\D*\d+\D*\d+\D*\d+\D*\d+\D*\d+\D*\d+\D*\d+\D*\d+\D*\d+\D*\d+\D*\d+\D*\d+\D*\d+\D*\d+\D*\d+\D*\d+\D*\d+')
let voteList = []

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
        
        if(re.test(options.getString('20_votes')) && !voteList.includes(interaction.user.username)){
            client.users.fetch(trouletId).then((user) => {
                user.send(options.getString('20_votes'))
                user.send(interaction.user.username)
            })
            await interaction.reply({ content: `Vote bien pris en compte !`, ephemeral: true });
            await interaction.followUp({ content: `Merci pour ton vote ${interaction.user.username} !`, ephemeral: false })
            await interaction.followUp({content: `${voteList}`})
            voteList.push(interaction.user.username)
            await interaction.followUp({content: `${voteList}`})
        }
        else if(!re.test(options.getString('20_votes'))){
            await interaction.reply({content: `${re.test(options.getString('20_votes'))}`})
            await interaction.reply({ content: `Ton vote est incorrect, réessaie ${interaction.user.username} !`, ephemeral: true })
        }
        else {
            await interaction.reply({ content: `Tu as déjà voté cette saison, réessaie la saison prochaine ${interaction.user.username} !`, ephemeral: true })
        }
	},
};