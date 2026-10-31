# GenAI Basics

A beginner-friendly repository exploring Generative AI concepts through practical implementations using JavaScript, LangChain, and LLM APIs.

## Project 1: AI Chatbot with Web Search

This project implements a command-line AI chatbot named **Annu** using Mistral AI and LangChain.

Unlike a basic chatbot, this application has access to an external web search tool powered by Tavily. This allows the AI agent to retrieve information about user queries through web search.

### Features

- **LLM Integration:** Uses Mistral AI (`mistral-small-latest`) as the language model.
- **AI Agent:** Built using LangChain's `createAgent`.
- **Web Search:** Integrates Tavily Search API to retrieve relevant information from the internet.
- **Tool Calling:** The AI agent can decide when to use the web search tool.
- **Conversation History:** Maintains conversation messages during the session.
- **Streaming:** Displays the AI response incrementally rather than waiting for the complete response.
- **Environment Variables:** Uses dotenv to securely manage API keys.

## Tech Stack

| Technology | Purpose |
|---|---|
| JavaScript (ES Modules) | Programming language |
| Node.js | Runtime environment |
| LangChain | Agent and tool orchestration |
| Mistral AI | Large Language Model |
| Tavily | Web search API |
| Zod | Tool input validation |
| dotenv | Environment variable management |
| readline/promises | Command-line interaction |

## Project Structure

```text
genai-basics/
│
├── index.js
├── package.json
├── package-lock.json
├── .env
├── .gitignore
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/genai-basics.git
```

### 2. Navigate to the project directory

```bash
cd genai-basics
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory.

```env
MISTRAL_API_KEY=your_mistral_api_key
TAVILY_API_KEY=your_tavily_api_key
```

You can obtain API keys from:

- Mistral AI: https://console.mistral.ai/
- Tavily: https://tavily.com/

### 5. Run the application

```bash
node index.js
```

## How It Works

The application follows this workflow:

1. The user enters a prompt through the command line.
2. The prompt is added to the conversation history.
3. The LangChain agent processes the conversation.
4. If external information is required, the agent can call the Tavily search tool.
5. Tavily retrieves relevant search results.
6. The agent uses the retrieved information to generate a response.
7. The response is streamed to the terminal.

## Key Concepts Explored

- Large Language Models (LLMs)
- AI Agents
- Tool Calling
- Prompt Engineering
- Web Search Integration
- Streaming Responses
- Conversation History
- Environment Variables

## Future Improvements

- Add conversation memory.
- Implement Retrieval-Augmented Generation (RAG).
- Integrate additional tools.
- Add support for multiple LLM providers.
- Build a web-based chatbot interface.
- Explore MCP (Model Context Protocol).

## Learning Goal

The goal of this repository is to understand Generative AI concepts by building practical projects rather than just studying theoretical concepts.

**More projects and experiments will be added as I explore Generative AI.**
