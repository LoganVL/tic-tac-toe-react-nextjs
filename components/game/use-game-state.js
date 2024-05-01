import { useState } from "react";
import { SYMBOL_O, SYMBOL_X } from "./constants";

const computeWinner = (cells) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return [a, b, c];
    }
  }
};

export function useGameState() {
  const initialCellsState = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ];
  const [cells, setCells] = useState(initialCellsState);
  const [currentStep, setCurrentStep] = useState(SYMBOL_X);
  const [winnerSequence, setWinnerSequence] = useState();
  const [gameState, setGameState] = useState("Ход:");

  const handleCellClick = (index) => {
    if (cells[index] || winnerSequence) {
      return;
    }
    const cellsCopy = cells.slice();
    cellsCopy[index] = currentStep;
    const winner = computeWinner(cellsCopy);

    setCells(cellsCopy);
    setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);
    setWinnerSequence(winner);
    if (winner) {
      setGameState("Победитель:");
    }
    if (!winner && !cellsCopy.includes(null)) {
      setGameState("Ничья");
    }
  };

  const resetGame = () => {
    setCells(initialCellsState);
    setCurrentStep(SYMBOL_X);
    setWinnerSequence(undefined);
    setGameState("Ход:");
  };

  const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined;

  return {
    cells,
    currentStep,
    winnerSequence,
    gameState,
    handleCellClick,
    resetGame,
    winnerSymbol,
    initialCellsState,
  };
}
