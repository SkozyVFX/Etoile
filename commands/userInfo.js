const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js')
const timestampToDate = require('timestamp-to-date');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('userinfo')
		.setDescription('Display info about yourself.'),
	async execute(interaction, client) {
		let user;
		user = interaction.options.getMember('gebruiker') || interaction.member;

		let gemaaktOp = timestampToDate(user.user.createdTimestamp, 'dd-MM-yyyy HH:mm')
		let gejoinedOp = timestampToDate(user.joinedTimestamp, 'dd-MM-yyyy HH:mm');
	
		let rollen = user._roles;
		let rollenTekst = '';

		rollen.forEach(element => {
			rollenTekst += `${interaction.guild.roles.cache.find(r => r.id === element)}`
		});

		const embed = new MessageEmbed()
		.setAuthor({ name: user.user.tag, iconURL: user.user.displayAvatarURL()})
		.setFooter( { text: interaction.guild.name } )
		.setColor("#ff0000")
		.setThumbnail(user.user.displayAvatarURL())
		.addFields(
			{ name: 'Naam', value: user.user.username, inline: true},
			{ name: 'Tag', value: user.user.tag, inline: true},
			{ name: 'ID', value: user.user.id, inline: true},
			{ name: 'Account gemaakt op', value: gemaaktOp, inline: true},
			{ name: 'Server gejoinned', value: gejoinedOp, inline: true},
			{ name: 'Rollen', value: `${rollenTekst}`, inline: true},
		)
		.setTimestamp()


		interaction.reply({ embeds: [embed] });

	},
};