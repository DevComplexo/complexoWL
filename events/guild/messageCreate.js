const config = require('../../config.json');
const Whitelist = require('../../models/Whitelist');

module.exports = async (Discord, client, message) => {
    try {
        if (message.channel.id == config.whitelist.channel && message.author.bot === false) {

            const values = message.content.split(' ');
            const id = values[0];
            const nickname = values.slice(1).join(" "); 

            if(isNaN(id) || !nickname) {
                message.reply(`> ❌**${message.author} Escreva no formato ID Nome e Sobrenome(registraveis); exemplo:**\n\n \`\`63164 | Mateus Dos Santos Ferreira\`\``).then(msg => {
                    setTimeout(() => {
                        msg.delete().catch(err => {});
                        message.delete().catch(err => {});
                    }, 30000)
                });
                return; 
            };

            await Whitelist.create({
                id: values[0]
            }).catch(err => {});

            message.member.setNickname(`${id} | ${nickname}`);
            message.member.roles.add(config.whitelist.tag);
            message.reply(`> ✅ **${message.author}, seu ID: \`${id}\` foi inserido na Whitelist.**`);
        }
    } catch (err) {
        console.log(err);
    }
}