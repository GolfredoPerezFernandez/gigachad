import "@/styles/bootstrap.min.css";
import "@/styles/animate.min.css";
import "@/styles/fontawesome-all.min.css";
import "@/styles/react-odometer-theme.css";
import "@/styles/default.css";
import "@/styles/globals.css";
import "@/styles/responsive.css";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, flare,polygon, optimism, arbitrum, goerli } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const bootstrapJs = dynamic(import("bootstrap/dist/js/bootstrap.bundle.min"), {
  ssr: false,
  loading: () => 0,
});
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;




const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,flare,
    ...(process.env.REACT_APP_ENABLE_TESTNETS === 'true' ? [] : []),
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit demo',
  projectId: 'YOUR_PROJECT_ID',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});
export default function App({ Component, pageProps }) {
  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });

    wow.init();
  }, []);

  return   <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider chains={chains}>
  <Component {...pageProps} />  
    </RainbowKitProvider>
    </WagmiConfig>
;
}
