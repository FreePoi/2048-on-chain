import { BigNumber } from '@ethersproject/bignumber';
import { Wallet } from 'ethers';

import { TwentyFortyEight } from './abis';
import { BaseContract, NonceManager } from './base';
import { assert } from './utils';

export class Game2048 extends BaseContract {
  constructor(
    address: string,
    wallet: Wallet,
    rpcUrl: string,
    nonceManager: NonceManager,
    abi = TwentyFortyEight.abi
  ) {
    super(address, wallet, rpcUrl, nonceManager, abi);
  }

  async startGame() {
    return this.callMethod(this.contract, 'startGame', []);
  }

  async moveLeft(gameId: number) {
    assert(BigNumber.from(gameId).gt(0), 'gameId should be greater than 0');

    return this.callMethod(this.contract, 'moveLeft', [gameId]);
  }

  async moveRight(gameId: number) {
    assert(BigNumber.from(gameId).gt(0), 'gameId should be greater than 0');

    return this.callMethod(this.contract, 'moveRight', [gameId]);
  }

  async moveUp(gameId: number) {
    assert(BigNumber.from(gameId).gt(0), 'gameId should be greater than 0');

    return this.callMethod(this.contract, 'moveUp', [gameId]);
  }

  async moveDown(gameId: number) {
    assert(BigNumber.from(gameId).gt(0), 'gameId should be greater than 0');

    return this.callMethod(this.contract, 'moveDown', [gameId]);
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
