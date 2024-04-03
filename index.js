import  bot ,{ Client } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal'
import { MessageAnalyzer } from './Code/WhatsAppBot/MessageAnalyzer.js';

// export const WhatsAppBotClient1 = new Client({
//     authStrategy: new LocalAuth(),
//     puppeteer: {
//     args: ['--no-sandbox', '--disable-setuid-sandbox'],
//     }
// });
export const WhatsAppBotClient = new Client({
    authStrategy: new bot.LocalAuth({
        dataPath: 'WhatsAppBot',
        clientId: "client-one"
    }),
    puppeteer: {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    }
});
await WhatsAppBotClient.initialize();

WhatsAppBotClient.on('loading_screen', (percent, message) => {
    console.log('LOADING SCREEN', percent, message);
});

WhatsAppBotClient.on('qr', (qr) => {
    // NOTE: This event will not be fired if a session is specified.
     qrcode.generate(qr, {small: true})
    // console.log('QR RECEIVED', qr);
});

WhatsAppBotClient.on('authenticated', () => {
    console.log('AUTHENTICATED');
});

WhatsAppBotClient.on('auth_failure', msg => {
    // Fired if session restore was unsuccessful
    console.error('AUTHENTICATION FAILURE', msg);
});

WhatsAppBotClient.on('ready', () => {
console.log('Bot is getting ready!', WhatsAppBotClient.info)
});


WhatsAppBotClient.on('message', msg => {
    if (msg.body == '!ping') {
        msg.reply('pong');
    }
    // MessageAnalyzer(msg);
});
