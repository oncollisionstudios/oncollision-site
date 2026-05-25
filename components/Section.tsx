import FadeInOut from "./FadeInOut";

type Props = {
  id: string;
  title?: string;
  subtitle?: string;
  /** Two-digit section number — e.g. 1 renders as "01 / GAMES". Skip for sections you don't want numbered (like the hero). */
  number?: number;
  children: React.ReactNode;
};

export default function Section({ id, title, subtitle, number, children }: Props) {
  const padded = number !== undefined ? String(number).padStart(2, "0") : null;

  return (
    <FadeInOut>
      <section id={id} className="px-6 md:px-10 py-60 md:py-80">
        <div className="max-w-7xl mx-auto">
          {(padded || title) && (
            <div className="mb-4">
              {padded && title && (
                <div className="section-marker flex items-center gap-4 mb-4 text-cyan-400/80 text-xl md:text-2xl tracking-[0.3em] font-bold">
                  <span className="section-marker-number">{padded}</span>
                  <span className="section-marker-divider" />
                  <span className="uppercase">{title}</span>
                </div>
              )}
              {title && (
                <h2 className="text-7xl font-bold">{title}</h2>
              )}
            </div>
          )}
          {subtitle && <p className="text-gray-400 text-3xl mb-16">{subtitle}</p>}
          {children}
        </div>
      </section>
    </FadeInOut>
  );
}
