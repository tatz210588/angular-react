import * as React from "react";
import { useState } from "react";
import Wallet from "./Wallet";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import {
  WagmiConfig,
  configureChains,
  chain,
  createClient,
  useAccount,
  useNetwork,
} from "wagmi";
import {
  RainbowKitProvider,
  connectorsForWallets,
  wallet,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

const KardiaChain_testNet = {
  id: 242,
  name: "KAI TestNet",
  network: "KardiaChain-testnet",
  iconUrl:
    "https://ipfs.infura.io/ipfs/QmV91sx1aWr2RhzF3LRq5M1qoGvYURaqTtsKjF3kiE88Xw",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "KAI",
    symbol: "KAI",
  },
  rpcUrls: {
    default: "https://dev.kardiachain.io/",
  },
  blockExplorers: {
    default: {
      name: "Kai-Test-Scanner",
      url: "https://explorer.kardiachain.io/",
    },
  },
  testnet: true,
};

const KardiaChain_mainnet = {
  id: 24,
  name: "KARDIA_CHAIN MAINNET",
  network: "KardiaChain-mainnet",
  iconUrl:
    "https://ipfs.infura.io/ipfs/QmV91sx1aWr2RhzF3LRq5M1qoGvYURaqTtsKjF3kiE88Xw",
  iconBackground: "#d7fc03",
  nativeCurrency: {
    decimals: 18,
    name: "KAI",
    symbol: "KAI",
  },
  rpcUrls: {
    default: "https://rpc.kardiachain.io",
  },
  blockExplorers: {
    default: { name: "Kai-Scanner", url: "https://explorer.kardiachain.io/" },
  },
  testnet: false,
};

const { chains, provider } = configureChains(
  [KardiaChain_testNet, chain.polygon, KardiaChain_mainnet],
  [jsonRpcProvider({ rpc: (chain) => ({ http: chain.rpcUrls.default }) })]
);

// const {connectors} = getDefaultWallets({
//   appName: "My App",
//   chains
// })

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      wallet.rainbow({ chains }),
      wallet.walletConnect({ chains }),
      wallet.metaMask({ chains }),
      wallet.trust({ chains }),
      wallet.argent({ chains }),
      wallet.coinbase({ appName: "My App", chains }),
      wallet.brave({ chains }),
      wallet.steak({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const WalletComponent = () => {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          chains={chains}
          theme={darkTheme()}
          coolMode
          showRecentTransactions={true}
        >
          <Wallet />
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
};

export default WalletComponent;
