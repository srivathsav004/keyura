export default function Security() {
  return (
    <section id="security" className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Security</h2>
        <p className="text-lg text-slate-600">Military-grade encryption meets blockchain immutability</p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 id="encryption" className="text-2xl font-semibold text-slate-800 mb-4">Encryption Standards</h3>
          <div className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              Keyura implements bank-level encryption standards that are executed entirely in your browser, 
              ensuring your data is protected before it ever leaves your device.
            </p>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <h4 className="font-semibold text-emerald-800 mb-2 flex items-center gap-2">
                  <span>🔐</span> AES-256-GCM Encryption
                </h4>
                <ul className="text-sm text-emerald-700 space-y-1">
                  <li>• Advanced Encryption Standard with 256-bit keys</li>
                  <li>• Galois/Counter Mode for authenticated encryption</li>
                  <li>• Provides both confidentiality and integrity protection</li>
                  <li>• Same standard used by banks and government agencies</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                  <span>🔑</span> PBKDF2 Key Derivation
                </h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Password-Based Key Derivation Function 2</li>
                  <li>• 100,000 iterations for maximum security</li>
                  <li>• SHA-256 hash function</li>
                  <li>• Unique salt per encryption operation</li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                  <span>🎲</span> Cryptographic Randomness
                </h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Cryptographically secure random IV generation</li>
                  <li>• Unique initialization vector for every encryption</li>
                  <li>• Browser's crypto.getRandomValues() API</li>
                  <li>• No predictable patterns or reuse</li>
                </ul>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
                  <span>🛡️</span> Additional Security Layers
                </h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• XOR encryption for IPFS CID references</li>
                  <li>• Keccak256 hashing for key verification</li>
                  <li>• Client-side encryption only</li>
                  <li>• Zero server-side key storage</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-2">🔬 Technical Implementation</h4>
              <div className="text-sm text-slate-700 space-y-2">
                <p><strong>File Encryption Process:</strong></p>
                <ol className="list-decimal list-inside space-y-1 ml-4">
                  <li>File loaded into browser memory as ArrayBuffer</li>
                  <li>Password converted to encryption key via PBKDF2 (100k iterations)</li>
                  <li>Random 12-byte IV generated for AES-GCM</li>
                  <li>File encrypted with AES-256-GCM using derived key and IV</li>
                  <li>IV prepended to encrypted data for storage</li>
                  <li>Encrypted blob uploaded to IPFS via Pinata</li>
                  <li>IPFS CID XOR-encrypted with password for blockchain storage</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 id="blockchain" className="text-2xl font-semibold text-slate-800 mb-4">Blockchain Storage Architecture</h3>
          <div className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              Keyura leverages blockchain technology not to store your actual data, but to create an immutable, 
              tamper-proof record of your encrypted file references.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                  <span className="text-emerald-600">⛓️</span> On-Chain Data
                </h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Encrypted IPFS CID references</li>
                  <li>• File metadata (name, type, size)</li>
                  <li>• Keccak256 key verification hashes</li>
                  <li>• Transaction timestamps</li>
                  <li>• <strong>No plaintext data ever</strong></li>
                </ul>
              </div>

              <div className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                  <span className="text-blue-600">🌐</span> IPFS Storage
                </h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Encrypted file content only</li>
                  <li>• Distributed across global nodes</li>
                  <li>• Content-addressed storage</li>
                  <li>• Redundant copies for availability</li>
                  <li>• <strong>Already encrypted before upload</strong></li>
                </ul>
              </div>

              <div className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                  <span className="text-purple-600">🏠</span> Your Device
                </h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Original files (temporarily)</li>
                  <li>• Encryption/decryption operations</li>
                  <li>• Password entry and verification</li>
                  <li>• Private key management</li>
                  <li>• <strong>Complete control and privacy</strong></li>
                </ul>
              </div>
            </div>

            <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 rounded-r-lg">
              <h4 className="font-semibold text-emerald-800 mb-2">🔒 Smart Contract Security</h4>
              <p className="text-emerald-700 text-sm">
                Each user deploys their own personal smart contract on Polygon, creating isolated storage spaces. 
                Even if one contract is compromised, it cannot affect other users' data. The contract only stores 
                encrypted references - the actual decryption happens in your browser with your password.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 id="privacy" className="text-2xl font-semibold text-slate-800 mb-4">Privacy Guarantees</h3>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">✅ What We Guarantee</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Your files never leave your device unencrypted</li>
                  <li>• Passwords never transmitted to our servers</li>
                  <li>• Decryption happens locally in your browser</li>
                  <li>• We cannot access your data even if we wanted to</li>
                  <li>• No backdoors or master keys exist</li>
                  <li>• Open-source smart contracts for transparency</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2">⚠️ Important Considerations</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Lost passwords cannot be recovered</li>
                  <li>• You are responsible for password security</li>
                  <li>• Compromised devices may expose data</li>
                  <li>• Always verify you're on the correct website</li>
                  <li>• Use unique, strong passwords for each item</li>
                  <li>• Keep your wallet private keys secure</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-2">🔍 Zero-Knowledge Architecture</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Keyura implements a true zero-knowledge architecture. Unlike traditional cloud services where companies 
                hold encryption keys and can potentially access your data, Keyura's design makes it mathematically 
                impossible for anyone (including us) to decrypt your files without your password. Your encryption 
                password never leaves your device, and all cryptographic operations happen client-side.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">🛡️ Threat Model Protection</h4>
              <div className="text-sm text-blue-700 space-y-2">
                <p><strong>Protected Against:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Server breaches (we don't store decryption keys)</li>
                  <li>Government data requests (we can't decrypt your data)</li>
                  <li>Insider threats (employees cannot access your files)</li>
                  <li>Man-in-the-middle attacks (encryption happens locally)</li>
                  <li>Database compromises (only encrypted references stored)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 id="best-practices" className="text-2xl font-semibold text-slate-800 mb-4">Security Best Practices</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="border border-slate-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-2">🔐 Password Security</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Use unique passwords for each document</li>
                <li>• Minimum 12 characters with mixed case, numbers, symbols</li>
                <li>• Consider using passphrases for better memorability</li>
                <li>• Store passwords in a secure password manager</li>
                <li>• Never share passwords with anyone</li>
              </ul>
            </div>

            <div className="border border-slate-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-2">🦊 Wallet Security</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Keep your seed phrase offline and secure</li>
                <li>• Use hardware wallets for maximum security</li>
                <li>• Verify all transaction details before signing</li>
                <li>• Only connect to trusted websites</li>
                <li>• Regularly update your wallet software</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}