🤖 Chatbot Platform 

This project is a minimal implementation of a Chatbot Platform that allows users to authenticate, manage AI agents (projects), and interact with them using a chat interface powered by an LLM API.

🚀 Features
User authentication using JWT
User registration and login with email & password
Multiple AI agents (projects) under a single user
Prompt-based agent configuration
Chat interface powered by OpenAI API
Scalable and extensible architecture

🛠️ Tech Stack
Frontend: React / Next.js
Backend: Node.js, Express
Database: MongoDB
Authentication: JWT (Access & Refresh Tokens)
LLM Integration: OpenAI Responses API

Installation & Setup
1️⃣ Clone the Repository
2️⃣ Install Backend Dependencies
npm install

3️⃣ Configure Environment Variables
Create a .env file in the backend root directory and add the following:
PORT=5000
DEV_MODE=true
MONGO_URI=your_mongodb_connection_string
JWT_ACCESS_SECRET=your_access_token_secret
JWT_ACCESS_EXPIREIN=15m
JWT_REFRESH_TOKEN=your_refresh_token_secret
JWT_REFRESH_EXPIREIN=7d
OPENAI_API_KEY=your_openai_api_key

4️⃣ Start the Backend Server
npm run dev
# OR
npm run server

5️⃣ Install Frontend Dependencies & Start Frontend
cd client
npm install
npm run dev

6️⃣ Access the Application
Open your browser and navigate to:
http://localhost:3000

🧠 Supported Agents (Projects)
The platform supports multiple predefined AI agents. All agents share the same backend architecture and differ only by their system prompts and configurations.
1️⃣ Text Summary Agent
Summarizes long pieces of text into concise and meaningful summaries.

2️⃣ Paragraph Generation Agent
Generates well-structured paragraphs based on a given topic or prompt.

3️⃣ AI Chatbot Agent
Acts as a general-purpose conversational assistant for answering user queries.

4️⃣ JavaScript Converter Agent
Converts natural language descriptions or logic into JavaScript code.

5️⃣ Interview Preparation Agent
Helps users prepare for interviews by generating interview questions, model answers, and preparation tips based on roles or technologies.

6️⃣ Email Writer Agent
Assists users in drafting professional and informal emails based on the given context, tone, and purpose.
