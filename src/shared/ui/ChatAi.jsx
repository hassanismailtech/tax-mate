import { useState } from "react";
import profilePic from "../../shared/assets/images/profile-pic.svg";
import {
  History,
  Settings,
  Copy,
  ThumbsUp,
  RefreshCw,
  Mic,
  SendHorizontal,
} from "lucide-react";

const topicsArr = [
  { id: 1, topic: "What taxes apply to me?" },
  { id: 2, topic: "What taxes don't apply to me?" },
  { id: 3, topic: "What changed in 2026?" },
  { id: 4, topic: "Common mistakes people like me make?" },
];

const promptArr = [
  { id: 1, prompt: "Do i need to file?" },
  { id: 2, prompt: "How does PAYE work?" },
  { id: 3, prompt: "What should i do next?" },
];

export default function ChatAi() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "ai",
      image: profilePic,
      content:
        "Hello! I'm your Nigerian Tax Assistant. As a salaried, I can help you navigate your specific tax needs.",
    },
  ]);

  const [input, setInput] = useState("");
  const [hasSentMessage, setHasSentMessage] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), role: "user", content: input, image: profilePic },
    ]);

    setInput("");
    setHasSentMessage(true);
  };

  return (
    <div className="relative flex flex-col h-screen">
      <div className="flex-1 p-4 flex flex-col gap-6 max-w-6xl mx-auto w-full">
        <div className="flex justify-end gap-6">
          <button className="flex gap-1 cursor-pointer">
            <History />
            History
          </button>
          <button className="cursor-pointer">
            <Settings />
          </button>
        </div>

        {messages.map((message) => {
          return (
            <div key={message.id} className="flex flex-col gap-4">
              <div
                className={`flex ${message.role === "user" ? "justify-end" : ""}`}
              >
                <img src={message.image} alt="Ai profile pic" />
              </div>

              <div
                className={`flex ${message.role === "user" ? "justify-end" : ""}`}
              >
                <p
                  className={`text-white ${message.role === "user" ? "bg-[hsl(var(--color-accent))] rounded-tl-xl rounded-br-xl rounded-bl-xl mr-4" : "bg-[hsl(var(--color-primary))] rounded-tr-xl rounded-br-xl rounded-bl-xl ml-4"}  p-4  max-w-md`}
                >
                  {message.content}
                </p>
              </div>

              {message.role === "ai" && (
                <div className="flex justify-between">
                  <div className="flex gap-4">
                    <button className="cursor-pointer">
                      <Copy />
                    </button>
                    <button className="cursor-pointer">
                      <ThumbsUp />
                    </button>
                  </div>
                  <button className="cursor-pointer">
                    <RefreshCw />
                  </button>
                </div>
              )}
            </div>
          );
        })}

        {!hasSentMessage && (
          <div className="flex flex-col gap-4">
            <h2 className="text-lg text-[hsl(var(--color-secondary))]">
              POPULAR TOPICS
            </h2>
            <ul className="grid md:grid-cols-[repeat(auto-fit,minmax(480px,1fr))] gap-4">
              {topicsArr.map((value) => {
                return (
                  <li className="bg-[hsl(var(--button-secondary))] ring-1 ring-[hsl(var(--color-secondary))] rounded-xl py-2 px-4 md:p-4 w-fit md:w-auto cursor-pointer">
                    {value.topic}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      <div className="sticky bottom-0 bg-[hsl(var(--color-primary))] border-t-2 border-solid border-[hsl(var(--color-primary))] p-4 md:py-10 flex flex-col gap-4 md:gap-8">
        {!hasSentMessage && (
          <ul className="flex gap-6 flex-wrap max-w-6xl mx-auto w-full ">
            {promptArr.map((value) => {
              return (
                <li className="ring-1 ring-[hsl(var(--color-secondary))] bg-[hsl(var(--color-primary))] w-fit px-4 py-2 rounded-full cursor-pointer">
                  {value.prompt}
                </li>
              );
            })}
          </ul>
        )}

        <form
          className="flex justify-between gap-4 max-w-6xl mx-auto w-full"
          onSubmit={handleSend}
        >
          <div className="flex-1 bg-[hsl(var(--color-primary))] flex items-center justify-between gap-4 p-4 rounded-full ring-1 ring-[hsl(var(--color-secondary))]">
            <label className="flex-1">
              <input
                placeholder="Ask me anything about taxes..."
                className="outline-hidden w-full min-w-0"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </label>

            <button className="cursor-pointer">
              <Mic />
            </button>
          </div>

          <button
            type="submit"
            className="bg-[hsl(var(--color-accent))] p-4 rounded-full cursor-pointer"
          >
            <SendHorizontal />
          </button>
        </form>
      </div>
    </div>
  );
}
