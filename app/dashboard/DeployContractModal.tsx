"use client";

import { useEffect, useMemo, useState } from "react";
import { ABI, BYTECODE } from "./contractBytecode";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createContract, Contract } from "@/services/contracts";

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
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm grid place-items-center p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Deploy Personal Storage Contract</CardTitle>
          <CardDescription>
            One-time setup to create your on-chain storage contract. You can view this address later in Settings.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm text-slate-600">
            - Ensure you are connected with your Keyura wallet.
            <br />- You will be asked to confirm a transaction in MetaMask and pay gas fees.
            <br />- This is a one-time deployment for your account.
          </div>
          <div className="grid grid-cols-1 gap-2 text-sm">
            <div>
              <div className="text-slate-500">Expected wallet (from login)</div>
              <Input readOnly value={expectedWallet || "Unknown"} className="font-mono" />
            </div>
            <div>
              <div className="text-slate-500">Connected wallet (MetaMask)</div>
              <div className="flex gap-2">
                <Input readOnly value={connectedWallet || "Not connected"} className="font-mono" />
                <Button variant="outline" onClick={connectWallet}>Connect</Button>
              </div>
            </div>
          </div>
          {status && <div className="text-xs text-emerald-700">{status}{networkInfo ? ` (${networkInfo})` : ""}</div>}
          {error && <div className="text-xs text-red-600">{error}</div>}
          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" onClick={onClose} disabled={busy}>Cancel</Button>
            <Button onClick={handleDeploy} disabled={!canDeploy || busy} className="bg-emerald-600 hover:bg-emerald-700">
              {busy ? "Deploying..." : "Deploy Contract"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
