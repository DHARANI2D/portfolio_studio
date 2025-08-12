'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, HelpCircle, User, Briefcase, Code, Award, Mail, XCircle } from 'lucide-react';

export function Terminal() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<{ command: string; result: React.ReactNode }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const commands: { [key: string]: { description: string; content: React.ReactNode } } = {
    about: {
      description: 'Displays information about me.',
      content: 'Emerging cybersecurity professional with expertise in threat detection, incident response, and secure cloud architectures. Transforming digital challenges into innovative security solutions.'
    },
    experience: {
        description: 'Lists my professional experience.',
        content: (
            <div>
                <p>Junior Cybersecurity Analyst Intern @ Hewlett Packard Enterprise (Feb 2024 – Present)</p>
                <p>Member of Technical Staff – Intern @ Facilio (Sep 2024 – Dec 2024)</p>
            </div>
        )
    },
    projects: {
      description: 'Shows my featured projects.',
      content: (
        <ul className="list-disc list-inside">
          <li>Cybersecurity Incident Response Platform</li>
          <li>QuantCrypt - Quantum-Resistant Storage</li>
          <li>Ransomware Detection & Prevention</li>
        </ul>
      )
    },
    skills: {
      description: 'Lists my key technical skills.',
      content: 'Cybersecurity, Cloud Computing, Python, Machine Learning, Blockchain, DevSecOps, Incident Response, Pentesting.'
    },
    contact: {
      description: 'Shows my contact information.',
      content: (
        <div>
          <p>Email: dharanidharan2d@gmail.com</p>
          <p>LinkedIn: linkedin.com/in/your-profile</p>
        </div>
      )
    }
  };

  commands.help = {
      description: 'Shows a list of available commands.',
      content: (
        <div className="space-y-1">
          <p className="font-bold">Available commands:</p>
          <ul className="list-disc list-inside">
            {Object.keys(commands).map(cmd => (
              <li key={cmd}><span className="text-purple-400">{cmd}</span> - {commands[cmd].description}</li>
            ))}
             <li><span className="text-purple-400">clear</span> - Clears the terminal output.</li>
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
    } else if (commands[command]) {
      result = commands[command].content;
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
      className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-lg shadow-2xl shadow-purple-500/10 h-96 flex flex-col"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex-shrink-0 bg-gray-800/50 flex items-center justify-between px-4 py-2 rounded-t-lg border-b border-white/20">
        <div className="flex items-center space-x-2">
            <TerminalIcon className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium text-gray-300">/bin/bash</span>
        </div>
        <div className="flex space-x-1.5">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
      <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto text-sm font-mono text-gray-300 space-y-4">
        <div>
            Welcome to my interactive terminal! Type `help` to see available commands.
        </div>
        {output.map((line, index) => (
          <div key={index}>
            <div className="flex items-center">
              <span className="text-green-400">guest@dharani-portfolio</span>
              <span className="text-gray-500">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-gray-500">$</span>
              <span className="ml-2">{line.command}</span>
            </div>
            <div className="text-white/90">{line.result}</div>
          </div>
        ))}
        <form onSubmit={handleFormSubmit} className="flex items-center">
           <span className="text-green-400">guest@dharani-portfolio</span>
           <span className="text-gray-500">:</span>
           <span className="text-blue-400">~</span>
           <span className="text-gray-500">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            className="flex-grow bg-transparent border-none focus:ring-0 outline-none text-gray-300 ml-2"
            autoFocus
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </div>
    </div>
  );
}