const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Select a member and kick them (but not really).')
		.addUserOption(option => option.setName('gebruiker').setDescription('The member to kick').setRequired(true))
		.addStringOption(option => option.setName('reden').setDescription('Reden van kick').setRequired(true)),
	async execute(interaction) {

        const user = interaction.options.getMember('gebruiker');
		const reden = interaction.options.getString('reden');
    user.kick(reden)

		const embed = new MessageEmbed()
        .setAuthor({ name: `${user.user.tag} is gekickt!`, iconURL: user.displayAvatarURL()})
		.setDescription(`**Reden**: ${reden}`)
        .setColor("#ff0000")
        .setTimestamp()
		.setFooter({ text: `${interaction.guild.name}`})

		interaction.reply({ embeds: [embed]});
	},
};