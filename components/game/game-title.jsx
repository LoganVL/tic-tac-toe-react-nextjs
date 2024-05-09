import Link from "next/link";
import { ArrowLeftIcon } from "./icons/arrow-left-icon";
import { StarIcon } from "./icons/star-icon";
import { TimeIcon } from "./icons/time-icon";
import { PlayersIcon } from "./icons/players-icon";

export function GameTitle({ playersCount }) {
  return (
    <div className="pl-2">
      <Link
        href="#"
        className="flex items-center gap-2 text-xs text-teal-600 leading-tight -mb-0.5"
      >
        <ArrowLeftIcon />
        На главную
      </Link>
      <h1 className="text-4xl leading-tight">Крестики-нолики</h1>
      <div className="flex items-center gap-3 text-xs text-slate-500">
        <StarIcon />
        <div className="flex items-center gap-1">
          <PlayersIcon /> {playersCount}
        </div>
        <div className="flex items-center gap-1">
          <TimeIcon /> 1 мин на ход
        </div>
      </div>
    </div>
  );
}
