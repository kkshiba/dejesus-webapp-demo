"use client";
import { useState, useEffect } from "react";

/**
 * Helper Component: CodeBlock
 * Renders a code snippet with a "Copy to Clipboard" button.
 */
const CodeBlock = ({ children }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = children.props?.children || children;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 bg-gray-700 hover:bg-gray-600 text-xs text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 border border-gray-600"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      {children}
    </div>
  );
};

export default function Home() {
  // --- Page Setup & Scroll Logic ---
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // 1. Set the Browser Tab Title
    const targetTitle = "Tailwind CSS Tutorial";
    document.title = targetTitle;

    // Monitor title to prevent Next.js layout metadata from reverting it
    const titleInterval = setInterval(() => {
      if (document.title !== targetTitle) {
        document.title = targetTitle;
      }
    }, 100);

    // 2. Handle Scroll Progress Bar
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(titleInterval);
    };
  }, []);

  // --- Interactive Playground State ---
  const [demoColor, setDemoColor] = useState("bg-blue-600");
  const [demoRound, setDemoRound] = useState("rounded-lg");
  // Default to a glow effect so it is visible immediately
  const [demoShadow, setDemoShadow] = useState("shadow-lg shadow-blue-500/50");

  // --- Quiz State ---
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question: "Which class adds padding to all sides?",
      options: ["m-4", "p-4", "pad-all", "px-4"],
      answer: "p-4",
    },
    {
      question: "How do you make an element responsive for tablets (768px)?",
      options: ["tablet:", "media-md:", "md:", "t-"],
      answer: "md:",
    },
    {
      question: "Which class centers flex items vertically?",
      options: ["text-center", "justify-center", "items-center", "align-middle"],
      answer: "items-center",
    },
  ];

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 selection:bg-cyan-500 selection:text-white">
      
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 z-[60]" 
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Navigation */}
      <nav className="bg-gray-900 bg-opacity-80 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg animate-pulse"></div>
              <h1 className="text-xl font-bold text-white">Tailwind CSS</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#intro" className="text-gray-300 hover:text-cyan-400 transition font-medium">Intro</a>
              <a href="#setup" className="text-gray-300 hover:text-cyan-400 transition font-medium">Setup</a>
              <a href="#playground" className="text-cyan-400 hover:text-cyan-300 transition font-medium">Playground</a>
              <a href="#utilities" className="text-gray-300 hover:text-cyan-400 transition font-medium">Utilities</a>
              <a href="#examples" className="text-gray-300 hover:text-cyan-400 transition font-medium">Examples</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg hover:scale-105 transition-transform cursor-default">
            ✨ Master Modern CSS
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Build Faster.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Style Smarter.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Learn utility-first CSS and create stunning interfaces without leaving your HTML
          </p>
        </div>

        {/* Introduction */}
        <section id="intro" className="mb-16">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-4">What Makes This Different?</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Utility-first CSS lets you build modern interfaces by composing small, single-purpose classes directly in your markup. No context switching, no naming debates—just pure productivity.
            </p>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-opacity-10 border-l-4 border-cyan-400 p-6 rounded-r-lg backdrop-blur-sm">
              <p className="text-cyan-300 font-semibold mb-3">💡 Key Advantages</p>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Lightning-fast prototyping and iteration</li>
                <li>✓ Built-in design constraints for consistency</li>
                <li>✓ Mobile-first responsive by default</li>
                <li>✓ Smaller CSS bundles in production</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Setup Guide */}
        <section id="setup" className="mb-16">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">Quick Setup</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Step 1: Install</h3>
                <CodeBlock>
                  <div className="bg-black bg-opacity-50 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-gray-700">
                    npm install -D tailwindcss postcss autoprefixer
                    <br />
                    npx tailwindcss init -p
                  </div>
                </CodeBlock>
              </div>

              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Step 2: Configure</h3>
                <p className="text-gray-300 mb-3">Set up your content paths in <code className="bg-gray-700 px-2 py-1 rounded text-sm text-cyan-300">tailwind.config.js</code></p>
                <CodeBlock>
                  <div className="bg-black bg-opacity-50 text-purple-400 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-gray-700">
                    content: ["./src/**/*.{"{"}js,jsx,ts,tsx{"}"}"]
                  </div>
                </CodeBlock>
              </div>

              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Step 3: Import</h3>
                <p className="text-gray-300 mb-3">Add directives to your CSS:</p>
                <CodeBlock>
                  <div className="bg-black bg-opacity-50 text-blue-400 p-4 rounded-lg font-mono text-sm border border-gray-700">
                    @tailwind base;
                    <br />
                    @tailwind components;
                    <br />
                    @tailwind utilities;
                  </div>
                </CodeBlock>
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE PLAYGROUND SECTION */}
        <section id="playground" className="mb-16 scroll-mt-24">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-8 md:p-10 border border-cyan-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">INTERACTIVE</div>
            <h2 className="text-3xl font-bold text-white mb-6">Class Playground 🎮</h2>
            <p className="text-gray-400 mb-8">Click the buttons below to mix and match classes and see how they affect the box instantly.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              {/* Playground Controls */}
              <div className="space-y-6">
                
                {/* 1. Background Color Selector */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Background Color</h4>
                  <div className="flex flex-wrap gap-2">
                    {['bg-blue-600', 'bg-red-500', 'bg-green-500', 'bg-purple-600', 'bg-yellow-500'].map((cls) => (
                      <button 
                        key={cls}
                        onClick={() => setDemoColor(cls)}
                        className={`${cls} w-8 h-8 rounded-full border-2 ${cls.replace('bg-', 'border-').replace('600', '400').replace('500', '300')} ${demoColor === cls ? 'ring-2 ring-white scale-110' : 'opacity-70'} transition-all`}
                        aria-label={`Select ${cls}`}
                      />
                    ))}
                  </div>
                </div>

                {/* 2. Border Radius Selector */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Border Radius</h4>
                  <div className="flex flex-wrap gap-2">
                    {['rounded-none', 'rounded-md', 'rounded-lg', 'rounded-full'].map((cls) => (
                      <button 
                        key={cls}
                        onClick={() => setDemoRound(cls)}
                        className={`px-3 py-1 text-xs border border-gray-600 text-gray-300 rounded hover:bg-gray-700 ${demoRound === cls ? 'bg-cyan-600 border-cyan-500 text-white' : ''} transition-all`}
                      >
                        {cls}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Shadow Selector */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Shadow (Glow)</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: 'None', val: 'shadow-none' },
                      { label: 'Cyan Glow', val: 'shadow-lg shadow-cyan-500/50' },
                      { label: 'Purple Glow', val: 'shadow-2xl shadow-purple-500/50' },
                      { label: 'White Glow', val: 'shadow-xl shadow-white/20' }
                    ].map((opt) => (
                      <button 
                        key={opt.val}
                        onClick={() => setDemoShadow(opt.val)}
                        className={`px-3 py-1 text-xs border border-gray-600 text-gray-300 rounded hover:bg-gray-700 ${demoShadow === opt.val ? 'bg-cyan-600 border-cyan-500 text-white' : ''} transition-all`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Playground Visual Preview */}
              <div className="flex flex-col items-center justify-center bg-black bg-opacity-30 rounded-xl p-8 border border-gray-700">
                <div className={`w-32 h-32 flex items-center justify-center text-white font-bold transition-all duration-500 ${demoColor} ${demoRound} ${demoShadow}`}>
                  Box
                </div>
                <div className="mt-6 w-full">
                  <p className="text-xs text-gray-500 mb-2 font-mono">Current Classes:</p>
                  <div className="bg-black p-3 rounded text-green-400 font-mono text-sm border border-gray-700 break-words">
                    className="{demoColor} {demoRound} <br className="md:hidden"/> {demoShadow}"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Utilities */}
        <section id="utilities" className="mb-16">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">Core Utilities</h2>

            <div className="space-y-8">
              {/* Spacing */}
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">📏 Spacing</h3>
                <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-4 rounded text-white hover:opacity-90 transition">
                      <code className="text-sm font-mono bg-black/30 px-1 rounded">p-4</code> = padding: 1rem
                    </div>
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded text-white hover:opacity-90 transition">
                      <code className="text-sm font-mono bg-black/30 px-1 rounded">m-4</code> = margin: 1rem
                    </div>
                    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-4 rounded text-white hover:opacity-90 transition">
                      <code className="text-sm font-mono bg-black/30 px-1 rounded">px-6</code> = horizontal padding
                    </div>
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded text-white hover:opacity-90 transition">
                      <code className="text-sm font-mono bg-black/30 px-1 rounded">mt-8</code> = margin top
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">Scale: 0-96, each unit = 0.25rem (4px)</p>
                </div>
              </div>

              {/* Colors */}
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">🎨 Colors</h3>
                <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-700">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="bg-red-500 text-white px-4 py-2 rounded-lg font-mono text-sm shadow-lg hover:bg-red-600 transition cursor-pointer">bg-red-500</div>
                    <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-mono text-sm shadow-lg hover:bg-blue-600 transition cursor-pointer">bg-blue-500</div>
                    <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-mono text-sm shadow-lg hover:bg-green-600 transition cursor-pointer">bg-green-500</div>
                    <div className="bg-purple-500 text-white px-4 py-2 rounded-lg font-mono text-sm shadow-lg hover:bg-purple-600 transition cursor-pointer">bg-purple-500</div>
                  </div>
                  <p className="text-sm text-gray-400">Shades: 50 (lightest) → 950 (darkest)</p>
                </div>
              </div>

              {/* Flexbox */}
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">📦 Flexbox</h3>
                <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-700">
                  <div className="flex justify-between items-center bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-lg shadow-lg mb-3 border border-gray-600 h-24">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm">Item 1</div>
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm">Item 2</div>
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm">Item 3</div>
                  </div>
                  <CodeBlock>
                    <code className="text-sm bg-black bg-opacity-50 text-green-400 px-3 py-2 rounded block border border-gray-700">
                      flex justify-between items-center
                    </code>
                  </CodeBlock>
                </div>
              </div>

              {/* Responsive */}
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">📱 Responsive</h3>
                <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-700">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg mb-3 shadow-lg relative overflow-hidden">
                     {/* Visual indicators for current breakpoint */}
                    <div className="absolute top-2 right-2 flex gap-1">
                      <span className="block sm:hidden text-xs bg-black/40 px-2 rounded">Mobile</span>
                      <span className="hidden sm:block md:hidden text-xs bg-black/40 px-2 rounded">SM</span>
                      <span className="hidden md:block lg:hidden text-xs bg-black/40 px-2 rounded">MD</span>
                      <span className="hidden lg:block text-xs bg-black/40 px-2 rounded">LG+</span>
                    </div>
                    <p className="font-bold mb-2">Resize window to see me change!</p>
                    <p className="block sm:hidden text-sm opacity-90">Currently: Default (Mobile)</p>
                    <p className="hidden sm:block md:hidden text-sm opacity-90">Currently: Small Breakpoint</p>
                    <p className="hidden md:block lg:hidden text-sm opacity-90">Currently: Medium Breakpoint</p>
                    <p className="hidden lg:block text-sm opacity-90">Currently: Large Breakpoint</p>
                  </div>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p><code className="bg-gray-700 px-2 py-1 rounded text-cyan-300">sm:</code> 640px+</p>
                    <p><code className="bg-gray-700 px-2 py-1 rounded text-cyan-300">md:</code> 768px+</p>
                    <p><code className="bg-gray-700 px-2 py-1 rounded text-cyan-300">lg:</code> 1024px+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practical Components */}
        <section id="examples" className="mb-16">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">Build Components</h2>

            <div className="space-y-8">
              {/* Button Example */}
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Interactive Button</h3>
                <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-700 group">
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition transform hover:scale-105 active:scale-95">
                    Hover & Click Me
                  </button>
                  <div className="mt-4">
                    <CodeBlock>
                      <div className="bg-black bg-opacity-50 text-green-400 p-4 rounded font-mono text-xs overflow-x-auto border border-gray-700 whitespace-nowrap">
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105"
                      </div>
                    </CodeBlock>
                  </div>
                </div>
              </div>

              {/* Card Example */}
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Card Component</h3>
                <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-700">
                  <div className="max-w-sm bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition duration-300 group">
                    <div className="h-48 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 group-hover:scale-105 transition duration-500"></div>
                    <div className="p-6 relative">
                      <h4 className="text-2xl font-bold text-white mb-2">Modern Card</h4>
                      <p className="text-gray-400 mb-4">Built with utility classes for maximum flexibility and minimal CSS.</p>
                      <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition w-full">
                        Explore
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Grid Example */}
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Responsive Grid</h3>
                <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-6 rounded-lg text-center shadow-lg hover:-translate-y-1 transition">
                      <p className="font-bold">Column 1</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white p-6 rounded-lg text-center shadow-lg hover:-translate-y-1 transition delay-75">
                      <p className="font-bold">Column 2</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-500 to-teal-600 text-white p-6 rounded-lg text-center shadow-lg hover:-translate-y-1 transition delay-150">
                      <p className="font-bold">Column 3</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <CodeBlock>
                      <div className="bg-black bg-opacity-50 text-purple-400 p-4 rounded font-mono text-xs border border-gray-700">
                        grid grid-cols-1 md:grid-cols-3 gap-4
                      </div>
                    </CodeBlock>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pro Tips */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-700 rounded-2xl shadow-2xl p-8 md:p-10 text-white border border-cyan-400 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-white opacity-5 rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
            <h2 className="text-3xl font-bold mb-6 relative z-10">Pro Tips 💎</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <div className="bg-black bg-opacity-20 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20 hover:bg-opacity-30 transition">
                <h3 className="font-bold text-lg mb-2 text-white">Use the Docs</h3>
                <p className="text-sm text-white">Official documentation is comprehensive with live examples for every utility.</p>
              </div>
              <div className="bg-black bg-opacity-20 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20 hover:bg-opacity-30 transition">
                <h3 className="font-bold text-lg mb-2 text-white">Mobile First</h3>
                <p className="text-sm text-white">Design for mobile, then layer responsive classes for larger screens.</p>
              </div>
              <div className="bg-black bg-opacity-20 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20 hover:bg-opacity-30 transition">
                <h3 className="font-bold text-lg mb-2 text-white">Compose Utilities</h3>
                <p className="text-sm text-white">Combine simple classes to create complex designs without custom CSS.</p>
              </div>
              <div className="bg-black bg-opacity-20 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20 hover:bg-opacity-30 transition">
                <h3 className="font-bold text-lg mb-2 text-white">Practice Builds Speed</h3>
                <p className="text-sm text-white">The more you build, the faster you'll internalize class names.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Knowledge Check / Quiz */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-700">
             <h2 className="text-3xl font-bold text-white mb-6">Knowledge Check 🧠</h2>
             
             {showScore ? (
                <div className="text-center py-10">
                   <div className="text-6xl mb-4">🎉</div>
                   <h3 className="text-2xl text-white font-bold mb-2">You scored {score} out of {questions.length}</h3>
                   <p className="text-gray-400 mb-6">Great job learning Tailwind CSS!</p>
                   <button 
                    onClick={() => { setShowScore(false); setCurrentQuestion(0); setScore(0); }}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition"
                   >
                     Restart Quiz
                   </button>
                </div>
             ) : (
               <div className="max-w-2xl mx-auto">
                 <div className="flex justify-between text-sm text-gray-400 mb-4">
                   <span>Question {currentQuestion + 1}/{questions.length}</span>
                   <span>Score: {score}</span>
                 </div>
                 <div className="bg-black bg-opacity-30 p-6 rounded-xl border border-gray-700 mb-6">
                    <h3 className="text-xl text-white font-semibold">{questions[currentQuestion].question}</h3>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {questions[currentQuestion].options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleAnswerOptionClick(option)}
                        className="p-4 bg-gray-800 border border-gray-600 rounded-lg text-left text-cyan-400 hover:bg-gray-700 hover:border-cyan-400 transition"
                      >
                        {option}
                      </button>
                    ))}
                 </div>
               </div>
             )}
          </div>
        </section>

        {/* Footer / Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-10 border border-gray-700 relative overflow-hidden group">
            <div className="absolute inset-0 bg-cyan-600 opacity-0 group-hover:opacity-5 transition duration-500"></div>
            <h2 className="text-3xl font-bold text-white mb-4">Start Building Today</h2>
            <p className="text-lg text-gray-300 mb-6">
              Transform your workflow with utility-first CSS
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition transform hover:scale-105 ring-4 ring-cyan-500/20">
              Get Started Now
            </button>
          </div>
        </section>
      </div>

      {/* Main Footer */}
      <footer className="bg-black bg-opacity-50 text-white py-12 mt-16 border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Happy Building! ✨</h3>
          <p className="text-gray-400">Crafted by Antonio De Jesus</p>
          <p className="text-sm text-gray-500 mt-4">Powered by utility-first CSS</p>
        </div>
      </footer>
    </div>
  );
}