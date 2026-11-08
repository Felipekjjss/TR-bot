# TR Bot — Track - TR

Bot inicial para o servidor do Track - TR, feito com Discord.js v14.

## Comandos incluídos
- `/ping` — verifica se o bot está online.
- `/elenco` — mostra os jogadores cadastrados no arquivo `index.js`.
- `/staff` — mostra Founder, Adm e Captain.
- `/resultado` — publica o placar de uma partida.

## Como colocar para funcionar

1. Instale o [Node.js](https://nodejs.org/).
2. No [Discord Developer Portal](https://discord.com/developers/applications), crie uma aplicação chamada **TR Bot**.
3. Entre em **Bot** e crie/reset o token. Guarde-o em segredo.
4. Em **OAuth2 > URL Generator**, marque os escopos `bot` e `applications.commands`.
5. Nas permissões, marque pelo menos `View Channels`, `Send Messages` e `Embed Links`. Abra o link gerado e adicione o bot ao seu servidor.
6. Copie `.env.example` para um arquivo chamado `.env` e preencha:
   - `DISCORD_TOKEN`: token do bot.
   - `CLIENT_ID`: Application ID da aplicação.
   - `GUILD_ID`: ID do seu servidor (ative o Modo Desenvolvedor no Discord e use Copiar ID).
7. Abra o terminal nesta pasta e rode:

```bash
npm install
npm run register
npm start
```

Mantenha o terminal aberto para o bot ficar online.

## Personalizar elenco e staff

Edite a lista `jogadores` no começo de `index.js` e os nomes no comando `/staff`.

**Segurança:** nunca envie seu token para ninguém, nem publique o arquivo `.env`.
