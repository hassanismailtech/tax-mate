import { Menu } from "lucide-react";
import Logo from "../assets/images/logo.svg";
import AuthMenu from "./AuthMenu";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 text-[hsl(var(--text-primary))]">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="App logo" />
        <h1 className="font-bold">TaxSense</h1>
      </div>

      <div className="flex flex-col items-end relative">
        <button
          className={`cursor-pointer ${isOpen ? "ring-2 ring-[hsl(var(--color-accent))]" : ""} rounded-md p-0.5`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open menu"
        >
          <Menu strokeWidth={3} />
        </button>

        {isOpen && <AuthMenu />}
      </div>
    </header>
  );
}
