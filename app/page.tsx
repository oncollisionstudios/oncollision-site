import Navbar from "../components/Navbar";
import FadeIn from "../components/FadeIn";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
        <main className="min-h-screen bg-black text-white">
          <Navbar/>
          <FadeIn>
          <section
            id="home"
            className="relative h-screen flex flex-col items-center justify-center overflow-hidden">

            {/* Background glow */}

      <div className="hero-overlay" />
      <div className="hero-scanlines" />

      <div
        className="
          absolute
          w-[600px]
          h-[600px]
          rounded-full
          bg-cyan-500/20
          blur-[120px]
          animate-pulse
        "/>

      {/* Hero content */}

      <div className="z-10 flex flex-col items-center">
        <h1
          className="
            text-3xl
            sm:text-5xl
            md:text-7xl
            font-bold
            tracking-[0.12em]
            sm:tracking-[0.2em]
            text-center
            px-4
            leading-tight"
          style={{
            textShadow:
            "0 0 20px rgba(0,183,255,.8)"
          }}>

          OnCollision Studio
        </h1>

        <p className="mt-8 text-gray-400 text-lg md:text-xl px-6 text-center">
          From Gamers, To Gamers.
        </p>

        <div className="flex gap-6 mt-12">
          <a
            href="#games"
            className="
              px-8
              py-4
              rounded-xl
              bg-cyan-500
              hover:scale-105
              transition">
            View Games
          </a>

          <a
            href="#devlog"
            className="
              px-8
              py-4
              rounded-xl
              border
              border-gray-700
              hover:bg-zinc-900
              transition">
            Devlog
          </a>
        </div>
      </div>
    </section>
  </FadeIn>

 <FadeIn key="games">
  <section
  id="games"
  className="px-6 md:px-10 py-28">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-5xl font-bold mb-4">
      Games
    </h2>
    <p className="text-gray-400 mb-12">
      Current and upcoming projects from OnCollision
    </p>
    <div className="grid md:grid-cols-2 gap-8">
      {/* Project Velocity */}
      <div
        className="
          group
          bg-zinc-900/70
          backdrop-blur-md
          rounded-2xl
          border border-cyan-500/20
          overflow-hidden
          hover:border-cyan-500
          hover:scale-[1.02]
          transition
        "
      >

        <div
          className="
            h-56
            relative
            bg-gradient-to-br
            from-cyan-500/20
            via-black
            to-purple-500/20
          "
        >

          <div
            className="
              absolute
              top-4
              right-4
              px-3
              py-1
              rounded-full
              text-sm
              bg-cyan-500/20
            "
          >
            In Development
          </div>

          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              text-4xl
              font-bold
              text-cyan-400/60
            "
          >
            VELOCITY
          </div>

        </div>

        <div className="p-8">

          <h3 className="text-3xl font-bold">
            PROJECT: VELOCITY
          </h3>

          <p className="mt-4 text-gray-400">

            Fast-paced mobile FPS combat with futuristic
            weapons, movement mechanics and competitive gameplay.

          </p>

          <div className="flex gap-4 mt-8">

            <button
              className="
                px-6
                py-3
                rounded-lg
                bg-cyan-500
                hover:scale-105
                transition
              "
            >
              Details
            </button>

            <button
              className="
                px-6
                py-3
                rounded-lg
                border border-gray-700
                hover:bg-zinc-800
                transition
              "
            >
              Devlog
            </button>

          </div>

        </div>

      </div>


      {/* Future project slot */}

      <div
        className="
          border
          border-dashed
          border-gray-700
          rounded-2xl
          p-8
          flex
          items-center
          justify-center
          text-gray-500
        "
      >
        Future Project
      </div>

    </div>

  </div>

</section>
</FadeIn>


<FadeIn key="team">
<section
  id="team"
  className="px-6 md:px-10 py-28">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-5xl font-bold mb-4">
      Team
    </h2>

    <p className="text-gray-400 mb-16">
      The people behind OnCollision
    </p>

    <div className="grid md:grid-cols-3 gap-8">
      <div
        className="
        bg-zinc-900/70
        rounded-2xl
        border border-cyan-500/20
        p-8
        hover:border-cyan-500
        transition">
        <div
          className="
          w-24
          h-24
          rounded-full
          bg-cyan-500/20
          mb-6"/>
        <h3 className="text-xl font-bold">
          Your Name
        </h3>

        <p className="text-gray-400 mt-2">
          Founder / Developer
        </p>
      </div>
    </div>
  </div>
