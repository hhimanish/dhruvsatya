import fs from "fs/promises";
import path from "path";
import { ProgramsClient } from "./ProgramsClient";

export const revalidate = 3600; // ISR revalidate every hour

// Fetch data on the server
async function getPrograms() {
  try {
    const filePath = path.join(process.cwd(), 'content', 'programs.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Error reading programs.json:", error);
    return [];
  }
}

export default async function ProgramsPage() {
  const programs = await getPrograms();

  return <ProgramsClient programs={programs} />;
}
