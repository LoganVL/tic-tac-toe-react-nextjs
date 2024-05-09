import logoSrc from "./logo.svg";
import Image from "next/image";
import { Profile } from "../profile";
import { ArrowDownIcon } from "./icons/arrow-down-icon";
import { UiButton } from "../uikit/ui-button";

export function Header() {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <Image src={logoSrc} alt="tic-tac-toe logo" />
      <div className="w-px h-8 bg-slate-200 mx-6" />
      <UiButton className="w-44" size="lg" variant="primary">
        Играть
      </UiButton>
      <button className="ml-auto flex items-center gap-2 text-start text-teal-600 hover:text-teal-500 transition-colors">
        <Profile name="Placeholder" rating="1230" />
        <ArrowDownIcon />
      </button>
    </header>
  );
}
