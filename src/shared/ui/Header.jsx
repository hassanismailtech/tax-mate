import { Menu } from "lucide-react";
import Logo from "../assets/images/logo.svg";
import AuthMenu from "./AuthMenu";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-center md:py-8 md:px-4">
      <div className="flex-1 flex justify-between items-center p-4 text-[hsl(var(--text-primary))] md:bg-white md:text-black md:px-6 md:rounded-full md:max-w-6xl">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="App logo" />
          <h1 className="font-bold text-md md:text-2xl">TaxSense</h1>
        </div>

        <div className="flex flex-col items-end relative md:hidden">
          <button
            className={`cursor-pointer ${isOpen ? "ring-2 ring-[hsl(var(--color-accent))]" : ""} rounded-md p-0.5`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open menu"
          >
            <Menu strokeWidth={3} />
          </button>

          {isOpen && <AuthMenu />}
        </div>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-4">
            <li className="ring-2 py-2 px-4 rounded-full ring-[hsl(var(--color-accent))] cursor-pointer">
              <a>Login</a>
            </li>
            <li className="bg-[hsl(280,100%,15%)] text-white py-2 px-4 rounded-full cursor-pointer">
              <a>Sign Up</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
