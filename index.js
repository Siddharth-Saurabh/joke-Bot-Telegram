const TelegramBot=require('node-telegram-bot-api');

const dotenv=require('dotenv');

const axios=require('axios');

dotenv.config();

const bot=new TelegramBot(process.env.TELEGRAM_TOKEN,{polling:true}); 


// bot.on('message',(option)=>{
//     console.log("Message recieved on te bot",option)
//     bot.sendMessage(option.chat.id,"Hello I'm a bot. I'm here to assist you with your queries.Please type /help to know more about me ");
// });

bot.onText(/\/joke/,async(option)=>{
    const joke=await axios.get('https://official-joke-api.appspot.com/random_joke');
    const setup =joke.data.setup;
    const punchline=joke.data.punchline;
    bot.sendMessage(option.chat.id,setup+" , "+punchline);
});