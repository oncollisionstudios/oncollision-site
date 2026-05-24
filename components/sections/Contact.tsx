import Section from "../Section";
import ContactForm from "../ContactForm";

export default function Contact() {
  return (
    <Section id="contact" title="Contact" subtitle="Reach out to OnCollision">
      <div className="max-w-3xl">
        <div className="bg-zinc-800/60 border border-cyan-500/20 rounded-2xl p-8">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}