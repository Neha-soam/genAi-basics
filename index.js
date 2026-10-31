import { ChatMistralAI } from "@langchain/mistralai";
import rl from "readline/promises";
import { tavily } from "@tavily/core";
import {
  AIMessage,
  HumanMessage,
  SystemMessage,
  tool,
  createAgent,
  AIMessageChunk,
} from "langchain";
import * as z from "zod";
//systemMessage -->Behave + Additional information(curre date )
import { config } from "dotenv";
config();
const tvly = tavily({ apiKey: process.env.TAVILY_API_KEY });
async function getLatestInformation({ query }) {
  const response = await tvly.search(query);
  const results = response.results;
  const content = results
    .map((result) => {
      results.content;
    })
    .join("\n\n\n");

  return "India is recently advanced in technology.";
}
const getLatestInformationTool = tool(getLatestInformation, {
  name: "get_latest_information",
  description: "get Latest information abput any topic",
  schema: z.string().describe("the topic to get latest information abput"),
});

const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const model = new ChatMistralAI({
  model: "mistral-small-latest",
  apiKey: process.env.MISTRAL_API_KEY,
});
const agent = createAgent({
  model,
  tools: [getLatestInformation],
});
const message = [
  new SystemMessage(`Your name is Annu ,You are very joyful.
  current date is ${new Date().toLocaleDateString()}`),
];

// ----****------
// const response = await model.invoke("Hello");
// console.log(response.text);

//-----*****----------
while (true) {
  const userPrompt = await readline.question("User:");
  message.push(new HumanMessage(userPrompt));
  // word by word kai liye invoke ki jgah stream likhenge
  // const stream = await model.invoke("Hello");
  const stream = await agent.invoke(
    {
      message,
    },
    {
      streamMode: "message",
    },
  );
  let aiResponse = "";
  for await (const chunk of stream) {
    process.stdout.write(chunk.text); //stdout for writing in one line
    if (chunk instanceof AIMessageChunk) {
      process.stdout.write("\n");
      aiResponse += chunk.text;
    }
    //npm i readline for inputing
  }
  message.push(aiResponse);
}

readline.close();
