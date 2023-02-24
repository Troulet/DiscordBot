const { SlashCommandBuilder } = require("discord.js");

const animeNameList = [
    "Aikatsu! 10th Story: Mirai e no Stairway (2023)",
    "Ars no Kyojuu",
    "Ayakashi Triangle",
    "Azur Lane: Queen's Orders",
    "Benriya Saitou-san, Isekai ni Iku",
    "Blue Lock",
    "Boku no Hero Academia 6th Season",
    "Boruto: Naruto Next Generations",
    "Buddy Dadies",
    "Bungou Stray Dogs 4th Season",
    "Cap Kakumei Bottleman DX",
    "Cardfight!! Vanguard: Will+Dress Season 2",
    "Cool Doji Danshi",
    "D4DJ All Mix",
    "Duel Master Win!",
    "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka IV: Fuka Shou - Yakusai-hen",
    "Eiyuuou, Bu wo Kiwameru Tame Tenseisu: Soshite, Sekai Saikyou no Minarai Kishi♀",
    "Eternal Boys",
    "High Card",
    "Hikari no Ou",
    "Hyouken no Majutsushi ga Sekai wo Suberu",
    "Ijiranaide, Nagatoro-san 2nd Attack",
    "Inu ni Nattara Suki na Hito ni Hirowareta.",
    "Isekai Nonbiri Nouka",
    "Itai no wa Iya nano de Bougyoryoku ni Kyokufuri Shitai to Omoimasu. 2",
    "Junji Ito Maniac: Japanese Tales of the Macabre",
    "Kaiko sareta Ankoku Heishi (30-dai) no Slow na Second Life",
    "Kami-tachi ni Hirowareta Otoko 2nd Season",
    "Koori Zokusei Danshi to Cool na Douryou Joshi",
    "Kubo-san wa Mob wo Yurusanai",
    "Kyokou Suiri Season 2",
    "Kyuuketsuki Sugu Shinu 2",
    "Lupin Zero",
    "Majutsushi Orphen Hagure Tabi: Urbanrama-hen",
    "Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou II",
    "Mononogatari",
    "Mou Ippon!",
    "NieR:Automata Ver1.1a",
    "Ningen Fushin no Boukensha-tachi ga Sekai wo Sukuu you desu",
    "Nokemono-tachi no Yoru",
    "Onii-chan wa Oshimai!",
    "Ooyukiumi no Kaina",
    "Otonari no Tenshi-sama ni Itsunomanika Dame Ningen ni Sareteita Ken",
    "Pocket Monsters: Mezase Pokémon Master",
    "Revenger",
    "Rougo ni Sonaete Isekai de 8-manmai no Kinka wo Tamemasu",
    "Saikyou Onmyouji no Isekai Tenseiki: Geboku no Youkai-domo ni Kurabete Monster ga Yowasugirunda ga",
    "Shin Shinka no Mi: Shiranai Uchi ni Kachigumi Jinsei",
    "Shuumatsu no Walküre II",
    "Spy Kyoushitsu",
    "Sugar Apple Fairy Tale",
    "Technoroid Overmind",
    "Tensei Oujo to Tensai Reijou no Mahou Kakumei",
    "The Legend of Heroes: Sen no Kiseki - Northern War",
    "Tokyo Revengers: Seiya Kessen-hen",
    "Tomo-chan wa Onnanoko!",
    "Tondemo Skill de Isekai Hourou Meshi",
    "Toutotsu ni Egypt Shin 2",
    "Trigun Stampede",
    "Tsundere Akuyaku Reijou Liselotte to Jikkyou no Endou-kun to Kaisetsu no Kobayashi-san",
    "Tsurune: Tsunagari no Issha",
    "UniteUp!",
    "Urusei Yatsura (2022)",
    "Vinland Saga Season 2",
    "Yowai 5000-nen no Soushoku Dragon, Iwarenaki Jaryuu Nintei",
    "Yowamushi Pedal: Limit Break"
];

