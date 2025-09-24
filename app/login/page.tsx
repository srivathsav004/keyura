'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Wallet, Lock, KeyRound } from 'lucide-react';

type StoredUserProfile = {
  walletName: string;
  address: string;
  passwordHash: string;
  salt: string;
};

function hexToBytes(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
  }
  return bytes;
}

async function sha256Hex(data: Uint8Array): Promise<string> {
  const ab = data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength) as ArrayBuffer;
  const digest = await crypto.subtle.digest('SHA-256', ab);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const profile: StoredUserProfile | null = (() => {
    try {
      const raw = typeof window !== 'undefined' ? localStorage.getItem('keyura_user') : null;
      return raw ? (JSON.parse(raw) as StoredUserProfile) : null;
    } catch {
      return null;
    }
  })();

  const login = async () => {
    setError('');
    if (!profile) {
      setError('No user profile found. Please create one.');
      return;
    }
    if (!address || address.toLowerCase() !== profile.address.toLowerCase()) {
      setError('Wallet address does not match the registered address.');
      return;
    }
    const salted = new Uint8Array(hexToBytes(profile.salt).length + new TextEncoder().encode(password).length);
    const saltBytes = hexToBytes(profile.salt);
    const pwdBytes = new TextEncoder().encode(password);
    salted.set(saltBytes);
    salted.set(pwdBytes, saltBytes.length);
    const hash = await sha256Hex(salted);
    if (hash === profile.passwordHash) {
      localStorage.setItem('keyura_session', JSON.stringify({ address: profile.address, ts: Date.now() }));
      router.push('/');
    } else {
      setError('Invalid password.');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white grid place-items-center py-12">
      <div className="w-full max-w-md px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center justify-center gap-2 mb-4">
          <KeyRound className="h-6 w-6 text-primary" />
          <div className="text-xl font-bold">
            <span className="bg-gradient-to-r from-emerald-500 to-primary bg-clip-text text-transparent">Keyura</span>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card className="shadow-xl border-slate-100">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Welcome Back</CardTitle>
              <CardDescription>Enter your wallet address and password to access your account.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
                    <Wallet className="h-4 w-4" />
                  </div>
                  <Input
                    type="text"
                    placeholder="0x..."
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
                    <Lock className="h-4 w-4" />
                  </div>
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-9"
                  />
                </div>
                {error && <p className="text-red-600 text-sm">{error}</p>}
                <Button onClick={login} className="bg-gradient-to-r from-primary to-slate-800 text-white w-full">Login</Button>
                <div className="text-center text-sm text-slate-600">
                  First time here? <Link className="underline font-medium" href="/user-setup">Create profile</Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}


