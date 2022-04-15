const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('verifytekst')
		.setDescription('Verify yourself on a server'),
	async execute(interaction) {

		const embed = new MessageEmbed()
		.setAuthor({ name: 'Verificatie', iconURL: interaction.guild.iconURL()})
        .setDescription("Klik op de knop om jezelf te verifiëren en toegang te krijgen tot alle kanalen. Door jezelf te verifiëren ga je automatisch akkoord met onze server voorwaarden.")

		const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
			.setCustomId('verify')
			.setLabel('Verifiëren')
			.setStyle('SUCCESS')
		)


		await interaction.reply({ embeds: [embed], components: [row]});


	},
};
