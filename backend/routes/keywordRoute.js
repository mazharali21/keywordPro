const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const OPENAI_API_KEY = process.env.API_KEY;

router.post("/", async (req, res) => {
  const { keyword, platform } = req.body;

  if (!keyword) {
    return res.status(400).json({ error: "Keyword Field Required!" });
  }

  const prompt = `
  You are a keyword research generator. Given a seed keyword ${keyword} and a ${platform}, generate up to 15 keywords that people naturally type when searching for that keyword on that platform. Only return natural search keywords, not promotional phrases. Do not include the platform name unless users actually type it. 

must note : Output the keywords **one per line** with no numbers, no bullets, no commas, and no extra words. Only the keywords, nothing else.
 
Don't include any explanation
`;
  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "mistralai/mistral-7b-instruct",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "HTTP-Referer": "http://localhost:5173",
          "X-Title": "AI Prompt Generator",
        },
      }
    );
    res.json({ keywords: response.data.choices[0].message.content });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ error: "Failed to generate list of Keywords!" });
  }
});

module.exports = router;
