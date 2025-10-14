import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Pricing() {
  return (
    <section id="pricing" className="space-y-8">
      <div className="space-y-1">
        <h2 className="text-3xl font-bold text-slate-900">Gas Fee Estimations</h2>
        <p className="text-lg text-slate-600">Transparent, pay-as-you-go with no hidden costs</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <h3 id="breakdown" className="text-2xl font-semibold text-slate-800">What You Pay</h3>
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">🎉 Keyura is Completely Free</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">There are no subscriptions or platform fees. You only pay the blockchain network fees required to process your transactions.</p>
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">$0</div>
                  <div className="font-semibold">Platform Fees</div>
                  <p className="text-sm text-slate-600">No monthly charges</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">$0</div>
                  <div className="font-semibold">Storage Fees</div>
                  <p className="text-sm text-slate-600">No storage or retrieval fees</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">$0</div>
                  <div className="font-semibold">Premium Features</div>
                  <p className="text-sm text-slate-600">All features are included</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">💡 Why Free?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">Keyura leverages decentralized infrastructure (IPFS + Polygon), so there are no server hosting costs to pass on to you. You pay the network directly when you transact.</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-3">
          <h3 id="gas" className="text-2xl font-semibold text-slate-800">Gas Fee Estimates</h3>
          <p className="text-slate-700">Fees are paid to the Polygon network and vary with congestion and complexity.</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">0.01–0.05</div>
                  <div className="text-sm font-medium">POL</div>
                  <p className="text-xs text-slate-600">Vault deployment (one-time)</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">0.001–0.005</div>
                  <div className="text-sm font-medium">POL</div>
                  <p className="text-xs text-slate-600">Store file (per document)</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">0.001–0.003</div>
                  <div className="text-sm font-medium">POL</div>
                  <p className="text-xs text-slate-600">Store text (per entry)</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">FREE</div>
                  <div className="text-sm font-medium">Read</div>
                  <p className="text-xs text-slate-600">Access data (no gas)</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">📊 Cost Factors</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>Network congestion</li>
                  <li>Transaction complexity</li>
                  <li>Gas price market</li>
                  <li>Time-of-day variability</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">💰 Examples (approx.)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>Vault setup: ~$0.02–$0.10</li>
                  <li>10 docs: ~$0.02–$0.05</li>
                  <li>50 text entries: ~$0.05–$0.15</li>
                  <li>Active month: ~$0.10–$0.50</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">⚡ Gas Optimization Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>Batch operations when possible</li>
                <li>Prefer low-traffic times</li>
                <li>Use wallet gas estimation</li>
                <li>Compress large files before upload</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-3">
          <h3 id="payment" className="text-2xl font-semibold text-slate-800">Payment Methods</h3>
          <p className="text-slate-700">All payments are handled via your Web3 wallet in POL on Polygon.</p>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">💎 POL Token Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>Gas auto-deducted from wallet</li>
                  <li>Real-time confirmation</li>
                  <li>No pre-payment</li>
                  <li>Pay only when used</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">🔄 Getting POL</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>Exchanges (Binance, Coinbase, etc.)</li>
                  <li>On-ramps (MoonPay, Transak)</li>
                  <li>Polygon Bridge</li>
                  <li>DEX swaps (QuickSwap)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">💳 Wallet Balance Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardContent>
                    <div className="font-semibold text-slate-800 mb-1">Minimum Balance</div>
                    <p className="text-sm text-slate-600">Keep ~0.1 POL for smooth operations</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <div className="font-semibold text-slate-800 mb-1">Auto-Estimation</div>
                    <p className="text-sm text-slate-600">Wallets estimate gas automatically</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <div className="font-semibold text-slate-800 mb-1">Failed Transactions</div>
                    <p className="text-sm text-slate-600">Insufficient balance prevents execution</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-3">
          <h3 id="comparison" className="text-2xl font-semibold text-slate-800">Cost Comparison</h3>
          <p className="text-slate-700">How Keyura compares to traditional storage and vaults.</p>
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
                  <td className="p-4 text-slate-700">Client-side + Blockchain</td>
                </tr>
                <tr className="border-t border-slate-200">
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
                <tr className="border-t border-slate-200">
                  <td className="p-4 text-slate-700">Enterprise Vault</td>
                  <td className="p-4 text-slate-700">$50 - $500+</td>
                  <td className="p-4 text-slate-700">$1,000+</td>
                  <td className="p-4 text-slate-700">Enterprise encryption</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-slate-600">*Keyura costs are gas fees only, based on typical usage patterns</p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">🎯 Keyura Advantages</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>No recurring fees</li>
                <li>Your keys, your control</li>
                <li>Transparent on-chain costs</li>
                <li>No vendor lock-in</li>
                <li>Global access</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

