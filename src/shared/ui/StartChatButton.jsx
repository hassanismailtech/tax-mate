import { useNavigate } from "react-router";

export default function StartChatButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/chat");
  };

  return (
    <button
      onClick={handleClick}
      className="text-md bg-[hsl(var(--color-accent))] py-2 px-4 rounded-xl cursor-pointer"
      aria-label="Chat button"
    >
      Start Chatting
    </button>
  );
}
