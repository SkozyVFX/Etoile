const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Select a member and ban them (but not really).')
		.addUserOption(option => option.setName('gebruiker').setDescription('The member to ban').setRequired(true))
		.addStringOption(option => option.setName('reden').setDescription('Reden van ban').setRequired(true)),
	async execute(interaction) {

        const user = interaction.options.getMember('gebruiker');
		const reden = interaction.options.getString('reden');
    // user.ban({ reason: reden })

		console.log(client.guilds.cache.get(interaction.guild.id)?.commands)


		const embed = new MessageEmbed()
        .setAuthor({ name: `${user.user.tag} is gebanned!`, iconURL: user.displayAvatarURL()})
		.setDescription(`**Reden**: ${reden}`)
        .setColor("#ff0000")
        .setTimestamp()
		.setFooter({ text: `${interaction.guild.name}`})

		interaction.reply({ embeds: [embed]});
	},
};