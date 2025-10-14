export default function Security() {
  return (
    <section id="security">
      <h2 className="text-2xl font-semibold text-slate-800">Security</h2>
      <h3 id="encryption" className="mt-4 text-xl font-semibold">Encryption Standards</h3>
      <ul>
        <li>AES-256-GCM encryption</li>
        <li>PBKDF2 key derivation with 100,000 iterations</li>
        <li>Client-side encryption; unique keys per user per document</li>
      </ul>
      <h3 id="blockchain" className="mt-6 text-xl font-semibold">Blockchain Storage</h3>
      <p>Only encrypted references are stored on-chain; encrypted content is pinned to IPFS.</p>
      <h3 id="privacy" className="mt-6 text-xl font-semibold">Privacy Guarantees</h3>
      <p>Your unencrypted files never leave your device. Decryption requires your password.</p>
    </section>
  );
}
