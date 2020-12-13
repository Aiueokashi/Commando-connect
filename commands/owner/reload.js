const Command = require('../../structures/Command');

module.exports = class ReloadCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'reload',
			aliases: ['reload-command', 'reload-cmd'],
			group: 'util',
			memberName: 'reload',
			description: 'コマンドのリロード',
			details: 'Bot Owner Command',
			guarded: true,
			ownerOnly: true,
			args: [
				{
					key: 'command',
					label: 'command',
					prompt: 'リロードするコマンドのラベルを指定してください',
					type: 'command'
				}
			]
		});
	}

	run(msg, { command }) {
		command.reload();
		return msg.say(`Reloaded the \`${command.name}\` command.`);
	}
}