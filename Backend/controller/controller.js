

const openai = require("../utils/openAI")


const chatController = async (req, res) => {
  try {
    const { text } = req.body;

    console.log(req.body);
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: text }],
      model: "gpt-3.5-turbo",
    });
    console.log("completion",completion);

    //   console.log(completion.choices[0]);
    res.status(200).json({ message: completion?.choices[0]?.message?.content });
  } catch (error) {
    res.status(404).json({ err: error.message });
  }
};

module.exports = { chatController };
