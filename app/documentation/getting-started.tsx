'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, Shield, Database, Network, Lock } from "lucide-react";
import Image from "next/image";

export default function GettingStarted() {
  return (
    <section id="getting-started" className="space-y-10 w-full">
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Getting Started
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Experience true data sovereignty with blockchain-powered encryption.
        </p>
        <Separator className="!mt-6" />
      </div>

      {/* What is Keyura */}
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 id="what-is-keyura" className="text-2xl font-semibold text-foreground">
            What is Keyura?
          </h2>
          <div>
            <p className="text-base text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Keyura</strong> is a decentralized platform that puts you in 
              complete control of your sensitive data. Store documents, notes, seed phrases, and any confidential 
              information with{" "}
              <Badge variant="secondary" className="font-medium">
                military-grade encryption
              </Badge>{" "}
              that happens entirely in your browser before touching the blockchain.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">Key Features</h3>
          </div>
          
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-medium flex items-center gap-3">
                  <Shield className="h-5 w-5 text-blue-600" />
                  Client-Side Encryption
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your data is encrypted in your browser (AES-256-GCM, PBKDF2 100k) before it ever leaves your device.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-medium flex items-center gap-3">
                  <Database className="h-5 w-5 text-purple-600" />
                  Blockchain Immutability
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your personal smart contract on Polygon stores encrypted references, creating an immutable record.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-medium flex items-center gap-3">
                  <Network className="h-5 w-5 text-green-600" />
                  IPFS Distribution
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Encrypted files are distributed across IPFS nodes, eliminating single points of failure.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-medium flex items-center gap-3">
                  <Lock className="h-5 w-5 text-orange-600" />
                  Zero-Knowledge Architecture
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Only your wallet and password can decrypt your files. We cannot access your data.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">
            Traditional Cloud Storage vs Keyura
          </h3>
          
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {[
                  { aspect: "Key Management", cloud: "Company holds keys", keyura: "You hold all keys" },
                  { aspect: "Encryption", cloud: "Server-side encryption", keyura: "Client-side encryption" },
                  { aspect: "Storage", cloud: "Centralized storage", keyura: "Decentralized IPFS" },
                  { aspect: "Privacy", cloud: "Potential compelled access", keyura: "Mathematically private" }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3">
                      <div className="font-medium text-foreground">
                        {item.aspect}
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">Cloud</Badge>
                        <span className="text-sm text-muted-foreground">{item.cloud}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="default" className="text-xs">Keyura</Badge>
                        <span className="text-sm text-foreground font-medium">{item.keyura}</span>
                      </div>
                    </div>
                    {index < 3 && <Separator />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 id="prerequisites" className="text-2xl font-semibold text-foreground">
            Prerequisites
          </h2>
          <p className="text-muted-foreground">
            Before you begin, ensure you have the following requirements:
          </p>
        </div>
        
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg font-medium flex items-center gap-3">
                <Image 
                  src="/metamask-logo.png" 
                  alt="MetaMask" 
                  width={24} 
                  height={24}
                  className="w-6 h-6"
                />
                MetaMask Wallet
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground leading-relaxed">
                MetaMask browser extension is required to interact with Keyura. The Polygon network will be automatically added when you create your profile.
              </p>
              <Alert>
                <AlertDescription className="text-xs">
                  Download MetaMask from the official website and set up your wallet before proceeding.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg font-medium flex items-center gap-3">
                <Image 
                  src="/polygon-logo.png" 
                  alt="Polygon" 
                  width={24} 
                  height={24}
                  className="w-6 h-6"
                />
                POL Tokens
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground leading-relaxed">
                You'll need POL tokens for gas fees to deploy your contract and sign transactions. A small amount (~0.2-0.3 POL) is sufficient for getting started.
              </p>
              <Alert>
                <AlertDescription className="text-xs">
                  POL tokens can be acquired from major cryptocurrency exchanges or DEX platforms.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}