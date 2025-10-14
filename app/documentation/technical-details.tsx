export default function TechnicalDetails() {
  return (
    <section id="technical-details">
      <h2 className="text-2xl font-semibold text-slate-800">Technical Details</h2>
      <h3 id="contracts" className="mt-4 text-xl font-semibold">Smart Contract Architecture</h3>
      <ul>
        <li>Per-user vault contract for isolation</li>
        <li>Immutable records; gas-optimized storage</li>
        <li>Upgradeable security features where appropriate</li>
      </ul>
      <h3 id="ipfs" className="mt-6 text-xl font-semibold">IPFS Integration</h3>
      <ul>
        <li>Content-addressed, distributed storage</li>
        <li>Redundancy across nodes; censorship resistance</li>
      </ul>
      <h3 id="types" className="mt-6 text-xl font-semibold">Supported File Types</h3>
      <p>Common documents and images (PDF, PNG, JPG), plus text/JSON and more.</p>
    </section>
  );
}
