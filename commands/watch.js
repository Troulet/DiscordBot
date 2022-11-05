const { SlashCommandBuilder } = require("discord.js");

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
                await interaction.reply({ content: 'Voici le lien vers l\'opening de 15-shuunen Code Geass: Hangyaku no Lelouch R :\n https://files.catbox.moe/ljc8kp.webm', ephemeral: false });
                break;
            case 2:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de 4-nin wa Sorezore Uso wo Tsuku :\n https://v.animethemes.moe/4Uso-OP1.webm', ephemeral: false });
                break;
            case 3:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Akiba Maid Sensou :\n https://v.animethemes.moe/AkibaMaidSensou-OP1.webm', ephemeral: false });
                break;
            case 4:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Akuyaku Reijou nanode Last Boss wo Kattemimashita :\n https://v.animethemes.moe/Akulas-OP1.webm', ephemeral: false });
                break;
            case 5:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Berserk : Ougon Jidaihen MEMORIAL EDITION :\n https://v.animethemes.moe/Berserk2022-OP1.webm', ephemeral: false });
                break;
            case 6:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Bleach: Sennen Kessen-hen :\n https://v.animethemes.moe/Bleach2022-OP1.webm', ephemeral: false });
                break;
            case 7:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Blue Lock :\n https://v.animethemes.moe/BlueLock-OP1.webm', ephemeral: false });
                break;
            case 8:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Bocchi the Rock! :\n https://v.animethemes.moe/BocchiTheRock-OP1.webm', ephemeral: false });
                break;
            case 9:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Boku no Hero Academia 6th Season :\n https://v.animethemes.moe/BokuNoHeroAcademiaS6-OP1.webm', ephemeral: false });
                break;
            case 10:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de C Danchi :\n https://v.animethemes.moe/CDanchi-OP1.webm', ephemeral: false });
                break;
            case 11:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Chainsaw Man :\n https://v.animethemes.moe/ChainsawMan-OP1.webm', ephemeral: false });
                break;
            case 12:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Cool Doji Danshi :\n https://v.animethemes.moe/CoolDojiDanshi-OP1.webm', ephemeral: false });
                break;
            case 13:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Detective Conan: Hannin no Hanzawa-san :\n https://v.animethemes.moe/HanninNoHanzawaSan-OP1.webm', ephemeral: false });
                break;
            case 14:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Do It Yourself! :\n https://v.animethemes.moe/DoItYourself-OP1.webm', ephemeral: false });
                break;
            case 15:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Duel Masters Win :\n https://files.catbox.moe/jf7gvb.webm', ephemeral: false });
                break;
            case 16:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Eternal Boys :\n https://files.catbox.moe/4swuoc.webm', ephemeral: false });
                break;
            case 17:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Futoku no Guild :\n https://v.animethemes.moe/FutokuNoGuild-OP1.webm', ephemeral: false });
                break;
            case 18:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Fuufu Ijou, Koibito Miman. :\n https://v.animethemes.moe/Fuukoi-OP1.webm', ephemeral: false });
                break;
            case 19:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Golden Kamuy 4th Season :\n https://v.animethemes.moe/GoldenKamuyS4-OP1.webm', ephemeral: false });
                break;
            case 20:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Human Bug Daigaku Fushi Gakubu Fukou Gakka :\n https://v.animethemes.moe/HumanBugDaigaku-OP1.webm', ephemeral: false });
                break;
            case 21:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de IDOLiSH7: Third Beat! 2nd Season :\n https://v.animethemes.moe/IDOLiSH7S3Part2-OP1.webm', ephemeral: false });
                break;
            case 22:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Kage no Jitsuryokusha ni Naritakute! :\n https://v.animethemes.moe/ShadowGarden-OP1.webm', ephemeral: false });
                break;
            case 23:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Koukyuu no Karasu :\n https://v.animethemes.moe/KoukyuuNoKarasu-OP1.webm', ephemeral: false });
                break;
            case 24:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Mairimashita! Iruma-kun 3rd Season :\n https://v.animethemes.moe/MairimashitaIrumaKunS3-OP1.webm', ephemeral: false });
                break;
            case 25:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Megaton-kyuu Musashi Season 2 :\n https://files.catbox.moe/qxag3v.webm', ephemeral: false });
                break;
            case 26:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Mob Psycho 100 III :\n https://v.animethemes.moe/MobPsycho100S3-OP1.webm', ephemeral: false });
                break;
            case 27:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Mobile Suit Gundam: The Witch from Mercury :\n https://v.animethemes.moe/GundamTheWitchFromMercury-OP1.webm', ephemeral: false });
                break;
            case 28:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Mushikaburi-hime :\n https://v.animethemes.moe/MushikaburiHime-OP1.webm', ephemeral: false });
                break;
            case 29:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Muv-Luv Alternative 2nd Season :\n https://v.animethemes.moe/MuvLuvAlternativeS2-OP1.webm', ephemeral: false });
                break;
            case 30:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Noumin Kanren no Skill Bakka Agetetara Nazeka Tsuyoku Natta. :\n https://v.animethemes.moe/NouminKanren-OP1.webm', ephemeral: false });
                break;
            case 31:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Obake Zukan! :\n https://files.catbox.moe/u7gkt6.webm', ephemeral: false });
                break;
            case 32:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Peter Grill to Kenja no Jikan: Super Extra :\n https://v.animethemes.moe/PeterGrillToKenjaNoJikanSuperExtra-OP1.webm', ephemeral: false });
                break;
            case 33:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Reiwa no Di Gi Charat :\n https://files.catbox.moe/40eiih.webm', ephemeral: false });
                break;
            case 34:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Renai Flops :\n https://v.animethemes.moe/RenaiFlops-OP1.webm', ephemeral: false });
                break;
            case 35:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Romantic Killer :\n https://files.catbox.moe/ergo0p.webm', ephemeral: false });
                break;
            case 36:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Seiken Densetsu: Legend of Mana - The Teardrop Crystal :\n https://v.animethemes.moe/SeikenDensetsu-OP1.webm', ephemeral: false });
                break;
            case 37:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Shinmai Renkinjutsushi no Tenpo Keiei :\n https://v.animethemes.moe/ShinmaiRenkin-OP1.webm', ephemeral: false });
                break;
            case 38:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Shinobi no Ittoki :\n https://v.animethemes.moe/ShinobiNoIttoki-OP1.webm', ephemeral: false });
                break;
            case 39:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de SPY×FAMILY Part 2 :\n https://v.animethemes.moe/SpyXFamilyPart2-OP1.webm', ephemeral: false });
                break;
            case 40:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Sylvanian Families: Freya no Happy Diary :\n https://files.catbox.moe/91lppj.webm', ephemeral: false });
                break;
            case 41:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Tensei shitara Ken Deshita :\n https://v.animethemes.moe/Tenken-OP1.webm', ephemeral: false });
                break;
            case 42:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Uchi no Shishou wa Shippo ga Nai :\n https://v.animethemes.moe/ShippoNa-OP1.webm', ephemeral: false });
                break;
            case 43:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Urusei Yatsura (2022) :\n https://v.animethemes.moe/UruseiYatsura2022-OP1.webm', ephemeral: false });
                break;
            case 44:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Uzaki-chan wa Asobitai! ω :\n https://v.animethemes.moe/UzakiChanWaAsobitaiS2-OP1.webm', ephemeral: false });
                break;
            case 45:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Vazzrock The Animation OP1 :\n https://v.animethemes.moe/Vazzrock-OP1.webm', ephemeral: false });
                break;
            case 46:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Vazzrock The Animation OP2 :\n https://files.catbox.moe/om9wtd.webm', ephemeral: false });
                break;
            case 47:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Yama no Susume: Next Summit :\n https://v.animethemes.moe/YamaNoSusumeS4-OP1.webm', ephemeral: false });
                break;
            case 48:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Yowamushi Pedal: Limit Break :\n https://v.animethemes.moe/YowamushiPedalLimitBreak-OP1.webm', ephemeral: false });
                break;
            case 49:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Yuusha Party wo Tsuihou sareta Beast Tamer, Saikyoushu no Nekomimi Shoujo to Deau :\n https://v.animethemes.moe/BeastTamer-OP1.webm', ephemeral: false });
                break;
            case 50:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Ginga Eiyuu Densetsu: Die Neue These - Sakubou :\n https://v.animethemes.moe/GingaEiyuuDensetsuDieNeueTheseGekitotsu-OP1.webm', ephemeral: false });
                break;
            case 51:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Poputepipikku 2nd Season OP1 :\n https://v.animethemes.moe/PopTeamEpicS2-OP1.webm', ephemeral: false });
                break;
            case 52:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Poputepipikku 2nd Season OP2 :\n https://v.animethemes.moe/PopTeamEpicS2-OP2.webm', ephemeral: false });
                break;
            case 53:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Shadowverse Flame :\n https://v.animethemes.moe/ShadowverseFlame-OP2.webm', ephemeral: false });
                break;
            case 54:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Hoshi no Samidare :\n https://v.animethemes.moe/HoshiNoSamidare-OP2.webm', ephemeral: false });
                break;
            case 55:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Ninjala :\n https://files.catbox.moe/0hh0zo.webm', ephemeral: false });
                break;
            case 56:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Arknights: Prelude to Dawn :\n ', ephemeral: false });
                break;
            case 57:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Yojouhan Time Machine Blues :\n https://files.catbox.moe/xypssq.webm', ephemeral: false });
                break;
            case 58:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Cyberpunk: Edgerunners :\n https://files.catbox.moe/1mzq2e.webm', ephemeral: false });
                break;
            case 59:
                await interaction.reply({ content: 'Voici le lien vers l\'opening de Exception :\n https://files.catbox.moe/03j4is.webm', ephemeral: false });
                break;
            // case 60:
            //     await interaction.reply({ content: 'Voici le lien vers l\'opening de  : https://kodcast.com/w/3RKeEUXuAgxDuXcBJ5aghu', ephemeral: false });
            //     break;
            // case 61:
            //     await interaction.reply({ content: 'Voici le lien vers l\'opening de  : https://kodcast.com/w/3RKeEUXuAgxDuXcBJ5aghu', ephemeral: false });
            //     break;
            // case 62:
            //     await interaction.reply({ content: 'Voici le lien vers l\'opening de  : https://kodcast.com/w/3RKeEUXuAgxDuXcBJ5aghu', ephemeral: false });
            //     break;
            // case 63:
            //     await interaction.reply({ content: 'Voici le lien vers l\'opening de  : https://kodcast.com/w/3RKeEUXuAgxDuXcBJ5aghu', ephemeral: false });
            //     break;
            // case 64:
            //     await interaction.reply({ content: 'Voici le lien vers l\'opening de  : https://kodcast.com/w/3RKeEUXuAgxDuXcBJ5aghu', ephemeral: false });
            //     break;
            // case 65:
            //     await interaction.reply({ content: 'Voici le lien vers l\'opening de  : https://kodcast.com/w/3RKeEUXuAgxDuXcBJ5aghu', ephemeral: false });
            //     break;
            // case 66:
            //     await interaction.reply({ content: 'Voici le lien vers l\'opening de  : https://kodcast.com/w/3RKeEUXuAgxDuXcBJ5aghu', ephemeral: false });
            //     break;
            // case 67:
            //     await interaction.reply({ content: 'Voici le lien vers l\'opening de  : https://kodcast.com/w/3RKeEUXuAgxDuXcBJ5aghu', ephemeral: false });
            //     break;
            // case 68:
            //     await interaction.reply({ content: 'Voici le lien vers l\'opening de  : https://kodcast.com/w/3RKeEUXuAgxDuXcBJ5aghu', ephemeral: false });
            //     break;
            // case 69:
            //     await interaction.reply({ content: 'Voici le lien vers l\'opening de  : https://kodcast.com/w/3RKeEUXuAgxDuXcBJ5aghu', ephemeral: false });
            //     break;
            // case 70:
            //     await interaction.reply({ content: 'Voici le lien vers l\'opening de  : https://kodcast.com/w/3RKeEUXuAgxDuXcBJ5aghu', ephemeral: false });
            //     break;
            // case 71:
            //     await interaction.reply({ content: 'Voici le lien vers l\'opening de  : https://kodcast.com/w/3RKeEUXuAgxDuXcBJ5aghu', ephemeral: false });
            //     break;
            // case 72:
            //     await interaction.reply({ content: 'Voici le lien vers l\'opening de  : https://kodcast.com/w/3RKeEUXuAgxDuXcBJ5aghu', ephemeral: false });
            //     break;
            // case 73:
            //     await interaction.reply({ content: 'Voici le lien vers l\'opening de  : https://kodcast.com/w/3RKeEUXuAgxDuXcBJ5aghu', ephemeral: false });
            //     break;
            default:
                await interaction.reply({ content: 'Hum... tu te moques de moi ?', ephemeral: true });
                break;
        }
	},
};