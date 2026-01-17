import { LogIn, SquarePen } from "lucide-react";

export default function AuthMenu() {
  return (
    <ul className="absolute top-10 right-0 bg-[hsl(var(--color-primary))] p-2 w-32 rounded-lg flex flex-col gap-2">
      <li>
        <a className="flex items-center gap-2 cursor-pointer px-2 rounded-sm hover:bg-black/20">
          <LogIn size={16} /> Login
        </a>
      </li>
      <li>
        <a className="flex items-center gap-2 cursor-pointer px-2 rounded-sm hover:bg-black/20">
          <SquarePen size={16} /> Signup
        </a>
      </li>
    </ul>
  );
}
