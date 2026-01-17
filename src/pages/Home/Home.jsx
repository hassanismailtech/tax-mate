import AskAiButton from "../../shared/ui/AskAiButton";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center p-4">
      <AskAiButton />

      <section className="flex flex-col gap-6">
        <header className="px-2">
          <h1 className="text-2xl text-center">
            Understand{" "}
            <span className="text-[hsl(var(--text-accent))]">your</span> taxes,
            No <span className="text-[hsl(var(--text-accent))]">jargon</span>,
            No fear
          </h1>
        </header>

        <p className="text-lg text-center text-[hsl(var(--text-secondary))]">
          Ask questions about Nigerian taxes in plain language-simple, friendly
          and designed for everyone.
        </p>
      </section>
    </main>
  );
}
