import { useCallback, useMemo } from 'react';

import { ALERT_SEVERITY, useAlerts } from '../contexts/AlertsContext';
import { useConfig } from '../contexts/ConfigContext';

const rejectedTextFromWallets = ['user rejected transaction'];

function useAlertTransaction() {
  const { addAlert } = useAlerts();
  const { network } = useConfig();
  const alertConfirmed = useCallback(
    (hash: string) => {
      addAlert({
        title: 'Transaction confirmed',
        severity: ALERT_SEVERITY.SUCCESS,
        link: {
          link: `${network.blockExplorers?.default.url}/tx/${hash}`,
          label: 'View in explorer',
        },
      });
    },
    [addAlert, network]
  );
  const alertFailed = useCallback(
    (message: string) => {
      addAlert({
        title: 'Failed to submit transaction',
        desc: rejectedTextFromWallets.find(text => message.includes(text))
          ? 'User rejected transaction'
          : message,
        severity: ALERT_SEVERITY.ERROR,
      });
    },
    [addAlert]
  );

  return useMemo(
    () => ({
      alertConfirmed,
      alertFailed,
    }),
    [alertConfirmed, alertFailed]
  );
}

export default useAlertTransaction;
