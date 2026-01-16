import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


export const summaryController = async (req, res) => {
  try {
    const { text } = req.body;

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: `Summarize the following text:\n${text}`,
    });

    res.status(200).json(response.output_text);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};


export const paragraphController = async (req, res) => {
  try {
    const { text } = req.body;

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: `Write a detailed paragraph about:\n${text}`,
    });

    res.status(200).json(response.output_text);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};


export const chatbotController = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ message: "Text is required" });
    }

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: `You are Yoda from Star Wars. Speak like Yoda.
User: ${text}
Yoda:`,
    });

    res.status(200).json({
      reply: response.output_text,
    });
  } catch (err) {
    console.error("Chatbot error:", err);

    res.status(err.status || 500).json({
      message: err.error?.message || err.message,
    });
  }
};



export const jsconverterController = async (req, res) => {
  try {
    const { text } = req.body;

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: `Convert the following instructions into JavaScript code:\n${text}`,
    });

    res.status(200).json(response.output_text);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};


export const interviewController = async (req, res) => {
  try {
    const { text } = req.body; 

    if (!text) {
      return res.status(400).json({ error: "Topic or role is required" });
    }

    
    const prompt = `
Generate a set of 5-7 interview questions with answers for the following role or topic:
"${text}"
Format the response like this:
Q1: ...
A1: ...
Q2: ...
A2: ...
`;

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: prompt,
      temperature: 0.7, 
    });

    const output = response.output_text;

    res.status(200).json({ reply: output });
  } catch (err) {
    console.error(err);

    if (err.response) {
      return res.status(err.response.status).json(err.response.data);
    }

    res.status(500).json({ error: err.message || "Something went wrong" });
  }
};


export const emailController = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || text.trim() === "") {
      return res.status(400).json({ error: "Please provide the email text" });
    }

    const prompt = `
You are an expert professional email writer.
Rewrite the following email to be clear, professional, and polite.
Fix grammar, tone, and make it concise if necessary.
Email: "${text}"
`;

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: prompt,
      temperature: 0.7,
    });

    const improvedEmail = response.output_text;

    res.status(200).json({ reply: improvedEmail });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Something went wrong" });
  }
};

