const { SlashCommandBuilder } = require("discord.js");

let animeNameList = [
    "15-shuunen Code Geass: Hangyaku no Lelouch R",
    "4-nin wa Sorezore Uso wo Tsuku",
    "Akiba Maid Sensou",
    "Akuyaku Reijou nanode Last Boss wo Kattemimashita",
    "Berserk : Ougon Jidaihen MEMORIAL EDITION",
    "Bleach: Sennen Kessen-hen",
    "Blue Lock",
    "Bocchi the Rock!",
    "Boku no Hero Academia 6th Season",
    "C Danchi",
    "Chainsaw Man",
    "Cool Doji Danshi",
    "Detective Conan: Hannin no Hanzawa-san",
    "Do It Yourself!",
    "Duel Masters Win",
    "Eternal Boys",
    "Futoku no Guild",
    "Fuufu Ijou, Koibito Miman",
    "Golden Kamuy 4th Season",
    "Human Bug Daigaku Fushi Gakubu Fukou Gakka",
    "IDOLiSH7: Third Beat! 2nd Season",
    "Kage no Jitsuryokusha ni Naritakute!",
    "Koukyuu no Karasu",
    "Mairimashita! Iruma-kun 3rd Season",
    "Megaton-kyuu Musashi Season 2",
    "Mob Psycho 100 III",
    "Mobile Suit Gundam: The Witch from Mercury",
    "Mushikaburi-hime",
    "Muv-Luv Alternative 2nd Season",
    "Noumin Kanren no Skill Bakka Agetetara Nazeka Tsuyoku Natta",
    "Obake Zukan!",
    "Peter Grill to Kenja no Jikan: Super Extra",
    "Reiwa no Di Gi Charat",
    "Renai Flops",
    "Romantic Killer",
    "Seiken Densetsu: Legend of Mana - The Teardrop Crystal",
    "Shinmai Renkinjutsushi no Tenpo Keiei",
    "Shinobi no Ittoki",
    "SPY×FAMILY Part 2",
    "Sylvanian Families: Freya no Happy Diary",
    "Tensei shitara Ken Deshita",
    "Uchi no Shishou wa Shippo ga Nai",
    "Urusei Yatsura (2022)",
    "Uzaki-chan wa Asobitai! ω",
    "Vazzrock The Animation OP1",
    "Vazzrock The Animation OP2",
    "Yama no Susume: Next Summit",
    "Yowamushi Pedal: Limit Break",
    "Yuusha Party wo Tsuihou sareta Beast Tamer, Saikyoushu no Nekomimi Shoujo to Deau",
    "Poputepipikku 2nd Season OP1",
    "Poputepipikku 2nd Season OP2",
    "Hoshi no Samidare",
    "Shadowverse Flame",
    "Ninjala",
    "Arknights: Prelude to Dawn",
    "Yojouhan Time Machine Blues",
    "Cyberpunk: Edgerunners",
    "Exception",
    "KanColle"
];

let animeLinks = [
    "https://files.catbox.moe/ljc8kp.webm",
    "https://v.animethemes.moe/4Uso-OP1.webm",
    "https://v.animethemes.moe/AkibaMaidSensou-OP1.webm",
    "https://v.animethemes.moe/Akulas-OP1.webm",
    "https://v.animethemes.moe/Berserk2022-OP1.webm",
    "https://v.animethemes.moe/Bleach2022-OP1.webm",
    "https://v.animethemes.moe/BlueLock-OP1.webm",
    "https://v.animethemes.moe/BocchiTheRock-OP1.webm",
    "https://v.animethemes.moe/BokuNoHeroAcademiaS6-OP1.webm",
    "https://v.animethemes.moe/CDanchi-OP1.webm",
    "https://v.animethemes.moe/ChainsawMan-OP1.webm",
    "https://v.animethemes.moe/CoolDojiDanshi-OP1.webm",
    "https://v.animethemes.moe/HanninNoHanzawaSan-OP1.webm",
    "https://v.animethemes.moe/DoItYourself-OP1.webm",
    "https://files.catbox.moe/jf7gvb.webm",
    "https://files.catbox.moe/4swuoc.webm",
    "https://v.animethemes.moe/FutokuNoGuild-OP1.webm",
    "https://v.animethemes.moe/Fuukoi-OP1.webm",
    "https://v.animethemes.moe/GoldenKamuyS4-OP1.webm",
    "https://v.animethemes.moe/HumanBugDaigaku-OP1.webm",
    "https://v.animethemes.moe/IDOLiSH7S3Part2-OP1.webm",
    "https://v.animethemes.moe/ShadowGarden-OP1.webm",
    "https://v.animethemes.moe/KoukyuuNoKarasu-OP1.webm",
    "https://v.animethemes.moe/MairimashitaIrumaKunS3-OP1.webm",
    "https://files.catbox.moe/qxag3v.webm",
    "https://v.animethemes.moe/MobPsycho100S3-OP1.webm",
    "https://v.animethemes.moe/GundamTheWitchFromMercury-OP1.webm",
    "https://v.animethemes.moe/MushikaburiHime-OP1.webm",
    "https://v.animethemes.moe/MuvLuvAlternativeS2-OP1.webm",
    "https://v.animethemes.moe/NouminKanren-OP1.webm",
    "https://files.catbox.moe/u7gkt6.webm",
    "https://v.animethemes.moe/PeterGrillToKenjaNoJikanSuperExtra-OP1.webm",
    "https://files.catbox.moe/40eiih.webm",
    "https://v.animethemes.moe/RenaiFlops-OP1.webm",
    "https://files.catbox.moe/ergo0p.webm",
    "https://v.animethemes.moe/SeikenDensetsu-OP1.webm",
    "https://v.animethemes.moe/ShinmaiRenkin-OP1.webm",
    "https://v.animethemes.moe/ShinobiNoIttoki-OP1.webm",
    "https://v.animethemes.moe/SpyXFamilyPart2-OP1.webm",
    "https://files.catbox.moe/91lppj.webm",
    "https://v.animethemes.moe/Tenken-OP1.webm",
    "https://v.animethemes.moe/ShippoNa-OP1.webm",
    "https://v.animethemes.moe/UruseiYatsura2022-OP1.webm",
    "https://v.animethemes.moe/UzakiChanWaAsobitaiS2-OP1.webm",
    "https://v.animethemes.moe/Vazzrock-OP1.webm",
    "https://files.catbox.moe/om9wtd.webm",
    "https://v.animethemes.moe/YamaNoSusumeS4-OP1.webm",
    "https://v.animethemes.moe/YowamushiPedalLimitBreak-OP1.webm",
    "https://v.animethemes.moe/BeastTamer-OP1.webm",
    "https://v.animethemes.moe/PopTeamEpicS2-OP1.webm",
    "https://v.animethemes.moe/PopTeamEpicS2-OP2.webm",
    "https://v.animethemes.moe/ShadowverseFlame-OP2.webm",
    "https://v.animethemes.moe/HoshiNoSamidare-OP2.webm",
    "https://files.catbox.moe/0hh0zo.webm",
    "https://files.catbox.moe/e50t9t.webm",
    "https://files.catbox.moe/xypssq.webm",
    "https://files.catbox.moe/1mzq2e.webm",
    "https://files.catbox.moe/03j4is.webm",
    "https://v.animethemes.moe/KantaiCollectionS2-OP1.webm"
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
            default:
                await interaction.reply({ content: `Hum... tu te moques de moi ${interaction.user.username} ?`, ephemeral: true });
                break;
        }
	},
};