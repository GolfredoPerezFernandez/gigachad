import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { configureChains, createClient, } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet, ...(process.env.NODE_ENV === 'development' ? [] : [])],
  [publicProvider()],
)

const { connectors } = getDefaultWallets({
  appName: 'GigaChad DAPP',
  chains,
})

export const client = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})

export { chains }
