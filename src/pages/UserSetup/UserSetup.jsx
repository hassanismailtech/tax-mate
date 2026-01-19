import { ArrowLeft } from "lucide-react";
import EmploymentTypeSelector from "../../shared/ui/EmploymentTypeSelector";
import { useNavigate } from "react-router";
import ResponseStyleSelector from "../../shared/ui/ResponseStyleSelector";
import StartChatButton from "../../shared/ui/StartChatButton";

export default function UserSetup() {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate(-1);
  };

  return (
    <main className="p-4 flex flex-col gap-6">
      <header>
        <button
          className="text-[hsl(var(--color-accent))] cursor-pointer"
          onClick={handleclick}
          aria-label="Go back"
        >
          <ArrowLeft />
        </button>
      </header>

      <section className="flex flex-col gap-6">
        <header>
          <h2 className="text-2xl text-[hsl(var(--color-accent))]">
            Who are you?
          </h2>
          <p className="text-md text-[hsl(var(--color-secondary))]">
            Select the option that best describes your work life.
          </p>
        </header>

        <EmploymentTypeSelector />
      </section>

      <section className="flex flex-col gap-6">
        <header>
          <h2 className="text-2xl text-[hsl(var(--color-accent))]">
            Choose response style
          </h2>
          <p className="text-md text-[hsl(var(--color-secondary))]">
            How should I explain things to you?
          </p>
        </header>

        <ResponseStyleSelector />

        <footer className="flex flex-col gap-4 items-center">
          <p className="text-md text-[hsl(var(--color-secondary))]">
            You can change this anytime during our chat
          </p>

          <StartChatButton />
        </footer>
      </section>
    </main>
  );
}
