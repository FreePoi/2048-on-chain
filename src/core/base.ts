import type { BigNumber } from '@ethersproject/bignumber';
import type { CallOverrides } from '@ethersproject/contracts';

import { Contract, ContractFunction, ContractInterface } from '@ethersproject/contracts';
import { ethers, Wallet } from 'ethers';

import { sendJsonRpc } from './jsonrpc';
import { TransactionResponse } from './transaction-response';

export interface NonceManager {
  get: () => number;
  set: (nonce: number) => void;
}

export abstract class BaseContract {
  private _rpcUrl: string;
  private _nonceManager: NonceManager;
  public contract: Contract;
  public abi: ContractInterface;
  public wallet: Wallet;

  public address: string;

  constructor(
    address: string,
    wallet: Wallet,
    rpcUrl: string,
    nonceManager: NonceManager,
    abi: ContractInterface
  ) {
    this.address = address;
    this.abi = abi;
    this.wallet = wallet;
    this.contract = new Contract(address, abi, wallet);
    this._rpcUrl = rpcUrl;
    this._nonceManager = nonceManager;
  }

  get estimateGas(): { [name: string]: ContractFunction<BigNumber> } {
    return this.contract.estimateGas;
  }

  public async callMethod(
    contract: Contract,
    methodName: string,
    args?: any[],
    overrides?: CallOverrides
  ) {
    const encodedData = contract.interface.encodeFunctionData(methodName, args);
    const nonce = this._nonceManager.get();
    const transaction = {
      to: contract.address,
      data: encodedData,
      nonce,
      gasPrice: 0,
      gasLimit: 2100000,
      ...overrides,
    };
    const signedTransaction = await contract.signer.signTransaction(transaction);
    const encodedTransactionData = ethers.utils.hexlify(signedTransaction);
    const res = await sendJsonRpc(this._rpcUrl, {
      method: 'eth_sendRawTransaction',
      params: [encodedTransactionData],
    });

    console.log('eth_sendRawTransaction', res);

    if (!res.result) {
      throw new Error(
        `JSON-RPC error when sending 'eth_sendRawTransaction': ${JSON.stringify(
          res.error,
          null,
          2
        )}, params you provided: ${JSON.stringify([encodedTransactionData], null, 2)}`
      );
    }

    this._nonceManager.set(nonce + 1);

    const receipt = new TransactionResponse(this._rpcUrl, res.result);

    return receipt;
  }
}
