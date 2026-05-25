import Section from "../Section";
import ContactForm from "../ContactForm";

export default function Contact() {
  return (
    <Section id="contact" number={5} title="Contact" subtitle="Reach out to OnCollision Studio">
      <div className="max-w-3xl">
        <div className="text-2xl bg-zinc-950/95 backdrop-blur-md rounded-2xl border border-cyan-500/20 p-8">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}