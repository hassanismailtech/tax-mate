import { ArrowLeft } from "lucide-react";
import EmploymentTypeSelector from "../../shared/ui/EmploymentTypeSelector";

export default function UserSetup() {
  return (
    <main className="p-4 flex flex-col gap-6">
      <button className="text-[hsl(var(--color-accent))]" aria-label="Go back">
        <ArrowLeft />
      </button>

      <section className="flex flex-col gap-6">
        <header>
          <h1 className="text-2xl text-[hsl(var(--color-accent))]">
            Who are you?
          </h1>
          <p className="text-md text-[hsl(var(--color-secondary))]">
            Select the option that best describes your work life.
          </p>
        </header>

        <EmploymentTypeSelector />
      </section>
    </main>
  );
}
