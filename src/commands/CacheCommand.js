var helpers = require('../helpers.js');

/**
 * Posts a funny picture, if "!cache" is typed in the chat
 * @param commandHandler
 * @constructor
 */
function CacheCommand(commandHandler){
    console.log(commandHandler.getSetting('commands'));
    this.commandHandler = commandHandler;
}

CacheCommand.prototype = {
    /**
     * Whether or not a message matches the command.
     * Returns true, if a message matches, false if not.
     * Typically you would check the sent message for a keyword at the beginning (like "!cache")
     *
     * @param {object} msg
     * @param {string} msg.to       The receiver of the message / the room the message was sent in
     * @param {string} msg.from     The sender of the message
     * @param {string} msg.message  The message itself
     * @return {boolean}
     *
     */
    match: function(msg){
        return msg.message.indexOf('!cache') === 0;
    },

    /**
     * Execute the command
     *
     * @param {object} msg
     * @param {string} msg.to       The receiver of the message / the room the message was sent in
     * @param {string} msg.from     The sender of the message
     * @param {string} msg.message  The message itself
     */
    exec: function(msg){
        console.log(this.commandHandler.settings);
        var urls = this.commandHandler.getSetting('commands.!cache.urls');
        this.commandHandler.client.say(msg.to, helpers.getRandomElement(urls));
    }
};

module.exports = CacheCommand;