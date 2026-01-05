'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

export function Terminal() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<{ command: string; result: React.ReactNode }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const commandList: { [key: string]: { description: string; content: React.ReactNode } } = {
    about: {
      description: 'Displays information about me.',
      content: 'Security Engineer focused on Detection Engineering, AI Security, and Cloud-Native Defense. I design systems that reason over security signals, enforce zero-trust controls for AI agents, and automate incident response at scale.'
    },
    experience: {
      description: 'Lists my professional experience.',
      content: (
        <div className="space-y-4">
          <div>
            <p className="text-blue-400 font-bold">Hewlett Packard Enterprise (HPE)</p>
            <div className="pl-4 border-l-2 border-gray-700 ml-1 mt-1 space-y-2">
              <div>
                <p className="text-white">Junior Cybersecurity Analyst – Frontline IR</p>
                <p className="text-xs text-gray-500">Full-time • Feb 2024 – Present</p>
              </div>
              <div>
                <p className="text-gray-400">Cybersecurity Intern</p>
                <p className="text-xs text-gray-500">Feb 2025 – Aug 2025</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-green-400 font-bold">Facilio</p>
            <p className="text-white pl-4">Member of Technical Staff – Intern</p>
            <p className="text-xs text-gray-500 pl-4">Sep 2024 – Dec 2024</p>
          </div>
        </div>
      )
    },
    projects: {
      description: 'Shows my featured projects.',
      content: (
        <ul className="space-y-1">
          <li><span className="text-purple-400 font-semibold">SignalFusion Core</span> - Attack Path Correlation Engine</li>
          <li><span className="text-purple-400 font-semibold">AEGIS</span> - AI Security Control Plane</li>
          <li><span className="text-purple-400 font-semibold">ANCHOR</span> - Secure Self-Hosted Dev Platform</li>
          <li><span className="text-gray-400">Deep Fake Detection Engine</span></li>
          <li><span className="text-gray-400">Ransomware Behavior Detection</span></li>
        </ul>
      )
    },
    skills: {
      description: 'Lists my key technical skills.',
      content: (
        <div className="space-y-2">
          <div><span className="text-blue-400 font-bold">Security:</span> Detection Engineering, Incident Response, Threat Hunting, MITRE ATT&CK</div>
          <div><span className="text-purple-400 font-bold">AI Security:</span> Prompt Injection Defense, Semantic Firewalls, LLM Risk Modeling</div>
          <div><span className="text-green-400 font-bold">Cloud & Ops:</span> AWS, Azure, K8s, Terraform, Docker, Zero Trust</div>
          <div><span className="text-orange-400 font-bold">Engineering:</span> Python, TypeScript, FastAPI, Next.js, Kafka, Redis</div>
        </div>
      )
    },
    contact: {
      description: 'Shows my contact information.',
      content: (
        <div>
          <p>Email: dharanidharan2d@gmail.com</p>
          <p>LinkedIn: linkedin.com/in/dharanidharan-senthilkumar</p>
          <p>GitHub: github.com/DHARANI2D</p>
        </div>
      )
    }
  };

  commandList.help = {
    description: 'Shows a list of available commands.',
    content: (
      <div className="space-y-1">
        <p className="font-bold">Available commands:</p>
        <ul className="list-disc list-inside">
          {Object.keys(commandList).map(cmd => (
            <li key={cmd}>
              <span className="text-purple-400">{cmd}</span> - {commandList[cmd].description}
            </li>
          ))}
          <li>
            <span className="text-purple-400">clear</span> - Clears the terminal output.
          </li>
        </ul>
      </div>
    )
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const command = input.trim().toLowerCase();
    let result: React.ReactNode;

    if (command === 'clear') {
      setOutput([]);
    } else if (commandList[command]) {
      result = commandList[command].content;
      setOutput(prev => [...prev, { command, result }]);
    } else {
      result = `Command not found: ${command}. Type 'help' for a list of commands.`;
      setOutput(prev => [...prev, { command, result }]);
    }

    setInput('');
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [output]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div
      className="danus-terminal bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg shadow-2xl shadow-purple-500/20 h-96 flex flex-col"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal header */}
      <div className="flex-shrink-0 bg-gray-900/80 flex items-center justify-between px-4 py-2 rounded-t-lg border-b border-white/20">
        <div className="flex items-center space-x-2">
          <TerminalIcon className="w-5 h-5 text-purple-400" />
          <span className="text-sm font-medium text-gray-300 select-none">/bin/bash</span>
        </div>
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>

      {/* Terminal body */}
      <div
        ref={scrollRef}
        className="flex-grow p-4 overflow-y-auto text-sm font-mono space-y-4"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        <div>
          Welcome to <span className="text-purple-400 font-bold select-text">D.A.N.U.S.</span> interactive terminal! Type <code>help</code> to see available commands.
        </div>

        {output.map((line, index) => (
          <div key={index}>
            <div className="flex items-center select-text">
              <span className="text-green-400">guest@dharani-portfolio</span>
              <span className="text-gray-500">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-gray-500">$</span>
              <span className="ml-2">{line.command}</span>
            </div>
            <div className="text-white/90">{line.result}</div>
          </div>
        ))}

        {/* Input line */}
        <form onSubmit={handleFormSubmit} className="flex items-center select-text">
          <span className="text-green-400">guest@dharani-portfolio</span>
          <span className="text-gray-500">:</span>
          <span className="text-blue-400">~</span>
          <span className="text-gray-500">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            className="flex-grow bg-transparent border-none focus:ring-0 outline-none text-gray-300 ml-2 font-mono"
            autoFocus
            autoComplete="off"
            spellCheck="false"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          />
        </form>
      </div>
    </div>
  );
}
