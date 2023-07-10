import { TransactionReceipt } from '@ethersproject/providers';

import { sendJsonRpc } from './jsonrpc';
import { sleep } from './utils';

export class TransactionResponse {
  private _transactionHash: string;
  private _url: string;
  private _receipt: Promise<TransactionReceipt> | null = null;
  public pollingInterval: number;
  public timeout: number;

  constructor(url: string, transactionHash: string, pollingInterval = 10, timeout = 100 * 1000) {
    this._transactionHash = transactionHash;
    this._url = url;
    this.pollingInterval = pollingInterval;
    this.timeout = timeout;
  }

  async wait(pollingInterval?: number, timeout?: number): Promise<TransactionReceipt> {
    pollingInterval = pollingInterval || this.pollingInterval;
    timeout = timeout || this.timeout;

    if (this._receipt) {
      return this._receipt;
    }

    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Request timed out'));
      }, timeout);
    });

    this._receipt = Promise.race([
      this.pollReceipt(pollingInterval),
      timeoutPromise,
    ]) as Promise<TransactionReceipt>;

    return this._receipt;
  }

  async pollReceipt(pollingInterval?: number) {
    while (true) {
      try {
        const res = await sendJsonRpc(this._url, {
          method: 'eth_getTransactionReceipt',
          params: [this._transactionHash],
        });

        console.log('eth_getTransactionReceipt', res);

        if (res.result) {
          return res.result;
        }
      } catch (e) {
        console.debug(e);
      }

      await sleep(pollingInterval || this.pollingInterval);
    }
  }
}
