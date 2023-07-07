import { Chain } from 'wagmi';

import { BridgeToken, NetWorkConfig } from './contexts/ConfigContext';

declare global {
  interface Window {
    appConfig: {
      nativeTokenL2Address: string;
      configBaseUrl?: string;
      networks?: Chain[];
      bridge?: {
        l1: NetWorkConfig;
        l2: NetWorkConfig;
        tokens: BridgeToken[];
      };
    };
  }
}
