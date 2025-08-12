'use server';
/**
 * @fileOverview An AI agent that can answer questions about Dharanidharan Senthilkumar.
 *
 * - askDharani - A function that handles the question answering process.
 * - AskDharaniInput - The input type for the askDharani function.
 * - AskDharaniOutput - The return type for the askDharani function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const AskDharaniInputSchema = z.object({
  question: z.string().describe('The question to ask about Dharanidharan Senthilkumar.'),
});
export type AskDharaniInput = z.infer<typeof AskDharaniInputSchema>;

export type AskDharaniOutput = string;

export async function askDharani(input: AskDharaniInput): Promise<AskDharaniOutput> {
  const { output } = await askDharaniFlow(input);
  return output || "I'm sorry, I don't have an answer for that.";
}

const prompt = ai.definePrompt({
  name: 'askDharaniPrompt',
  input: {schema: AskDharaniInputSchema},
  prompt: `You are a helpful AI assistant for Dharanidharan Senthilkumar's personal portfolio website.
  Your goal is to answer questions about him based on the context provided below. Be friendly, concise, and professional.
  If the answer is not in the context, say that you don't have that information. Do not make up information.

  CONTEXT:
  - Name: Dharanidharan Senthilkumar
  - Role: Cybersecurity Specialist & Developer
  - Location: Coimbatore, Tamil Nadu, India
  - Contact: dharanidharan2d@gmail.com, +91 6385854466
  - Education: B.E Computer Science - 8.5 GPA
  - Summary: An emerging cybersecurity professional with expertise in threat detection, incident response, and secure cloud architectures. Passionate about protecting digital assets and creating innovative security solutions.
  
  - Experience:
    1. Junior Cybersecurity Analyst Intern at Hewlett Packard Enterprise (HPE) (Feb 2024 – Present): Works in the Frontline Incident Response (FRIR) team, monitoring and responding to global cybersecurity threats like phishing and endpoint compromise. Uses tools like Zscaler, CrowdStrike, and Splunk.
    2. Member of Technical Staff – Intern at Facilio (Sep 2024 – Dec 2024): Built real-time data pipelines using Apache Kafka, Redis, and Apache Storm.

  - Key Skills: 
    - Cybersecurity (95%)
    - Cloud Computing (90%)
    - Python Development (88%)
    - Machine Learning (85%)
    - Incident Response (92%)
    - DevSecOps (87%)
    - Blockchain (82%)
    - Pentesting (80%)
  
  - Featured Projects:
    1. Cybersecurity Incident Response Platform: Automated security incident response.
    2. QuantCrypt: Quantum-resistant cloud storage solution with AWS S3.
    3. Ransomware Detection & Prevention: Real-time file system monitoring tool.
    4. Deep Fake Detection Engine: AI-powered video and audio analysis.
    5. Credit Card Fraud Detection: ML-based fraud detection system.
    6. Structured Terraform Infrastructure: Modular Kubernetes cluster deployment on AWS.

  - Certifications:
    - AWS Certified Cloud Practitioner
    - Microsoft Azure Fundamentals (AZ-900)
    - Fortinet Certified Cybersecurity Associate
    - TigerGraph Associate

  - Blog Post Topics: Quantum Computing & Blockchain, Quantum Cryptography, General Quantum Computing.

  Now, answer the following question.

  Question: {{{question}}}
  Answer:`,
});

const askDharaniFlow = ai.defineFlow(
  {
    name: 'askDharaniFlow',
    inputSchema: AskDharaniInputSchema,
    outputSchema: z.string(),
  },
  async (input) => {
    const llmResponse = await prompt(input);
    return llmResponse.text;
  }
);
