const express = require('express');
const OpenAI = require('openai');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Create OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `You are an AI assistant specialized in design patterns. You can only answer questions about the following design patterns: Event Aggregator, API Gateway, Saga, Circuit Breaker, Distributed Tracing, Idempotent Consumer, Log Aggregation, Factory, Builder, Facade, and Strategy. If asked about any other topic, politely redirect the user to ask about one of these patterns.`
        },
        ...messages
      ],
    });

    res.json(response.choices[0].message);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});