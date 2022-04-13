const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const { buttonData } = require("../data/buttonConfig.json")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("landtekst")
        .setDescription("Hervat de speler."),
    async execute(interaction, client) {
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId('1')
            .setEmoji()
        )
    }
};
