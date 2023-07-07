import { createContext, useContext, useEffect, useState } from 'react';
import { Chain } from 'wagmi';

import { useCustomSearchParams } from '../hooks/useCustomSearchParams';

interface Context {
  network: Chain;
  contractAddress: string;
}

export const ConfigContext = createContext<Context>({} as Context);

export async function fetchConfig(configUrl: string) {
  const res = await fetch(configUrl || '');
  const body = await res.json();

  return body;
}

export const useConfig = () => {
  return useContext(ConfigContext);
};

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [{ contractAddress, network }, setConfig] = useState<{
    network: Chain | null;
    contractAddress: string;
  }>({
    network: null,
    contractAddress: '',
  });
  // const {
  //   searchParms: { id },
  // } = useCustomSearchParams<{ id?: string }>();

  useEffect(() => {
    setConfig({
      network: {
        id: 4000003,
        name: 'ALT-Zero',
        network: 'ALT-Zero',
        nativeCurrency: {
          decimals: 18,
          name: 'Ethereum',
          symbol: 'ETH',
        },
        rpcUrls: {
          public: { http: ['https://zero.alt.technology'] },
          default: { http: ['https://zero.alt.technology'] },
        },
        blockExplorers: {
          default: {
            name: 'explorer',
            url: 'https://zero-explorer.alt.technology',
          },
        },
      },
      contractAddress: '0x87b80DEeBd17B4299A8bCC5dA3AdFFCD2f6D4bDf',
    });
  }, []);

  if (!network) {
    return null;
  }

  return (
    <ConfigContext.Provider value={{ network, contractAddress }}>{children}</ConfigContext.Provider>
  );
};
