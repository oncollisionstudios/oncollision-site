import Section from "../Section";
import ContactForm from "../ContactForm";

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Reach out to OnCollision"
      maxWidth="4xl"
    >
      <div className="bg-zinc-900/70 border border-cyan-500/20 rounded-2xl p-8">
        <ContactForm />
      </div>
    </Section>
  );
}