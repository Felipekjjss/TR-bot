require("dotenv").config();
const { REST, Routes, SlashCommandBuilder } = require("discord.js");

const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Verifica se o TR Bot está online."),
  new SlashCommandBuilder()
    .setName("elenco")
    .setDescription("Mostra o elenco do Track - TR."),
  new SlashCommandBuilder()
    .setName("staff")
    .setDescription("Mostra a equipe administrativa do Track - TR."),
  new SlashCommandBuilder()
    .setName("resultado")
    .setDescription("Registra e mostra o resultado de uma partida.")
    .addStringOption(option =>
      option.setName("adversario")
        .setDescription("Nome do time adversário")
        .setRequired(true))
    .addIntegerOption(option =>
      option.setName("tr")
        .setDescription("Gols do Track - TR")
        .setMinValue(0)
        .setRequired(true))
    .addIntegerOption(option =>
      option.setName("adversario_gols")
        .setDescription("Gols do adversário")
        .setMinValue(0)
        .setRequired(true))
].map(command => command.toJSON());

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log("Registrando comandos do TR Bot...");
    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      { body: commands }
    );
    console.log("Comandos registrados com sucesso!");
  } catch (error) {
    console.error(error);
  }
})();
