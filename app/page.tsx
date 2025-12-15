import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Globe, Diamond } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-white">
        <Image src="/hero-image.jpg" alt="Gemstones" fill style={{ objectFit: "cover" }} priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Discover the World&apos;s Finest Gemstones</h1>
          <p className="text-xl md:text-2xl mb-8">Mining, Selling, and Buying Premium Gemstones Worldwide</p>
          <Link
            href="/catalog"
            className="bg-secondary text-primary px-8 py-3 rounded-full text-lg font-bold hover:bg-secondary/80 transition-colors"
          >
            Explore Our Collection
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Welcome to Gemstone Co.</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            At Gemstone Co., we bring you the world&apos;s most exquisite gemstones, ethically sourced and expertly crafted.
            With decades of experience in mining and trading, we offer unparalleled quality and service to our
            discerning clients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="w-16 h-16 mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-bold mb-2">Ethical Sourcing</h3>
              <p>We prioritize responsible mining practices and fair trade.</p>
            </div>
            <div className="text-center">
              <Globe className="w-16 h-16 mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-bold mb-2">Global Reach</h3>
              <p>Our network spans across continents, bringing you rare finds.</p>
            </div>
            <div className="text-center">
              <Diamond className="w-16 h-16 mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p>Each gemstone is carefully selected and certified for authenticity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Gemstones Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Gemstones</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Emerald", "Sapphire", "Ruby"].map((gem) => (
              <div key={gem} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={`/${gem.toLowerCase()}.jpg`}
                  alt={gem}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{gem}</h3>
                  <p className="text-gray-600 mb-4">
                    Discover our exquisite collection of {gem.toLowerCase()}s, known for their vibrant color and
                    exceptional clarity.
                  </p>
                  <Link
                    href={`/catalog?gem=${gem.toLowerCase()}`}
                    className="text-primary font-bold flex items-center hover:text-accent transition-colors"
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Jewelry Designer",
                quote:
                  "The quality of gemstones from Gemstone Co. is unparalleled. Their ethical sourcing practices align perfectly with my brand values.",
              },
              {
                name: "Michael Chen",
                role: "Collector",
                quote:
                  "I've been collecting gemstones for years, and Gemstone Co. consistently provides the rarest and most beautiful specimens I've ever seen.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <p className="text-lg mb-4">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center">
                  <Image
                    src={`/avatar-${index + 1}.jpg`}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

