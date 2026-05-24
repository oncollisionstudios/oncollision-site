import FadeInOut from "./FadeInOut";

type Props = {
  id: string;
  title?: string;
  subtitle?: string;
  maxWidth?: "4xl" | "6xl" | "7xl";
  children: React.ReactNode;
};

const maxWidthMap = {
  "4xl": "max-w-4xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
};

export default function Section({
  id,
  title,
  subtitle,
  maxWidth = "6xl",
  children,
}: Props) {
  return (
    <FadeInOut>
      <section id={id} className="px-6 md:px-10 py-28">
        <div className={`${maxWidthMap[maxWidth]} mx-auto`}>
          {title && <h2 className="text-5xl font-bold mb-4">{title}</h2>}
          {subtitle && <p className="text-gray-400 mb-16">{subtitle}</p>}
          {children}
        </div>
      </section>
    </FadeInOut>
  );
}
