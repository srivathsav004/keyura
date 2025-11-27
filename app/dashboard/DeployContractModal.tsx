"use client";

import { useEffect, useMemo, useState } from "react";
import { ABI, BYTECODE } from "./contractBytecode";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createContract, Contract } from "@/services/contracts";
import { Rocket, CheckCircle2, X, Loader2, Wallet, AlertCircle } from "lucide-react";

// Lightweight modal using shadcn Card; no Dialog dependency to keep it simple and robust.
export default function DeployContractModal({
  open,
  onClose,
  userid,
  onDeployed,
}: {
  open: boolean;
  onClose: () => void;
  userid: number;
  onDeployed: (c: Contract) => void;
}) {
  const [expectedWallet, setExpectedWallet] = useState<string>("");
  const [connectedWallet, setConnectedWallet] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [busy, setBusy] = useState(false);
  const [networkInfo, setNetworkInfo] = useState<string>("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem("keyura_session");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed?.address) setExpectedWallet(String(parsed.address));
      }
    } catch {}
  }, [open]);

  const canDeploy = useMemo(() => {
    return !!expectedWallet && !!connectedWallet && expectedWallet.toLowerCase() === connectedWallet.toLowerCase();
  }, [expectedWallet, connectedWallet]);

  const connectWallet = async () => {
    setError("");
    setStatus("Connecting wallet...");
    try {
      if (!(window as any).ethereum) throw new Error("MetaMask not detected");
      const { BrowserProvider } = await import("ethers");
      const provider = new BrowserProvider((window as any).ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const addr = await signer.getAddress();
      setConnectedWallet(addr);
      setStatus("Wallet connected");
    } catch (e: any) {
      setError(e?.message || "Failed to connect wallet");
      setStatus("");
    }
  };

  const handleDeploy = async () => {
    setError("");
    setStatus("Preparing deployment...");
    setBusy(true);
    try {
      if (!(window as any).ethereum) throw new Error("MetaMask not detected");
      const { BrowserProvider, ContractFactory } = await import("ethers");
      const provider = new BrowserProvider((window as any).ethereum);
      const signer = await provider.getSigner();

      const net = await provider.getNetwork();
      setNetworkInfo(`chainId=${net.chainId.toString()}`);

      const addr = await signer.getAddress();
      setConnectedWallet(addr);
      if (!expectedWallet) throw new Error("Missing expected wallet address. Please re-login.");
      if (expectedWallet.toLowerCase() !== addr.toLowerCase()) {
        throw new Error("Connected wallet does not match your Keyura account wallet. Switch accounts in MetaMask.");
      }

      setStatus("Deploying contract (please confirm in wallet)...");

      if (!BYTECODE || BYTECODE.length <= 2) {
        throw new Error("Contract bytecode not configured. Please add BYTECODE in contractBytecode.ts");
      }

      const factory = new ContractFactory(ABI as any, BYTECODE, signer);
      // Force legacy type-0 tx; MetaMask will populate gasPrice & gasLimit
      const contract = await factory.deploy({ type: 0 });

      setStatus("Waiting for deployment...");
      await contract.waitForDeployment();
      const deployedAddress: string = (contract as any).target || (contract as any).address;
      if (!deployedAddress) throw new Error("Failed to get deployed contract address");

      setStatus("Saving contract to backend...");
      const saved = await createContract(userid, deployedAddress);
      setStatus("Contract deployed and saved");
      onDeployed(saved);
      onClose();
    } catch (e: any) {
      const raw = e?.info?.error?.message || e?.data?.message || e?.reason || e?.shortMessage || e?.message || "Unknown error";
      let msg = String(raw);
      if (e?.code === 4001 || /user rejected/i.test(msg)) {
        msg = "User rejected the transaction in MetaMask.";
      } else if (e?.code === -32000 || /insufficient funds/i.test(msg)) {
        msg = "Insufficient funds to cover gas fees on the connected network.";
      } else if (e?.code === -32601 || /eth_maxPriorityFeePerGas/i.test(msg)) {
        msg = "Your RPC does not support EIP-1559 fee calls. We've fallen back to legacy gasPrice. If it persists, switch RPC/network.";
      } else if (e?.code === -32603) {
        msg = `Wallet RPC internal error. Please check gas, network, and try again. Details: ${raw}`;
      }
      setError(msg);
      setStatus("");
    } finally {
      setBusy(false);
    }
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[120] bg-black/70 backdrop-blur-sm overflow-hidden">
      <div className="min-h-screen flex items-center justify-center p-4 animate-in fade-in duration-200">
        <Card className="w-full max-w-2xl max-h-[90vh] shadow-2xl border-2 border-emerald-200 bg-white overflow-y-auto">
        <CardHeader className="relative pb-4 border-b bg-gradient-to-r from-emerald-50 to-teal-50">
          <button
            onClick={onClose}
            disabled={busy}
            className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-white/80 transition-colors disabled:opacity-50"
            aria-label="Close"
          >
            <X className="h-4 w-4 text-slate-600" />
          </button>
          <div className="flex items-center gap-3 pr-8">
            {/* <div className="p-2 rounded-lg bg-emerald-100">
              <Rocket className="h-6 w-6 text-emerald-600" />
            </div> */}
            <div>
              <CardTitle className="text-2xl">Deploy Your Storage Contract</CardTitle>
              <CardDescription className="text-sm mt-1">
                One-time setup to create your personal on-chain storage contract
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">

          {/* Wallet Connection */}
          <div className="space-y-4 p-4 rounded-lg border-2 border-slate-200 bg-slate-50/50">
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block flex items-center gap-2">
                  <Wallet className="h-4 w-4" />
                  Expected Wallet (from login)
                </label>
                <Input
                  readOnly
                  value={expectedWallet || "Unknown"}
                  className="font-mono text-sm bg-white border-slate-300"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">Connected Wallet (MetaMask)</label>
                <div className="flex gap-2">
                  <Input
                    readOnly
                    value={connectedWallet || "Not connected"}
                    className="font-mono text-sm bg-white border-slate-300 flex-1"
                  />
                  <Button
                    variant="outline"
                    onClick={connectWallet}
                    disabled={busy}
                    className="border-emerald-300 hover:bg-emerald-50 hover:border-emerald-400"
                  >
                    <Wallet className="h-4 w-4 mr-2" />
                    Connect
                  </Button>
                </div>
              </div>
            </div>

            {canDeploy && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                <p className="text-sm text-emerald-700 font-medium">Wallets match! Ready to deploy.</p>
              </div>
            )}

            {expectedWallet && connectedWallet && !canDeploy && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 border border-red-200">
                <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <p className="text-sm text-red-700">Wallets don't match. Please switch to your Keyura account wallet in MetaMask.</p>
              </div>
            )}
          </div>

          {/* Status Messages */}
          {status && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-blue-50 border border-blue-200">
              {busy ? (
                <Loader2 className="h-4 w-4 text-blue-600 animate-spin flex-shrink-0" />
              ) : (
                <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
              )}
              <p className="text-sm text-blue-700">
                {status}
                {networkInfo && <span className="text-blue-600 ml-1">({networkInfo})</span>}
              </p>
            </div>
          )}

          {error && (
            <div className="flex items-start gap-2 p-3 rounded-lg bg-red-50 border border-red-200">
              <AlertCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-2 border-t">
            <Button variant="outline" onClick={onClose} disabled={busy} className="border-slate-300">
              Cancel
            </Button>
            <Button
              onClick={handleDeploy}
              disabled={!canDeploy || busy}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg shadow-emerald-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {busy ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Deploying...
                </>
              ) : (
                <>
                  {/* <Rocket className="h-4 w-4 mr-2" /> */}
                  Deploy Contract
                </>
              )}
            </Button>
          </div>
        </CardContent>
        </Card>
      </div>
    </div>
  );
}
