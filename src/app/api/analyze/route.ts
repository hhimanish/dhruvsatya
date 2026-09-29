import { NextResponse } from "next/server";

// Intelligent Global In-Memory Caching System
// Survives hot-reloads and maintains ultra-fast access in the serverless instance
const globalForCache = global as unknown as { responseCache: Map<string, any> };
const responseCache = globalForCache.responseCache || new Map<string, any>();
if (process.env.NODE_ENV !== 'production') globalForCache.responseCache = responseCache;

export async function POST(req: Request) {
  try {
    const { linkedin, website, scenario } = await req.json();

    if (!linkedin && !website && !scenario) {
      return NextResponse.json(
        { error: "Please provide at least one input for analysis." },
        { status: 400 }
      );
    }

    // Normalize inputs to prevent microscopic differences (like spaces or capitalization) from breaking the cache
    const normalize = (str: string) => (str || "").trim().toLowerCase();
    const cacheKey = JSON.stringify({ 
      linkedin: normalize(linkedin), 
      website: normalize(website), 
      scenario: normalize(scenario),
      version: "v3" 
    });

    // Intelligent Cache Bypass: Return ultra-fast deterministic result if it exists
    if (responseCache.has(cacheKey)) {
      console.log("⚡ CACHE HIT: Bypassing AI and returning exact cached diagnostic result.");
      return NextResponse.json(responseCache.get(cacheKey));
    }
    
    console.log("🧠 CACHE MISS: Running deep AI diagnostic...");

    const groqApiKey = process.env.GROQ_API_KEY;
    if (!groqApiKey) {
      return NextResponse.json(
        { error: "Groq API key not configured on server." },
        { status: 500 }
      );
    }

    const systemPrompt = `You are a world-class Organizational Transformation Expert and Diagnostic Analyst for DhruvSatya (a premium organizational consulting firm). 
Your task is to analyze the provided company inputs (LinkedIn profile insights, website context, and a specific scenario) and perform a comprehensive diagnostic scan across ALL non-technical organizational parameters.

Consider a wide range of parameters including, but not limited to:
- Training & Development (T&D)
- Change Management
- Organizational Transformation
- Employee Motivation & Bonding
- Leadership & Executive Coaching
- Cultural Alignment & Values
- Talent Retention & Attrition
- Internal Communication & Silos
- Conflict Resolution
- Succession Planning
- Diversity, Equity & Inclusion (DEI)
- Performance Management

After your comprehensive analysis, you MUST select ONLY the TOP 4 MOST URGENTLY REQUIRED parameters for this specific company and scenario.

Respond ONLY with a valid JSON object using the following exact schema:
{
  "executiveSummary": "A high-level 2-3 sentence summary of the organization's current state and critical gaps.",
  "metrics": [
    {
      "category": "<Name of the 1st most urgent parameter (e.g. Leadership Development)>",
      "score": <number 1-100 indicating extreme urgency/need>,
      "insights": ["<insight 1>", "<insight 2>"],
      "actionPlan": "<High-impact recommendation>"
    },
    {
      "category": "<Name of the 2nd most urgent parameter>",
      "score": <number 1-100>,
      "insights": ["<insight 1>", "<insight 2>"],
      "actionPlan": "<High-impact recommendation>"
    },
    {
      "category": "<Name of the 3rd most urgent parameter>",
      "score": <number 1-100>,
      "insights": ["<insight 1>", "<insight 2>"],
      "actionPlan": "<High-impact recommendation>"
    },
    {
      "category": "<Name of the 4th most urgent parameter>",
      "score": <number 1-100>,
      "insights": ["<insight 1>", "<insight 2>"],
      "actionPlan": "<High-impact recommendation>"
    }
  ],
  "strategicAdvantage": "A concluding statement on how addressing these specific top 4 gaps will unlock world-class performance."
}`;

    const userPrompt = `Please analyze the following organizational context:
LinkedIn/Social Context: ${linkedin || "Not provided"}
Website/Industry Context: ${website || "Not provided"}
Specific Scenario/Challenges: ${scenario || "Not provided"}

Output the detailed diagnostic report in the requested JSON format.`;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${groqApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-120b",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        response_format: { type: "json_object" },
        temperature: 0.0,
        seed: 42,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Groq API Error:", errorText);
      return NextResponse.json(
        { error: "Failed to generate analysis from AI provider." },
        { status: response.status }
      );
    }

    const data = await response.json();
    const content = data.choices[0].message.content;
    const parsedData = JSON.parse(content);

    // Save to cache before returning
    responseCache.set(cacheKey, parsedData);

    return NextResponse.json(parsedData);
  } catch (error) {
    console.error("Diagnostic Route Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred during analysis." },
      { status: 500 }
    );
  }
}
