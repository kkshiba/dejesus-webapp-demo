export default function Home() {
  return (
    <>
      <head>
        <title>Tailwind CSS Tutorial</title>
      </head>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
        {/* Navigation */}
        <nav className="bg-gray-900 bg-opacity-80 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg"></div>
                <h1 className="text-xl font-bold text-white">Tailwind CSS</h1>
              </div>
              <div className="hidden md:flex space-x-6">
                <a href="#intro" className="text-gray-300 hover:text-cyan-400 transition font-medium">Intro</a>
                <a href="#setup" className="text-gray-300 hover:text-cyan-400 transition font-medium">Setup</a>
                <a href="#utilities" className="text-gray-300 hover:text-cyan-400 transition font-medium">Utilities</a>
                <a href="#examples" className="text-gray-300 hover:text-cyan-400 transition font-medium">Examples</a>
              </div>
            </div>
          </div>
        </nav>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
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

        {/* Introduction Section */}
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

        {/* Setup Section */}
        <section id="setup" className="mb-16">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">Quick Setup</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Step 1: Install</h3>
                <div className="bg-black bg-opacity-50 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-gray-700">
                  npm install -D tailwindcss postcss autoprefixer
                  <br />
                  npx tailwindcss init -p
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Step 2: Configure</h3>
                <p className="text-gray-300 mb-3">Set up your content paths in <code className="bg-gray-700 px-2 py-1 rounded text-sm text-cyan-300">tailwind.config.js</code></p>
                <div className="bg-black bg-opacity-50 text-purple-400 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-gray-700">
                  content: ["./src/**/*.{"{"}js,jsx,ts,tsx{"}"}"]
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Step 3: Import</h3>
                <p className="text-gray-300 mb-3">Add directives to your CSS:</p>
                <div className="bg-black bg-opacity-50 text-blue-400 p-4 rounded-lg font-mono text-sm border border-gray-700">
                  @tailwind base;
                  <br />
                  @tailwind components;
                  <br />
                  @tailwind utilities;
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Utilities Section */}
        <section id="utilities" className="mb-16">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">Core Utilities</h2>

            <div className="space-y-8">
              {/* Spacing */}
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">📏 Spacing</h3>
                <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-4 rounded text-white">
                      <code className="text-sm font-mono">p-4</code> = padding: 1rem
                    </div>
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded text-white">
                      <code className="text-sm font-mono">m-4</code> = margin: 1rem
                    </div>
                    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-4 rounded text-white">
                      <code className="text-sm font-mono">px-6</code> = horizontal padding
                    </div>
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded text-white">
                      <code className="text-sm font-mono">mt-8</code> = margin top
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
                    <div className="bg-red-500 text-white px-4 py-2 rounded-lg font-mono text-sm shadow-lg">bg-red-500</div>
                    <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-mono text-sm shadow-lg">bg-blue-500</div>
                    <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-mono text-sm shadow-lg">bg-green-500</div>
                    <div className="bg-purple-500 text-white px-4 py-2 rounded-lg font-mono text-sm shadow-lg">bg-purple-500</div>
                  </div>
                  <p className="text-sm text-gray-400">Shades: 50 (lightest) → 950 (darkest)</p>
                </div>
              </div>

              {/* Flexbox */}
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">📦 Flexbox</h3>
                <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-700">
                  <div className="flex justify-between items-center bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-lg shadow-lg mb-3 border border-gray-600">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg">Item 1</div>
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg">Item 2</div>
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg">Item 3</div>
                  </div>
                  <code className="text-sm bg-black bg-opacity-50 text-green-400 px-3 py-2 rounded block border border-gray-700">
                    flex justify-between items-center
                  </code>
                </div>
              </div>

              {/* Responsive */}
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">📱 Responsive</h3>
                <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-700">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg mb-3 shadow-lg">
                    <p className="font-bold mb-2">Resize to see breakpoints!</p>
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

        {/* Practical Examples */}
        <section id="examples" className="mb-16">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">Build Components</h2>

            <div className="space-y-8">
              {/* Button Example */}
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Interactive Button</h3>
                <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-700">
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition transform hover:scale-105">
                    Get Started
                  </button>
                  <div className="mt-4 bg-black bg-opacity-50 text-green-400 p-4 rounded font-mono text-xs overflow-x-auto border border-gray-700">
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition transform hover:scale-105"
                  </div>
                </div>
              </div>

              {/* Card Example */}
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Card Component</h3>
                <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-700">
                  <div className="max-w-sm bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
                    <div className="h-48 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500"></div>
                    <div className="p-6">
                      <h4 className="text-2xl font-bold text-white mb-2">Modern Card</h4>
                      <p className="text-gray-400 mb-4">Built with utility classes for maximum flexibility and minimal CSS.</p>
                      <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition">
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
                    <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-6 rounded-lg text-center shadow-lg">
                      <p className="font-bold">Column 1</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white p-6 rounded-lg text-center shadow-lg">
                      <p className="font-bold">Column 2</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-500 to-teal-600 text-white p-6 rounded-lg text-center shadow-lg">
                      <p className="font-bold">Column 3</p>
                    </div>
                  </div>
                  <div className="mt-4 bg-black bg-opacity-50 text-purple-400 p-4 rounded font-mono text-xs border border-gray-700">
                    grid grid-cols-1 md:grid-cols-3 gap-4
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-700 rounded-2xl shadow-2xl p-8 md:p-10 text-white border border-cyan-400">
            <h2 className="text-3xl font-bold mb-6">Pro Tips 💎</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black bg-opacity-20 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20">
                <h3 className="font-bold text-lg mb-2 text-white">Use the Docs</h3>
                <p className="text-sm text-white">Official documentation is comprehensive with live examples for every utility.</p>
              </div>
              <div className="bg-black bg-opacity-20 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20">
                <h3 className="font-bold text-lg mb-2 text-white">Mobile First</h3>
                <p className="text-sm text-white">Design for mobile, then layer responsive classes for larger screens.</p>
              </div>
              <div className="bg-black bg-opacity-20 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20">
                <h3 className="font-bold text-lg mb-2 text-white">Compose Utilities</h3>
                <p className="text-sm text-white">Combine simple classes to create complex designs without custom CSS.</p>
              </div>
              <div className="bg-black bg-opacity-20 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20">
                <h3 className="font-bold text-lg mb-2 text-white">Practice Builds Speed</h3>
                <p className="text-sm text-white">The more you build, the faster you'll internalize class names.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-10 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-4">Start Building Today</h2>
            <p className="text-lg text-gray-300 mb-6">
              Transform your workflow with utility-first CSS
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition transform hover:scale-105">
              Get Started Now
            </button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-black bg-opacity-50 text-white py-12 mt-16 border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Happy Building! ✨</h3>
          <p className="text-gray-400">Crafted by Antonio De Jesus</p>
          <p className="text-sm text-gray-500 mt-4">Powered by utility-first CSS</p>
        </div>
      </footer>
    </div>
    </>
  );
}