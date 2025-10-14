export default function TechnicalDetails() {
  return (
    <section id="technical-details" className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Technical Details</h2>
        <p className="text-lg text-slate-600">Deep dive into Keyura's blockchain architecture and implementation</p>
      </div>

      <div className="space-y-8">
        <div>
          <h3 id="contracts" className="text-2xl font-semibold text-slate-800 mb-4">Smart Contract Architecture</h3>
          <div className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              Keyura's smart contract system is designed for maximum security, gas efficiency, and user isolation. 
              Each user deploys their own personal vault contract, creating a truly decentralized storage architecture.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <h4 className="font-semibold text-emerald-800 mb-3 flex items-center gap-2">
                  <span>🏗️</span> Contract Design Principles
                </h4>
                <ul className="text-sm text-emerald-700 space-y-1">
                  <li>• <strong>Per-user isolation:</strong> Individual contracts prevent cross-user data access</li>
                  <li>• <strong>Immutable records:</strong> Append-only storage ensures data integrity</li>
                  <li>• <strong>Gas optimization:</strong> Minimal on-chain storage reduces transaction costs</li>
                  <li>• <strong>Event emission:</strong> Comprehensive logging for easy indexing and retrieval</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  <span>⚙️</span> Core Contract Functions
                </h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• <code className="bg-blue-100 px-1 rounded">addEntry()</code> - Store encrypted data references</li>
                  <li>• <code className="bg-blue-100 px-1 rounded">getEntry()</code> - Retrieve stored entries by index</li>
                  <li>• <code className="bg-blue-100 px-1 rounded">getEntryCount()</code> - Get total number of entries</li>
                  <li>• <code className="bg-blue-100 px-1 rounded">owner()</code> - Verify contract ownership</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-3">📋 Contract Data Structure</h4>
              <div className="text-sm text-slate-700">
                <p className="mb-2">Each entry stored on-chain contains:</p>
                <div className="bg-white border rounded p-3 font-mono text-xs">
                  <div className="grid gap-1">
                    <div><span className="text-blue-600">string</span> <span className="text-slate-800">name</span> <span className="text-slate-500">// User-defined entry name</span></div>
                    <div><span className="text-blue-600">string</span> <span className="text-slate-800">payload</span> <span className="text-slate-500">// Encrypted data (JSON format)</span></div>
                    <div><span className="text-blue-600">string</span> <span className="text-slate-800">contentType</span> <span className="text-slate-500">// MIME type for files</span></div>
                    <div><span className="text-blue-600">uint256</span> <span className="text-slate-800">timestamp</span> <span className="text-slate-500">// Block timestamp</span></div>
                  </div>
                </div>
                <p className="mt-2 text-xs text-slate-600">
                  The payload contains JSON with encrypted IPFS CID and key verification hash
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-3">🔐 Security Features</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Owner-only write access via <code className="bg-slate-100 px-1 rounded">onlyOwner</code> modifier</li>
                  <li>• Keccak256 key verification prevents unauthorized access</li>
                  <li>• No admin functions or backdoors</li>
                  <li>• Immutable once deployed (no upgrade mechanisms)</li>
                  <li>• Event logs for complete audit trail</li>
                </ul>
              </div>

              <div className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-3">⛽ Gas Optimization</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Minimal storage variables reduce deployment costs</li>
                  <li>• Packed structs optimize storage slots</li>
                  <li>• Event emission instead of storage for metadata</li>
                  <li>• Efficient string handling for encrypted payloads</li>
                  <li>• Typical costs: ~0.01-0.05 POL per entry</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">🔄 Contract Lifecycle</h4>
              <div className="text-sm text-yellow-700">
                <ol className="space-y-1 list-decimal list-inside">
                  <li><strong>Deployment:</strong> User initiates contract creation via Keyura interface</li>
                  <li><strong>Initialization:</strong> Contract sets deployer as owner, emits creation event</li>
                  <li><strong>Usage:</strong> Owner adds encrypted entries, contract validates and stores</li>
                  <li><strong>Retrieval:</strong> Anyone can read entries, but only owner can decrypt</li>
                  <li><strong>Permanence:</strong> Contract and data remain on blockchain indefinitely</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 id="ipfs" className="text-2xl font-semibold text-slate-800 mb-4">IPFS Integration</h3>
          <div className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              Keyura leverages IPFS (InterPlanetary File System) for decentralized file storage, ensuring your 
              encrypted data is distributed across a global network of nodes for maximum availability and censorship resistance.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                  <span>🌐</span> IPFS Architecture
                </h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• <strong>Content-addressed storage:</strong> Files identified by cryptographic hash</li>
                  <li>• <strong>Distributed network:</strong> No single point of failure</li>
                  <li>• <strong>Deduplication:</strong> Identical files share the same CID</li>
                  <li>• <strong>Immutable references:</strong> CIDs never change for the same content</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <span>📌</span> Pinning Strategy
                </h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• <strong>Pinata integration:</strong> Professional IPFS pinning service</li>
                  <li>• <strong>Redundant storage:</strong> Multiple nodes pin your encrypted files</li>
                  <li>• <strong>High availability:</strong> 99.9% uptime guarantee</li>
                  <li>• <strong>Global CDN:</strong> Fast retrieval from nearest nodes</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-3">🔄 IPFS Workflow</h4>
              <div className="grid gap-4 md:grid-cols-5 text-center text-sm">
                <div>
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">1</div>
                  <h5 className="font-semibold text-slate-800 mb-1">Encrypt</h5>
                  <p className="text-xs text-slate-600">File encrypted in browser</p>
                </div>
                <div>
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">2</div>
                  <h5 className="font-semibold text-slate-800 mb-1">Upload</h5>
                  <p className="text-xs text-slate-600">Encrypted blob sent to Pinata</p>
                </div>
                <div>
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">3</div>
                  <h5 className="font-semibold text-slate-800 mb-1">Pin</h5>
                  <p className="text-xs text-slate-600">File pinned to IPFS network</p>
                </div>
                <div>
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">4</div>
                  <h5 className="font-semibold text-slate-800 mb-1">Store CID</h5>
                  <p className="text-xs text-slate-600">Encrypted CID on blockchain</p>
                </div>
                <div>
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">5</div>
                  <h5 className="font-semibold text-slate-800 mb-1">Retrieve</h5>
                  <p className="text-xs text-slate-600">Fetch and decrypt on demand</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-3">✅ IPFS Advantages</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Censorship-resistant storage</li>
                  <li>• No single point of failure</li>
                  <li>• Automatic content verification</li>
                  <li>• Global content distribution</li>
                  <li>• Cost-effective for large files</li>
                </ul>
              </div>

              <div className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-3">🔍 Content Integrity</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• CID includes content hash verification</li>
                  <li>• Tampered files result in different CIDs</li>
                  <li>• Automatic corruption detection</li>
                  <li>• Blockchain stores immutable CID references</li>
                  <li>• End-to-end integrity guarantees</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 id="types" className="text-2xl font-semibold text-slate-800 mb-4">Supported File Types & Limits</h3>
          <div className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              Keyura supports virtually any file type through its binary-agnostic encryption system. 
              All files are treated as byte arrays and encrypted uniformly regardless of format.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  <span>📄</span> Documents
                </h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• PDF documents</li>
                  <li>• Microsoft Office (DOC, DOCX, XLS, PPT)</li>
                  <li>• Text files (TXT, RTF, MD)</li>
                  <li>• OpenDocument formats</li>
                  <li>• CSV and data files</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <span>🖼️</span> Media Files
                </h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Images (JPG, PNG, GIF, SVG, WEBP)</li>
                  <li>• Videos (MP4, AVI, MOV, WEBM)</li>
                  <li>• Audio (MP3, WAV, FLAC, OGG)</li>
                  <li>• RAW camera formats</li>
                  <li>• Vector graphics</li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                  <span>💻</span> Technical Files
                </h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Source code (JS, PY, SOL, etc.)</li>
                  <li>• Configuration files (JSON, YAML, XML)</li>
                  <li>• Database exports</li>
                  <li>• Compressed archives (ZIP, RAR, 7Z)</li>
                  <li>• Binary executables</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-3">📊 Technical Specifications</h4>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h5 className="font-semibold text-slate-700 mb-2">File Limits</h5>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• <strong>Maximum file size:</strong> 25 MB per upload</li>
                    <li>• <strong>Supported formats:</strong> Any binary or text format</li>
                    <li>• <strong>Filename length:</strong> Up to 255 characters</li>
                    <li>• <strong>Files per vault:</strong> Unlimited (gas cost per file)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-slate-700 mb-2">Performance Factors</h5>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• <strong>Upload speed:</strong> Depends on internet connection</li>
                    <li>• <strong>Encryption time:</strong> ~1-5 seconds for most files</li>
                    <li>• <strong>IPFS propagation:</strong> 30 seconds to 2 minutes</li>
                    <li>• <strong>Retrieval speed:</strong> Near-instant from global CDN</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">⚡ Optimization Tips</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Compress large files before upload to reduce gas costs</li>
                <li>• Use descriptive filenames for better organization</li>
                <li>• Consider splitting very large documents into smaller parts</li>
                <li>• Images are automatically optimized during encryption process</li>
                <li>• Text files have minimal overhead due to efficient compression</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 id="network" className="text-2xl font-semibold text-slate-800 mb-4">Network & Infrastructure</h3>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                  <span>⛓️</span> Polygon Network
                </h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• <strong>Chain ID:</strong> 137 (Mainnet)</li>
                  <li>• <strong>Block time:</strong> ~2 seconds</li>
                  <li>• <strong>Finality:</strong> ~10-15 seconds</li>
                  <li>• <strong>Gas token:</strong> POL</li>
                  <li>• <strong>Average gas cost:</strong> 0.001-0.01 POL per transaction</li>
                </ul>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <h4 className="font-semibold text-emerald-800 mb-3 flex items-center gap-2">
                  <span>🌐</span> IPFS Infrastructure
                </h4>
                <ul className="text-sm text-emerald-700 space-y-1">
                  <li>• <strong>Provider:</strong> Pinata Cloud</li>
                  <li>• <strong>Redundancy:</strong> Multiple global nodes</li>
                  <li>• <strong>Availability:</strong> 99.9% uptime SLA</li>
                  <li>• <strong>CDN:</strong> Global edge caching</li>
                  <li>• <strong>Bandwidth:</strong> Unlimited retrieval</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}