export default function UsingKeyura() {
  return (
    <section id="using-keyura" className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Using Keyura</h2>
        <p className="text-lg text-slate-600">Step-by-step guide to securing your data with blockchain encryption</p>
      </div>

      <div className="space-y-8">
        <div>
          <h3 id="wallet" className="text-2xl font-semibold text-slate-800 mb-4">Setting Up Your Wallet</h3>
          <div className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              Your Web3 wallet is your gateway to Keyura. It serves as both your identity and your key to accessing 
              your encrypted data vault on the blockchain.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                  <span className="text-emerald-600">🦊</span> Install MetaMask
                </h4>
                <ol className="text-sm text-slate-700 space-y-2">
                  <li className="flex gap-2">
                    <span className="text-emerald-600 font-semibold">1.</span>
                    Visit <a href="https://metamask.io" className="text-blue-600 hover:underline">metamask.io</a> and install the browser extension
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600 font-semibold">2.</span>
                    Create a new wallet or import existing seed phrase
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600 font-semibold">3.</span>
                    Secure your seed phrase offline (never share it!)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600 font-semibold">4.</span>
                    Set a strong wallet password
                  </li>
                </ol>
              </div>

              <div className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                  <span className="text-purple-600">🔗</span> Add Polygon Network
                </h4>
                <div className="text-sm text-slate-700 space-y-2">
                  <p className="font-medium">Network Details:</p>
                  <div className="bg-slate-50 p-3 rounded text-xs font-mono">
                    <div><strong>Network Name:</strong> Polygon</div>
                    <div><strong>RPC URL:</strong> https://polygon-rpc.com</div>
                    <div><strong>Chain ID:</strong> 137</div>
                    <div><strong>Symbol:</strong> POL</div>
                    <div><strong>Explorer:</strong> polygonscan.com</div>
                  </div>
                  <p className="text-slate-600">MetaMask will auto-detect when you first connect to Keyura</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                <span>💰</span> Getting POL Tokens
              </h4>
              <p className="text-blue-700 text-sm mb-2">
                You'll need a small amount of POL tokens for gas fees. Here are some options:
              </p>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Buy POL on exchanges like Binance, Coinbase, or Kraken</li>
                <li>• Use on-ramp services like MoonPay or Transak</li>
                <li>• Bridge from Ethereum using Polygon Bridge</li>
                <li>• <strong>Typical needs:</strong> 0.1-0.5 POL covers dozens of transactions</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 id="deploy" className="text-2xl font-semibold text-slate-800 mb-4">Deploying Your Personal Vault</h3>
          <div className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              Your personal vault is a smart contract deployed specifically for you on the Polygon blockchain. 
              This one-time setup creates your secure, immutable storage space.
            </p>

            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 rounded-lg p-6">
              <h4 className="font-semibold text-slate-800 mb-4">🚀 Deployment Process</h4>
              <div className="grid gap-4 md:grid-cols-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">1</div>
                  <h5 className="font-semibold text-slate-800 text-sm mb-1">Connect Wallet</h5>
                  <p className="text-xs text-slate-600">Authorize Keyura to interact with your wallet</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">2</div>
                  <h5 className="font-semibold text-slate-800 text-sm mb-1">Click Deploy</h5>
                  <p className="text-xs text-slate-600">Navigate to Settings and click "Deploy Vault"</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">3</div>
                  <h5 className="font-semibold text-slate-800 text-sm mb-1">Confirm Transaction</h5>
                  <p className="text-xs text-slate-600">Approve the deployment transaction in MetaMask</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">4</div>
                  <h5 className="font-semibold text-slate-800 text-sm mb-1">Vault Ready</h5>
                  <p className="text-xs text-slate-600">Your contract address will be displayed</p>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-2">💡 What Happens During Deployment</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• A unique smart contract is created with your wallet address as owner</li>
                <li>• The contract includes functions for storing and retrieving encrypted data</li>
                <li>• Only you can add entries to your contract (wallet signature required)</li>
                <li>• The contract address becomes your permanent vault identifier</li>
                <li>• Gas cost: typically 0.01-0.05 POL depending on network congestion</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 id="files" className="text-2xl font-semibold text-slate-800 mb-4">Storing Files</h3>
          <div className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              Upload any file type up to 25MB. Your files are encrypted locally before leaving your device, 
              ensuring maximum security and privacy.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-3">📁 File Upload Process</h4>
                <ol className="text-sm text-slate-700 space-y-2">
                  <li className="flex gap-2">
                    <span className="text-emerald-600 font-semibold">1.</span>
                    Click "Store Files" from your dashboard
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600 font-semibold">2.</span>
                    Select file (documents, images, any type)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600 font-semibold">3.</span>
                    Enter descriptive name (optional)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600 font-semibold">4.</span>
                    Set strong encryption password
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600 font-semibold">5.</span>
                    Click "Encrypt & Store File"
                  </li>
                </ol>
              </div>

              <div className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-3">🔐 What Happens Behind the Scenes</h4>
                <ol className="text-sm text-slate-700 space-y-2">
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-semibold">1.</span>
                    File encrypted with AES-256-GCM in your browser
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-semibold">2.</span>
                    Encrypted file uploaded to IPFS via Pinata
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-semibold">3.</span>
                    IPFS CID encrypted with your password
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-semibold">4.</span>
                    Encrypted reference stored on blockchain
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-semibold">5.</span>
                    Transaction confirmed and indexed
                  </li>
                </ol>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">💡 File Storage Best Practices</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Use descriptive names for easy identification later</li>
                <li>• Create unique, strong passwords for each file</li>
                <li>• Store passwords securely in a password manager</li>
                <li>• Supported formats: PDF, JPG, PNG, DOC, TXT, and more</li>
                <li>• Maximum file size: 25MB per upload</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 id="text" className="text-2xl font-semibold text-slate-800 mb-4">Storing Text Data</h3>
          <div className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              Store sensitive text information like notes, seed phrases, passwords, or any confidential data 
              with the same level of security as files.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-3">📝 Text Storage Process</h4>
                <ol className="text-sm text-slate-700 space-y-2">
                  <li className="flex gap-2">
                    <span className="text-emerald-600 font-semibold">1.</span>
                    Click "Store Text/Notes" from dashboard
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600 font-semibold">2.</span>
                    Enter descriptive entry name
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600 font-semibold">3.</span>
                    Type or paste your sensitive text
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600 font-semibold">4.</span>
                    Set encryption password
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600 font-semibold">5.</span>
                    Click "Encrypt & Store Text"
                  </li>
                </ol>
              </div>

              <div className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-3">🔒 Common Use Cases</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Cryptocurrency seed phrases and private keys</li>
                  <li>• Important passwords and PINs</li>
                  <li>• Personal notes and diary entries</li>
                  <li>• Business secrets and confidential information</li>
                  <li>• Recovery codes and backup phrases</li>
                  <li>• Legal documents and contracts (text format)</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-2">⚠️ Critical Security Note</h4>
              <p className="text-red-700 text-sm">
                Text data is encrypted with the same AES-256-GCM standard as files. However, be extra careful 
                when storing seed phrases or private keys - consider using a hardware wallet or dedicated 
                secure storage for the most critical cryptographic secrets.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 id="access" className="text-2xl font-semibold text-slate-800 mb-4">Accessing Your Data</h3>
          <div className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              Retrieve and decrypt your stored files and text data anytime, anywhere. Only your password 
              can unlock your encrypted content.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-semibold text-slate-800 mb-4">🔓 Data Retrieval Process</h4>
              <div className="grid gap-4 md:grid-cols-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">1</div>
                  <h5 className="font-semibold text-slate-800 text-sm mb-1">Open Vault</h5>
                  <p className="text-xs text-slate-600">Navigate to "My Vault" in your dashboard</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">2</div>
                  <h5 className="font-semibold text-slate-800 text-sm mb-1">Select Item</h5>
                  <p className="text-xs text-slate-600">Choose the file or text you want to access</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">3</div>
                  <h5 className="font-semibold text-slate-800 text-sm mb-1">Enter Password</h5>
                  <p className="text-xs text-slate-600">Provide the encryption password you set</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">4</div>
                  <h5 className="font-semibold text-slate-800 text-sm mb-1">View/Download</h5>
                  <p className="text-xs text-slate-600">Access your decrypted content</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-3">📁 File Access Features</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Preview images directly in browser</li>
                  <li>• Download original files to your device</li>
                  <li>• View file metadata (size, type, upload date)</li>
                  <li>• Copy shareable links (still requires password)</li>
                  <li>• Batch operations for multiple files</li>
                </ul>
              </div>

              <div className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-3">📝 Text Access Features</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• View decrypted text in secure popup</li>
                  <li>• Copy text to clipboard with one click</li>
                  <li>• Edit and re-encrypt updated content</li>
                  <li>• Export as text file for backup</li>
                  <li>• Search through your text entries</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-2">🔐 Decryption Process</h4>
              <p className="text-slate-700 text-sm mb-2">When you access your data, here's what happens:</p>
              <ol className="text-sm text-slate-700 space-y-1 list-decimal list-inside">
                <li>Your password is used to decrypt the IPFS CID reference from blockchain</li>
                <li>Encrypted file is fetched from IPFS using the decrypted CID</li>
                <li>File is decrypted locally in your browser using your password</li>
                <li>Decrypted content is displayed or made available for download</li>
                <li>No decrypted data is ever transmitted or stored on servers</li>
              </ol>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
              <h4 className="font-semibold text-red-800 mb-2">🚨 Password Recovery Warning</h4>
              <p className="text-red-700 text-sm">
                <strong>Passwords are never stored or recoverable by Keyura.</strong> If you lose your encryption 
                password, your data cannot be decrypted by anyone - including us. This is by design for maximum 
                security, but means you must keep your passwords safe and backed up securely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}