exports.run = (client, message, args, user, channel, self) => {
    if(user['mod'] === true){
        client.say(channel, `O ${user['display-name']} está afk!`)  
    }else if(message === '!afk' && user['display-name'] === 'carvalho286') {
        client.say(channel, `O ${user['display-name']} está afk!`)
    }
}
