import AiChatIcon from "../assets/images/AiChatIcon.svg";

export default function AskAiButton() {
  return (
    <button className="bg-[hsl(var(--color-primary))] text-[hsl(var(--text-secondary))] text-sm font-bold flex items-center gap-2 p-4 rounded-full cursor-pointer">
      <img src={AiChatIcon} className="h-6 w-6" alt="Chat icon" />
      Ask AI Anytime 24/7
    </button>
  );
}