</section>
</FadeIn>

<FadeIn key="devlog">
<section
  id="devlog"
  className="px-6 md:px-10 py-28">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-5xl font-bold mb-4">
      Devlog
    </h2>

    <p className="text-gray-400 mb-16">
      Development updates from OnCollision
    </p>

    <div className="space-y-8">
      <div className="bg-zinc-900/70 border border-cyan-500/20 rounded-2xl p-8">

        <div className="text-sm text-cyan-400 mb-3">
          Alpha Update #01
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Weapon System Progress
        </h3>

        <p className="text-gray-400">
          Added firing mechanics, weapon switching,
          and early combat testing for mobile controls.
        </p>
      </div>

      <div className="bg-zinc-900/70 border border-cyan-500/20 rounded-2xl p-8">

        <div className="text-sm text-cyan-400 mb-3">
          Alpha Update #02
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Movement Improvements
        </h3>

        <p className="text-gray-400">
          Testing faster movement and responsive controls
          to improve FPS gameplay feel.
        </p>
      </div>
    </div>
  </div>
</section>
</FadeIn>

<FadeIn key="about">
<section
  id="about"
  className="px-6 md:px-10 py-28">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-5xl font-bold mb-4">
      About
    </h2>

    <p className="text-gray-400 mb-16">
      Who we are and what we build
    </p>

    <div
      className="
      bg-zinc-900/70
      backdrop-blur-md
      rounded-2xl
      border border-cyan-500/20
      p-10">

      <h3 className="text-2xl font-bold mb-6">
        OnCollision Studio
      </h3>

      <p className="text-gray-400 leading-8">

        OnCollision is an independent game studio focused
        on building fast, immersive mobile FPS experiences.

        We design games around intensity, movement,
        responsive gameplay, and futuristic worlds.

        Our goal is to create experiences that feel
        powerful the moment players enter the battlefield.

      </p>
    </div>
  </div>
</section>
</FadeIn>

<FadeIn key="contact">
<section
  id="contact"
   className="px-6 md:px-10 py-28">
  <div className="max-w-4xl mx-auto">

    <h2 className="text-5xl font-bold mb-4">
      Contact
    </h2>

    <p className="text-gray-400 mb-16">
      Reach out to OnCollision
    </p>

    <div
      className="
      bg-zinc-900/70
      border
      border-cyan-500/20
      rounded-2xl
      p-8">

      <ContactForm/>
    </div>
  </div>

</section>
</FadeIn>

<footer
  className="
    border-t
    border-cyan-500/10
    mt-20
    py-10
    px-10
  "
>

  <div
    className="
      max-w-7xl
      mx-auto
      flex
      flex-col
      md:flex-row
      justify-between
      items-center
      gap-6
    "
  >

    <div>

      <h3
        className="font-bold tracking-[0.25em]"
        style={{
          textShadow: "0 0 10px rgba(0,183,255,.6)"
        }}
      >
        OnCollision Studio
      </h3>

      <p className="text-gray-500 mt-2 text-sm">
        From Gamers, To Gamers.
      </p>

    </div>

    <div className="flex gap-8 text-gray-400">

      <a
        href="https://youtube.com"
        target="_blank"
        className="hover:text-cyan-400 transition"
      >
        YouTube
      </a>

      <a
        href="https://discord.com"
        target="_blank"
        className="hover:text-cyan-400 transition"
      >
        Discord
      </a>

      <a
        href="https://x.com"
        target="_blank"
        className="hover:text-cyan-400 transition"
      >
        X
      </a>

      <a
        href="https://instagram.com"
        target="_blank"
        className="hover:text-cyan-400 transition"
      >
        Instagram
      </a>

    </div>

  </div>

  <div
    className="
      text-center
      text-gray-600
      text-sm
      mt-8
    "
  >
    © 2026 OnCollision Studio. All rights reserved.
  </div>

</footer>

</main> 
);}