import { createContext, useContext, useEffect, useState } from 'react';
import { Chain } from 'wagmi';

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
        id: 4000005,
        name: 'Epochless',
        network: 'Altlayer epochless',
        nativeCurrency: {
          decimals: 18,
          name: 'ALT',
          symbol: 'ALT',
        },
        rpcUrls: {
          public: { http: ['https://epochless.alt.technology'] },
          default: { http: ['https://epochless.alt.technology'] },
        },
        blockExplorers: {
          default: {
            name: 'explorer',
            url: 'https://epochless-explorer.alt.technology',
          },
        },
      },
      contractAddress: '0xAE0DAa9bFC50f03ce23D30c796709a58470b5F42',
    });
  }, []);

  if (!network) {
    return null;
  }

  return (
    <ConfigContext.Provider value={{ network, contractAddress }}>{children}</ConfigContext.Provider>
  );
};
