1.	Clone the GitHub repository to your local machine.
2.	Install backend dependencies using npm install.
3. Create a .env file in the root directory and add required environment variables
     PORT, DEV_MODE, MONGO_URI, JWT_ACCESS_SECRET, JWT_ACCESS_EXPIREIN, JWT_REFRESH_TOKEN, JWT_REFRESH_EXPIREIN, OPENAI_API_KEY). 
4. Start the backend server using
     npm run dev 
     npm run server.
5. Install frontend dependencies and start the frontend using
     npm run dev.
6. Access the application at http://localhost:3000. 
7. Register a new user account and log in to start using AI agents.
   Supported Agents (Projects)
The platform supports multiple predefined AI agents (projects), each designed to handle a specific task. All agents follow a common backend architecture and differ only in their system prompts and configurations.

1. Text Summary Agent
Summarizes long pieces of text into concise and meaningful summaries.

2. Paragraph Generation Agent
Generates well-structured paragraphs based on a given topic or prompt.

3. AI Chatbot Agent
Acts as a general-purpose conversational assistant for answering user queries.

4. JavaScript Converter Agent
Converts natural language descriptions or logic into JavaScript code.

5. Interview Preparation Agent
Helps users prepare for interviews by generating interview questions, model answers, and providing preparation tips based on roles or technologies.

6. Email Writer Agent
Assists users in drafting professional and informal emails based on the given context, tone, and purpose.
