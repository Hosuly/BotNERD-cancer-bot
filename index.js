//Token Bot Discord
let token = 'OTY0NTUzOTE5Mjg2MDg3NzIw.G8tdiz.f_MfZxJz4DAlmPMfmX_XGpBrWaOaPQ-ysOIC7k'

//Id Channel Discord
let channelid = '1087259966798307328'

//Id Bot Discord
let botid = '964553919286087720'

//Ip Server Minecraft
var ipsv = 'testbotfuYO.aternos.me'

//Port Server Minecraft | không cần thiếu nếu server có domain
var ptsv = ''

//Password Bot Minecraft
let pswd = '123789abcxyz'

//Version Bot Minecraft
let mcvrsn = '1.19.2'

// Pin of Bot Minecraft if there's using "Pin Login" Plugin
let pin = [0, 0, 0, 0]

//Veri Simple Code Lmfao
const mineflayer = require('mineflayer')
const { Client, Events, GatewayIntentBits, Collection, EmbedBuilder } = require('discord.js')
const chalk = require('chalk')
const crypto = require('crypto')
const minecraftData = require('minecraft-data')
const mcData = minecraftData('1.19.2')
require('minecraft-protocol')
const Vec3 = require('vec3').Vec3
const tpsPlugin = require('mineflayer-tps')(mineflayer)

let rdint = Math.floor(Math.random() * 10) + 3
var rdign = crypto.randomBytes(rdint).toString('base64url').replace(/[^\w ]/g, '')
var rdign2 = crypto.randomBytes(rdint).toString('base64url').replace(/[^\w ]/g, '')

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] })
client.commands = new Collection()

var ctrbot1 = {
    host: ipsv,
    username: rdign,
    version: mcvrsn,
    port: ptsv
}

const bot = mineflayer.createBot(ctrbot1)
bot.commands = new Map()
bot.loadPlugin(tpsPlugin)
RadiumBot(bot)

