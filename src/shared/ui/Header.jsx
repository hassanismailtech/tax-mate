import { Menu } from "lucide-react";
import Logo from "../assets/images/logo.svg";
import AuthMenu from "./AuthMenu";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 text-[hsl(var(--text-primary))]">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="App logo" />
        <h1 className="font-bold">TaxSense</h1>
      </div>

      <div className="flex flex-col items-end relative">
        <button aria-label="Open menu">
          <Menu strokeWidth={3} />
        </button>

        <AuthMenu />
      </div>
    </header>
  );
}
