import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function GettingStarted() {
  return (
    <section id="getting-started" className="space-y-8">
      <div className="space-y-1">
        <h2 className="text-3xl font-bold text-slate-900">Getting Started</h2>
        <p className="text-lg text-slate-600">Experience true data sovereignty with blockchain-powered encryption</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h3 id="what-is-keyura" className="text-2xl font-semibold text-slate-800">What is Keyura?</h3>
          <p className="text-slate-700 leading-relaxed">
            Keyura is a decentralized platform that puts you in complete control of your sensitive data. Store documents,
            notes, seed phrases, and any confidential information with <strong>military-grade encryption</strong> that
            happens entirely in your browser before touching the blockchain.
          </p>
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">🚀 What Makes Keyura Unique?</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <div className="font-semibold text-slate-800">Client-Side Encryption</div>
                  <p className="text-sm text-slate-600">Your data is encrypted in your browser (AES-256-GCM, PBKDF2 100k) before it ever leaves your device.</p>
                </div>
                <div>
                  <div className="font-semibold text-slate-800">Blockchain Immutability</div>
                  <p className="text-sm text-slate-600">Your personal smart contract on Polygon stores encrypted references, creating an immutable record.</p>
                </div>
                <div>
                  <div className="font-semibold text-slate-800">IPFS Distribution</div>
                  <p className="text-sm text-slate-600">Encrypted files are distributed across IPFS nodes, eliminating single points of failure.</p>
                </div>
                <div>
                  <div className="font-semibold text-slate-800">Zero-Knowledge Architecture</div>
                  <p className="text-sm text-slate-600">Only your wallet and password can decrypt your files. We cannot access your data.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">🆚 Traditional Cloud Storage vs Keyura</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-slate-700 space-y-1">
                <li><strong>Cloud:</strong> Company holds keys vs <strong>Keyura:</strong> You hold all keys</li>
                <li><strong>Cloud:</strong> Server-side encryption vs <strong>Keyura:</strong> Client-side encryption</li>
                <li><strong>Cloud:</strong> Centralized storage vs <strong>Keyura:</strong> Decentralized IPFS</li>
                <li><strong>Cloud:</strong> Potential compelled access vs <strong>Keyura:</strong> Mathematically private</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-3">
          <h3 id="prerequisites" className="text-2xl font-semibold text-slate-800">Prerequisites</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">🦊 Web3 Wallet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">MetaMask (recommended) or any Web3 wallet that supports Polygon.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">💎 POL Tokens</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">Small amount for gas fees (~0.2-0.3 POL for deployment + minimal per transaction).</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

