import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between p-4">
      <div>
        <h1>TaxSense</h1>
      </div>
      <Menu />
    </header>
  );
}
