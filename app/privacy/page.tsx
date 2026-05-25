import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NextLink from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How OnCollision Studio collects, uses, and protects your information.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "May 24, 2026";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black/95 text-white">
      <Navbar />

      <section className="px-6 md:px-10 pt-40 pb-32">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <div className="text-cyan-400/80 text-sm md:text-base tracking-[0.3em] font-bold uppercase mb-4">
              Legal
            </div>
            <h1 className="text-6xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-500 text-lg">
              Last updated: {LAST_UPDATED}
            </p>
          </div>

          <div className="space-y-10 text-gray-300 text-lg leading-relaxed">
            <Block title="Overview">
              OnCollision Studio (&ldquo;we&rdquo;, &ldquo;our&rdquo;,
              &ldquo;us&rdquo;) operates the website at{" "}
              <Link href="https://www.oncollisionstudio.com">
                www.oncollisionstudio.com
              </Link>{" "}
              (the &ldquo;Site&rdquo;). This policy explains what information
              we collect, how we use it, and the choices you have. By using the
              Site, you agree to the practices described below.
            </Block>

            <Block title="Information We Collect">
              We only collect information you voluntarily provide. Specifically,
              if you submit our contact form, we receive your name, email
              address, and the contents of your message. We do not run analytics
              tracking, advertising pixels, or third-party trackers on this
              Site.
            </Block>

            <Block title="How We Use Your Information">
              Information you send through the contact form is used solely to
              respond to your inquiry. We do not sell, rent, or share your
              information with third parties for marketing purposes. We do not
              add you to any mailing list without your explicit request.
            </Block>

            <Block title="How We Store Your Information">
              Contact form submissions are delivered to our email inbox through
              Resend, our transactional email provider. Resend processes the
              message in transit and retains it according to its own retention
              policies. Once received, messages are stored in our email account
              under standard provider security. We retain correspondence as
              long as it remains relevant to ongoing communication, and delete
              it when no longer needed.
            </Block>

            <Block title="Cookies and Tracking">
              This Site does not use cookies for tracking or advertising.
              Essential technical cookies may be set by our hosting provider
              (Vercel) for security and performance, but no personal profile is
              built from your visit.
            </Block>

            <Block title="Third-Party Services">
              The Site is hosted by Vercel, fonts are loaded from Google Fonts,
              and contact emails are processed by Resend. These providers may
              receive standard request metadata (IP address, browser type) as
              part of normal web operation. Each operates under its own privacy
              policy.
            </Block>

            <Block title="Your Rights">
              Depending on where you live, you may have the right to access,
              correct, or delete personal information we hold about you, and to
              object to or restrict certain processing. To exercise any of
              these rights, contact us at the email below and we will respond
              within a reasonable timeframe.
            </Block>

            <Block title="Children's Privacy">
              The Site is not directed to children under 13. We do not
              knowingly collect information from children under 13. If you
              believe a child has provided us with personal information,
              contact us and we will delete it promptly.
            </Block>

            <Block title="Changes to This Policy">
              We may update this policy from time to time. When we do, we will
              revise the &ldquo;Last updated&rdquo; date at the top of this
              page. Material changes will be communicated through the Site.
            </Block>

            <Block title="Contact">
              Questions about this policy? Reach us at{" "}
              <Link href="mailto:oncollisionstudios@gmail.com">
                oncollisionstudios@gmail.com
              </Link>{" "}
              or through the contact form on our home page.
            </Block>
          </div>

          <div className="mt-16 pt-8 border-t border-cyan-500/10">
            <NextLink
              href="/"
              className="text-cyan-400 hover:text-cyan-300 transition text-lg"
            >
              ← Back to home
            </NextLink>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
      <p>{children}</p>
    </section>
  );
}

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition"
    >
      {children}
    </a>
  );
}