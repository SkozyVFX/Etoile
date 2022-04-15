const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("repeat")
        .setDescription('ss'),
    async execute(interaction, client) {

        const gebruiker = interaction.member;
        const queue = client.distube.getQueue(interaction);

        if (!gebruiker.voice.channel) return interaction.reply({ content: "Je moet in een spraakkanaal zitten om dit commando te kunnen gebruiken!", ephemeral: true });
        if (!queue) return interaction.reply({ content: 'Er word momenteel niks afgespeeld.', ephemeral: true });
        else {
            client.distube.interactie = interaction;
            queue.previous()
            const embed = new MessageEmbed()
                .setDescription(`Repeat is succesvol ingeschakeld.`)
                .setColor("#ff0000")
            interaction.reply({ embeds: [embed] });

            client.distube.play(gebruiker.voice.channel, nummer, {
                member: gebruiker,
                textChannel: interaction.channel,
                interaction
            });
        }
    }
};
