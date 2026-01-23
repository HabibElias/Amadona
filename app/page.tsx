import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Globe, Diamond } from "lucide-react";
import { gemstones } from "../lib/gemstoneData";
import { testimonials as sharedTestimonials } from "../lib/testimonials";

export default function Home() {
  const featuredGems = gemstones.slice(0, 3);

  return (
    <div className="bg-app text-app">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-white px-4">
        <Image
          src="/hero.jpg"
          alt="Gemstones"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Amadoniyas Gem and Mineral World
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">
            Showcasing Ethiopia&apos;s and Africa&apos;s Gemstones, Minerals,
            and Energy Resources
          </p>
          <Link
            href="/catalog"
            className="inline-flex items-center justify-center bg-purple-800 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-bold hover:bg-purple-900 transition-colors"
          >
            Explore Our Collection
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Ethiopia&apos;s Gemstone Potential
          </h2>
          <p className="text-lg text-center max-w-4xl mx-auto mb-12 text-muted">
            Ethiopia&apos;s gemstone potential is exceptionally promising.
            Ethiopia has many varieties of high quality gemstones, including
            opals, emeralds, sapphires, amazonite, amber, rubies, tourmaline,
            aquamarine, chrysoprase, periodt, and as well as various types of
            quartz, agate, jasper. New discoveries are also on the rise,
            including the especially exciting discovery of the color-change
            chrome grossular green garnet, as reported in the Journal of
            Gemology in 2018. These new discoveries have brought Ethiopia&apos;s
            total reported gems up to over 40. Ethiopia has also become a
            significant producer of opal, sapphire, and emerald in recent years.
            The field is wide open for investors to bring these extraordinary
            gemstones to a global market.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="w-16 h-16 mx-auto mb-4 text-purple-700" />
              <h3 className="text-xl font-bold mb-2">Ethical Sourcing</h3>
              <p className="text-muted">We prioritize responsible mining practices and fair trade.</p>
            </div>
            <div className="text-center">
              <Globe className="w-16 h-16 mx-auto mb-4 text-purple-700" />
              <h3 className="text-xl font-bold mb-2">Global Reach</h3>
              <p className="text-muted">
                Our network spans across continents, bringing you rare finds.
              </p>
            </div>
            <div className="text-center">
              <Diamond className="w-16 h-16 mx-auto mb-4 text-purple-700" />
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-muted">
                Each gemstone is carefully selected and certified for
                authenticity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Gemstones Section */}
      <section className="py-16 bg-surface-alt">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Gemstones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredGems.map((gem) => (
              <div
                key={gem.id}
                className="bg-card rounded-2xl shadow-elevated overflow-hidden border border-subtle"
              >
                <Image
                  src={gem.image}
                  alt={gem.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{gem.name}</h3>
                  <p className="text-muted mb-2">Type: {gem.type}</p>
                  <p className="text-muted mb-4">Color: {gem.color}</p>
                  <p className="text-muted mb-4 line-clamp-2">{gem.description}</p>
                  <Link
                    href={`/catalog?gem=${encodeURIComponent(gem.type.toLowerCase())}`}
                    className="text-purple-700 font-bold flex items-center hover:text-purple-900 transition-colors"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sharedTestimonials.slice(0, 2).map((testimonial, index) => (
              <div key={index} className="bg-card p-6 rounded-2xl shadow-elevated border border-subtle">
                <p className="text-lg mb-4">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image || `/avatar${index + 1}.png`}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full h-13 object-top mr-4 object-cover"
                  />
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-muted">{testimonial.role || testimonial.location || "Client"}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
