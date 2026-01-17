import AskAiButton from "../../shared/ui/AskAiButton";
import CtaButton from "../../shared/ui/CtaButton";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-10 p-4 md:justify-start md:py-20">
      <AskAiButton />

      <section className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-6">
          <header className="px-2">
            <h1 className="text-3xl font-bold text-center md:text-5xl">
              Understand{" "}
              <span className="text-[hsl(var(--text-accent))]">your</span>{" "}
              taxes, No{" "}
              <span className="text-[hsl(var(--text-accent))]">jargon</span>, No
              fear
            </h1>
          </header>

          <p className="text-lg text-center text-[hsl(var(--text-secondary))] md:text-xl">
            Ask questions about Nigerian taxes in plain language-simple,
            friendly and designed for everyone.
          </p>
        </div>

        <CtaButton />
      </section>
    </main>
  );
}
