import type { Signer } from '@ethersproject/abstract-signer';
import type { Provider, TransactionResponse } from '@ethersproject/providers';

import { BigNumber } from '@ethersproject/bignumber';

import { TwentyFortyEight } from './abis';
import { BaseContract } from './base';
import { assert, callMethod } from './utils';

export class Game2048 extends BaseContract {
  constructor(address: string, signerOrProvider: Signer | Provider, abi = TwentyFortyEight.abi) {
    super(address, signerOrProvider, abi);
  }

  async startGame(): Promise<TransactionResponse> {
    const signer = this.signer;

    assert(signer, 'no signer provided');

    return callMethod(this.contract, 'startGame', []);
  }

  async moveLeft(gameId: number): Promise<TransactionResponse> {
    assert(BigNumber.from(gameId).gt(0), 'gameId should be greater than 0');
    const signer = this.signer;

    assert(signer, 'no signer provided');

    return callMethod(this.contract, 'moveLeft', [gameId]);
  }

  async moveRight(gameId: number): Promise<TransactionResponse> {
    assert(BigNumber.from(gameId).gt(0), 'gameId should be greater than 0');
    const signer = this.signer;

    assert(signer, 'no signer provided');

    return callMethod(this.contract, 'moveRight', [gameId]);
  }

  async moveUp(gameId: number): Promise<TransactionResponse> {
    assert(BigNumber.from(gameId).gt(0), 'gameId should be greater than 0');
    const signer = this.signer;

    assert(signer, 'no signer provided');

    return callMethod(this.contract, 'moveUp', [gameId]);
  }

  async moveDown(gameId: number): Promise<TransactionResponse> {
    assert(BigNumber.from(gameId).gt(0), 'gameId should be greater than 0');
    const signer = this.signer;

    assert(signer, 'no signer provided');

    return callMethod(this.contract, 'moveDown', [gameId]);
  }

  isLost(gameId: number): Promise<boolean> {
    return this.contract.isLost(gameId);
  }

  isWon(gameId: number): Promise<boolean> {
    return this.contract.isWon(gameId);
  }

  async showBoard(gameId: number): Promise<number[]> {
    const result: BigNumber[] = await this.contract.showBoard(gameId);

    return result.map(number => number.toNumber());
  }
}
