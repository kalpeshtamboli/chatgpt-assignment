const dotenv = require("dotenv");
dotenv.config();
const OpenAI = require('openai')
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// console.log(openai);

module.exports = openai