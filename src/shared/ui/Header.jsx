import { Menu } from "lucide-react";
import Logo from "../assets/images/logo.svg";

export default function Header() {
  return (
    <header className="flex justify-between p-4 text-[hsl(var(--text-primary))]">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="App logo" />
        <h1 className="font-bold">TaxSense</h1>
      </div>
      <button aria-label="Open menu">
        <Menu strokeWidth={3} />
      </button>
    </header>
  );
}
