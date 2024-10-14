// Load environment variables from .env file to access the bot token
require('dotenv').config();

// Import the Telegram Bot API library to interact with Telegram's API
const TelegramBot = require('node-telegram-bot-api');

// Fetch the bot token from the environment variable
const token = process.env.TELEGRAM_BOT_TOKEN;

// Create a new bot instance with the token and enable polling to receive messages
const bot = new TelegramBot(token, { polling: true });

// Define an event listener for the "/start" command
bot.onText(/\/start/, (msg) => {
    // Extract the chat ID from the message object to know where to reply
    const chatId = msg.chat.id;
    // Send a welcome message to the user who sent the "/start" command
    bot.sendMessage(chatId, 'Hello! Welcome to my Telegram bot.');
});

// Log to the console to confirm that the bot is up and running
console.log('Bot is running...');