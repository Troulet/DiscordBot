const { SlashCommandBuilder } = require("discord.js");

const animeNameList = [
    "Alice Gear Aegis Expansion",
    "Ao no Orchestra",
    "Boku no Kokoro no Yabai Yatsu",
    "Dead Mount Death Play",
    "Dr. Stone: New World",
    "Edens Zero 2nd Season",
    "Edomae Elf",
    "Flaglia: Natsuyasumi no Monogatari",
    "Go! Go! Vehicle Zoo",
    "Hirogaru Sky! Precure",
    "Isekai de Cheat Skill wo Te ni Shita Ore wa, Genjitsu Sekai wo mo Musou Suru: Level Up wa Jinsei wo Kaeta",
    "Isekai One Turn Kill Nee-san: Ane Douhan no Isekai Seikatsu Hajimemashita",
    "Isekai Shoukan wa Nidome desu",
    "Isekai wa Smartphone to Tomo ni. 2",
    "Jigokuraku",
    "Jijou wo Shiranai Tenkousei ga Guigui Kuru.",
    "Kaminaki Sekai no Kamisama Katsudou",
    "Kanojo ga Koushaku-tei ni Itta Riyuu",
    "Kawaisugi Crisis",
    "Kimetsu no Yaiba: Katanakaji no Sato-hen",
    "Kimi wa Houkago Insomnia",
    "Kizuna no Allele",
    "Kono Subarashii Sekai ni Bakuen wo!",
    "Kuma Kuma Kuma Bear Punch!",
    "Mahou Shoujo Magical Destroyers",
    "Mahoutsukai no Yome Season 2",
    "Majutsushi Orphen Haguretabi: Seiiki-hen",
    "Mashle: Magic and Muscles",
    "Megami no Café Terrace",
    "Mix: Meisei Story - Nidome no Natsu, Sora no Mukou e",
    "Meitantei Conan",
    "Mobile Suit Gundam: Suisei no Majo Season 2",
    "My Home Hero",
    "Niehime to Kemono no Ou",
    "Opus.COLORs",
    "Oshi no Ko",
    "Otonari ni Ginga",
    "Ousama Ranking: Yuuki no Takarabako",
    "Pocket Monsters",
    "Rokudou no Onna-tachi",
    "Skip to Loafer",
    "Tengoku Daimakyou",
    "Tensei Kizoku no Isekai Boukenroku: Jichou wo Shiranai Kamigami no Shito",
    "The IDOLM@STER Cinderella Girls: U149",
    "The Marginal Service",
    "Tokyo Mew Mew New ♡ 2nd Season",
    "Tonikaku Kawaii 2nd Season",
    "Tousouchuu: Great Mission",
    "Uma Musume: Pretty Derby - Road to the Top",
    "Watashi no Yuri wa Oshigoto desu!",
    "World Dai Star",
    "Vinland Saga",
    "Yamada-kun to Lv999 no Koi o Suru",
    "Yu-Gi-Oh! Go Rush!! OP 2",
    "Yuusha ga Shinda!",
    "Duel Masters Win: Duel Wars"
];

