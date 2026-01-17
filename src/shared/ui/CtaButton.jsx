import { ArrowUpRight } from "lucide-react";

export default function CtaButton() {
  return (
    <button className="bg-[hsl(var(--color-accent))] flex items-center justify-center gap-4 p-2 rounded-full w-fit cursor-pointer">
      Get Started
      <div className="bg-[hsl(280,100%,15%)] p-2 rounded-full">
        <ArrowUpRight />
      </div>
    </button>
  );
}
