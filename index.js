const tmi = require('tmi.js');
const channel = 'nome do teu canal'
const prefix = '!'

var game = 'Rocket League'
var wins = 0
var losses = 0

const options = {
    options: {
        debug: true,
    },
    connection: {
        cluster: 'aws',
        reconnect: true,
    },
    identity: {
        username: 'username da conta do bot',
        password: 'procurar no google twitch oauth account',
    },
    channels: [channel],
},

client = new tmi.client(options);

client.connect();

client.on('connected', (address, port) => {
    client.action(channel, 'Olá, o teu bot já está online!');
});

client.on('chat', (channel, user, message, self) => {

    let sender = user['display-name'];

    if (message === '!comandos') {
        client.say(channel, 'Os meus comandos são: !game !ping !discord !criador !insta !yt !elo !rankcs !rankrocket !twitter !donate !loots');
    }

    if(user['mod'] === false){
        if(message.includes("www.") || message.includes(".com")){
            client.timeout(channel, sender, 30, "Sistema de links ativado.")
        }
    }

    if (message === '!game'){
        client.say(channel, `O jogo atual é: ` + game)
    }

    if (message === '!day'){
        client.say(channel, `O KobaCK hoje está com ` + wins + ` Wins e ` + losses + ` Losses`)
    }

    if (message === '!win' && user['mod'] === true) {
        wins = wins +1;
        client.say(channel, 'Uma win foi acumulada com sucesso!');
    }else if(message === '!win' && user['display-name'] === 'carvalho286') {
        wins = wins +1;
        client.say(channel, 'Uma win foi acumulada com sucesso!');
    }

    if (message === '!loss' && user['mod'] === true) {
        losses = losses +1;
        client.say(channel, 'Uma loss foi acumulada com sucesso!');
    }else if(message === '!loss' && user['display-name'] === 'carvalho286') {
        losses = losses +1;
        client.say(channel, 'Uma loss foi acumulada com sucesso!');
    }

    if (message === '!dayreset' && user['mod'] === true) {
        wins = 0;
        losses = 0;
        client.say(channel, 'As wins e losses foram resetadas com sucesso!');
    }else if(message === '!dayreset' && user['display-name'] === 'carvalho286') {
        wins = 0;
        losses = 0;
        client.say(channel, 'As wins e losses foram resetadas com sucesso!');
    }

    if (message === '!gamelol' && user['mod'] === true) {
        client.say(channel, `O jogo foi mudado para League of Legends com sucesso!`);
        game = 'League of Legends';
    }else if(message === '!gamelol' && user['display-name'] === 'carvalho286') {
        client.say(channel, `O jogo foi mudado para League of Legends com sucesso!`);
        game = 'League of Legends';
    }
    
    if (message === '!gamerocket' && user['mod'] === true) {
        client.say(channel, `O jogo foi mudado para Rocket League com sucesso!`);
        game = 'Rocket League';
    }else if(message === '!gamerocket' && user['display-name'] === 'carvalho286') {
        client.say(channel, `O jogo foi mudado para Rocket League com sucesso!`);
        game = 'Rocket League';
    }
    
    if (message === '!gamecsgo' && user['mod'] === true) {
        client.say(channel, `O jogo foi mudado para Counter-Strike: Global Offensive com sucesso!`);
        game = 'Counter-Strike: Global Offensive';
    }else if(message === '!gamecsgo' && user['display-name'] === 'carvalho286') {
        client.say(channel, `O jogo foi mudado para Counter-Strike: Global Offensive com sucesso!`);
        game = 'Counter-Strike: Global Offensive';
    }  

    if (message === '!gamepokemon' && user['mod'] === true) {
        client.say(channel, `O jogo foi mudado para Pokemon com sucesso!`);
        game = 'Pokemon Blue';
    }else if(message === '!gamepokemon' && user['display-name'] === 'carvalho286') {
        client.say(channel, `O jogo foi mudado para Pokemon com sucesso!`);
        game = 'Pokemon Blue';
    }  

    if (message === '!gamesims' && user['mod'] === true) {
        client.say(channel, `O jogo foi mudado para Sims 4 com sucesso!`);
        game = 'Sims 4';
    }else if(message === '!gamesims' && user['display-name'] === 'carvalho286') {
        client.say(channel, `O jogo foi mudado para Sims 4 com sucesso!`);
        game = 'Sims 4';
    }  

    if (message === '!gameval' && user['mod'] === true) {
        client.say(channel, `O jogo foi mudado para Valorant com sucesso!`);
        game = 'Valorant';
    }else if(message === '!gameval' && user['display-name'] === 'carvalho286') {
        client.say(channel, `O jogo foi mudado para Valorant com sucesso!`);
        game = 'Valorant';
    }  

    if (message === '!gamemine' && user['mod'] === true) {
        client.say(channel, `O jogo foi mudado para Minecraft com sucesso!`);
        game = 'Minecraft';
    }else if(message === '!gamemine' && user['display-name'] === 'carvalho286') {
        client.say(channel, `O jogo foi mudado para Minecraft com sucesso!`);
        game = 'Minecraft';
    }  

    if (message === '!gamefut' && user['mod'] === true) {
        client.say(channel, `O jogo foi mudado para Football Manager 2020 com sucesso!`);
        game = 'Football Manager 2020';
    }else if(message === '!gamefut' && user['display-name'] === 'carvalho286') {
        client.say(channel, `O jogo foi mudado para Football Manager 2020 com sucesso!`);
        game = 'Football Manager 2020';
    }

    if (message === '!gamerust' && user['mod'] === true) {
        client.say(channel, `O jogo foi mudado para Rust com sucesso!`);
        game = 'Rust';
    }else if(message === '!gamerust' && user['display-name'] === 'carvalho286') {
        client.say(channel, `O jogo foi mudado para Rust com sucesso!`);
        game = 'Rust';
    }

    if (message === 'Ola') {
        client.say(channel, `Olá ${user['display-name']}!`);
    }

    if (message === 'ola') {
        client.say(channel, `Olá ${user['display-name']}!`);
    }

    if (message === 'Olá') {
        client.say(channel, `Olá ${user['display-name']}!`);
    }

    if (message === 'olá') {
        client.say(channel, `Olá ${user['display-name']}!`);
    }

    if (message === 'tudo bem?') {
        client.say(channel, `Sempre ${user['display-name']}!`);
    } 

    if (message === 'Gostas de pilinha?') {
        client.say(channel, `Claro ${user['display-name']}!`);
    } 

    if (message === 'gostas de pilinha?') {
        client.say(channel, `Claro ${user['display-name']}!`);
    }

    if (message === 'Gostas de pila?') {
        client.say(channel, `Claro ${user['display-name']}!`);
    } 

    if (message === 'gostas de pila?') {
        client.say(channel, `Claro ${user['display-name']}!`);
    } 
    
    if (message === 'tudo bem') {
        client.say(channel, `Sempre ${user['display-name']}!`);
    }

    if (message === 'és lindo') {
        client.say(channel, `Como tu ${user['display-name']}!`);
    }

    if (message === 'es lindo') {
        client.say(channel, `Como tu ${user['display-name']}!`);
    }

    if (message === 'oi') {
        client.say(channel, `Olá ${user['display-name']}!`);
    }

    if (message === 'Oi') {
        client.say(channel, `Olá ${user['display-name']}!`);
    }  

    const args = message.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    try {
        let commandFile = require(`./commands/${cmd}.js`)
        commandFile.run(client, message, args, user, channel, self)
    }catch (err) {}

});