require("dotenv").config();
const {
  Client, GatewayIntentBits, EmbedBuilder, Events
} = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

const jogadores = [
  { num: "01", nome: "qzz", pos: "🃏" },
  { num: "02", nome: "bale", pos: "??" },
  { num: "03", nome: "—", pos: "??" },
  { num: "04", nome: "—", pos: "??" }
];

client.once(Events.ClientReady, (c) => {
  console.log(`TR Bot online como ${c.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    return interaction.reply({ content: `🏓 Pong! **TR Bot** está online.`, ephemeral: true });
  }

  if (interaction.commandName === "elenco") {
    const lista = jogadores
      .map(j => `\`${j.num}\`　**${j.nome}**　${j.pos}`)
      .join("\n");

    const embed = new EmbedBuilder()
      .setColor(0x20242b)
      .setTitle("TRACK - TR")
      .setDescription("**FIRST TEAM**\n\n" + lista)
      .setFooter({ text: "Track - TR • Elenco oficial" })
      .setTimestamp();

    return interaction.reply({ embeds: [embed] });
  }

  if (interaction.commandName === "staff") {
    const embed = new EmbedBuilder()
      .setColor(0x20242b)
      .setTitle("TRACK - TR")
      .setDescription(
        "**TEAM STAFF**\n\n" +
        "**Founder:** qzz & bale\n" +
        "**Adm:** ??\n" +
        "**Captain:** ??"
      )
      .setFooter({ text: "Track - TR • Staff" });

    return interaction.reply({ embeds: [embed] });
  }

  if (interaction.commandName === "resultado") {
    const adversario = interaction.options.getString("adversario");
    const placarTR = interaction.options.getInteger("tr");
    const placarAdv = interaction.options.getInteger("adversario_gols");

    const embed = new EmbedBuilder()
      .setColor(0x20242b)
      .setTitle("🏆 Resultado • Track - TR")
      .setDescription(`**Track - TR ${placarTR} x ${placarAdv} ${adversario}**`)
      .setTimestamp();

    return interaction.reply({ embeds: [embed] });
  }
});

client.login(process.env.DISCORD_TOKEN);
