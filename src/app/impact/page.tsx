import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import fs from "fs/promises";
import path from "path";
import { CheckCircle2 } from "lucide-react";

import { ImpactClient } from "./ImpactClient";

export const revalidate = 3600; // ISR revalidate every hour

async function getCaseStudies() {
  try {
    const filePath = path.join(process.cwd(), 'content', 'case-studies.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Error reading case-studies.json:", error);
    return [];
  }
}

export default async function ImpactPage() {
  const caseStudies = await getCaseStudies();
  return <ImpactClient caseStudies={caseStudies} />;
}
