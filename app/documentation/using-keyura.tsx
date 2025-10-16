'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  User, 
  Wallet, 
  Settings, 
  Upload, 
  FileText, 
  Eye, 
  Shield, 
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Database,
  Lock,
  Key
} from "lucide-react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function UsingKeyura() {
  return (
    <section id="using-keyura" className="space-y-10 w-full">
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Using Keyura
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Step-by-step guide to securing your data with blockchain encryption
        </p>
        <Separator className="!mt-6" />
      </div>

      {/* User Setup */}
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 id="user-setup" className="text-2xl font-semibold text-foreground">
            Step 1: User Setup & Profile Creation
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Begin your journey by setting up your Keyura profile. This one-time setup connects your MetaMask wallet 
            and creates your secure login credentials.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium flex items-center gap-3">
                <Wallet className="h-5 w-5 text-orange-600" />
                Connect MetaMask Wallet
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 space-y-3">
              <ol className="text-sm text-muted-foreground space-y-2">
                <li className="flex gap-3">
                  <Badge variant="outline" className="text-xs min-w-fit">1</Badge>
                  <span>Visit <code className="bg-muted px-1 rounded text-xs">keyura.vercel.app/user-setup</code></span>
                </li>
                <li className="flex gap-3">
                  <Badge variant="outline" className="text-xs min-w-fit">2</Badge>
                  <span>Click "Connect Wallet" to authorize MetaMask</span>
                </li>
                <li className="flex gap-3">
                  <Badge variant="outline" className="text-xs min-w-fit">3</Badge>
                  <span>Polygon network will be automatically added if not present</span>
                </li>
                <li className="flex gap-3">
                  <Badge variant="outline" className="text-xs min-w-fit">4</Badge>
                  <span>Your wallet address will be displayed once connected</span>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium flex items-center gap-3">
                <User className="h-5 w-5 text-blue-600" />
                Set Login Password
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 space-y-3">
              <ol className="text-sm text-muted-foreground space-y-2">
                <li className="flex gap-3">
                  <Badge variant="outline" className="text-xs min-w-fit">1</Badge>
                  <span>Create a strong login password for Keyura access</span>
                </li>
                <li className="flex gap-3">
                  <Badge variant="outline" className="text-xs min-w-fit">2</Badge>
                  <span>This is separate from your encryption passwords</span>
                </li>
                <li className="flex gap-3">
                  <Badge variant="outline" className="text-xs min-w-fit">3</Badge>
                  <span>Complete profile creation to proceed</span>
                </li>
              </ol>
              <Alert>
                <AlertDescription className="text-xs">
                  <strong>Note:</strong> This login password is for Keyura platform access, not for data encryption.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>

        <Card className="border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-medium">What Happens During Setup</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                  <Wallet className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Wallet Detection</p>
                  <p className="text-xs text-muted-foreground">MetaMask installation check</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                  <Settings className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Network Setup</p>
                  <p className="text-xs text-muted-foreground">Automatic Polygon addition</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Profile Creation</p>
                  <p className="text-xs text-muted-foreground">Secure login credentials</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Screenshot */}
        <Card className="border-border/50">
          <CardContent className="p-6">
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-foreground">User Setup Process</h4>
              <div className="rounded-lg overflow-hidden border border-border/50">
                <Image 
                  src="/user-setup-screenshot.png" 
                  alt="User Setup Process - Wallet connection and profile creation flow" 
                  width={800} 
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Screenshot showing wallet connection and profile creation flow
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Login & Dashboard */}
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 id="login-dashboard" className="text-2xl font-semibold text-foreground">
            Step 2: Login & Dashboard Access
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            After completing your profile setup, you'll be redirected to the login page to access your secure dashboard.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium flex items-center gap-3">
                <Shield className="h-5 w-5 text-green-600" />
                Secure Login Process
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 space-y-3">
              <ol className="text-sm text-muted-foreground space-y-2">
                <li className="flex gap-3">
                  <Badge variant="outline" className="text-xs min-w-fit">1</Badge>
                  <span>Navigate to <code className="bg-muted px-1 rounded text-xs">keyura.vercel.app/login</code></span>
                </li>
                <li className="flex gap-3">
                  <Badge variant="outline" className="text-xs min-w-fit">2</Badge>
                  <span>Enter your wallet address and login password</span>
                </li>
                <li className="flex gap-3">
                  <Badge variant="outline" className="text-xs min-w-fit">3</Badge>
                  <span>Successfully authenticate to access dashboard</span>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium flex items-center gap-3">
                <Database className="h-5 w-5 text-purple-600" />
                Dashboard Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-sm text-muted-foreground">Statistics and usage overview at the top</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-sm text-muted-foreground">Three main tabs: Store Data, My Vault, Contract Settings</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span className="text-sm text-muted-foreground">Contract deployment required for first-time users</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contract Deployment */}
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 id="contract-deployment" className="text-2xl font-semibold text-foreground">
            Step 3: Deploy Your Personal Vault Contract
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Your personal vault is a smart contract deployed exclusively for you on Polygon. This one-time setup 
            creates your secure storage infrastructure.
          </p>
        </div>

        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>Important:</strong> Contract deployment is required before you can store any data. 
            If you already have a deployed contract, you can use that existing address instead.
          </AlertDescription>
        </Alert>

        <Card className="border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-medium">Deployment Process</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-4">
              {[
                { 
                  n: 1, 
                  t: "Click Deploy Contract", 
                  d: "Initiate the smart contract deployment process",
                  icon: <ArrowRight className="h-4 w-4" />
                },
                { 
                  n: 2, 
                  t: "Confirm MetaMask Transaction", 
                  d: "Approve the deployment transaction in your MetaMask wallet",
                  icon: <Wallet className="h-4 w-4" />
                },
                { 
                  n: 3, 
                  t: "Contract Address Generated", 
                  d: "Your unique vault contract address will be displayed",
                  icon: <CheckCircle className="h-4 w-4" />
                },
              ].map((step) => (
                <div key={step.n} className="flex gap-4 p-4 border border-border/50 rounded-lg">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                    {step.n}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 font-medium text-foreground mb-1">
                      {step.icon}
                      {step.t}
                    </div>
                    <p className="text-sm text-muted-foreground">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium">Contract Features</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Owner-only write permissions for maximum security</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Functions to store and retrieve encrypted entries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Permanent vault ID tied to your wallet</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Typical deployment cost: 0.2–0.3 POL</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium">Using Existing Contract</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  If you already have a deployed Keyura contract, you can use it instead of deploying a new one.
                </p>
                <ol className="text-sm text-muted-foreground space-y-2">
                  <li className="flex gap-3">
                    <Badge variant="outline" className="text-xs min-w-fit">1</Badge>
                    <span>Enter your existing contract address</span>
                  </li>
                  <li className="flex gap-3">
                    <Badge variant="outline" className="text-xs min-w-fit">2</Badge>
                    <span>Verify ownership through wallet signature</span>
                  </li>
                  <li className="flex gap-3">
                    <Badge variant="outline" className="text-xs min-w-fit">3</Badge>
                    <span>Access your existing vault data</span>
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Screenshots */}
        <Card className="border-border/50">
          <CardContent className="p-6">
            <Tabs defaultValue="empty" className="w-full">
              <TabsList className="w-full justify-start gap-2 overflow-x-auto">
                <TabsTrigger value="empty">Empty Contract Settings</TabsTrigger>
                <TabsTrigger value="deploy">Contract Deployment</TabsTrigger>
              </TabsList>
              <TabsContent value="empty">
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-foreground">Empty Contract Settings</h4>
                  <div className="rounded-lg overflow-hidden border border-border/50">
                    <Image 
                      src="/empty-contract-settings.png" 
                      alt="Empty Contract Settings - Shows initial state before contract deployment" 
                      width={800} 
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Shows initial state before contract deployment
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="deploy">
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-foreground">Contract Deployment</h4>
                  <div className="rounded-lg overflow-hidden border border-border/50">
                    <Image 
                      src="/contract-deployment.png" 
                      alt="Contract Deployment - Shows deployment process and confirmation" 
                      width={800} 
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Shows deployment process and confirmation
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

      </div>

      {/* Data Storage */}
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 id="storing-data" className="text-2xl font-semibold text-foreground">
            Step 4: Storing Your Data
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Once your contract is deployed, you can securely store both files and text data. Each entry can have 
            its own unique encryption password for maximum security flexibility.
          </p>
        </div>

        <Alert>
          <CheckCircle className="h-4 w-4" />
          <AlertDescription>
            <strong>Flexible Security:</strong> You can use unique passwords for each file/text entry, or use the same 
            password for all your data—the choice is yours based on your security preferences.
          </AlertDescription>
        </Alert>

        {/* File Storage */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
            <Upload className="h-5 w-5 text-blue-600" />
            File Storage
          </h3>
          
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-medium">Upload Process</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ol className="text-sm text-muted-foreground space-y-2">
                  <li className="flex gap-3">
                    <Badge variant="outline" className="text-xs min-w-fit">1</Badge>
                    <span>Go to "Store Data" tab and select "Store Files"</span>
                  </li>
                  <li className="flex gap-3">
                    <Badge variant="outline" className="text-xs min-w-fit">2</Badge>
                    <span>Click to select your file (max 2 MB)</span>
                  </li>
                  <li className="flex gap-3">
                    <Badge variant="outline" className="text-xs min-w-fit">3</Badge>
                    <span>Enter a custom name (optional)</span>
                  </li>
                  <li className="flex gap-3">
                    <Badge variant="outline" className="text-xs min-w-fit">4</Badge>
                    <span>Set a strong encryption password</span>
                  </li>
                  <li className="flex gap-3">
                    <Badge variant="outline" className="text-xs min-w-fit">5</Badge>
                    <span>Click "Encrypt & Store File"</span>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-medium">Technical Process</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ol className="text-sm text-muted-foreground space-y-2">
                  <li className="flex gap-3">
                    <Badge variant="outline" className="text-xs min-w-fit">1</Badge>
                    <span>File encrypted with AES-256-GCM in browser</span>
                  </li>
                  <li className="flex gap-3">
                    <Badge variant="outline" className="text-xs min-w-fit">2</Badge>
                    <span>Encrypted blob uploaded to IPFS</span>
                  </li>
                  <li className="flex gap-3">
                    <Badge variant="outline" className="text-xs min-w-fit">3</Badge>
                    <span>IPFS CID encrypted with your password</span>
                  </li>
                  <li className="flex gap-3">
                    <Badge variant="outline" className="text-xs min-w-fit">4</Badge>
                    <span>Encrypted reference stored on blockchain</span>
                  </li>
                  <li className="flex gap-3">
                    <Badge variant="outline" className="text-xs min-w-fit">5</Badge>
                    <span>Transaction hash recorded for verification</span>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Text Storage */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
            <FileText className="h-5 w-5 text-green-600" />
            Text Data Storage
          </h3>
          
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-medium">Storage Process</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ol className="text-sm text-muted-foreground space-y-2">
                  <li className="flex gap-3">
                    <Badge variant="outline" className="text-xs min-w-fit">1</Badge>
                    <span>Select "Store Text/Notes" option</span>
                  </li>
                  <li className="flex gap-3">
                    <Badge variant="outline" className="text-xs min-w-fit">2</Badge>
                    <span>Enter a descriptive entry name</span>
                  </li>
                  <li className="flex gap-3">
                    <Badge variant="outline" className="text-xs min-w-fit">3</Badge>
                    <span>Type or paste your text content</span>
                  </li>
                  <li className="flex gap-3">
                    <Badge variant="outline" className="text-xs min-w-fit">4</Badge>
                    <span>Set encryption password</span>
                  </li>
                  <li className="flex gap-3">
                    <Badge variant="outline" className="text-xs min-w-fit">5</Badge>
                    <span>Click "Encrypt & Store Text"</span>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-medium">Common Use Cases</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Cryptocurrency seed phrases and private keys</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Important passwords and PINs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Confidential notes and documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>2FA recovery codes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Legal contracts in text format</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Screenshot */}
        <Card className="border-border/50">
          <CardContent className="p-6">
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-foreground">Storage Interface</h4>
              <div className="rounded-lg overflow-hidden border border-border/50">
                <Image 
                  src="/storage-interface.png" 
                  alt="Storage Interface - Shows file and text storage fields after contract deployment" 
                  width={800} 
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Shows file and text storage fields after contract deployment
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Accessing Data */}
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 id="accessing-data" className="text-2xl font-semibold text-foreground">
            Step 5: Accessing Your Stored Data
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Retrieve and decrypt your stored data using the "My Vault" tab. Only your encryption passwords can 
            unlock your content—ensuring complete privacy and security.
          </p>
        </div>

        <Card className="border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-medium">Vault Data Table</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm text-muted-foreground mb-4">
              Your vault displays all stored entries in an organized table format with the following information:
            </p>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                  <FileText className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Entry Name</p>
                  <p className="text-xs text-muted-foreground">Custom name or filename</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                  <Badge className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">Data Type</p>
                  <p className="text-xs text-muted-foreground">Text or File indicator</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                  <Database className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Transaction Hash</p>
                  <p className="text-xs text-muted-foreground">Blockchain verification link</p>
                                </div>
              </div>
              <div className="space-y-2">
                <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                  <Eye className="h-4 w-4 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Actions</p>
                  <p className="text-xs text-muted-foreground">Open/decrypt button</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
            <Lock className="h-5 w-5 text-purple-600" />
            Decryption Process
          </h3>
          
          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium">Step-by-Step Decryption</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                {[
                  { 
                    n: 1, 
                    t: "Navigate to My Vault", 
                    d: "Click on the 'My Vault' tab to view all your stored entries",
                    icon: <Database className="h-4 w-4" />
                  },
                  { 
                    n: 2, 
                    t: "Select Entry to Open", 
                    d: "Click the 'Open' button in the Actions column for your desired entry",
                    icon: <Eye className="h-4 w-4" />
                  },
                  { 
                    n: 3, 
                    t: "Enter Encryption Password", 
                    d: "Provide the specific password you used when storing this entry",
                    icon: <Key className="h-4 w-4" />
                  },
                  { 
                    n: 4, 
                    t: "Access Decrypted Content", 
                    d: "View text content or download decrypted files locally",
                    icon: <CheckCircle className="h-4 w-4" />
                  },
                ].map((step) => (
                  <div key={step.n} className="flex gap-4 p-4 border border-border/50 rounded-lg">
                    <div className="flex-shrink-0 w-10 h-10 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                      {step.n}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 font-medium text-foreground mb-1">
                        {step.icon}
                        {step.t}
                      </div>
                      <p className="text-sm text-muted-foreground">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Screenshots: My Vault & Decryption Modal */}
          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium">My Vault: Screens & Actions</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <Tabs defaultValue="table" className="w-full">
                <TabsList className="w-full justify-start gap-2 overflow-x-auto">
                  <TabsTrigger value="table">My Vault Data Table</TabsTrigger>
                  <TabsTrigger value="modal">Decryption Modal</TabsTrigger>
                </TabsList>
                <TabsContent value="table">
                  <div className="rounded-lg overflow-hidden border border-border/50">
                    <Image
                      src="/vault-data-table.png"
                      alt="My Vault Data Table - Shows stored entries with names, types, tx hashes, and timestamps"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="modal">
                  <div className="rounded-lg overflow-hidden border border-border/50">
                    <Image
                      src="/decryption-modal.png"
                      alt="Decryption Modal - Shows password entry dialog when opening stored data"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Technical Flow */}
          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium">Technical Decryption Flow</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ol className="text-sm text-muted-foreground space-y-2">
                <li className="flex gap-3">
                  <Badge variant="outline" className="text-xs min-w-fit">1</Badge>
                  <span>Decrypt on-chain CID reference using your password</span>
                </li>
                <li className="flex gap-3">
                  <Badge variant="outline" className="text-xs min-w-fit">2</Badge>
                  <span>Fetch encrypted content from IPFS using decrypted CID</span>
                </li>
                <li className="flex gap-3">
                  <Badge variant="outline" className="text-xs min-w-fit">3</Badge>
                  <span>Decrypt content locally in your browser with AES-256-GCM</span>
                </li>
                <li className="flex gap-3">
                  <Badge variant="outline" className="text-xs min-w-fit">4</Badge>
                  <span>Render text or download file directly to your device</span>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Quick Reference */}
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 id="quick-reference" className="text-2xl font-semibold text-foreground">
            Quick Reference Guide
          </h2>
        </div>

        <Card className="border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-medium">Complete Workflow Summary</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full mx-auto flex items-center justify-center">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Setup Profile</p>
                  <p className="text-xs text-muted-foreground">Connect wallet & create login</p>
                </div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full mx-auto flex items-center justify-center">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Login</p>
                  <p className="text-xs text-muted-foreground">Access your dashboard</p>
                                  </div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full mx-auto flex items-center justify-center">
                  <Settings className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Deploy Contract</p>
                  <p className="text-xs text-muted-foreground">One-time vault setup</p>
                </div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-full mx-auto flex items-center justify-center">
                  <Upload className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Store Data</p>
                  <p className="text-xs text-muted-foreground">Encrypt files & text</p>
                </div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-full mx-auto flex items-center justify-center">
                  <Eye className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Access Vault</p>
                  <p className="text-xs text-muted-foreground">Decrypt & retrieve</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium">Key URLs</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <code className="text-xs bg-muted px-2 py-1 rounded">keyura.vercel.app/user-setup</code>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <code className="text-xs bg-muted px-2 py-1 rounded">keyura.vercel.app/login</code>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <code className="text-xs bg-muted px-2 py-1 rounded">keyura.vercel.app/dashboard</code>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium">Remember</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Login password ≠ Encryption password</li>
                <li>• Each entry can have unique encryption</li>
                <li>• Contract deployment is one-time only</li>
                <li>• All decryption happens in your browser</li>
                <li>• Lost passwords cannot be recovered</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}