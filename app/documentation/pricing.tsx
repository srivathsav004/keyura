export default function Pricing() {
  return (
    <section id="pricing" className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Pricing & Fees</h2>
        <p className="text-lg text-slate-600">Transparent, pay-as-you-go pricing with no hidden costs</p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 id="breakdown" className="text-2xl font-semibold text-slate-800 mb-4">What You Pay</h3>
          <div className="space-y-4">
            <div className="bg-emerald-50 border-l-4 border-emerald-400 p-6 rounded-r-lg">
              <h4 className="font-semibold text-emerald-800 mb-2 flex items-center gap-2">
                <span>🎉</span> Keyura is Completely Free
              </h4>
              <p className="text-emerald-700 leading-relaxed">
                There are no subscription fees, premium plans, or hidden charges. Keyura operates on a 
                decentralized model where you only pay the blockchain network fees required for your transactions.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$0</div>
                <h4 className="font-semibold text-green-800 mb-1">Platform Fees</h4>
                <p className="text-sm text-green-700">No monthly subscriptions or service charges</p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$0</div>
                <h4 className="font-semibold text-green-800 mb-1">Storage Fees</h4>
                <p className="text-sm text-green-700">No charges for data storage or retrieval</p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$0</div>
                <h4 className="font-semibold text-green-800 mb-1">Premium Features</h4>
                <p className="text-sm text-green-700">All features available to everyone</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">💡 Why Free?</h4>
              <p className="text-blue-700 text-sm">
                Keyura's decentralized architecture eliminates the need for expensive server infrastructure. 
                Your data is stored on IPFS and blockchain networks, so we don't have hosting costs to pass on to you. 
                You simply pay the network directly for the computational resources you use.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 id="gas" className="text-2xl font-semibold text-slate-800 mb-4">Gas Fee Estimates</h3>
          <div className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              Gas fees are paid directly to the Polygon network for processing your transactions. 
              These fees are typically very low and vary based on network congestion and transaction complexity.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h4 className="font-semibold text-slate-800 mb-4 text-center">⛽ Typical Gas Costs on Polygon</h4>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="bg-white border border-slate-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">0.01-0.05</div>
                  <div className="text-sm font-medium text-slate-800 mb-1">POL</div>
                  <div className="text-xs text-slate-600">Vault Deployment</div>
                  <div className="text-xs text-slate-500 mt-1">One-time setup</div>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">0.001-0.005</div>
                  <div className="text-sm font-medium text-slate-800 mb-1">POL</div>
                  <div className="text-xs text-slate-600">Store File</div>
                  <div className="text-xs text-slate-500 mt-1">Per document</div>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-600 mb-2">0.001-0.003</div>
                  <div className="text-sm font-medium text-slate-800 mb-1">POL</div>
                  <div className="text-xs text-slate-600">Store Text</div>
                  <div className="text-xs text-slate-500 mt-1">Per text entry</div>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">FREE</div>
                  <div className="text-sm font-medium text-slate-800 mb-1">Read</div>
                  <div className="text-xs text-slate-600">Access Data</div>
                  <div className="text-xs text-slate-500 mt-1">No gas required</div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-3">📊 Cost Factors</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• <strong>Network congestion:</strong> Higher demand = higher fees</li>
                  <li>• <strong>Transaction complexity:</strong> More data = slightly higher cost</li>
                  <li>• <strong>Gas price:</strong> Set by network validators</li>
                  <li>• <strong>Time of day:</strong> Peak hours may cost more</li>
                </ul>
              </div>

              <div className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-3">💰 Real-World Examples</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• <strong>Setup vault:</strong> ~$0.02-0.10 USD</li>
                  <li>• <strong>Store 10 documents:</strong> ~$0.02-0.05 USD</li>
                  <li>• <strong>Store 50 text entries:</strong> ~$0.05-0.15 USD</li>
                  <li>• <strong>Monthly usage (active):</strong> ~$0.10-0.50 USD</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">⚡ Gas Optimization Tips</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Batch multiple operations when possible to save on gas</li>
                <li>• Monitor network congestion and transact during low-traffic periods</li>
                <li>• Use MetaMask's gas estimation feature for accurate pricing</li>
                <li>• Consider compressing large files before upload to reduce transaction size</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 id="payment" className="text-2xl font-semibold text-slate-800 mb-4">Payment Methods</h3>
          <div className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              All payments are handled directly through your Web3 wallet using POL tokens on the Polygon network. 
              No credit cards, bank accounts, or traditional payment methods required.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                  <span>💎</span> POL Token Payment
                </h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Gas fees automatically deducted from wallet</li>
                  <li>• Real-time transaction confirmation</li>
                  <li>• No pre-payment or deposits required</li>
                  <li>• Pay only when you use the service</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  <span>🔄</span> How to Get POL
                </h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Buy on exchanges (Binance, Coinbase, Kraken)</li>
                  <li>• Use on-ramp services (MoonPay, Transak)</li>
                  <li>• Bridge from Ethereum using Polygon Bridge</li>
                  <li>• Swap other tokens using DEXs like QuickSwap</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-3">💳 Wallet Balance Management</h4>
              <div className="grid gap-4 md:grid-cols-3 text-sm">
                <div>
                  <h5 className="font-semibold text-slate-700 mb-2">Minimum Balance</h5>
                  <p className="text-slate-600">Keep at least 0.1 POL in your wallet for smooth operations</p>
                </div>
                <div>
                  <h5 className="font-semibold text-slate-700 mb-2">Auto-Estimation</h5>
                  <p className="text-slate-600">MetaMask automatically calculates required gas for each transaction</p>
                </div>
                <div>
                  <h5 className="font-semibold text-slate-700 mb-2">Failed Transactions</h5>
                  <p className="text-slate-600">Insufficient balance will prevent transaction execution</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 id="comparison" className="text-2xl font-semibold text-slate-800 mb-4">Cost Comparison</h3>
          <div className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              See how Keyura's transparent pricing compares to traditional cloud storage and security solutions.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border border-slate-200 rounded-lg">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left p-4 font-semibold text-slate-800">Service</th>
                    <th className="text-left p-4 font-semibold text-slate-800">Monthly Cost</th>
                    <th className="text-left p-4 font-semibold text-slate-800">Setup Fee</th>
                    <th className="text-left p-4 font-semibold text-slate-800">Security Level</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-t border-slate-200">
                    <td className="p-4 font-semibold text-emerald-600">Keyura</td>
                    <td className="p-4 text-slate-700">$0.10 - $0.50*</td>
                    <td className="p-4 text-slate-700">$0.02 - $0.10*</td>
                    <td className="p-4 text-slate-700">Military-grade + Blockchain</td>
                  </tr>
                  <tr className="border-t border-slate-200 bg-slate-25">
                    <td className="p-4 text-slate-700">Google Drive</td>
                    <td className="p-4 text-slate-700">$1.99 - $9.99</td>
                    <td className="p-4 text-slate-700">$0</td>
                    <td className="p-4 text-slate-700">Server-side encryption</td>
                  </tr>
                  <tr className="border-t border-slate-200">
                    <td className="p-4 text-slate-700">Dropbox</td>
                    <td className="p-4 text-slate-700">$9.99 - $16.58</td>
                    <td className="p-4 text-slate-700">$0</td>
                    <td className="p-4 text-slate-700">Server-side encryption</td>
                  </tr>
                  <tr className="border-t border-slate-200 bg-slate-25">
                    <td className="p-4 text-slate-700">Enterprise Vault</td>
                    <td className="p-4 text-slate-700">$50 - $500+</td>
                    <td className="p-4 text-slate-700">$1,000+</td>
                    <td className="p-4 text-slate-700">Enterprise encryption</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-slate-500 mt-2">
                *Keyura costs are gas fees only, based on typical usage patterns
              </p>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <h4 className="font-semibold text-emerald-800 mb-2">🎯 Keyura Advantages</h4>
              <ul className="text-sm text-emerald-700 space-y-1">
                <li>• <strong>No recurring fees:</strong> Pay only for what you use</li>
                <li>• <strong>True ownership:</strong> Your data, your keys, your control</li>
                <li>• <strong>Transparent costs:</strong> All fees visible on blockchain</li>
                <li>• <strong>No vendor lock-in:</strong> Data remains accessible even if Keyura disappears</li>
                <li>• <strong>Global access:</strong> No geographic restrictions or compliance issues</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}