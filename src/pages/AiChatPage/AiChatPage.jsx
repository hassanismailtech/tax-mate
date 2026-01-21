import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import ChatAi from "../../shared/ui/ChatAi";

export default function AiChatPage() {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate(-1);
  };

  return (
    <main className="w-full border-t-2 border-solid border-[hsl(var(--color-primary))] p-4 flex flex-col gap-4 md:mx-auto md:max-w-6xl">
      <header>
        <button
          className="text-[hsl(var(--color-accent))] cursor-pointer"
          onClick={handleclick}
          aria-label="Go back"
        >
          <ArrowLeft />
        </button>
      </header>

      <section>
        <ChatAi />
      </section>
    </main>
  );
}
