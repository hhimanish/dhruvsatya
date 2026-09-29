import fs from "fs/promises";
import path from "path";
import { InsightsClient } from "./InsightsClient";

// Fetch data on the server
async function getInsights() {
  try {
    const filePath = path.join(process.cwd(), '..', 'content', 'insights.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Error reading insights.json:", error);
    return [];
  }
}

export default async function InsightsPage() {
  const insights = await getInsights();

  return <InsightsClient insights={insights} />;
}
