import { GameSymbol } from "./game-symbol";

export function GameInfo({ gameState, winnerSymbol, currentStep }) {
  if (gameState === "Ничья") {
    return <div className="mb-2.5">{gameState}</div>;
  }
  if (gameState === "Ход:") {
    return (
      <div className="mb-2.5">
        {gameState} {<GameSymbol symbol={currentStep} />}
      </div>
    );
  }
  if (gameState === "Победитель:") {
    return (
      <div className="mb-2.5">
        {gameState} {<GameSymbol symbol={winnerSymbol} />}
      </div>
    );
  }
}
