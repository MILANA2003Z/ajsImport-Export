import Character from "./domain.js";

export default class Game {
  start() {
    console.log("game started");
  }
}

export class GameSavingData {
  constructor(data = {}) {
    this.data = data;
  }
}

export function readGameSaving() {
  // Заглушка для чтения сохранений
  return null;
}

export function writeGameSaving(data) {
  // Заглушка для записи сохранений
  console.log("Saving game data:", data);
}
