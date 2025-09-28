'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Wallet, Lock, KeyRound } from 'lucide-react';
import { login as loginApi } from '@/services/auth';

// Backend-based authentication

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const login = async () => {
    setError('');
    if (!address) return setError('Please enter your wallet address.');
    if (!password) return setError('Please enter your password.');
    try {
      setBusy(true);
      const res = await loginApi({ wallet_address: address, password });
      // Store minimal session locally if needed
      localStorage.setItem('keyura_session', JSON.stringify({ address: res.wallet_address, userid: res.userid, ts: Date.now() }));
      // Set cookie with userid for dashboard access (expires in 7 days)
      const maxAge = 7 * 24 * 60 * 60;
      document.cookie = `userid=${encodeURIComponent(String(res.userid))}; Path=/; Max-Age=${maxAge}`;
      router.push('/dashboard');
    } catch (e: any) {
      setError(e?.message || 'Login failed');
    } finally {
      setBusy(false);
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
                <Button onClick={login} disabled={busy} className="bg-gradient-to-r from-primary to-slate-800 text-white w-full">{busy ? 'Logging in...' : 'Login'}</Button>
                <div className="text-center text-sm text-slate-600">
                  First time here? <Link className="underline font-medium" href="/user-setup" prefetch={false}>Create profile</Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}


