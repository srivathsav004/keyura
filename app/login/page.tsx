'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Wallet, Lock } from 'lucide-react';
import Image from 'next/image';
import { login as loginApi } from '@/services/auth';

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !busy) {
      login();
    }
  };

  const login = async () => {
    setError('');
    if (!address) return setError('Please enter your wallet address.');
    if (!password) return setError('Please enter your password.');
    try {
      setBusy(true);
      const res = await loginApi({ wallet_address: address, password });

      localStorage.setItem(
        'keyura_session',
        JSON.stringify({ address: res.wallet_address, userid: res.userid, ts: Date.now() })
      );

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
        <motion.div 
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center justify-center gap-3 mb-8"
        >
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4 mb-2">
              <div className="flex-shrink-0">
                <Image 
                  src="/keyura-logo.png" 
                  alt="Keyura Logo" 
                  width={48} 
                  height={48} 
                  className="h-12 w-12 object-contain"
                  priority
                />
              </div>
              <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-500 to-primary bg-clip-text text-transparent">
                Keyura
              </h1>
            </div>
            <p className="text-slate-600 text-lg font-medium">Secure Document Storage on Blockchain</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card className="shadow-xl border-slate-100">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Welcome Back</CardTitle>
              <CardDescription>
                Enter your wallet address and password to access your account.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                
                {/* Address Input */}
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
                    <Wallet className="h-4 w-4" />
                  </div>
                  <Input
                    type="text"
                    placeholder="0x..."
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    onKeyDown={handleKeyPress}
                    className="pl-9"
                  />
                </div>

                {/* Password Input */}
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
                    <Lock className="h-4 w-4" />
                  </div>
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={handleKeyPress}
                    className="pl-9"
                  />
                </div>

                {error && <p className="text-red-600 text-sm">{error}</p>}

                <Button
                  onClick={login}
                  disabled={busy}
                  className="bg-gradient-to-r from-primary to-slate-800 text-white w-full"
                >
                  {busy ? 'Logging in...' : 'Login'}
                </Button>

                <div className="text-center text-sm text-slate-600">
                  First time here?{' '}
                  <Link className="underline font-medium" href="/user-setup" prefetch={false}>
                    Create profile
                  </Link>
                </div>

              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
