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
---
**Personal Information:**
- Name: Dharanidharan Senthilkumar
- Role: Cybersecurity Specialist & Developer
- Location: Coimbatore, Tamil Nadu, India
- Contact Email: dharanidharan2d@gmail.com
- Contact Phone: +91 6385854466
- GitHub: https://github.com/DHARANI2D
- LinkedIn: https://linkedin.com
- Education: B.E Computer Science - 8.5 GPA

**Professional Summary:**
An emerging cybersecurity professional with expertise in threat detection, incident response, and secure cloud architectures. Passionate about protecting digital assets and creating innovative security solutions. Specializes in threat detection, automated incident response, and secure cloud architectures. Passion lies in staying ahead of emerging threats and developing proactive security measures.

**Experience:**
1.  **Junior Cybersecurity Analyst Intern at Hewlett Packard Enterprise (HPE)** (Feb 2024 – Present):
    - Works in the Frontline Incident Response (FRIR) team, monitoring, analyzing, and responding to global cybersecurity threats.
    - Handles incidents involving email phishing, endpoint compromise, cloud misconfigurations, and network anomalies.
    - Utilizes enterprise security tools: Zscaler, Proofpoint, CrowdStrike, Splunk, Wiz, ThreatConnect, and Jira.
    - Participates in security automation and playbook design for improved detection and faster response.
2.  **Member of Technical Staff – Intern at Facilio, Chennai** (Sep 2024 – Dec 2024):
    - Built real-time data pipelines using Apache Kafka, Redis, and Apache Storm.
    - Focused on performance tuning, stream analytics, and secure architecture integration.
    - Assisted in processing large-scale building automation data.

**Key Skills (with proficiency):**
- Cybersecurity: 95%
- Incident Response: 92%
- Cloud Computing: 90%
- Python Development: 88%
- DevSecOps: 87%
- Machine Learning: 85%
- Blockchain: 82%
- Pentesting: 80%

**Featured Projects (with GitHub links):**
1.  **Cybersecurity Incident Response Platform:** Advanced platform for monitoring network traffic and automating security incident responses. (https://github.com/DHARANI2D/Cybersecurity_Incident_Response_Platform)
2.  **QuantCrypt - Quantum-Resistant Storage:** Cloud storage solution using quantum-resistant algorithms with AWS S3. (https://github.com/DHARANI2D/quantum-crypt-encryption)
3.  **Ransomware Detection & Prevention:** Real-time file system monitoring tool to detect and halt ransomware behavior. (https://github.com/DHARANI2D/ransomware_detection)
4.  **Deep Fake Detection Engine:** AI-powered web engine for detecting deep fake videos using spectral analysis. (https://github.com/DHARANI2D/Deep_Fake_Detection)
5.  **Credit Card Fraud Detection:** ML-based system to identify evolving fraud tactics. (https://github.com/DHARANI2D/credit-card-fraud-detection-app)
6.  **Structured Terraform Infrastructure:** Modular Kubernetes cluster deployment on AWS with secure state management. (https://github.com/DHARANI2D/terraform-aws)

**Certifications:**
- AWS Certified Cloud Practitioner (Amazon Web Services)
- Microsoft Azure Fundamentals (AZ-900) (Microsoft)
- Fortinet Certified Cybersecurity Associate (Fortinet)
- TigerGraph Associate (TigerGraph)

**Blog Post Topics:**
- Exploring the Future of Blockchain in the Age of Quantum Computing
- Safeguarding the Future: Quantum Cryptography Unveiled
- Quantum Odyssey: Unraveling the Mysteries of Tomorrow Computing
---

Now, answer the following question based *only* on the context provided above.

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
