export default function GettingStarted() {
  return (
    <section id="getting-started" className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Getting Started</h2>
        <p className="text-lg text-slate-600">Experience true data sovereignty with blockchain-powered encryption</p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 id="what-is-keyura" className="text-2xl font-semibold text-slate-800 mb-4">What is Keyura?</h3>
          <div className="space-y-4 text-slate-700">
            <p className="leading-relaxed">
              Keyura is a decentralized platform that puts you in complete control of your sensitive data. 
              Store documents, notes, seed phrases, and any confidential information with <strong>military-grade encryption</strong> 
              that happens entirely in your browser before touching the blockchain.
            </p>
            
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 rounded-lg p-6">
              <h4 className="font-semibold text-slate-800 mb-3">🚀 What Makes Keyura Unique?</h4>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">🔐</span>
                  <div>
                    <strong className="text-slate-800">Client-Side Encryption:</strong>
                    <p className="text-sm text-slate-600">Your data is encrypted in your browser using AES-256-GCM with PBKDF2 key derivation (100,000 iterations) before it ever leaves your device.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">⛓️</span>
                  <div>
                    <strong className="text-slate-800">Blockchain Immutability:</strong>
                    <p className="text-sm text-slate-600">Your personal smart contract on Polygon stores encrypted references, creating an immutable, tamper-proof record.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">🌐</span>
                  <div>
                    <strong className="text-slate-800">IPFS Distribution:</strong>
                    <p className="text-sm text-slate-600">Encrypted files are distributed across IPFS nodes worldwide, eliminating single points of failure.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">🔑</span>
                  <div>
                    <strong className="text-slate-800">Zero-Knowledge Architecture:</strong>
                    <p className="text-sm text-slate-600">Even we cannot access your data. Only your wallet signature + encryption password can decrypt your files.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border-l-4 border-slate-400 p-4 rounded-r-lg">
              <h4 className="font-semibold text-slate-800 mb-2">🆚 Traditional Cloud Storage vs Keyura</h4>
              <div className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-red-600">❌ Cloud: Company holds encryption keys</span>
                  <span className="text-emerald-600">✅ Keyura: You hold all keys</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-600">❌ Cloud: Server-side encryption</span>
                  <span className="text-emerald-600">✅ Keyura: Client-side encryption</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-600">❌ Cloud: Centralized storage</span>
                  <span className="text-emerald-600">✅ Keyura: Decentralized IPFS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-600">❌ Cloud: Can be compelled to share data</span>
                  <span className="text-emerald-600">✅ Keyura: Mathematically impossible to access</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 id="prerequisites" className="text-2xl font-semibold text-slate-800 mb-4">Prerequisites</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="border border-slate-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-emerald-600">🦊</span>
                <h4 className="font-semibold text-slate-800">Web3 Wallet</h4>
              </div>
              <p className="text-sm text-slate-600">MetaMask (recommended) or any Web3-compatible wallet that supports Polygon network</p>
            </div>
            
            <div className="border border-slate-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-emerald-600">💎</span>
                <h4 className="font-semibold text-slate-800">POL Tokens</h4>
              </div>
              <p className="text-sm text-slate-600">Small amount for gas fees (~0.2-0.3 POL for contract deployment + minimal fees per transaction)</p>
            </div>
            
            {/* <div className="border border-slate-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-emerald-600">🔐</span>
                <h4 className="font-semibold text-slate-800">Strong Passwords</h4>
              </div>
              <p className="text-sm text-slate-600">Unique encryption passwords for each document (these cannot be recovered if lost)</p>
            </div>
            
            <div className="border border-slate-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-emerald-600">🧠</span>
                <h4 className="font-semibold text-slate-800">Basic Web3 Knowledge</h4>
              </div>
              <p className="text-sm text-slate-600">Understanding of wallet transactions and private key security</p>
            </div> */}
          </div>
        </div>

        <div>
          <h3 id="quick-start" className="text-2xl font-semibold text-slate-800 mb-4">Quick Start Guide</h3>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">1</div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">Setup Web3 Wallet</h4>
                <p className="text-slate-600 text-sm">Install MetaMask, create/import wallet, and add Polygon network for low-cost transactions</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">2</div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">Connect to Keyura</h4>
                <p className="text-slate-600 text-sm">Visit the Keyura app, connect your wallet, and create your account credentials</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">3</div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">Deploy Your Personal Vault</h4>
                <p className="text-slate-600 text-sm">One-time smart contract deployment creates your private, immutable storage space on Polygon</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">4</div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">Encrypt & Store Data</h4>
                <p className="text-slate-600 text-sm">Upload files or enter text, set encryption passwords, and store securely with client-side encryption</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5">⚡</span>
              <div>
                <h4 className="font-semibold text-blue-800 mb-1">The Keyura Advantage</h4>
                <p className="text-blue-700 text-sm">
                  Unlike traditional services where your data can be accessed by employees, governments, or hackers, 
                  Keyura's architecture makes it <strong>mathematically impossible</strong> for anyone except you to decrypt your data. 
                  Your files are encrypted with your password before they ever leave your browser.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 id="how-it-works" className="text-2xl font-semibold text-slate-800 mb-4">How It Works</h3>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-emerald-600 font-bold">🔐</span>
                </div>
                <h4 className="font-semibold text-slate-800 text-sm mb-1">Client Encryption</h4>
                <p className="text-xs text-slate-600">AES-256-GCM encryption happens in your browser</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 font-bold">🌐</span>
                </div>
                <h4 className="font-semibold text-slate-800 text-sm mb-1">IPFS Storage</h4>
                <p className="text-xs text-slate-600">Encrypted files distributed across IPFS network</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-purple-600 font-bold">⛓️</span>
                </div>
                <h4 className="font-semibold text-slate-800 text-sm mb-1">Blockchain Record</h4>
                <p className="text-xs text-slate-600">Encrypted references stored on your smart contract</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-emerald-600 font-bold">🔑</span>
                </div>
                <h4 className="font-semibold text-slate-800 text-sm mb-1">Your Control</h4>
                <p className="text-xs text-slate-600">Only your password can decrypt and access data</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}