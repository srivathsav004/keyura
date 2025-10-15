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
          <h3 id="user-setup" className="text-2xl font-semibold text-slate-800">Step 1: User Setup</h3>
          <p className="text-slate-700">Create your Keyura profile by connecting your wallet and setting up authentication.</p>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">🔗 Connect Your Wallet</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-slate-700">Visit <a href="https://keyura.vercel.app/user-setup" className="text-emerald-600 hover:underline font-medium">keyura.vercel.app/user-setup</a> to begin.</p>
                
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-sm text-amber-800"><strong>No MetaMask?</strong> If the browser doesn't detect a wallet, you'll need to install MetaMask from <a href="https://metamask.io" className="text-emerald-600 hover:underline">metamask.io</a> first.</p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-800">What happens during setup:</p>
                  <ol className="list-decimal list-inside text-sm text-slate-700 space-y-2 ml-2">
                    <li><strong>Wallet Connection:</strong> Click to connect your MetaMask wallet</li>
                    <li><strong>Automatic Network Setup:</strong> Polygon network will be added automatically if not present</li>
                    <li><strong>Wallet Address Display:</strong> Your connected wallet address will be shown</li>
                    <li><strong>Login Password:</strong> Set a password to access Keyura (this is NOT your encryption key)</li>
                  </ol>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800"><strong>Important:</strong> The login password is only for accessing the Keyura platform. Your data encryption uses separate passwords that you'll set for each file or text entry.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">📸 Setup Process Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 italic">Screenshot showing the user profile creation interface will be displayed here for reference.</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-3">
          <h3 id="login" className="text-2xl font-semibold text-slate-800">Step 2: Login to Dashboard</h3>
          <p className="text-slate-700">Once setup is complete, you'll be redirected to the login page.</p>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">🔐 Access Your Vault</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm text-slate-700">Visit <a href="https://keyura.vercel.app/login" className="text-emerald-600 hover:underline font-medium">keyura.vercel.app/login</a></p>
                <ol className="list-decimal list-inside text-sm text-slate-700 space-y-1 ml-2">
                  <li>Enter your wallet address</li>
                  <li>Enter the login password you created during setup</li>
                  <li>You'll be redirected to your personalized dashboard</li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-3">
          <h3 id="deploy" className="text-2xl font-semibold text-slate-800">Step 3: Dashboard & Contract Deployment</h3>
          <p className="text-slate-700">Your dashboard contains statistics, storage options, and contract settings.</p>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">📊 Dashboard Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 mb-3">The dashboard has three main tabs:</p>
              <div className="space-y-2">
                <div className="flex gap-3 p-3 bg-slate-50 rounded-lg">
                  <span className="text-emerald-600 font-bold">1.</span>
                  <div>
                    <p className="font-semibold text-slate-800">Store Data</p>
                    <p className="text-sm text-slate-600">Upload files or save text securely</p>
                  </div>
                </div>
                <div className="flex gap-3 p-3 bg-slate-50 rounded-lg">
                  <span className="text-emerald-600 font-bold">2.</span>
                  <div>
                    <p className="font-semibold text-slate-800">My Vault</p>
                    <p className="text-sm text-slate-600">View and access your stored data</p>
                  </div>
                </div>
                <div className="flex gap-3 p-3 bg-slate-50 rounded-lg">
                  <span className="text-emerald-600 font-bold">3.</span>
                  <div>
                    <p className="font-semibold text-slate-800">Contract Settings</p>
                    <p className="text-sm text-slate-600">Deploy or connect to your smart contract</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">🚀 Deploy Your Smart Contract (One-Time Setup)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800"><strong>First Time?</strong> You must deploy a smart contract before storing any data. This is a one-time process.</p>
                </div>

                <div className="space-y-3">
                  {[
                    { n: 1, t: "Navigate to Contract Settings", d: "Click on the Contract Settings tab in your dashboard" },
                    { n: 2, t: "Click Deploy Contract", d: "Initiate the deployment process" },
                    { n: 3, t: "Confirm in MetaMask", d: "Approve the transaction in your wallet (costs 0.01–0.05 POL)" },
                    { n: 4, t: "Contract Deployed", d: "Your personal vault contract address will be displayed" },
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

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-sm text-amber-800"><strong>Already Have a Contract?</strong> If you've previously deployed a Keyura contract and want to use it, you can import it by entering your existing contract address in the settings.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">📸 Contract Deployment Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 italic">Screenshot showing the empty contract settings interface before deployment will be displayed here.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">🔧 What Your Smart Contract Does</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>• Creates a personal vault contract owned exclusively by you</li>
                <li>• Only you (the owner) can write data to this contract</li>
                <li>• Provides functions to store and retrieve encrypted entries</li>
                <li>• Contract address serves as your permanent vault identifier</li>
                <li>• All data remains encrypted on-chain and IPFS</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">✅ After Deployment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700">Once your contract is deployed, the storage fields for files and text will become visible in the Store Data tab. You can now start securing your data on the blockchain!</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">📸 Storage Fields Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 italic">Screenshot showing the file and text storage input fields after successful contract deployment will be displayed here.</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-3">
          <h3 id="files" className="text-2xl font-semibold text-slate-800">Step 4: Storing Files</h3>
          <p className="text-slate-700">Encrypt and store any file up to 25 MB with unique passwords.</p>
          
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">📁 File Upload Process</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside text-sm text-slate-700 space-y-2 ml-2">
                  <li>Navigate to the <strong>Store Data</strong> tab</li>
                  <li>Select <strong>File Storage</strong> option</li>
                  <li>Click to upload or drag-and-drop your file</li>
                  <li>Enter a descriptive name for your file (optional but recommended)</li>
                  <li>Set a strong encryption password for this file</li>
                  <li>Click <strong>Encrypt & Store File</strong></li>
                  <li>Confirm the transaction in MetaMask</li>
                </ol>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">🔐 How It Works</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside text-sm text-slate-700 space-y-2 ml-2">
                  <li><strong>Local Encryption:</strong> File encrypted with AES-256-GCM in your browser</li>
                  <li><strong>IPFS Upload:</strong> Encrypted blob uploaded to IPFS network</li>
                  <li><strong>Double Encryption:</strong> IPFS CID encrypted again with your password</li>
                  <li><strong>Blockchain Storage:</strong> Encrypted reference saved to your smart contract</li>
                </ol>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">💡 File Storage Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>• <strong>Unique Passwords:</strong> Each file can have its own encryption password for added security</li>
                <li>• <strong>Same Password Option:</strong> You can also use the same password for all files if you prefer</li>
                <li>• <strong>Use a Password Manager:</strong> Highly recommended for managing multiple unique passwords</li>
                <li>• <strong>Descriptive Names:</strong> Give meaningful names to easily identify files later</li>
                <li>• <strong>Supported Formats:</strong> PDF, JPG, PNG, DOC, TXT, and most common file types</li>
                <li>• <strong>Size Limit:</strong> Maximum 25 MB per file upload</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">⚠️ Critical Security Note</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm text-red-800"><strong>Your password is never stored anywhere.</strong> If you lose your encryption password, the data cannot be recovered. There is no password reset option. Keep your passwords safe!</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-3">
          <h3 id="text" className="text-2xl font-semibold text-slate-800">Step 5: Storing Text Data</h3>
          <p className="text-slate-700">Securely store notes, secrets, keys, and sensitive text with the same encryption as files.</p>
          
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">📝 Text Storage Process</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside text-sm text-slate-700 space-y-2 ml-2">
                  <li>Navigate to the <strong>Store Data</strong> tab</li>
                  <li>Select <strong>Text/Notes Storage</strong> option</li>
                  <li>Enter a descriptive name for your text entry</li>
                  <li>Type or paste your text content in the text area</li>
                  <li>Set a strong encryption password</li>
                  <li>Click <strong>Encrypt & Store Text</strong></li>
                  <li>Confirm the transaction in MetaMask</li>
                </ol>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">🔒 Common Use Cases</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>• <strong>Crypto Wallets:</strong> Seed phrases and private keys</li>
                  <li>• <strong>Credentials:</strong> Passwords, PINs, and access codes</li>
                  <li>• <strong>Confidential Notes:</strong> Personal or business information</li>
                  <li>• <strong>Recovery Codes:</strong> 2FA backup codes and recovery phrases</li>
                  <li>• <strong>Legal Documents:</strong> Contracts or agreements in text form</li>
                  <li>• <strong>API Keys:</strong> Development tokens and secret keys</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">💡 Text Storage Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>• <strong>Flexible Passwords:</strong> Like files, each text entry can have a unique password or use the same one</li>
                <li>• <strong>Organized Naming:</strong> Use clear names to identify entries quickly (e.g., "Gmail Backup Codes", "Binance API Keys")</li>
                <li>• <strong>No Size Worries:</strong> Text storage is lightweight and cost-effective on blockchain</li>
                <li>• <strong>Rich Text Support:</strong> Store formatted text, JSON, code snippets, or plain text</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">⚠️ Important Security Considerations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-sm text-amber-800"><strong>For Critical Secrets:</strong> While Keyura provides strong encryption, for extremely sensitive data like wallet seed phrases, consider using dedicated hardware wallets or secure offline storage as your primary backup.</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800"><strong>Best Practice:</strong> Use Keyura as one layer in your security strategy. For mission-critical secrets, maintain multiple secure backups across different storage methods.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-3">
          <h3 id="access" className="text-2xl font-semibold text-slate-800">Step 6: Accessing Your Stored Data</h3>
          <p className="text-slate-700">View and decrypt your files and text entries from the My Vault tab.</p>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">🗂️ Your Data Vault</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm text-slate-700">Once you've stored data, navigate to the <strong>My Vault</strong> tab to see all your encrypted entries displayed in a data table.</p>
                
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <p className="text-sm font-semibold text-slate-800 mb-2">The vault table displays:</p>
                  <ul className="text-sm text-slate-700 space-y-1 ml-4">
                    <li>• <strong>Type:</strong> Whether it's a file or text entry</li>
                    <li>• <strong>Name:</strong> The descriptive name you provided during storage</li>
                    <li>• <strong>Transaction Hash:</strong> Blockchain transaction reference</li>
                    <li>• <strong>Upload Time:</strong> When the data was stored</li>
                    <li>• <strong>Actions:</strong> Open/decrypt button to access your data</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">📸 Vault Table Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 italic">Screenshot showing the My Vault data table with stored files and text entries will be displayed here.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">🔓 Decryption & Retrieval Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { n: 1, t: "Open My Vault Tab", d: "Navigate to the My Vault section in your dashboard" },
                  { n: 2, t: "Select Your Entry", d: "Find the file or text you want to access in the table" },
                  { n: 3, t: "Click Open/Decrypt", d: "Click the action button in the Actions column" },
                  { n: 4, t: "Enter Password", d: "Provide the encryption password you set for this specific entry" },
                  { n: 5, t: "Access Content", d: "View, download, or copy your decrypted data" },
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

          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">📸 Decryption Interface Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 italic">Screenshot showing the password prompt and decryption interface when clicking the Open button will be displayed here.</p>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">📁 File Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-700 mb-3">After decrypting a file, you can:</p>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>• <strong>Preview Images:</strong> View images directly in the browser</li>
                  <li>• <strong>Download Files:</strong> Get the original file in its native format</li>
                  <li>• <strong>View Metadata:</strong> See file size, type, and storage details</li>
                  <li>• <strong>Copy Links:</strong> Share IPFS links (note: password still required to decrypt)</li>
                  <li>• <strong>Batch Operations:</strong> Manage multiple files at once</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">📝 Text Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-700 mb-3">After decrypting text, you can:</p>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>• <strong>Secure View:</strong> View text in a protected popup window</li>
                  <li>• <strong>Copy to Clipboard:</strong> Quickly copy your sensitive text</li>
                  <li>• <strong>Edit & Re-encrypt:</strong> Update your text and save changes</li>
                  <li>• <strong>Export as TXT:</strong> Download text entries as files</li>
                  <li>• <strong>Search Entries:</strong> Quickly find specific text entries</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">🔐 How Decryption Works Behind the Scenes</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside text-sm text-slate-700 space-y-2 ml-2">
                <li><strong>Password Verification:</strong> Your password decrypts the on-chain IPFS CID reference</li>
                <li><strong>IPFS Retrieval:</strong> The encrypted data blob is fetched from IPFS using the CID</li>
                <li><strong>Local Decryption:</strong> Data is decrypted in your browser using your password</li>
                <li><strong>Secure Display:</strong> Decrypted content is rendered or made available for download locally</li>
              </ol>
              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800"><strong>Security Note:</strong> All decryption happens in your browser. Your password and decrypted data never leave your device.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">⚠️ Password Recovery Warning</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm text-red-800 mb-2"><strong>CRITICAL: No Password Recovery Available</strong></p>
                <p className="text-sm text-red-700">Your encryption passwords are never stored anywhere—not on the blockchain, not on IPFS, and not on any server. If you lose a password, the associated data is permanently inaccessible. There is no password reset, recovery, or backdoor option. Always keep your passwords safe and backed up securely!</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}