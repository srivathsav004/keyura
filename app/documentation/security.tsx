import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Security() {
  return (
    <section id="security" className="space-y-8">
      <div className="space-y-1">
        <h2 className="text-3xl font-bold text-slate-900">Security</h2>
        <p className="text-lg text-slate-600">Military-grade encryption meets blockchain immutability</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <h3 id="encryption" className="text-2xl font-semibold text-slate-800">Encryption Standards</h3>
          <p className="text-slate-700 leading-relaxed">
            All cryptography is executed client-side before any upload. We use AES-256-GCM for authenticated encryption
            and PBKDF2 (100k iterations) with per-item salt for key derivation. Random nonces/IVs are generated per
            operation and stored with the ciphertext (never your password).
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">Key Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>AES-256-GCM (confidentiality + integrity)</li>
                  <li>PBKDF2 (100k) with unique salt per item</li>
                  <li>Client-side only; unique keys/nonces per item</li>
                  <li>No server-side key storage or access</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">Technical Flow (files)</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside text-sm text-slate-700 space-y-1">
                  <li>Password → PBKDF2 → encryption key</li>
                  <li>Random 12-byte IV for AES-GCM</li>
                  <li>Encrypt in browser; upload ciphertext to IPFS</li>
                  <li>Store encrypted reference (CID/hash) on-chain</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-3">
          <h3 id="blockchain" className="text-2xl font-semibold text-slate-800">Blockchain Storage Architecture</h3>
          <p className="text-slate-700">Blockchain stores references and integrity data, never plaintext.</p>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">On-Chain</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>Encrypted CID references</li>
                  <li>Metadata (name/type/size)</li>
                  <li>Key verification hashes</li>
                  <li>Timestamps</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">IPFS</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>Encrypted content only</li>
                  <li>Content-addressed CIDs</li>
                  <li>Redundant global nodes</li>
                  <li>No plaintext ever</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">Your Device</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>Encryption/decryption</li>
                  <li>Password entry</li>
                  <li>Private key signing</li>
                  <li>Complete local control</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">Smart Contract Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">Per-user vault contracts isolate ownership. Contracts store encrypted references; decryption remains local.</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-3">
          <h3 id="privacy" className="text-2xl font-semibold text-slate-800">Privacy Guarantees</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">What We Guarantee</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>No plaintext leaves your device</li>
                  <li>No password transmission or storage</li>
                  <li>Local-only decryption</li>
                  <li>No backdoors or master keys</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">Important Considerations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>Lost passwords are unrecoverable</li>
                  <li>Secure your devices and seed phrases</li>
                  <li>Verify site domain before connecting</li>
                  <li>Use unique strong passwords</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">Zero-Knowledge Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Your password never leaves your device; cryptographic operations happen in the browser. We cannot decrypt your
                data—even under compulsion—because we do not possess the keys.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

