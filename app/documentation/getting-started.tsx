export default function GettingStarted() {
  return (
    <section id="getting-started">
      <h2 className="text-2xl font-semibold text-slate-800">Getting Started</h2>
      <h3 id="what-is-keyura" className="mt-4 text-xl font-semibold">What is Keyura</h3>
      <p>
        Keyura is a decentralized platform to securely store sensitive documents and notes. Data is <strong>encrypted in your browser</strong> and stored via <strong>IPFS</strong> with references written to the blockchain.
      </p>
      <h3 id="prerequisites" className="mt-6 text-xl font-semibold">Prerequisites</h3>
      <ul>
        <li>Web3 wallet (MetaMask recommended)</li>
        <li>Small amount of POL for gas fees</li>
        <li>Basic understanding of blockchain wallets</li>
      </ul>
      <h3 id="quick-start" className="mt-6 text-xl font-semibold">Quick Start Guide</h3>
      <ol>
        <li>Install MetaMask and add Polygon</li>
        <li>Open Keyura and connect your wallet</li>
        <li>Deploy your personal vault</li>
        <li>Encrypt and store files or text from dashboard</li>
      </ol>
    </section>
  );
}
