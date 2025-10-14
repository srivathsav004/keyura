import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TechnicalDetails() {
  return (
    <section id="technical-details" className="space-y-8">
      <div className="space-y-1">
        <h2 className="text-3xl font-bold text-slate-900">Technical Details</h2>
        <p className="text-lg text-slate-600">Deep dive into Keyura's blockchain architecture and implementation</p>
      </div>

      <div className="space-y-8">
        <div className="space-y-3">
          <h3 id="contracts" className="text-2xl font-semibold text-slate-800">Smart Contract Architecture</h3>
          <p className="text-slate-700">Per-user vault contracts focus on security, isolation, and gas efficiency.</p>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">🏗️ Design Principles</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>Per-user isolation</li>
                  <li>Append-only immutable records</li>
                  <li>Gas-optimized reference storage</li>
                  <li>Event-rich logging for indexing</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">⚙️ Core Functions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>addEntry(): store encrypted references</li>
                  <li>getEntry()/getEntryCount(): read access</li>
                  <li>owner(): ownership verification</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">📋 On-chain Entry Shape</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>name: user-provided label</li>
                <li>payload: encrypted JSON (CID + key check)</li>
                <li>contentType: for files</li>
                <li>timestamp: block time</li>
              </ul>
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">🔐 Security</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>Owner-only writes</li>
                  <li>Keccak256 key verification</li>
                  <li>No admin backdoors</li>
                  <li>Immutable post-deploy</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">⛽ Gas</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>Minimal storage footprint</li>
                  <li>Packed structs where possible</li>
                  <li>Events over storage for metadata</li>
                  <li>~0.01–0.05 POL per entry</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-3">
          <h3 id="ipfs" className="text-2xl font-semibold text-slate-800">IPFS Integration</h3>
          <p className="text-slate-700">Decentralized, content-addressed storage with global redundancy.</p>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">🌐 Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>Content-addressed CIDs</li>
                  <li>Distributed network</li>
                  <li>Deduplication by hash</li>
                  <li>Immutable references</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">📌 Pinning</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>Pinata integration</li>
                  <li>Redundant global nodes</li>
                  <li>High availability</li>
                  <li>Fast retrieval via CDN</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">🔄 Workflow</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside text-sm text-slate-700 space-y-1">
                <li>Encrypt in browser</li>
                <li>Upload ciphertext to IPFS</li>
                <li>Store encrypted CID on-chain</li>
                <li>Retrieve + decrypt on demand</li>
              </ol>
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">✅ Advantages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>Censorship resistance</li>
                  <li>No single point of failure</li>
                  <li>Content integrity by hash</li>
                  <li>Global distribution</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">🔍 Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>CID validates content</li>
                  <li>Tampering changes CID</li>
                  <li>Immutable references on-chain</li>
                  <li>End-to-end guarantees</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-3">
          <h3 id="types" className="text-2xl font-semibold text-slate-800">Supported File Types & Limits</h3>
          <p className="text-slate-700">Binary-agnostic encryption supports virtually any file type.</p>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">📄 Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>PDF, DOC(X), XLS, PPT</li>
                  <li>TXT, RTF, MD</li>
                  <li>OpenDocument, CSV</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">🖼️ Media</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>JPG, PNG, GIF, SVG, WEBP</li>
                  <li>MP4, WEBM, MOV</li>
                  <li>MP3, WAV, FLAC</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">💻 Technical</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>Source code</li>
                  <li>JSON/YAML/XML</li>
                  <li>ZIP/7Z/RAR</li>
                  <li>Binaries</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">📊 Specs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <div className="font-semibold text-slate-800 mb-1">File Limits</div>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>Max 25 MB per upload</li>
                    <li>Any binary/text format</li>
                    <li>Name up to 255 chars</li>
                    <li>Unlimited files (gas per file)</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold text-slate-800 mb-1">Performance</div>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>Upload: connection-dependent</li>
                    <li>Encrypt: ~1–5s typical</li>
                    <li>IPFS propagation: ~30–120s</li>
                    <li>Retrieval: fast via CDN</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">⚡ Optimization Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>Compress large files</li>
                <li>Use descriptive names</li>
                <li>Split very large docs</li>
                <li>Images often optimized</li>
                <li>Text compresses well</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-3">
          <h3 id="network" className="text-2xl font-semibold text-slate-800">Network & Infrastructure</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">⛓️ Polygon</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>ChainID 137 (mainnet)</li>
                  <li>~2s blocks, ~10–15s finality</li>
                  <li>Gas: POL</li>
                  <li>Avg tx: 0.001–0.01 POL</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">🌐 IPFS</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>Provider: Pinata</li>
                  <li>Global redundancy</li>
                  <li>99.9% availability</li>
                  <li>CDN edge caching</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

