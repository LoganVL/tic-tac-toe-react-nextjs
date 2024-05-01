import { GameCell } from "./game-cell";
import { GameInfo } from "./game-info";
import { useGameState } from "./use-game-state";
import { ResetButton } from "./reset-button";

export function Game() {
  const {
    cells,
    currentStep,
    winnerSequence,
    gameState,
    handleCellClick,
    resetGame,
    winnerSymbol,
    initialCellsState,
  } = useGameState();

  return (
    <div className="flex flex-col items-center w-40 my-24 mx-auto border border-black p-5">
      <GameInfo
        gameState={gameState}
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
      />
      <div className="grid pt-px pl-px grid-rows-[repeat(3,_30px)] grid-cols-[repeat(3,_30px)]">
        {cells.map((symbol, index) => {
          return (
            <GameCell
              key={index}
              symbol={symbol}
              isWinner={winnerSequence?.includes(index)}
              onClick={() => handleCellClick(index)}
            />
          );
        })}
      </div>
      <ResetButton onClick={resetGame} />
    </div>
  );
}
