export default function UsingKeyura() {
  return (
    <section id="using-keyura">
      <h2 className="text-2xl font-semibold text-slate-800">Using Keyura</h2>
      <h3 id="wallet" className="mt-4 text-xl font-semibold">Setting Up Wallet</h3>
      <ol>
        <li>Install MetaMask</li>
        <li>Add Polygon (Amoy/Mainnet)</li>
        <li>Fund with a little POL</li>
      </ol>
      <h3 id="deploy" className="mt-6 text-xl font-semibold">Deploying Your Contract</h3>
      <p>From the dashboard, click <em>Deploy Vault</em> and confirm in your wallet.</p>
      <h3 id="files" className="mt-6 text-xl font-semibold">Storing Files</h3>
      <p>Select a file, set a strong password, encrypt, and confirm the transaction.</p>
      <h3 id="text" className="mt-6 text-xl font-semibold">Storing Text Data</h3>
      <p>Encrypt notes or secrets client-side, then store securely on-chain.</p>
      <h3 id="access" className="mt-6 text-xl font-semibold">Accessing Your Data</h3>
      <ol>
        <li>Open Vault</li>
        <li>Select an item and click Decrypt &amp; View</li>
        <li>Enter your password to view or download</li>
      </ol>
    </section>
  );
}
