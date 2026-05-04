import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import PolicyCard from "../components/PolicyCard.jsx";
import CallToAction from "../components/CallToAction.jsx";
import Testimonial from "../components/Testimonial.jsx";

function Home() {
  const policies = [
    { title: "More Frequent Buses", summary: "Shorten wait times on busy routes." },
    { title: "Lower Fares", summary: "Make transit affordable for everyone." },
    { title: "Safer Stations", summary: "Better lighting and security at stops." },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Hero title="Make Transit Better" subtitle="Safer, cleaner, fairer transit for all." backgroundImage="https://i.ytimg.com/vi/RJy_AL-zzTQ/maxresdefault.jpg" />

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Policy ideas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {policies.map((p) => (
            <PolicyCard key={p.title} title={p.title} summary={p.summary} link="/info" />
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-3xl bg-slate-50 border border-slate-200 p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold">Want to learn more?</h3>
            <p className="text-gray-600 mt-2">Explore the challenges behind funding, infrastructure, and transit access in the U.S.</p>
          </div>
          <Link to="/about" className="inline-flex items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-sky-700 transition">
            Learn more
          </Link>
        </div>
      </section>

      <CallToAction />

      <section className="mt-6">
        <h3 className="text-xl font-semibold mb-3">What people say</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Testimonial name="Kanai" quote="Transit helped me get to work." />
          <Testimonial name="Brian" quote="More buses would help my neighborhood." />
        </div>
      </section>
    </div>
  );
}

export default Home;