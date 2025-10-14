'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, Lock, Database, Network, Key, AlertTriangle, CheckCircle } from "lucide-react";

export default function Security() {
  return (
    <section id="security" className="space-y-10 w-full">
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Security
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Military-grade encryption meets blockchain immutability
        </p>
        <Separator className="!mt-6" />
      </div>

      {/* Encryption Standards */}
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 id="encryption-standards" className="text-2xl font-semibold text-foreground">
            Encryption Standards
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            All cryptographic operations are executed client-side in your browser before any data transmission. 
            We implement industry-standard encryption algorithms with enhanced security parameters.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium flex items-center gap-3">
                <Shield className="h-5 w-5 text-blue-600" />
                Encryption Algorithm
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">AES-256-GCM</Badge>
                  <span className="text-sm text-muted-foreground">Authenticated encryption</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Advanced Encryption Standard with 256-bit keys in Galois/Counter Mode, providing both confidentiality and integrity protection.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium flex items-center gap-3">
                <Key className="h-5 w-5 text-purple-600" />
                Key Derivation
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">PBKDF2</Badge>
                  <span className="text-sm text-muted-foreground">100,000 iterations</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Password-Based Key Derivation Function 2 with SHA-256 and 100,000 iterations, making brute-force attacks computationally infeasible.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium flex items-center gap-3">
                <Lock className="h-5 w-5 text-green-600" />
                Unique Salts & IVs
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Per-Item</Badge>
                  <span className="text-sm text-muted-foreground">Cryptographically random</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Each encryption operation uses unique 12-byte initialization vectors and salts, preventing rainbow table attacks and ensuring identical data produces different ciphertexts.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-orange-600" />
                Zero Server Access
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Client-Only</Badge>
                  <span className="text-sm text-muted-foreground">Browser-based operations</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  All encryption, decryption, and key derivation happens exclusively in your browser. Servers never receive passwords, keys, or plaintext data.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Storage Architecture */}
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 id="blockchain-storage" className="text-2xl font-semibold text-foreground">
            Blockchain Storage Architecture
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Your data is distributed across multiple layers, with blockchain storing only encrypted references and metadata—never plaintext content.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium flex items-center gap-3">
                <Database className="h-5 w-5 text-purple-600" />
                On-Chain (Polygon)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Encrypted IPFS CID references (XOR-encrypted with password)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Entry metadata (name, type, size, timestamps)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Key verification hashes (keccak256)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Transaction immutability guarantees</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium flex items-center gap-3">
                <Network className="h-5 w-5 text-green-600" />
                IPFS Network
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Encrypted file content only (AES-256-GCM ciphertext)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Content-addressed storage with unique CIDs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Distributed across global IPFS nodes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>No plaintext data ever stored</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium flex items-center gap-3">
                <Shield className="h-5 w-5 text-blue-600" />
                Your Browser
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>All encryption/decryption operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Password entry and key derivation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>MetaMask wallet integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Complete local control and processing</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-medium">Smart Contract Security Model</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Each user deploys their own personal vault contract on Polygon, ensuring complete ownership isolation. 
              Contracts store only encrypted references and metadata—the actual decryption keys never leave your browser, 
              making it mathematically impossible for anyone (including us) to access your data without your password.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Data Flow */}
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 id="data-flow" className="text-2xl font-semibold text-foreground">
            Technical Data Flow
          </h2>
        </div>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium">File Storage Process</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ol className="text-sm text-muted-foreground space-y-2">
                <li className="flex gap-3">
                  <Badge variant="outline" className="text-xs min-w-fit">1</Badge>
                  <span>Password → PBKDF2 (100k iterations) → AES-256 key</span>
                </li>
                <li className="flex gap-3">
                  <Badge variant="outline" className="text-xs min-w-fit">2</Badge>
                  <span>Generate random 12-byte IV for AES-GCM</span>
                </li>
                <li className="flex gap-3">
                  <Badge variant="outline" className="text-xs min-w-fit">3</Badge>
                  <span>Encrypt file in browser → upload ciphertext to IPFS</span>
                </li>
                <li className="flex gap-3">
                  <Badge variant="outline" className="text-xs min-w-fit">4</Badge>
                  <span>XOR-encrypt IPFS CID with password</span>
                </li>
                <li className="flex gap-3">
                  <Badge variant="outline" className="text-xs min-w-fit">5</Badge>
                  <span>Store encrypted CID reference on blockchain</span>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium">Text Storage Process</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ol className="text-sm text-muted-foreground space-y-2">
                <li className="flex gap-3">
                  <Badge variant="outline" className="text-xs min-w-fit">1</Badge>
                  <span>Password → PBKDF2 (100k iterations) → AES-256 key</span>
                </li>
                <li className="flex gap-3">
                  <Badge variant="outline" className="text-xs min-w-fit">2</Badge>
                  <span>Generate random 12-byte IV for AES-GCM</span>
                </li>
                <li className="flex gap-3">
                  <Badge variant="outline" className="text-xs min-w-fit">3</Badge>
                  <span>Encrypt text content → Base64 encode</span>
                </li>
                <li className="flex gap-3">
                  <Badge variant="outline" className="text-xs min-w-fit">4</Badge>
                  <span>Create key verification hash (keccak256)</span>
                </li>
                <li className="flex gap-3">
                  <Badge variant="outline" className="text-xs min-w-fit">5</Badge>
                  <span>Store encrypted payload directly on blockchain</span>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Privacy Guarantees */}
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 id="privacy-guarantees" className="text-2xl font-semibold text-foreground">
            Privacy Guarantees
          </h2>
        </div>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                What We Guarantee
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>No plaintext data ever leaves your device</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Passwords never transmitted or stored on servers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Decryption keys exist only in your browser session</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>No backdoors, master keys, or recovery mechanisms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Mathematically impossible for us to decrypt your data</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                Important Considerations
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Lost passwords are permanently unrecoverable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Secure your devices and MetaMask seed phrases</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Always verify the correct domain before connecting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Keep your browser and MetaMask updated</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Alert>
          <Lock className="h-4 w-4" />
          <AlertDescription>
            <strong>Zero-Knowledge Architecture:</strong> Your encryption password never leaves your device. 
            All cryptographic operations happen locally in your browser using the Web Crypto API. Even under legal compulsion, 
            we cannot decrypt your data because we do not possess the keys—they exist only in your browser during active sessions.
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
}