const animeLinks = [
    "https://files.catbox.moe/t442w6.webm",
    "https://files.catbox.moe/vx1ngz.webm",
    "https://files.catbox.moe/rc2fhu.webm",
    "https://files.catbox.moe/13wyuj.webm",
    "https://files.catbox.moe/dyoint.webm",
    "https://files.catbox.moe/7x6c5t.webm",
    "https://files.catbox.moe/qttm2d.webm",
    "https://files.catbox.moe/iof792.webm",
    "https://files.catbox.moe/p1n7qv.mp4",
    "https://files.catbox.moe/kf5zlf.webm",
    "https://files.catbox.moe/kcm08d.webm",
    "https://files.catbox.moe/3anut1.webm",
    "https://files.catbox.moe/ohh22j.webm",
    "https://files.catbox.moe/mpjdgy.webm",
    "https://files.catbox.moe/g43wvc.webm",
    "https://files.catbox.moe/kevlpp.webm",
    "https://files.catbox.moe/e228cr.webm",
    "https://files.catbox.moe/h902bo.webm",
    "https://files.catbox.moe/0s2ib2.webm",
    "https://files.catbox.moe/x3rmrw.webm",
    "https://files.catbox.moe/0e3i1l.webm",
    "https://files.catbox.moe/qxuwt5.webm",
    "https://files.catbox.moe/owxr1z.webm",
    "https://files.catbox.moe/2im721.webm",
    "https://files.catbox.moe/1it17x.webm",
    "https://files.catbox.moe/9zbas9.webm",
    "https://files.catbox.moe/jatch7.webm",
    "https://files.catbox.moe/rw7g4a.webm",
    "https://files.catbox.moe/c9ppsp.webm",
    "https://files.catbox.moe/8yjhc7.webm",
    "https://files.catbox.moe/imr8oj.webm",
    "https://files.catbox.moe/o0yvka.webm",
    "https://files.catbox.moe/0e8zk6.webm",
    "https://files.catbox.moe/ntpj00.webm",
    "https://files.catbox.moe/olcsml.webm",
    "https://files.catbox.moe/p8te61.webm",
    "https://files.catbox.moe/r7o2dx.webm",
    "https://files.catbox.moe/bgn2w9.webm",
    "https://files.catbox.moe/rgmpwq.webm",
    "https://files.catbox.moe/5sts1v.webm",
    "https://files.catbox.moe/ty5w1d.webm",
    "https://files.catbox.moe/8hwhz5.webm",
    "https://files.catbox.moe/cpe8g3.webm",
    "https://files.catbox.moe/rmtpy1.webm",
    "https://files.catbox.moe/zb0yaa.webm",
    "https://files.catbox.moe/hpugn6.webm",
    "https://files.catbox.moe/dzaeg2.webm",
    "https://files.catbox.moe/ejs3ix.webm",
    "https://files.catbox.moe/dh946k.webm",
    "https://files.catbox.moe/cmtugt.webm",
    "https://files.catbox.moe/xzx2gr.webm",
    "https://files.catbox.moe/x4wo2e.webm",
    "https://files.catbox.moe/4odqtc.webm",
    "https://files.catbox.moe/ibb51c.mp4",
    "https://files.catbox.moe/ccsot0.webm",
    "https://files.catbox.moe/7kq8nz.mp4"
]

