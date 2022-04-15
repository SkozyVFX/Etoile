const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { clientId, serverId, token } = require('../config.json')
const ascii = require("ascii-table");

module.exports = async (err, files, client) => {
  if (err) return console.error(err);

  client.interactionsArray = [];
  files.forEach((file) => {
    const knop = require(`./../interactions/${file}`);
    client.knop.set(interaction.data.name, interaction);
    client.interactionsArray.push(interaction.data.toJSON());
  });

  const rest = new REST({ version: "9" }).setToken(token);

  (async () => {
    try {
      console.log("Refreshing slash command list");
        await rest.put(Routes.applicationGuildCommands(clientId, serverId), {
          body: client.interactionsArray,
      });

      console.log("Successfully refreshed slash command list");
    } catch (error) {
      console.error(error);
    }
  })();
};
