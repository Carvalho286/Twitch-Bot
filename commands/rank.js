var rank2 = 'Gold';
var rank3 = 'Plat';

exports.run = (client, message, args, user, channel, self) => {
    client.say(channel, `O rank no Rocket League do EpicNessPT é ` + rank2 + ` em 2v2 e ` + rank3 + ` em 3v3!`)
}