module.exports = {
	data: new SlashCommandBuilder()
		.setName('watch')
		.setDescription('Regarde l\'opening de l\'animé que tu veux')
        .addIntegerOption(option =>
            option.setName('numero_de_l_opening')
                .setDescription('Entre le numéro de l\'opening que tu souhaites regarder')
                .setRequired(true)),
	async execute(interaction) {
        const {options} = interaction
        switch(options.getInteger('numero_de_l_opening')){
            case 1:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[0]} :\n ${animeLinks[0]}`, ephemeral: false });
                break;
            case 2:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[1]} :\n ${animeLinks[1]}`, ephemeral: false });
                break;
            case 3:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[2]} :\n ${animeLinks[2]}`, ephemeral: false });
                break;
            case 4:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[3]} :\n ${animeLinks[3]}`, ephemeral: false });
                break;
            case 5:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[4]} :\n ${animeLinks[4]}`, ephemeral: false });
                break;
            case 6:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[5]} :\n ${animeLinks[5]}`, ephemeral: false });
                break;
            case 7:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[6]} :\n ${animeLinks[6]}`, ephemeral: false });
                break;
            case 8:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[7]} :\n ${animeLinks[7]}`, ephemeral: false });
                break;
            case 9:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[8]} :\n ${animeLinks[8]}`, ephemeral: false });
                break;
            case 10:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[9]} :\n ${animeLinks[9]}`, ephemeral: false });
                break;
            case 11:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[10]} :\n ${animeLinks[10]}`, ephemeral: false });
                break;
            case 12:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[11]} :\n ${animeLinks[11]}`, ephemeral: false });
                break;
            case 13:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[12]} :\n ${animeLinks[12]}`, ephemeral: false });
                break;
            case 14:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[13]} :\n ${animeLinks[13]}`, ephemeral: false });
                break;
            case 15:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[14]} :\n ${animeLinks[14]}`, ephemeral: false });
                break;
            case 16:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[15]} :\n ${animeLinks[15]}`, ephemeral: false });
                break;
            case 17:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[16]} :\n ${animeLinks[16]}`, ephemeral: false });
                break;
            case 18:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[17]} :\n ${animeLinks[17]}`, ephemeral: false });
                break;
            case 19:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[18]} :\n ${animeLinks[18]}`, ephemeral: false });
                break;
            case 20:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[19]} :\n ${animeLinks[19]}`, ephemeral: false });
                break;
            case 21:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[20]} :\n ${animeLinks[20]}`, ephemeral: false });
                break;
            case 22:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[21]} :\n ${animeLinks[21]}`, ephemeral: false });
                break;
            case 23:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[22]} :\n ${animeLinks[22]}`, ephemeral: false });
                break;
            case 24:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[23]} :\n ${animeLinks[23]}`, ephemeral: false });
                break;
            case 25:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[24]} :\n ${animeLinks[24]}`, ephemeral: false });
                break;
            case 26:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[25]} :\n ${animeLinks[25]}`, ephemeral: false });
                break;
            case 27:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[26]} :\n ${animeLinks[26]}`, ephemeral: false });
                break;
            case 28:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[27]} :\n ${animeLinks[27]}`, ephemeral: false });
                break;
            case 29:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[28]} :\n ${animeLinks[28]}`, ephemeral: false });
                break;
            case 30:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[29]} :\n ${animeLinks[29]}`, ephemeral: false });
                break;
            case 31:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[30]} :\n ${animeLinks[30]}`, ephemeral: false });
                break;
            case 32:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[31]} :\n ${animeLinks[31]}`, ephemeral: false });
                break;
            case 33:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[32]} :\n ${animeLinks[32]}`, ephemeral: false });
                break;
            case 34:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[33]} :\n ${animeLinks[33]}`, ephemeral: false });
                break;
            case 35:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[34]} :\n ${animeLinks[34]}`, ephemeral: false });
                break;
            case 36:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[35]} :\n ${animeLinks[35]}`, ephemeral: false });
                break;
            case 37:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[36]} :\n ${animeLinks[36]}`, ephemeral: false });
                break;
            case 38:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[37]} :\n ${animeLinks[37]}`, ephemeral: false });
                break;
            case 39:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[38]} :\n ${animeLinks[38]}`, ephemeral: false });
                break;
            case 40:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[39]} :\n ${animeLinks[39]}`, ephemeral: false });
                break;
            case 41:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[40]} :\n ${animeLinks[40]}`, ephemeral: false });
                break;
            case 42:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[41]} :\n ${animeLinks[41]}`, ephemeral: false });
                break;
            case 43:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[42]} :\n ${animeLinks[42]}`, ephemeral: false });
                break;
            case 44:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[43]} :\n ${animeLinks[43]}`, ephemeral: false });
                break;
            case 45:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[44]} :\n ${animeLinks[44]}`, ephemeral: false });
                break;
            case 46:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[45]} :\n ${animeLinks[45]}`, ephemeral: false });
                break;
            case 47:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[46]} :\n ${animeLinks[46]}`, ephemeral: false });
                break;
            case 48:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[47]} :\n ${animeLinks[47]}`, ephemeral: false });
                break;
            case 49:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[48]} :\n ${animeLinks[48]}`, ephemeral: false });
                break;
            case 50:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[49]} :\n ${animeLinks[49]}`, ephemeral: false });
                break;
            case 51:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[50]} :\n ${animeLinks[50]}`, ephemeral: false });
                break;
            case 52:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[51]} :\n ${animeLinks[51]}`, ephemeral: false });
                break;
            case 53:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[52]} :\n ${animeLinks[52]}`, ephemeral: false });
                break;
            case 54:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[53]} :\n ${animeLinks[53]}`, ephemeral: false });
                break;
            case 55:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[54]} :\n ${animeLinks[54]}`, ephemeral: false });
                break;
            case 56:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[55]} :\n ${animeLinks[55]}`, ephemeral: false });
                break;
            default:
                await interaction.reply({ content: `Hum... il n'y a pas autant d'animé cette saison ${interaction.user.username}, désolé !`, ephemeral: true });
                break;
        }
	},
};