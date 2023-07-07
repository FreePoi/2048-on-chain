import { connectorsForWallets, lightTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { coinbaseWallet, metaMaskWallet } from '@rainbow-me/rainbowkit/wallets';
import { createContext, useContext, useMemo } from 'react';
import { Chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

import { useConfig } from './ConfigContext';

interface Context {
  chainsConfig: Chain[];
  chains: Chain[];
}

export const WagmiContext = createContext<Context>({} as Context);

export const useWagmi = () => {
  return useContext(WagmiContext);
};

const appName = 'AltLayer Rollup Bridge';

const theme = lightTheme();

// theme.colors.accentColor = '#6667ab';
// theme.colors.profileForeground = '#373741';
// theme.colors.modalBackground = '#373741';
theme.radii.modal = '16px';

export const WagmiProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { network } = useConfig();
  const chains = useMemo(() => [network], [network]);
  const { chains: configuredChains, provider } = useMemo(
    () => configureChains(chains, [publicProvider()]),
    [chains]
  );

  const connectors = useMemo(
    () =>
      connectorsForWallets([
        {
          groupName: 'Recommended',
          wallets: [
            metaMaskWallet({ chains: configuredChains, projectId: 'altlayer-2048' }),
            // rainbowWallet({ chains: configuredChains, projectId: 'altlayer-2048' }),
            // walletConnectWallet({ chains: configuredChains, projectId: 'altlayer-2048' }),
            coinbaseWallet({ chains: configuredChains, appName }),
          ],
        },
      ]),
    [configuredChains]
  );

  const wagmiClient = useMemo(
    // Reinitialize the wagmi client if new configs are set (Usually when new networks are added via setChainsConfig)
    () =>
      createClient({
        autoConnect: true,
        connectors,
        provider,
      }),
    [provider, connectors]
  );

  return (
    <WagmiContext.Provider value={{ chains: configuredChains, chainsConfig: chains }}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={configuredChains} theme={theme}>
          {children}
        </RainbowKitProvider>
      </WagmiConfig>
    </WagmiContext.Provider>
  );
};
