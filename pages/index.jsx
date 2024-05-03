import { Game } from "../components/game/game";
import { Header } from "../components/header";

export default function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto max-w-[616px]"></main>
    </div>
  );
  // return <Game />;
}
