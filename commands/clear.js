exports.run = (client, message, args, user, channel, self) => {
    if(user['mod'] === true){
        client.clear(channel)  
        client.say(channel, `Chat limpo por ${user['display-name']}!`)
    }else if(user['display-name'] === 'carvalho286'){
        client.clear(channel)  
        client.say(channel, `Chat limpo por ${user['display-name']}!`)
    }
}    