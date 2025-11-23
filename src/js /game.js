import Character from './domain.js';

export default class Game {
  start() {
    // Game started
  }
}

export class GameSavingData {
  constructor(data = {}) {
    this.data = data;
  }
}

export function readGameSaving() {
  return null;
}

export function writeGameSaving(data) {
  // Saving game data
  return data;
}
