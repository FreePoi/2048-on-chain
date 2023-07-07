import { LoadingButton } from '@mui/lab';
import { alpha, Button, ButtonProps, useTheme } from '@mui/material';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { FC } from 'react';
import { useSwitchNetwork } from 'wagmi';

import { useConfig } from '../contexts/ConfigContext';

const EnsureNetworkButton: FC<
  {
    children?: React.ReactNode;
  } & ButtonProps
> = ({ children, ...props }) => {
  const theme = useTheme();
  const switchNetwork = useSwitchNetwork();
  const { network } = useConfig();

  return (
    <ConnectButton.Custom>
      {({ account, authenticationStatus, chain, mounted, openChainModal, openConnectModal }) => {
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated');

        if (!ready) {
          return <LoadingButton fullWidth loading={true} variant="contained" {...props} />;
        }

        if (!connected) {
          return (
            <Button onClick={openConnectModal} {...props}>
              Connect Wallet
            </Button>
          );
        }

        if (chain.unsupported) {
          return (
            <Button
              onClick={openChainModal}
              sx={Object.assign(
                {
                  background: theme.colors.schema.failure,
                  '&:hover': {
                    background: alpha(theme.colors.schema.failure, 0.8),
                  },
                },
                props.sx || {}
              )}
              {...props}
            >
              Wrong network
            </Button>
          );
        }

        if (chain.id !== network.id) {
          return (
            <Button
              onClick={() => {
                switchNetwork.switchNetwork
                  ? switchNetwork.switchNetwork(network.id)
                  : window.location.reload();
              }}
              {...props}
            >
              {switchNetwork.switchNetwork
                ? `Switch to ${network.name}`
                : `Please reload page or switch to ${network.name} in your wallet`}
            </Button>
          );
        }

        return children;
      }}
    </ConnectButton.Custom>
  );
};

export default EnsureNetworkButton;
