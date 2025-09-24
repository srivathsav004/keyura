'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Wallet, Copy, Shield, KeyRound } from 'lucide-react';

type InjectedProvider = any;

type StoredUserProfile = {
  walletName: string;
  address: string;
  passwordHash: string;
  salt: string;
};

function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

async function sha256Hex(data: Uint8Array): Promise<string> {
  const ab = data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength) as ArrayBuffer;
  const digest = await crypto.subtle.digest('SHA-256', ab);
  return bytesToHex(new Uint8Array(digest));
}

export default function UserSetupPage() {
  const router = useRouter();
  const [provider, setProvider] = useState<InjectedProvider | null>(null);
  const [connectedAddress, setConnectedAddress] = useState<string>('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);

  // Detect MetaMask
  useEffect(() => {
    const ethereum: any = (globalThis as any).ethereum;
    if (ethereum?.providers?.length) {
      setProvider(ethereum.providers.find((p: any) => p?.isMetaMask) || null);
    } else if (ethereum?.isMetaMask) {
      setProvider(ethereum);
    }
  }, []);

  const handleConnect = async () => {
    setError('');
    setBusy(true);
    try {
      if (!provider) {
        setError('MetaMask is required. Please install it.');
        return;
      }
      const accounts: string[] = await provider.request({ method: 'eth_requestAccounts' });
      if (!accounts?.length) {
        setError('No accounts returned.');
        return;
      }
      setConnectedAddress(accounts[0]);

      // Ensure Amoy testnet (chainId 80002)
      const chainId: string = await provider.request({ method: 'eth_chainId' });
      if (chainId?.toLowerCase() !== '0x13882') {
        try {
          await provider.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x13882' }],
          });
        } catch (switchErr: any) {
          if (switchErr?.code === 4902) {
            await provider.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: '0x13882',
                  chainName: 'Polygon Amoy Testnet',
                  nativeCurrency: { name: 'POL', symbol: 'POL', decimals: 18 },
                  rpcUrls: ['https://rpc-amoy.polygon.technology/'],
                  blockExplorerUrls: ['https://www.oklink.com/amoy'],
                },
              ],
            });
          }
        }
      }
    } catch (e: any) {
      setError(e?.message || 'Failed to connect wallet.');
    } finally {
      setBusy(false);
    }
  };

  const handleCreateProfile = async () => {
    setError('');
    if (!connectedAddress) return setError('Please connect your wallet first.');
    if (password.length < 8) return setError('Password must be at least 8 characters.');
    if (password !== confirmPassword) return setError('Passwords do not match.');

    const salt = new Uint8Array(16);
    crypto.getRandomValues(salt);
    const pwdBytes = new TextEncoder().encode(password);
    const salted = new Uint8Array(salt.length + pwdBytes.length);
    salted.set(salt);
    salted.set(pwdBytes, salt.length);

    const passwordHash = await sha256Hex(salted);
    const profile: StoredUserProfile = {
      walletName: 'MetaMask',
      address: connectedAddress,
      passwordHash,
      salt: bytesToHex(salt),
    };
    localStorage.setItem('keyura_user', JSON.stringify(profile));
    router.push('/login');
  };

  const copyAddress = async () => {
    if (!connectedAddress) return;
    try {
      await navigator.clipboard.writeText(connectedAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };

  return (
    <main className="min-h-screen py-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Brand */}
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center justify-center gap-2">
          <KeyRound className="h-6 w-6 text-primary" />
          <div className="text-xl font-bold">
            <span className="bg-gradient-to-r from-emerald-500 to-primary bg-clip-text text-transparent">Keyura</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-3">Set Up Your Profile</h1>
          {/* <p className="text-slate-600 max-w-xl mx-auto">
            On this page, you will:
            <br />
            <span className="font-medium">1. Connect your MetaMask wallet (Polygon Amoy Testnet)</span>
            <br />
            <span className="font-medium">2. Create a secure login password</span>
          </p> */}
        </motion.div>

        {/* Wallet Card */}
        <Card className="shadow-md border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Wallet className="h-5 w-5 text-primary" /> Connect Wallet
            </CardTitle>
            <CardDescription>
              You must use MetaMask on the <span className="font-semibold">Polygon Amoy Testnet</span>.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {!provider ? (
              <div className="rounded-lg bg-slate-50 p-4 flex flex-col items-start gap-2">
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <Shield className="h-5 w-5 text-primary" /> MetaMask not detected
                </div>
                <p className="text-sm text-slate-600">
                  Install MetaMask and refresh this page to continue.
                </p>
                <Link
                  href="https://metamask.io/"
                  target="_blank"
                  className="text-primary underline text-sm"
                >
                  Download MetaMask
                </Link>
              </div>
            ) : (
              <>
                <Button
                  onClick={handleConnect}
                  disabled={busy}
                  className="w-full bg-gradient-to-r from-primary to-slate-800 text-white"
                >
                  {connectedAddress ? 'Reconnect Wallet' : 'Connect Wallet'}
                </Button>

                {connectedAddress && (
                  <div className="flex items-center justify-between rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2">
                    <span className="font-mono text-xs sm:text-sm break-all text-emerald-800">
                      {connectedAddress}
                    </span>
                    <button
                      onClick={copyAddress}
                      className="text-emerald-700 hover:text-emerald-900"
                      title="Copy address"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                    {copied && <span className="text-xs text-emerald-700">Copied</span>}
                  </div>
                )}
              </>
            )}
          </CardContent>
        </Card>

        {/* Password Card */}
        <Card className="shadow-md border-slate-200">
          <CardHeader>
            <CardTitle className="text-lg">Set Your Login Password</CardTitle>
            <CardDescription>
              This password will be required when you log in to Keyura. Keep it safe.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Input
              type="password"
              placeholder="Create password (min 8 characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {error && <p className="text-red-600 text-sm">{error}</p>}

            <div className="flex gap-3 pt-2">
              <Button
                onClick={handleCreateProfile}
                className="bg-gradient-to-r from-primary to-slate-800 text-white"
              >
                Create Profile
              </Button>
              <Link href="/" className="self-center text-sm text-slate-600 underline">
                Cancel
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
