const chalk = require('chalk');

module.exports = {
  name: 'ready',
  execute(client) {
    console.log(chalk.green('Iniciando'))

    const theticketchannel = client.channels.cache.get(client.config.ticketChannel)
    theticketchannel.bulkDelete(100).then(() => {
      sendTicketMSG()
      console.log(chalk.green('The ticket message was send'))
    })
  },
};






function sendTicketMSG() {
    const embed = new client.discord.MessageEmbed()
      .setColor('6d6ee8')
      .setAuthor('Ticket', client.user.avatarURL())
      .setDescription('Click the button below to open a ticket.')
      .setFooter(`${client.user.tag}`, client.user.displayAvatarURL())


    const row = new client.discord.MessageActionRow()
      .addComponents(
        new client.discord.MessageButton()
        .setCustomId('open-ticket')
        .setLabel('Open a ticket')
        .setEmoji('✉️')
        .setStyle('PRIMARY'),
      );

    theticketchannel.send({
      embeds: [embed],
      components: [row]
    })
  }