function RadiumBot(bot) {

    bot.on('spawn', (username, message) => {
        const Joined = new EmbedBuilder()
            .setDescription('Bot is enable using name:\n' + bot.username)
            .setTitle('Bot Joined✅')
            .setColor('Green')
            .setAuthor({ name: 'Code by Hosuly', iconURL: 'https://avatars.githubusercontent.com/u/74451306?v=4', url: 'https://github.com/Hosuly' })
            .setTimestamp()
        client.channels.cache.get(channelid).send({ embeds: [Joined]})
        console.log(`${chalk.white.bgGreenBright('Bot Joined')}\n ${bot.username}`)
        bot.chat(`/register ${pswd} ${pswd}`)
        bot.chat(`/register ${pswd} ${pswd}`)
        bot.chat(`/login ${pswd}`)
    })

    client.once(Events.ClientReady, c => {
        console.log(`Ready! Logged in as ${c.user.tag}`)
    })

    bot.on('end', (reason) => {
        const Disconnected = new EmbedBuilder()
            .setTitle('Disconnected💀')
            .setDescription('Bot disconnected by ' + reason)
            .setColor('DarkRed')
            .setAuthor({ name: 'Code by Hosuly', iconURL: 'https://avatars.githubusercontent.com/u/74451306?v=4', url: 'https://github.com/Hosuly' })
            .setTimestamp()
        client.channels.cache.get(channelid).send({ embeds: [Disconnected]})
        console.log('Bot disconnected by ' + reason.toString())
        if (reason === reason || reason === null) {
            setTimeout(Reload, 100)
            const Reconnect = new EmbedBuilder()
                .setTitle('Bot trying to reconnect☕')
                .setColor('DarkOrange')
                .setAuthor({ name: 'Code by Hosuly', iconURL: 'https://avatars.githubusercontent.com/u/74451306?v=4', url: 'https://github.com/Hosuly' })
                .setTimestamp()
            client.channels.cache.get(channelid).send({ embeds: [Reconnect] })
            // console.log(chalk.white.bgGreenBright('Reconnect Succes') + '\n' + bot.username)
        }
        // đây không phải bugs, chắc chắn không phải bugs!
        // else {
        //     console.log(chalk.blackBright.bgRed('Bot trying to Reconnect'))
        //     const bot = mineflayer.createBot({
        //         host: ipsv,
        //         username: rdign,
        //         version: '1.19.2'
        //     },
        //     console.log(chalk.bgGreen('Reconnect Success')))
        // }
    })

    bot.on('chat', async (username, msg) => {
        console.log(`${username}: ${msg}`)
        const Livechat = new EmbedBuilder()
            .setDescription(`${username}: ${msg}`)
            .setColor('Blurple')
            .setAuthor({ name: 'Code by Hosuly', iconURL: 'https://avatars.githubusercontent.com/u/74451306?v=4', url: 'https://github.com/Hosuly' })
            .setTimestamp()
        await client.channels.cache.get(channelid).send({ embeds: [Livechat] })
        if (msg === ':tps') {
            bot.chat(`Server Tps: ${bot.getTps()}`)
        }
    })

    client.on('messageCreate', async (client) => {
        if (!client.guild) return
        if (client.author.bot || client.author.id === botid) return
        if (client.channel.id !== channelid) return
        await client.react('🤑')
        await bot.chat(`[${client.author.tag}] ${client.content} | Code by Hosuly |`)
        console.log(`[${client.author.tag}] ${client.content} | Code by Hosuly |`)
    })

    client.on('messageCreate', async (message) => {
        if (!message.guild) return
        if (message.author.bot || message.author.id === botid) return
        if (message.channel.id !== channelid) return
        if (message.content === ':tps') {
            client.channels.cache.get(channelid).send(`Server Tps: ${bot.getTps()}`)
        }
        if (message.content === ':ping') {
            client.channels.cache.get(channelid).send(`Host Ping: ${client.ws.ping}ms`)
        }
    })

    bot.on('error', console.log)

    function Reload() {
        if (rdint === rdint) rdint = Math.floor(Math.random() * 10) + 3
        if (ctrbot1.username == rdign) var rdign3 = crypto.randomBytes(rdint).toString('base64url').replace(/[^\w ]/g, '')

        var ctrbot3 = {
            host: ipsv,
            username: rdign3,
            version: mcvrsn,
            port: ptsv
        }         
           
        bot = mineflayer.createBot(ctrbot3)
        RadiumBot(bot)
        const Reconnected = new EmbedBuilder()
            .setTitle('Reconnected Success✅')
            .setDescription(bot.username)
            .setColor('Green')
            .setAuthor({ name: 'Code by Hosuly', iconURL: 'https://avatars.githubusercontent.com/u/74451306?v=4', url: 'https://github.com/Hosuly' })
            .setTimestamp()
        client.channels.cache.get(channelid).send({ embeds: [Reconnected] })
        console.log(`${chalk.white.bgGreenBright('Reconnect Succes')}\n ${bot.username}`)
    }
}

client.login(token)

// ❤️ I love Lucid ❤️ //

/* Login Method
function Authme() {
    var regis = 'Please, register to this server with thhe command: /register <password> <ConfirmPassword>'
    var logme = 'Please, login with the command: /login <password>'
    bot.on('chat', (message) => {
        if (message === regis) {
            bot.chat('/register ' + pswd + pswd)
            bot.chat('/register ' + pswd + pswd)
            bot.chat('login ' + pswd)
        }
        if (message === logme) {
            bot.chat('/login ' + pswd)
        }
    })
}


function PinLog() {
    bot.on('windowOpen', async (window) => {
        window.requiresConfirmation = false
        bot.clickWindow(pin[0], 0, 0)
        bot.clickWindow(pin[1], 0, 0)
        bot.clickWindow(pin[2], 0, 0)
        bot.clickWindow(pin[3], 0, 0)
    })
}

function AnvilLog() {
    bot.on('windowOpen'), async (window) => {
        window.requiresConfirmation = false
        bot.openAnvil(anvilBlock).rename(pswd)

    }
}
*/