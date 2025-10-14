import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function UsingKeyura() {
  return (
    <section id="using-keyura" className="space-y-8">
      <div className="space-y-1">
        <h2 className="text-3xl font-bold text-slate-900">Using Keyura</h2>
        <p className="text-lg text-slate-600">Step-by-step guide to securing your data with blockchain encryption</p>
      </div>

      <div className="space-y-8">
        <div className="space-y-3">
          <h3 id="wallet" className="text-2xl font-semibold text-slate-800">Setting Up Your Wallet</h3>
          <p className="text-slate-700">Your Web3 wallet is your identity and the key to your vault.</p>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">🦊 Install MetaMask</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside text-sm text-slate-700 space-y-1">
                  <li>Install from metamask.io</li>
                  <li>Create or import a wallet</li>
                  <li>Secure seed phrase offline</li>
                  <li>Set a strong password</li>
                </ol>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">🔗 Add Polygon</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">RPC https://polygon-rpc.com · ChainID 137 · Symbol POL. MetaMask may auto-add on connect.</p>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">Getting POL Tokens</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>Buy on exchanges (Binance, Coinbase, etc.)</li>
                <li>On-ramps (MoonPay, Transak)</li>
                <li>Bridge from Ethereum (Polygon Bridge)</li>
                <li>0.1–0.5 POL covers many transactions</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-3">
          <h3 id="deploy" className="text-2xl font-semibold text-slate-800">Deploying Your Personal Vault</h3>
          <p className="text-slate-700">Your vault is a smart contract deployed for you on Polygon.</p>
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">🚀 Deployment Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { n: 1, t: "Connect wallet", d: "Authorize Keyura to interact with your wallet." },
                  { n: 2, t: "Click Deploy", d: "Start deployment from Settings." },
                  { n: 3, t: "Confirm transaction", d: "Approve in MetaMask." },
                  { n: 4, t: "Vault ready", d: "Your contract address is displayed." },
                ].map((s) => (
                  <div key={s.n} className="flex gap-4 p-4 border border-slate-200 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">{s.n}</div>
                    <div>
                      <div className="font-semibold text-slate-800">{s.t}</div>
                      <p className="text-sm text-slate-600">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">What happens</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>Per-user contract with owner-only writes</li>
                <li>Functions to store/retrieve encrypted entries</li>
                <li>Contract address is your permanent vault id</li>
                <li>Typical gas: 0.01–0.05 POL</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-3">
          <h3 id="files" className="text-2xl font-semibold text-slate-800">Storing Files</h3>
          <p className="text-slate-700">Encrypt locally and store any file up to 25 MB.</p>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">📁 File Upload</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside text-sm text-slate-700 space-y-1">
                  <li>Open Store Files</li>
                  <li>Select file and name</li>
                  <li>Set strong password</li>
                  <li>Encrypt & Store File</li>
                </ol>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">🔐 Under the Hood</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside text-sm text-slate-700 space-y-1">
                  <li>AES-256-GCM in browser</li>
                  <li>Encrypted blob to IPFS</li>
                  <li>CID encrypted with password</li>
                  <li>Encrypted reference saved on-chain</li>
                </ol>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">Best Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>Descriptive names</li>
                <li>Unique passwords per file</li>
                <li>Use a password manager</li>
                <li>Typical formats: PDF/JPG/PNG/DOC/TXT</li>
                <li>Max 25 MB per upload</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-3">
          <h3 id="text" className="text-2xl font-semibold text-slate-800">Storing Text Data</h3>
          <p className="text-slate-700">Store notes, secrets, or keys with the same encryption as files.</p>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">📝 Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside text-sm text-slate-700 space-y-1">
                  <li>Open Store Text/Notes</li>
                  <li>Name your entry</li>
                  <li>Type/paste text</li>
                  <li>Set password</li>
                  <li>Encrypt & Store Text</li>
                </ol>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">🔒 Use Cases</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>Seed phrases/private keys</li>
                  <li>Passwords and PINs</li>
                  <li>Confidential notes</li>
                  <li>Recovery codes</li>
                  <li>Contracts in text form</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">Critical Note</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">For most critical secrets (e.g., seed phrases), consider hardware wallets or dedicated secure storage.</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-3">
          <h3 id="access" className="text-2xl font-semibold text-slate-800">Accessing Your Data</h3>
          <p className="text-slate-700">Only your password can decrypt your content.</p>
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">🔓 Retrieval</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { n: 1, t: "Open Vault", d: "Go to My Vault." },
                  { n: 2, t: "Select item", d: "Choose file or text." },
                  { n: 3, t: "Enter password", d: "Provide the encryption password." },
                  { n: 4, t: "View/Download", d: "Access decrypted content locally." },
                ].map((s) => (
                  <div key={s.n} className="flex gap-4 p-4 border border-slate-200 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">{s.n}</div>
                    <div>
                      <div className="font-semibold text-slate-800">{s.t}</div>
                      <p className="text-sm text-slate-600">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">📁 Files</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>Preview images</li>
                  <li>Download originals</li>
                  <li>View metadata</li>
                  <li>Copy shareable links (password still required)</li>
                  <li>Batch operations</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">📝 Text</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>Secure popup view</li>
                  <li>Copy to clipboard</li>
                  <li>Edit and re-encrypt</li>
                  <li>Export as TXT</li>
                  <li>Search entries</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">Decryption flow</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside text-sm text-slate-700 space-y-1">
                <li>Decrypt on-chain CID with password</li>
                <li>Fetch encrypted blob from IPFS</li>
                <li>Decrypt locally with password</li>
                <li>Render/download locally</li>
              </ol>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">Password Recovery Warning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">Passwords are never stored or recoverable. Losing it means permanent loss of access.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