const animeLinks = [
    "https://youtu.be/9zotudTnZKs",
    "https://files.catbox.moe/c3g9ai.webm",
    "https://files.catbox.moe/g9fvr9.webm",
    "https://www.youtube.com/watch?v=TVoDoYSXINc&t=5s&ab_channel=Itsukanime",
    "https://files.catbox.moe/tkwyme.webm",
    "https://files.catbox.moe/u0woxx.webm",
    "https://files.catbox.moe/v0lw02.webm",
    "https://files.catbox.moe/22e0oc.webm",
    "https://files.catbox.moe/2jk17f.webm",
    "https://files.catbox.moe/mawc0i.webm",
    "https://files.catbox.moe/qg177c.webm",
    "https://files.catbox.moe/8qwgs0.webm",
    "https://files.catbox.moe/e0meu7.webm",
    "https://files.catbox.moe/8zweql.webm",
    "https://files.catbox.moe/2q0rq1.webm",
    "https://files.catbox.moe/sr799q.webm",
    "https://files.catbox.moe/6w64b2.webm",
    "https://files.catbox.moe/khuiua.webm",
    "https://files.catbox.moe/bntr06.webm",
    "https://files.catbox.moe/a7oqw1.webm",
    "https://files.catbox.moe/tuc59m.webm",
    "https://files.catbox.moe/8ni9hq.webm",
    "https://files.catbox.moe/i21uzj.webm",
    "https://files.catbox.moe/ittfa0.webm",
    "https://files.catbox.moe/xe1gg9.webm",
    "https://files.catbox.moe/u3bhkx.webm",
    "https://files.catbox.moe/e2p23o.webm",
    "https://files.catbox.moe/5apnh9.webm",
    "https://files.catbox.moe/y86f2w.webm",
    "https://files.catbox.moe/15pc68.webm",
    "https://files.catbox.moe/8a3js8.webm",
    "https://files.catbox.moe/na3xnb.webm",
    "https://files.catbox.moe/4g4qgf.webm",
    "https://files.catbox.moe/9qk0i3.webm",
    "https://files.catbox.moe/ms3hxd.webm",
    "https://files.catbox.moe/g9fvr9.webm",
    "https://files.catbox.moe/bsjhhh.webm",
    "https://files.catbox.moe/uw18bk.webm",
    "https://files.catbox.moe/6qv8ly.webm",
    "https://files.catbox.moe/g1a9q1.webm",
    "https://files.catbox.moe/xrsi5s.webm",
    "https://files.catbox.moe/jep75m.webm",
    "https://files.catbox.moe/ngfoih.webm",
    "https://files.catbox.moe/7ro0xr.webm",
    "https://files.catbox.moe/zdawj4.webm",
    "https://files.catbox.moe/nq78w1.webm",
    "https://files.catbox.moe/wwe6dm.webm",
    "https://files.catbox.moe/qafpz2.webm",
    "https://files.catbox.moe/87y2l5.webm",
    "https://files.catbox.moe/gkq41z.webm",
    "https://files.catbox.moe/eeakk9.webm",
    "https://files.catbox.moe/glpg3u.webm",
    "https://files.catbox.moe/0w10e2.webm",
    "https://files.catbox.moe/5qv6nw.webm",
    "https://files.catbox.moe/u07fyx.webm",
    "https://files.catbox.moe/12ag1b.webm",
    "https://files.catbox.moe/a7i2h6.webm",
    "https://files.catbox.moe/7dz61k.webm",
    "https://files.catbox.moe/tpcctj.webm",
    "https://files.catbox.moe/g04awg.webm",
    "https://files.catbox.moe/4iz8ci.webm",
    "https://files.catbox.moe/fki30d.webm",
    "https://files.catbox.moe/5nj3bf.webm",
    "https://files.catbox.moe/ja599q.webm",
    "https://files.catbox.moe/87qpg5.webm",
    "https://files.catbox.moe/beas1a.webm"
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
            case 57:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[56]} :\n ${animeLinks[56]}`, ephemeral: false });
                break;
            case 58:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[57]} :\n ${animeLinks[57]}`, ephemeral: false });
                break;
            case 59:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[58]} :\n ${animeLinks[58]}`, ephemeral: false });
                break;
            case 60:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[59]} :\n ${animeLinks[59]}`, ephemeral: false });
                break;
            case 61:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[60]} :\n ${animeLinks[60]}`, ephemeral: false });
                break;
            case 62:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[61]} :\n ${animeLinks[61]}`, ephemeral: false });
                break;
            case 63:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[62]} :\n ${animeLinks[62]}`, ephemeral: false });
                break;
            case 64:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[63]} :\n ${animeLinks[63]}`, ephemeral: false });
                break;
            case 65:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[64]} :\n ${animeLinks[64]}`, ephemeral: false });
                break;
            case 66:
                await interaction.reply({ content: `Voici le lien vers l\'opening de ${animeNameList[65]} :\n ${animeLinks[65]}`, ephemeral: false });
                break;
            default:
                await interaction.reply({ content: `Hum... il n'y a pas autant d'animé cette saison ${interaction.user.username}, désolé !`, ephemeral: true });
                break;
        }
	},
};