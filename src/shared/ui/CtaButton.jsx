import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router";

export default function CtaButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/setup");
  };

  return (
    <button
      className="bg-[hsl(var(--color-accent))] flex items-center justify-center gap-4 p-2 rounded-full w-fit cursor-pointer"
      onClick={handleClick}
    >
      Get Started
      <div className="bg-[hsl(280,100%,15%)] p-2 rounded-full">
        <ArrowUpRight />
      </div>
    </button>
  );
}
