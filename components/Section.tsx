import FadeInOut from "./FadeInOut";

type Props = {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function Section({ id, title, subtitle, children }: Props) {
  return (
    <FadeInOut>
      <section id={id} className="px-6 md:px-10 py-60 md:py-80">
        <div className="max-w-7xl mx-auto">
          {title && <h2 className="text-7xl font-bold mb-4">{title}</h2>}
          {subtitle && <p className="text-gray-400 text-3xl mb-16">{subtitle}</p>}
          {children}
        </div>
      </section>
    </FadeInOut>
  );
}
